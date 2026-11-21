const express = require('express');
const path = require('path');

const app = express();
const   PORT     = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get("/", (req, res) => {
    res.redirect("/html/index.html");
});
const product = [
    {id: 1, name: "seater sofa", price: 89.99, image: "/images/product-1.jpg"},
    {id: 2, name: "office chair", price: 69.99, image: "/images/product-2.jpg"},
    {id: 2, name: "Office Desk", price: 99.99, image: "/images/product-3.jpg"},
    {id: 2, name: "TV", price: 149.99, image: "/images/product-4.jpg"},
]
app.get("/api/products", (req, res) => {
    res.json(products);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});