const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const categories = require('./categories');
const subcategories = require('./subcategories');
const objects = require('./objects');
const getUserRole = require('./login');  // Импортируем функцию getUserRole

const app = express();
const port = 3000;

app.use(session({
    secret: 'S6$f-28Uh!',
    resave: false,
    saveUninitialized: true,
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

function checkAuth(req, res, next) {
  if (req.session.isAuthenticated) {
    console.log(`Пользователь авторизован. Роль: ${req.session.role}`);
    next();
  } else {
    console.log('Пользователь не авторизован. Перенаправление на /');
    res.redirect('/');
  }
}

function checkRole(role) {
  return function (req, res, next) {
    if (req.session.isAuthenticated && req.session.role === role) {
      console.log(`Пользователь имеет роль: ${role}`);
      next();
    } else {
      console.log(`Доступ запрещен. Требуемая роль: ${role}. Текущая роль: ${req.session.role}`);
      res.status(403).redirect('/');
    }
  }
}

// Маршруты для работы с категориями
app.post('/categories', async (req, res) => {
  try {
    const category = await categories.createCategory(req.body.name);
    res.json(category);
  } catch (err) {
    res.status(500).send('Ошибка при создании категории');
  }
});

app.get('/categories', async (req, res) => {
  try {
    const allCategories = await categories.getCategories();
    res.json(allCategories);
  } catch (err) {
    res.status(500).send('Ошибка при получении категорий');
  }
});

app.delete('/categories/:id', async (req, res) => {
  try {
    await categories.deleteCategory(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send('Ошибка при удалении категории');
  }
});

// Маршруты для работы с подкатегориями
app.post('/subcategories/:id', async (req, res) => {
  try {
    const subcategory = await subcategories.createSubcategory(req.body.categoryId, req.body.name);
    res.json(subcategory);
  } catch (err) {
    res.status(500).send('Ошибка при создании подкатегории');
  }
});

app.get('/subcategories', async (req, res) => {
  try {
    const allSubcategories = await subcategories.getSubcategories();
    res.json(allSubcategories);
  } catch (err) {
    res.status(500).send('Ошибка при получении подкатегорий');
  }
});

app.delete('/subcategories/:id', async (req, res) => {
  try {
    await subcategories.deleteSubcategory(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send('Ошибка при удалении подкатегории');
  }
});

// Маршруты для работы с объектами
app.post('/objects', async (req, res) => {
  try {
    const object = await objects.createObject(req.body.name, req.body.categoryId, req.body.subcategoryId);
    res.json(object);
  } catch (err) {
    res.status(500).send('Ошибка при создании объекта');
  }
});

app.get('/objects', async (req, res) => {
  try {
    const allObjects = await objects.getObjects();
    res.json(allObjects);
  } catch (err) {
    res.status(500).send('Ошибка при получении объектов');
  }
});

app.delete('/objects/:id', async (req, res) => {
  try {
    await objects.deleteObject(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send('Ошибка при удалении объекта');
  }
});

// Рендеринг страниц админа и менеджера
app.get('/admin', checkAuth, checkRole('admin'), (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'admin', 'index.html'));
});

app.get('/manager', checkAuth, checkRole('manager'), (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'manager', 'index.html'));
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.post('/login', async (req, res) => {
  const { login, password } = req.body;
  try {
    const role = await getUserRole(login, password);
    if (role) {
      req.session.role = role;
      req.session.isAuthenticated = true;
      if (role === 'admin') {
        res.redirect('/admin');
      } else if (role === 'manager') {
        res.redirect('/manager');
      } else {
        res.status(500).send('Неизвестная роль пользователя');
      }
    } else {
      res.status(401).redirect('/');
    }
  } catch (err) {
    console.error('Ошибка сервера:', err);
    res.status(500).redirect('/');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
