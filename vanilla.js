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

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зконкатенувати їх в одну змінну person.

let person = {
  firstName : 'Shmykov',
  middleName : 'Vladyslav',
  lastName: 'Igorovich',
}

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

userName = prompt('Введите имя')
fatherName = prompt('Введите отчество')
age = prompt('Введите возраст')
alert('Вітаю ' + userName +' '+ fatherName + '. Тобі ' + age + ' Років')

console.log(' ');

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));

console.log(' ');

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразаї не використовувати однакові оператори!!!
  // 5 ? 6 -> true
  // 5 ? 6 -> false
  // 5 ? 6 -> false
  // 5 ? 6 -> false
  // 10 ? 10 -> true
  // 10 ? 10 -> true
  // 10 ? 10 -> false
  // 10 ? 10 -> false
  // 10 ? 10 -> false
  // 123 ? '123' -> false
  // 123 ? '123' -> true

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

console.log(' ');

console.log(132 > 100 && 45 < 12 );
console.log(34 > 33 && 23 < 90 );
console.log(99 > 100 && 45 > 12 );
console.log(132 > 100 || 45 < 12 );
console.log(111 > 11 || 45 < 111 );
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
console.log(!!'-1');
console.log(!!-1);
console.log(!!'0');
console.log(!!'null');
console.log(!!'undefined');
console.log(!!(3/'owu'));
console.log((111 > 11 || 45 < 111) ||  !!'0');
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));