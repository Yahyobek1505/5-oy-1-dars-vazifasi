// <===========================> 1-masala <===============================>
// let arr = [5, "salom", 2, true, 1, false, "Xayr"];

// let sum = 0;
// function number() {

//   for (let iterator of arr) {
//     if (typeof iterator === 'number')
//     {
//       sum += iterator;
//     }
//   }
//   return sum;
// }
// let result = number(arr);
// console.log("Jami " + result);

// <===========================> 2-masala <===============================>

let kichikSozlar = ["bolalar", "tarona", "andy", `name`];

function upperCase(words) {
  let kattalar = [];

  for (let first of words) {

    if (first.length > 0) {
      let boshHarf = first[0].toUpperCase();
      let kichikharf = first.slice(1);

      let newWords = boshHarf + kichikharf;
      kattalar.push(newWords);
    } 

  }
  return kattalar;
}

let yangiSozlar = upperCase(kichikSozlar);
console.log("Bosh harfli so'zlar: " + yangiSozlar);

// <===========================> 3-masala <===============================>

// let soz = "arra"; //prompt("Biror so'z kiriting");

// function isPalind() {
//   let teskariSoz = Array.from(soz).reverse().join("");

//   if (soz == teskariSoz) {
//     return "Bu palindrom so'z ekan!";
//   } else {
//     return "Bu palindrom so'z emas!";
//   }
// }
// console.log(isPalind(soz));
