export function checkAndAddObjectButton() {
    const objectDisplay = document.querySelector('.object-display');
    const objectElements = objectDisplay ? objectDisplay.querySelectorAll('.object-element') : [];

    if (objectElements.length > 0) {
        console.log('Найдены элементы с классом object element.');
    } else {
        console.log('Элементы с классом object element не найдены.');
        
        // Создаем кнопку
        const button = document.createElement('button');
        button.textContent = 'Добавить товар';
        button.classList.add('add-object-button');
        
        // Добавляем кнопку в category-display
        objectDisplay.appendChild(button);
    }
}

export function addObject(){
    return;
}

export function deleteObject(){
    return;
}

export function changeObject(){
    return;
}
