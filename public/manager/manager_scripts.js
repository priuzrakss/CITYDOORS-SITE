import { checkAndAddCategoryButton, getCategories } from './category.js';
import { checkAndAddObjectButton } from './object.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log("start");
    getCategories();
    checkAndAddObjectButton();
    contextCategoies();
});


async function contextCategoies(params) {
    categoryMenu.addEventListener('contextmenu', function(e){
        e.preventDefault();
        const element = e.target; // Получаем элемент, на который кликнули
        const id = element.getAttribute('id'); // Получаем id элемента
        const clas = element.getAttribute('class');
        contextMenu.style.left =`${e.pageX}px`;
        contextMenu.style.top = `${e.pageY}px`;
        contextMenu.style.display = 'flex';
    });
}


const objectMenu = document.getElementById('object-block');
const categoryMenu = document.getElementById('category-block');
const contextMenu = document.getElementById('context-menu');

