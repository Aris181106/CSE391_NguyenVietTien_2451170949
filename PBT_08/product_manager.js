const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", stock: 15, rating: 4.5 },
    { id: 2, name: "MacBook Pro", price: 45990000, category: "laptop", stock: 8, rating: 4.8 },
    { id: 3, name: "AirPods Pro", price: 6990000, category: "accessory", stock: 50, rating: 4.3 },
    { id: 4, name: "iPad Air", price: 16990000, category: "tablet", stock: 0, rating: 4.6 },
    { id: 5, name: "Samsung S24", price: 22990000, category: "phone", stock: 20, rating: 4.4 },
    { id: 6, name: "Dell XPS 15", price: 35990000, category: "laptop", stock: 5, rating: 4.7 },
    { id: 7, name: "Galaxy Buds", price: 3490000, category: "accessory", stock: 100, rating: 4.1 },
    { id: 8, name: "Xiaomi Pad 6", price: 7990000, category: "tablet", stock: 25, rating: 4.2 },
    { id: 9, name: "Pixel 9", price: 19990000, category: "phone", stock: 12, rating: 4.6 },
    { id: 10, name: "ThinkPad X1", price: 32990000, category: "laptop", stock: 3, rating: 4.5 }
];

function getInStock(products){
    return products.filter(product => product.stock > 0);
}

console.log("=== IN-STOCK PRODUCTS ===");
console.log(getInStock(products));

function filterProducts(products, category, minPrice, maxPrice){
    return products.filter(products => products.category === category && products.price >= minPrice && products.price <= maxPrice)
}

console.log("\n=== PHONES 15-25 TRIỆU ===");
console.log(filterProducts(products, "tablet", 5000000, 50000000));

function sortByPrice(products, order = "asc") {
    return [...products].sort((a, b) => {
        return order === "asc" ? a.price - b.price : b.price - a.price;
    });
}

console.log(sortByPrice(products));

function cheapestByCategory(products){
    return products.reduce((result, product) => {
        const category = product.category;
        if(!result[category] || product.price < result[category].price ){
            result[category] = product;
        }
        return result;
    }, {});
}

console.log(cheapestByCategory(products));

function totalInventoryValue(products){
    return products.reduce((Alltotal, product) => {
        return Alltotal + product.price * product.stock;
    } ,0);
}

console.log(totalInventoryValue(products));

function formatProductList(products) {
    return products.map(product => ({
        name: product.name,
        formattedPrice: product.price.toLocaleString() + "đ"
    }));
}

console.log(formatProductList(products));

function averageRating(products){
    return products.reduce((average, product) => {
        return average + product.rating / products.length;
    } ,0);
}

console.log(averageRating(products));

function searchProducts(products, keyword){
    return products.filter(products => products.name.toLowerCase().includes(keyword.toLowerCase()));
}

console.log(searchProducts(products, "a"));