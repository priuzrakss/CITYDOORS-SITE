const { query, pool } = require('./db');

async function createSubcategory(categoryId, name) {
    try {
        const res = await query('INSERT INTO subcategories (category_id, name) VALUES ($1, $2) RETURNING *', [categoryId, name]);
        return res.rows[0];
    } catch (err) {
        console.error('Ошибка при создании подкатегории:', err);
        throw err;
    }
}

async function getSubcategories() {
    try {
        const res = await query('SELECT * FROM subcategories', []);
        return res.rows;
    } catch (err) {
        console.error('Ошибка при получении подкатегорий:', err);
        throw err;
    }
}

async function deleteSubcategory(id) {
    try {
        await query('DELETE FROM subcategories WHERE id = $1', [id]);
    } catch (err) {
        console.error('Ошибка при удалении подкатегории:', err);
        throw err;
    }
}

module.exports = {
    createSubcategory,
    getSubcategories,
    deleteSubcategory
};
