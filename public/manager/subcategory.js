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