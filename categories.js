const { query, pool } = require('./db');

async function createCategory(name) {
    try {
        const res = await query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);
        return res.rows[0];
    } catch (err) {
        console.error('Ошибка при создании категории:', err);
        throw err;
    }
}

async function getCategories() {
    try {
        const res = await query('SELECT id, name FROM categories;', []);
        console.log('Категории:', res.rows);
        return res.rows; // Возвращаем только строки
    } catch (err) {
        console.error('Ошибка выполнения запроса:', err);
        throw err; // Передаём ошибку дальше
    }
}

async function deleteCategory(id) {
    try {
        await query('DELETE FROM categories WHERE id = $1', [id]);
    } catch (err) {
        console.error('Ошибка при удалении категории:', err);
        throw err;
    }
}

module.exports = {
    createCategory,
    getCategories,
    deleteCategory
};
