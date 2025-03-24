

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('login-form').addEventListener('click', async (event) => {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login: `${login}`, password: `${password}` }),
    })
    .then(response => {
      if (response.status === 401) {
          alert('Неправильный логин или пароль');
      } else if (response.status === 403) {
          alert('Доступ запрещен');
      } else {
          // Редирект на соответствующую страницу
          window.location.href = response.url;
      }
    })
    .catch(error => console.error('Ошибка:', error));
  });
});
