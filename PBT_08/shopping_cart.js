function createCart() {
    let items = [];
    let discount = 0;
    function Item(productId) {
        return items.find(i => i.product.id === productId);
    }
    return {
        // Thêm sản phẩm (nếu đã có → tăng quantity)
        addItem(product, quantity = 1){
            const current = Item(product.id);
            if(current){
                current.quantity += quantity;
            }
            else{
                items.push({product, quantity});
            }
        },
        
        // Xóa sản phẩm theo id
        removeItem(productId){
            items = items.filter(i => i.product.id !== productId);
        },
        
        // Cập nhật số lượng
        updateQuantity(productId, newQuantity){
            const update = Item(productId);
            if(update){
                update.quantity = newQuantity;
            }
        },
        
        // Tính tổng tiền
        getTotal(){
            const grandTotal = items.reduce((sum, i) => {
                return sum + i.product.price * i.quantity;
            }, 0);
            return grandTotal * (1 - discount);
        },
        
        // Áp dụng mã giảm giá
        applyDiscount(code){
            if(code === "SALE10"){
                discount = 0.1;
            }
            else if(code === "SALE20"){
                discount = 0.2;
            }
            else if(code === "FREESHIP"){
            }
        },
        
        // In giỏ hàng dạng bảng
        printCart() {
    console.log("┌──────────────────────────────────────────────┐");
    console.log("│ # │ Sản phẩm      │ SL │ Đơn giá     │ Tổng │");

    items.forEach((i, id) => {
        const total = i.product.price * i.quantity;

        console.log(
            `│ ${id + 1} │ ${i.product.name.padEnd(12)} │ ${i.quantity.toString().padStart(2)} │ ${i.product.price.toLocaleString().padStart(10)} │ ${total.toLocaleString().padStart(10)} │`
        );
    });

    console.log("├──────────────────────────────────────────────┤");
    console.log(`│ Tổng cộng: ${this.getTotal().toLocaleString()}đ │`);
    console.log("└──────────────────────────────────────────────┘");
},
        // Lấy tổng số sản phẩm (tổng quantity)
        getItemCount(){
            return items.reduce((sum, i) => sum + i.quantity, 0);
        },
        
        // Xóa toàn bộ giỏ
        clearCart(){
            items = [];
        } 
    };
}

// === TEST ===
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

cart.printCart();


cart.applyDiscount("SALE10");
cart.printCart();
// → Tổng: 59.364.000đ (giảm 10%)

console.log("Số SP:", cart.getItemCount()); // → 4
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount()); // → 2