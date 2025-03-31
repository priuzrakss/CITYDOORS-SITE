       
    export function fluidMenu() {
        const modal = document.getElementById("myModal"); // Переменные
        const openBtn = document.getElementById("openModalBtn");
        const closeBtn = document.querySelector(".close");
        const addFieldBtn = document.getElementById("addFieldBtn");
        const dynamicFields = document.getElementById("dynamicFields");
        const submitBtn = document.getElementById("submitBtn");
        const sendPicBtn = document.getElementById("photoUpload"); // Для подгрузки фото (а как сделать чтобы)
        const photoPreview = document.getElementById("photoPreview");
       
        const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

        var Counter = 0; // Для каждого поля разные id
        

        openBtn.addEventListener('click', function(e){ // Функции
            modal.style.display = 'block';
        }); 
        closeBtn.addEventListener('click', function(e){ 
            modal.style.display = 'none';
            
        });

           // var input = document.createElement('input');
          //  input.type = 'file';
         // input.click();

        addFieldBtn.addEventListener('click', function(e){ // Дополнительные поля
            const createfield = document.createElement ('input');
            const createVarField = document.createElement ('input');
            const deleteBtn = document.createElement ('button');
            const holder = document.createElement ('div');

            createfield.classList.add('field');
            createfield.placeholder = 'Название/Имя';
            createVarField.classList.add('varField');
            createVarField.placeholder = 'Значение';
            deleteBtn.textContent = 'Удалить';
            createfield.id = Counter;
            createVarField.id = Counter;
            Counter ++;

            holder.appendChild (createfield);
            holder.appendChild (createVarField);
            holder.appendChild (deleteBtn);
            dynamicFields.appendChild (holder);

            deleteBtn.addEventListener('click', function(e){
                createfield.remove();
                createVarField.remove();
                deleteBtn.remove();
            })

            const title = '';
            const info = '';
            
        });
        submitBtn.addEventListener('click', function(e){ // Статические   поля(Статистика)
            const input1 = document.querySelector('#field1').value;
            const input2 = document.querySelector('#field2').value;
            const input3 = document.querySelector('#field3').value;
            const addfields = document.querySelectorAll('.field');
            const addVarFields = document.querySelectorAll('.varField');
            const addFields = [];
            const data = {
                name: input1, 
                discription: input2,
                price: input3,
                ArrayFields: addFields,
            }
            data.ArrayFields = Array.from(addfields).map((field, index) => {
                return { name: field.value, var: addVarFields[index].value };
            });
            console.log(data);
        });
    }

       
    
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
        button.classList.add('add-object-button' );
        // Добавляю id кнопки
       button.id='openModalBtn';
        
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

//
    const sendBtn = document.getElementById('sendPicBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const fileInput = document.getElementById('imageUpload');
    const statusDiv = document.getElementById('status');
    document.getElementById('sendPicBtn').addEventListener('click', function() {
    // Программно кликаем по скрытому input type="file"
    document.getElementById('imageUpload').click();
});

    document.getElementById('imageUpload').addEventListener('change', function(e) {
    if (this.files.length === 0) return;

    const file = this.files[0];
    const statusDiv = document.getElementById('status');

    // Это изображение?
    if (!file.type.startsWith('image/')) {
        statusDiv.textContent = 'Ошибка: выберите файл изображения (JPEG, PNG, GIF).';
        return;
    }

    // Имя файла
    /*statusDiv.textContent = `Выбрано: ${file.name}`;
    */

    // Превью
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '200px';
        statusDiv.appendChild(img);
    };
    reader.readAsDataURL(file);
});

