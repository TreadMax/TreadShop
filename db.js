const { DatabaseSync } = require("node:sqlite");
const path = require("path");

const db = new DatabaseSync(path.join(__dirname, "shop.db"));

db.exec(
    "CREATE TABLE IF NOT EXISTS products (" +
    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "name TEXT NOT NULL," +
    "price REAL NOT NULL," +
    "image TEXT NOT NULL" +
    ")"
);
const { count } = db.prepare("SELECT COUNT(*) AS count FROM products").get();

if (count === 0) {
    const insert = db.prepare("INSERT INTO products (name, price, image) VALUES (?, ?, ?)");
    insert.run("seater sofa", 89.99, "/images/product-1.jpg");
    insert.run("office chair", 69.99, "/images/product-2.jpg");
    insert.run("Office Desk", 99.99, "/images/product-3.jpg");
    insert.run("TV", 149.99, "/images/product-4.jpg");
}
module.exports = db;