export function checkAndAddSubcategoryButton() {
    const categoryDisplay = document.querySelector('.category-display');
    const subcategoryElement = categoryDisplay ? categoryDisplay.querySelectorAll('.subcategory-element') : [];

    if (subcategoryElement.length > 0) {
        console.log('Найдены элементы с классом subcategory-element.');
    } else {
        console.log('Элементы с классом subcategory-element не найдены.');
        
        // Создаем кнопку
        const button = document.createElement('button');
        button.textContent = 'Добавить подкатегорию';
        button.classList.add('add-subcategory-button');
        
        // Добавляем кнопку в category-display
        addBackBtn(categoryDisplay);
        categoryDisplay.appendChild(button);
    }
}

function addBackBtn(categoriesList){
    const backBtn = document.createElement('div');
    backBtn.classList.add('back-button');
    backBtn.textContent = 'Назад';
    backBtn.addEventListener('click', function(e){
        document.querySelectorAll('.subcategory-element').forEach(element =>{
            element.style.display = 'none';
        });
        document.querySelectorAll('.category-element').forEach( element => {
            element.style.display = 'flex';
        })
        document.querySelector('.name').textContent = 'Категории';    
        backBtn.remove();
        document.querySelectorAll('.add-subcategory-button').forEach(element =>{
            element.remove();
        });
    }); 
    categoriesList.appendChild(backBtn);
}

export async function getSubcategories(id) {
    try {
        const response = await fetch(`/subcategories/${id}`); // URL для получения категорий
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.statusText}`);
        }
        const subcategories = await response.json();
        console.log('Подкатегории:', subcategories);
        
        if(!subcategories || subcategories.length === 0){
            checkAndAddSubcategoryButton();
        }
        else {
        
        const categoriesList = document.getElementById('category-display');
        addBackBtn(categoriesList);
        subcategories.forEach(subcategory => {
            const listItem = document.createElement('div');
            listItem.textContent = `${subcategory.name}`;
            listItem.className = "subcategory-element";
            listItem.id = `${subcategory.id}`;
            categoriesList.appendChild(listItem);
        });        
        }
    } catch (error) {
        console.error('Ошибка получения подкатегорий:', error);
        alert('Ошибка получения подкатегорий: ' + error.message);
    }
}

