export function checkAndAddCategoryButton() {
    const categoryDisplay = document.querySelector('.category-display');
    const categoryElements = categoryDisplay ? categoryDisplay.querySelectorAll('.category-element') : [];

    if (categoryElements.length > 0) {
        console.log('Найдены элементы с классом category element.');
    } else {
        console.log('Элементы с классом category element не найдены.');
        
        // Создаем кнопку
        const button = document.createElement('button');
        button.textContent = 'Добавить категорию';
        button.classList.add('add-category-button');
        
        // Добавляем кнопку в category-display
        categoryDisplay.appendChild(button);
    }
}

export async function getCategories() {
    try {
        const response = await fetch('/categories'); // URL для получения категорий
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.statusText}`);
        }
        const categories = await response.json();
        console.log('Категории:', categories);

        const categoriesList = document.getElementById('category-display');
        categories.forEach(category => {
            const listItem = document.createElement('div');
            listItem.textContent = `${category.name}`;
            listItem.className = "category-element";
            listItem.id=`${category.id}`;
            categoriesList.appendChild(listItem);

        });
        checkAndAddCategoryButton();
        
    } catch (error) {
        console.error('Ошибка получения категорий:', error);
        alert('Ошибка получения категорий: ' + error.message);
    }
}

export async function addCategory(name) {
    try {
        const response = await fetch('/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name })
        });
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.statusText}`);
        }
        const newCategory = await response.json();
        console.log('Категория добавлена:', newCategory);
        // Обновите отображение категорий на странице
        await getCategories();
    } catch (error) {
        console.error('Ошибка добавления категории:', error);
        alert('Ошибка добавления категории: ' + error.message);
    }
}

export async function deleteCategory(id) {
    try {
        const response = await fetch(`/categories/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.statusText}`);
        }
        console.log('Категория удалена');
        // Обновите отображение категорий на странице
        await getCategories();
    } catch (error) {
        console.error('Ошибка удаления категории:', error);
        alert('Ошибка удаления категории: ' + error.message);
    }
}

export async function changeCategory(id, newName) {
    try {
        const response = await fetch(`/categories/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newName })
        });
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.statusText}`);
        }
        const updatedCategory = await response.json();
        console.log('Категория изменена:', updatedCategory);
        // Обновите отображение категорий на странице
        await getCategories();
    } catch (error) {
        console.error('Ошибка изменения категории:', error);
        alert('Ошибка изменения категории: ' + error.message);
    }
}
