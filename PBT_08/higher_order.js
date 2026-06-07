function pipe(...fns){
    return function(a){
        return fns.reduce((fn, fnc) => fnc(fn), a);
    };
}

const process = pipe(
    x => x * 2,        
    x => x + 10,      
    x => x.toString(), 
    x => "Kết quả: " + x
);
console.log(process(5));

function memoize(fn){
    const data = {};
    return function(i){
        if(data[i] !== undefined){
            return data[i];
        }
        console.log("Đang tính...");
        const result = fn(i);
        data[i] = result;
        return result;
    };
}

console.log("\n=== MEMOIZE ===");

const expensiveCalc = memoize((n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) sum += i;
    return sum;
});

console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));

function debounce(fn, delay){
    let timeOut;
    return function(...aris){
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fn(...aris);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

search(`tien`);
search(`22`);
search(`DHTL`);

async function retry(fn, maxAttempts = 3){
    return async function (...aris2) {
        for(let attempts = 1; attempts <= maxAttempts; attempts++){
            try{
                const alt = await fn(...aris2); //await la doi
                return alt;
            }
            catch(error){
                if(attempts === maxAttempts){
                    throw error; //throw la dung chuong trinh
                }
                console.log(`That bai sau ${attempts}.`);
            }
        }
    };
}
