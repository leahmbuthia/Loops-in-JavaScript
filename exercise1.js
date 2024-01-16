console.log("Hello World");
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log("exit");

// //9 8 7 6 5 4 3 2 1 0

// for (let y = 9; y >= 0; y--) {
//     console.log(y)
// }
console.log("Example 3");
for (let z = 1; z <= 6; z++) {
    console.log("*".repeat(z))            
}
// console.log("Example 4");
// for (let z = 6; z >= 1; z--) {
//     console.log("*".repeat(z));
// }

// example 4
console.log("example 4")
for (let z = 6; z >= 1; z--) {
    console.log((" ") +("*").repeat(z));
}
// example 5
console.log("Example 5")
for(let i=1; i<=5; i++){
    let gap= " ".repeat(5-i);
    let star="*".repeat((1+i)-1);
    console.log(gap + star);
}
for(let i=4; i>=0; i--){
    let gap= " ".repeat(5-i);
    let star="*".repeat((1+i)-1);
    console.log(gap + star);
}
//Example 6
console.log("example 6")
for(let i=1; i<=5; i++){
    let gap= " ".repeat(5-i);
    let star="*".repeat(2*i-1);
    console.log(gap + star);
}
for (let i = 4; i > 0; i--) {
    let gap = " ".repeat(5 - i);
    let star = "*".repeat((2 * i) - 1);
    console.log(gap + star);
}

//example 7
console.log("example 7");
let stars ="*".repeat(7);
console.log(stars);
for(let i=7; i>=1;i--){
    gaps=" ".repeat(6);
    console.log(gaps + "*");
}
console.log("example 8");
let star ="*".repeat(7);
console.log(stars);
for(let i=7; i>=1;i--){
    gaps=" ".repeat(6);
    console.log( "*" +gaps );
}

//generate 6 random numbers between 1 and 49
console.log(" generating  6 random numbers between 1 and 49")
for (let i = 0; i <= 5; i++) {
    console.log(Math.ceil(Math.random() * 50));
  }
