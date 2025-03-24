const { query, pool } = require('./db');

async function createObject(name, categoryId, subcategoryId) {
    try {
        const res = await query('INSERT INTO objects (name, category_id, subcategory_id) VALUES ($1, $2, $3) RETURNING *', [name, categoryId, subcategoryId]);
        return res.rows[0];
    } catch (err) {
        console.error('Ошибка при создании объекта:', err);
        throw err;
    }
}

async function getObjects() {
    try {
        const res = await query('SELECT * FROM objects', []);
        return res.rows;
    } catch (err) {
        console.error('Ошибка при получении объектов:', err);
        throw err;
    }
}

async function deleteObject(id) {
    try {
        await query('DELETE FROM objects WHERE id = $1', [id]);
    } catch (err) {
        console.error('Ошибка при удалении объекта:', err);
        throw err;
    }
}

module.exports = {
    createObject,
    getObjects,
    deleteObject
};
