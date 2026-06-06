
//Function Declaration
// function tinhThueBaoHiem(luong){
//     let LuongSauThue = 0;
//     if(luong > 11){
//         LuongSauThue = luong - (luong * 0.1);
//         return `Luong cua ban la: ${LuongSauThue}`
//     }
//     else{
//         return `Luong cua ban la: ${luong}`
//     }
// }
// console.log(tinhThueBaoHiem(12));

//Function Expression
// const TinhLuong = function(luong){
//     let LuongSauThue = 0;
//     if(luong > 11){
//         LuongSauThue = luong - (luong * 0.1);
//         return `Luong cua ban la: ${LuongSauThue}`
//     }
//     else{
//         return `Luong cua ban la: ${luong}`
//     }
// }
// console.log(TinhLuong(13));

//Arrow Function
const greet = (name) => {
    return `Xin chào ${name}!`;
};
const totalWage = (wage) => {
    let wageAfterTaxes = 0;
    if(wage > 11){
        wageAfterTaxes = wage - (wage * 0.1);  
        return `Your wage is : ${wageAfterTaxes}`
    }
    else{
        return `Your wage is : ${totalWage}`
    }
};
console.log(totalWage(12));