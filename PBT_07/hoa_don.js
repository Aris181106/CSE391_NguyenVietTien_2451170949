const menu = [
    { name: "Bun cha", gia : 40000, con : 3 },
    { name: "Con tam", gia : 50000, con : 2 },
    { name: "Pho ga", gia : 45000, con : 1 },
    { name: "Bun bo Hue", gia : 35000, con : 4 },
]
console.log("╔══════════════════════════════════════╗");
console.log("║          HOA DON NHA HANG            ║");
console.log("╠══════════════════════════════════════╣");

let GrandTotal = 0;
for(let i = 0; i < menu.length; i++){
    let item = menu[i];
    let Total = item.gia * item.con;
    GrandTotal += Total;
    console.log(`${i + 1}. ${item.name} x${item.con} = ${GrandTotal.toLocaleString()}đ`);
}
console.log("╠══════════════════════════════════════╣");
let discount = 0;
if(GrandTotal > 1000000){
    discount = GrandTotal * 0.15;
}
else if(GrandTotal > 500000){
    discount = GrandTotal * 0.1;
}
const isWednesday = true;
if(isWednesday){
    discount += GrandTotal * 0.05;
}

let AfterDiscount = GrandTotal - discount;

let VAT = AfterDiscount * 0.08;

let tip = 0;
const isTip = true;
if(isTip){
    tip = AfterDiscount * 0.05;
}

let FinalTotal = AfterDiscount + VAT + tip;

console.log(`Tong cong: ${GrandTotal.toLocaleString()}đ`);
console.log(`Giam gia: ${discount.toLocaleString()}đ`);
console.log(`VAT (8%): ${VAT.toLocaleString()}đ`);
console.log(`Tip (5%): ${tip.toLocaleString()}đ`);

console.log("╠══════════════════════════════════════╣");

console.log(`THANH TOAN: ${FinalTotal.toLocaleString()}đ`);

console.log("╚══════════════════════════════════════╝");