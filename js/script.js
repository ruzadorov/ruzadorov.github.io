'use strict'

// Forms
const forms = document.querySelectorAll('form');
const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'

};

forms.forEach(item => {
    postData(item);
})

function postData(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        statusMessage.textContent = message.loading;
        form.append(statusMessage);

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'multipart/form-data');

        const formData = new FormData(form);
        console.log(event);

        request.send(formData);
        request.addEventListener('load', () => {
            if(request.status === 200) {
                console.log(request.response);
                statusMessage.textContent = message.success;
            } else {
                console.log('Ошибка: ' + request.status);
                statusMessage.textContent = message.failure;
            }
        })
    })
}