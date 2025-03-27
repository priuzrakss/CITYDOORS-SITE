import { checkAndAddCategoryButton, getCategories } from './category.js';
import { checkAndAddObjectButton, fluidMenu} from './object.js';


document.addEventListener('DOMContentLoaded', function() {
    console.log("start");
    getCategories();
    checkAndAddObjectButton();
    contextCategoies();
    setSubcategoies();
    fluidMenu();
});

async function setSubcategoies(parms){
    categoryMenu.addEventListener('click',function(e){
        e.preventDefault();
        const element = e.target; // Получаем элемент, на который кликнули
        const id = element.getAttribute('id'); // Получаем id элемента
        const clas = element.getAttribute('class');
        if(element != null && id != null){
            categoryMenu.innerHTML = '';
            getSubcategories();
        }
    })
}

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

