
//Function Declaration
function tinhThueBaoHiem(luong){
    let LuongSauThue = 0;
    if(luong > 11){
        LuongSauThue = luong - (luong * 0.1);
        return `Luong cua ban la: ${LuongSauThue}`
    }
    else{
        return `Luong cua ban la: ${luong}`
    }
}
console.log(tinhThueBaoHiem(12));

//Function Expression
const TinhLuong = function(luong){
    let LuongSauThue = 0;
    if(luong > 11){
        LuongSauThue = luong - (luong * 0.1);
        return `Luong cua ban la: ${LuongSauThue}`
    }
    else{
        return `Luong cua ban la: ${luong}`
    }
}
console.log(TinhLuong(13));

//Arrow Function
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

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const EvenNums = nums.filter(n => n % 2 === 0);
console.log ('Cac so chia het cho 2 la: ', EvenNums);

const MultiplierNums = nums.map(n => n * 3);
console.log ('Mang sau khi nhan voi 3 la: ', MultiplierNums);

const SumNums = nums.reduce((total, n) => total + n, 0);
console.log ('Tong cac phan tu trong mang la: ', SumNums);

const FindNums = nums.find(n => n > 7)
console.log ('Phan tu dau tien lon hon 7 la: ', FindNums);

const FindNums2 = nums.every(n => n > 10)
console.log ('Phan tu lon hon 10 la: ', FindNums2);

const CheckNums = nums.every(n => n > 0)
console.log ('Cac phan tu lon hon 0 la: ', CheckNums);

const NumsDescription = nums.map(n => `Số ${n} là ${n % 2 === 0 ? 'chẵn' : 'lẻ'}`);
console.log(NumsDescription);

const ReversedNums = nums.reverse();
console.log(ReversedNums)