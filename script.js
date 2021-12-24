// Exercises:Loops

// 1-Iterate 0 to 10 using for loop, do the same using while and do while loop.
let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

// 2-Iterate 10 to 0 using for loop, do the same using while and do while loop.
let j = 10;
do {
    console.log(j);
    j--;
} while (j >= 0);

// 3-Write a loop that makes seven calls to console.log to output the following triangle:
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

let diyez = '';

for (let j = 0; j < 7; j++) {
    diyez += '#';
    console.log(diyez);
}

// 4-Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items.

let x = ["HTML", "CSS", "JavaScript"]
for (let i = 0; i < x.length; i++) {
    console.log(x[i])
}

// 5-Use for loop to iterate from 0 to 100 and print only even numbers

let evenNumber;
for (evenNumber = 0; evenNumber <= 100; evenNumber++) {

    if (evenNumber % 2 == 0) {
        console.log(evenNumber)
    }
}

// 6-Use for loop to iterate from 0 to 100 and print only odd numbers

let oddNumber;
for (oddNumber = 0; oddNumber <= 100; oddNumber++) {

    if (oddNumber % 2 == 1) {
        console.log(oddNumber)
    }
}

// 7-Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.

let toplam = 0;

for (let j = 0; j <= 100; j++) {
    toplam = toplam + j;
}

console.log("1'den 100'e kadar olan sayıların toplamı=" + toplam + "'dir.");

// 8-The sum all numbers in a given number. Ex. 5465 => 5+4+6+5 => 20  

let sayi = "5465";
let sayiArray = sayi.split('');
let sayiToplam = 0;
for (let i = 0; i < sayiArray.length; i++) {
    let x = sayiArray[i];
    sayiToplam = sayiToplam + Number(x);
}

console.log(sayiToplam);


// 9-Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// 100'e kadar olan tek sayıların toplamı
tekToplam = 0;

for (let i = 1; i <= 100; i++) {
  if(i%2==1) {
     tekToplam=tekToplam+ i; 
  }
   
}
console.log("0'dan 100'e kadar tek sayıların toplamı=" +tekToplam);


// 100'e kadar olan çift sayıların toplamı

 ciftToplam = 0;

for (let i = 0; i <= 100; i++) {
  if(i%2==0) {
     ciftToplam =ciftToplam+ i; 
  }
   
}
console.log("0'dan 100'e kadar çift sayıların toplamı=" +ciftToplam);



// 10-Develop a small script which generate a six characters random id:
//Ex.: 5j2khz

let z = Math.random().toString(16);
console.log(z); // Math.random ile 0-1 arası rastgele bir sayı bulup, bu sayıyı toString(16) ile hexadecimal bir ifadeye çeviriyoruz. 

let t = z.substr(2, 5); // Yukarıda bulduğumuz değer rastgele olarak "0.b494336743f5e" bu şekilde 15 basamaklı bir sayıdır. Bu sayının başındaki noktalı kısmını kullanmak istemediğimiz için substr yazıyoruz. substr ifadesinde parantezin içine (2,5) yazıyoruz. substr(2,5) ile rastgele bulduğumuz 15 basamaklı sayının 2  indeks numaralı elemanından itibaren(yani "nokta" 'dan sonra) 5 uzunluğunda bir sayı elde ediyoruz.

console.log(t);  // Sayımızın son hali 5 basamaklı olarak şu şekildedir:"8432e". Random olarak ürettiğimiz için sayı her seferinde farklı olacaktır.