// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let z = 1;
let x = 10;
let d = -999;
let v = 123;
let g = 3.14;
let n = 2.7;
let m = 16;
let isM = true;
let canM = false;

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

hello = 'no hello';
owu = 'no owu';
com = ' no com';
ua = 'no ua';
z = -1;
x = -10;
d = 999;
v = -123;
g = -3.14;
n = -2.7;
m = -16;
isM = false;
canM = true;
console.log(hello, owu, com, ua, z, x, d, v, g, n, m, isM, canM);
alert(hello +' '+ owu +' '+ com +' '+ ua +' '+ z +' '+ x +' '+ d +' '+ v +' '+ g +' '+ n +' '+ m +' '+ isM +' '+ canM);
document.write(hello, ' ', owu, ' ', com, ' ', ua, ' ', z, ' ', x, ' ', d, ' ', v, ' ', g, ' ', n, ' ', m, ' ', isM, ' ', canM);

console.log(' ');

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

userName = prompt('Введите имя');
fatherName = prompt('Введите отчество');
age = prompt('Введите возраст');
alert('Вітаю ' + userName + ' ' + fatherName + '. Тобі ' + age + ' Років');

console.log(' ');

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

let person = userName +' '+ fatherName +' '+ age;
console.log(person);

console.log(' ');

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat. 
//   Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

let string1 = +prompt('input string1');
let string2 = +prompt('input string2');
let string3 = +prompt('input string3');
console.log(string1);
console.log(string2);
console.log(string3);
console.log(' ');
let number1 = parseInt(prompt('input number1'));
let number2 = parseInt(prompt('input number2'));
let number3 = parseInt(prompt('input number3'));
let number4 = parseInt(prompt('input number4'));
console.log(number1 + number2 + number3 + number4);
console.log(' ');
let float1 = parseFloat(prompt('input float1'));
let float2 = parseFloat(prompt('input float2'));
let float3 = parseFloat(prompt('input float3'));
let result = float1 + float1 + float1
console.log(result);
console.log(' ');

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.

let floatNumber1 = Math.round(parseFloat(prompt('input floatNumber1')));
let floatNumber2 = Math.round(parseFloat(prompt('input floatNumber2')));
let floatNumber3 = Math.round(parseFloat(prompt('input floatNumber3')));
console.log(floatNumber1 + floatNumber2 + floatNumber3);
console.log(' ');
// - За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25 

let base = prompt('input base');
let exponent = prompt('input exponent');
console.log(Math.pow(base, exponent));
console.log(' ');
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));
console.log(' ');

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true

console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 >= 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(10 != 10);
console.log(123 === '123');
console.log(123 == '123');