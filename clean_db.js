// This script will transform db.json to keep only the required product properties.
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');
const outputPath = path.join(__dirname, 'db.cleaned.json');

const raw = fs.readFileSync(dbPath, 'utf-8');
const db = JSON.parse(raw);

const cleaned = {
  products: db.products.map(product => ({
    id: product.id,
    title: product.title,
    description: product.description,
    rating: product.rating,
    thumbnail: product.thumbnail,
    category: product.category,
    brand: product.brand,
    price: product.price,
    dateCreated: product.meta?.createdAt || null
  }))
};

fs.writeFileSync(outputPath, JSON.stringify(cleaned, null, 2));
console.log('Cleaned product data written to db.cleaned.json');
