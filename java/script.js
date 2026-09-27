"use strict";

alert('Привет, я изучаю JavaScript!');

let num = 123;
alert(num);

let a = 10;
alert(a);
a = 20;
alert(a);

let sum123 = 1 + 2 + 3;
alert(sum123);

let x = 10, y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

let c1 = 10, d1 = 5;
let result = c1 + d1;
alert(result);

let f1 = 1.5, f2 = 0.75;
alert(f1 + f2);

let neg = -100;
alert(neg);

let pos = 5;
alert(-pos);

alert(13 % 5);
alert(2 ** 10);

let name = 'Иван';
let surname = 'Иванов';
alert(name);
alert(surname);

let s1 = 'java', s2 = 'script';
alert(s1 + s2);

let h1 = 'hello', h2 = 'world';
alert(h1 + ' ' + h2);

let strLen = 'Привет мир';
alert(strLen.length);

let str1 = 'xxx';
let str2 = 'yyy';
let txt = `aaa ${str1} bbb ${str2} ccc`;

let multi = `a
b
c`;

let undef;
alert(undef);

let nul = null;
alert(nul);

let t = true, f = false;
alert(t);
alert(f);

let nan1 = 'abc', nan2 = 'def';
alert(nan1 * nan2);

alert(10 / 0);
alert(-10 / 0);

console.log(123);
console.log('123');
console.log(true);
console.log(null);
console.log(undefined);
console.log(NaN);
console.log(Infinity);

const PI = 3.14;
let rad = 5;
alert(2 * PI * rad);

alert(Number('10') + Number('20'));
alert(+'2' + +'3');
alert(parseInt('5px') + parseInt('6px'));
alert(parseFloat('5.5px') + parseFloat('6.25px'));

let pa = '5.5px', pb = '6.25px';
alert((parseFloat(pa) + parseFloat(pb)) + 'px');

alert(String(1) + String(2));
alert(String(12345).length);
alert(String(123).length + String(45678).length);

let sym = 'abcde';
alert(sym[0]);
alert(sym[2]);
alert(sym[4]);
alert(sym[4] + sym[3] + sym[2] + sym[1] + sym[0]);
alert(sym[sym.length - 1]);
alert(sym[sym.length - 2]);
alert(sym[sym.length - 3]);

let digits = '12345';
alert(Number(digits[0]) + Number(digits[1]) + Number(digits[2]) + Number(digits[3]) + Number(digits[4]));

let numToStr = String(12345);
alert(Number(numToStr[0]) + Number(numToStr[1]) + Number(numToStr[2]) + Number(numToStr[3]) + Number(numToStr[4]));
alert(numToStr[0] * numToStr[1] * numToStr[2] * numToStr[3] * numToStr[4]);
alert(numToStr[4] + numToStr[3] + numToStr[2] + numToStr[1] + numToStr[0]);

let inc = 10;
inc++;
inc++;
inc--;
alert(inc);

alert(0.1 * 0.2);
alert(0.3 - 0.1);
alert(+(0.1 + 0.2).toFixed(2));

let age = prompt('Ваш возраст?');
alert('Ваш возраст: ' + age);

let pnum1 = Number(prompt('Введите первое число'));
let pnum2 = Number(prompt('Введите второе число'));
alert(pnum1 + pnum2);

let side = Number(prompt('Сторона квадрата?'));
alert(side * side);

let rectA = Number(prompt('Первая сторона?'));
let rectB = Number(prompt('Вторая сторона?'));
alert(2 * (rectA + rectB));

document.write('Привет, мир!');
document.write('<i>Курсивный текст</i>');
let dwStr = 'text';
document.write('<i>' + dwStr + '</i>');
for (let i = 1; i <= 5; i++) {
    document.write(i + '<br>');
}

let e1 = 1, e2 = 2;
console.log('сумма: ' + (e1 + e2));

let ea = 1, eb = 2;
console.log(ea + eb);

let enum1 = '123';
let esum = Number(enum1[0]) + Number(enum1[1]) + Number(enum1[2]);
console.log(esum);

let enum2 = 123;
console.log(String(enum2)[0]);

let einc = 0;
console.log(++einc);

let enum3 = 123;
console.log(String(enum3).length);

console.log(24 * 60 * 60);

let enum4 = 123;
console.log(String(enum4).length);

let enum5 = 123;
let estr5 = String(enum5);
console.log(estr5[estr5.length - 1]);

let enum6 = 123;
console.log(String(enum6).length);

let enum7 = 123;
let estr7 = String(enum7);
console.log(estr7[estr7.length - 1]);

let ea2 = '123', eb2 = '456';
let es2 = Number(ea2) + Number(eb2);
console.log(es2);

alert(60 * 60 * 24);
alert(60 * 60 * 24 * 30);
alert(60 * 60 * 24 * 365);
alert(60 * 24);
alert(60 * 24 * 365);
alert(1024 * 1024);
alert(1024 ** 3);
alert(1024 ** 3 * 10);
alert(1024 ** 4);
alert(1024 ** 3);

let rF = 5;
alert(Math.PI * rF ** 2);

let aF = 4;
alert(aF ** 2);

let aR = 4, bR = 6;
alert(aR * bR);

let aP = 4, bP = 6;
alert(2 * (aP + bP));

let tc = 25;
alert(tc * 9 / 5 + 32);

let tf = 77;
alert((tf - 32) * 5 / 9);