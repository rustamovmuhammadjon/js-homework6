let x = 10;
let b = 0;
function son(a) {
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            b = b + " " + i;
        }
    } return b;
}
console.log(son(x));