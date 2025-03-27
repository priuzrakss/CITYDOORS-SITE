export function checkAndAddSubcategoryButton() {
    const categoryDisplay = document.querySelector('.category-display');
    const categoryElements = categoryDisplay ? categoryDisplay.querySelectorAll('.category-element') : [];

    if (categoryElements.length > 0) {
        console.log('Найдены элементы с классом subcategory-element.');
    } else {
        console.log('Элементы с классом subcategory-element не найдены.');
        
        // Создаем кнопку
        const button = document.createElement('button');
        button.textContent = 'Добавить подкатегорию';
        button.classList.add('add-subcategory-button');
        
        // Добавляем кнопку в category-display
        categoryDisplay.appendChild(button);
    }
}

export async function getSubcategories(id) {
    try {
        const response = await fetch(`/subcategories:${id}`); // URL для получения категорий
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.statusText}`);
        }
        const subcategories = await response.json();
        console.log('Подкатегории:', subcategories);

        const categoriesList = document.getElementById('category-display');
        categories.forEach(subcategory => {
            const listItem = document.createElement('div');
            listItem.textContent = `${subcategory.name}`;
            listItem.className = "subcategory-element";
            listItem.id=`${subcategory.id}`;
            categoriesList.appendChild(listItem);
        });
        checkAndAddSubcategoryButton();
        
    } catch (error) {
        console.error('Ошибка получения категорий:', error);
        alert('Ошибка получения категорий: ' + error.message);
    }
}