console.log('--- if-else ---');
{
    let test = 1;

    if (test == 1) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Операторы > < >= <= ---');
{
    let test = 1;

    if (test > 0) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test2 = -1;

    if (test2 > 0) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test3 = 0;

    if (test3 >= 0) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test4 = 0;

    if (test4 <= 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Проверка на равенство ---');
{
    let test = 0;

    if (test == 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Проверка на неравенство ---');
{
    let test = 1;

    if (test != 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Сравнение переменных ---');
{
    let test1 = 1;
    let test2 = 2;

    if (test2 > test1) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let a = 5;
    let b = 5;

    if (a === b) {
        console.log('значения равны');
    } else {
        console.log('значения не равны');
    }
}

console.log('--- Равенство строк ---');
{
    let test1 = 'abc';
    let test2 = 'abc';

    if (test1 == test2) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Равенство строк и чисел ---');
{
    let test1 = '123';
    let test2 = 123;

    if (test1 == test2) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Равенство по значению и типу ---');
{
    let test1 = '3';
    let test2 = '3';

    if (test1 === test2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let a = 3;
    let b = '3';

    if (a === b) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let c = 3;
    let d = 3;

    if (c === d) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Неравенство по значению и типу ---');
{
    let test1 = '3';
    let test2 = '3';

    if (test1 !== test2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let a = 3;
    let b = '3';

    if (a !== b) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let c = 3;
    let d = 2;

    if (c !== d) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Логическое И ---');
{
    let num = 3;

    if (num > 0 && num < 10) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num1 = 2;
    let num2 = 3;

    if (num1 == 2 && num2 == 3) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Логическое ИЛИ ---');
{
    let num1 = 10;
    let num2 = -5;

    if (num1 > 0 || num2 > 0) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num3 = -10;
    let num4 = -10;

    if (num3 >= 0 || num4 >= 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Приоритет логических операторов ---');
{
    let num = 3;

    if (num > 0 && num < 5 || num > 10 && num < 20) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Группировка условий ---');
{
    let num1 = 3;
    let num2 = 5;

    if (num1 > 0 && (num2 == 3 || num2 == 5)) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Инвертирование ---');
{
    let num = 10;

    if (!(num > 0 && num < 5)) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num1 = -5;
    let num2 = 15;

    if (!(num1 >= 0 || num2 <= 10)) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Булевы значения ---');
{
    let test = true;

    if (test === true) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test2 = false;

    if (test2 === false) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Сравнение с булевым типом ---');
{
    let test1 = 1;

    if (test1 == true) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test2 = 0;

    if (test2 == true) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test3 = 1;

    if (test3 == false) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test4 = 1;

    if (test4 != true) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test5 = '';

    if (test5 == false) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test6;

    if (test6 == true) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test7 = 3 * 'a';

    if (test7 == true) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Сокращённая проверка на истину ---');
{
    let test = true;

    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Сокращённая проверка на ложь ---');
{
    let test = false;

    if (!test) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Общая сокращённая проверка ---');
{
    let test1 = 3;

    if (test1) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test2 = 'abc';

    if (test2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test3 = '';

    if (test3) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test4 = null;

    if (test4) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test5 = 0;

    if (test5) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test6 = -1;

    if (test6) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Сложные условия сокращённо ---');
{
    let test1 = true;
    let test2 = true;

    if (test1 && test2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    if (test1 || test2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let test3 = false;

    if (test1 && !test3) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let t1 = true, t2 = true, t3 = true;

    if (t1 && t2 && t3) {
        console.log('+++');
    } else {
        console.log('---');
    }

    if (t1 || t2 && t3) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

console.log('--- Необязательность else ---');
{
    let test = 1;

    if (test == 1) {
        console.log('+++');
    }

    let test2 = 10;

    if (test2 == 10) {
        console.log('yes');
    }
}

console.log('--- Необязательность фигурных скобок ---');
{
    let test = 0;

    if (test === 0) console.log('+++'); else console.log('---');

    let test2 = 5;

    if (test2 > 0)
        console.log('больше нуля');
    else
        console.log('не больше нуля');
}

console.log('--- Проблема необязательности скобок ---');
{
    let test = 3;

    if (test > 0)
        console.log(test);
        console.log('+++');

    let test2 = 3;

    if (test2 > 0) {
        console.log(test2);
        console.log('+++');
    }
}

console.log('--- else if ---');
{
    let num = 1;

    if (num == 1) {
        console.log('value1');
    } else if (num == 2) {
        console.log('value2');
    } else if (num == 3) {
        console.log('value3');
    } else {
        console.log('неверное значение переменной num');
    }

    let lang = 'ru';

    if (lang == 'ru') {
        console.log('rus');
    } else if (lang == 'en') {
        console.log('eng');
    } else if (lang == 'de') {
        console.log('deu');
    } else {
        console.log('language not supported');
    }

    let day = 15;

    if (day >= 1 && day <= 10) {
        console.log('первая декада');
    } else if (day >= 11 && day <= 20) {
        console.log('вторая декада');
    } else if (day >= 21 && day <= 31) {
        console.log('третья декада');
    } else {
        console.log('неверный номер дня');
    }
}

console.log('--- Вложенные if-else ---');
{
    let num = 3;

    if (num >= 0) {
        if (num <= 5) {
            console.log('меньше или равно 5');
        } else {
            console.log('больше 5');
        }
    } else {
        console.log('меньше нуля');
    }

    let num2 = 45;

    if (num2 >= 10 && num2 <= 99) {
        let first = Math.floor(num2 / 10);
        let second = num2 % 10;
        let sum = first + second;

        if (sum <= 9) {
            console.log('сумма цифр однозначна');
        } else {
            console.log('сумма цифр двузначна');
        }
    }
}

console.log('--- switch-case ---');
{
    let num = 1;

    switch (num) {
        case 1:
            console.log('value1');
        break;
        case 2:
            console.log('value2');
        break;
        case 3:
            console.log('value3');
        break;
        default:
            console.log('incorrect value');
        break;
    }

    let lang = 'ru';

    switch (lang) {
        case 'ru':
            console.log('rus');
        break;
        case 'en':
            console.log('eng');
        break;
        case 'de':
            console.log('deu');
        break;
        default:
            console.log('language not supported');
        break;
    }
}

console.log('--- Необязательность break ---');
{
    let num = 1;

    switch (num) {
        case 1:
            console.log(1);
        case 2:
            console.log(2);
        case 3:
            console.log(3);
    }

    let num2 = 2;

    switch (num2) {
        case 1:
            console.log(1);
        case 2:
            console.log(2);
        case 3:
            console.log(3);
    }

    let num3 = 3;

    switch (num3) {
        case 1:
            console.log(1);
        case 2:
            console.log(2);
        case 3:
            console.log(3);
    }

    let num4 = 1;
    let res;

    switch (num4) {
        case 1:
        case 2:
            res = 'a';
        break;
        case 3:
            res = 'b';
        break;
    }

    console.log(res);
}

console.log('--- Тернарный оператор ---');
{
    let age = 17;
    let adult = age >= 18 ? true : false;
    console.log(adult);

    let num = 1;
    let res = num >= 0 ? '1' : '2';
    console.log(res);
}

console.log('--- Логические операции вне if ---');
{
    console.log(1 == 1);
    console.log(1 == 2);

    let a = 2 * (3 - 1);
    let b = 6 - 2;

    console.log(a == b);

    let a2 = 5 * (7 - 4);
    let b2 = 1 + 2 + 7;

    console.log(a2 > b2);

    let a3 = 2 ** 4;
    let b3 = 4 ** 2;

    console.log(a3 != b3);
}

console.log('--- Область видимости ---');
{
    let res;

    if (true) {
        res = '!';
    }

    console.log(res);

    let age = 17;
    let adult;

    if (age >= 18) {
        adult = true;
    } else {
        adult = false;
    }

    console.log(adult);
}

console.log('--- Нюансы области видимости ---');
{
    let res = 1;

    if (true) {
        let res = 2;
        console.log(res);
    }

    console.log(res);

    let age = 19;
    let result;

    if (age >= 18) {
        if (age <= 23) {
            result = 'от 18 до 23';
        } else {
            result = 'больше 23';
        }
    } else {
        result = 'меньше 18';
    }

    console.log(result);
}

console.log('--- Части часа ---');
{
    let min = 10;

    if (min >= 0 && min <= 14) {
        console.log('1 четверть');
    }

    if (min >= 15 && min <= 29) {
        console.log('2 четверть');
    }

    if (min >= 30 && min <= 44) {
        console.log('3 четверть');
    }

    if (min >= 45 && min <= 59) {
        console.log('4 четверть');
    }

    let min2 = 25;

    if (min2 >= 0 && min2 <= 19) {
        console.log('1 треть');
    }

    if (min2 >= 20 && min2 <= 39) {
        console.log('2 треть');
    }

    if (min2 >= 40 && min2 <= 59) {
        console.log('3 треть');
    }
}

console.log('--- Длина строк и массивов ---');
{
    let str = '12345';

    if (str.length >= 3) {
        console.log('!');
    }

    let arr = [1, 2, 3];

    if (arr.length === 3) {
        console.log(arr[0] + arr[1] + arr[2]);
    }
}

console.log('--- Символы строки ---');
{
    let str = '12345';

    if (str[0] == 1) {
        console.log('!');
    }

    let last = str[str.length - 1];

    if (last == 5) {
        console.log('!');
    }

    let word = 'apple';

    if (word[0] === 'a') {
        console.log('начинается на a');
    }

    if (word[word.length - 1] === 'x') {
        console.log('заканчивается на x');
    } else {
        console.log('не заканчивается на x');
    }

    if (word[0] === 'a' || word[0] === 'b') {
        console.log('начинается на a или b');
    }
}

console.log('--- Цифры числа ---');
{
    let num = 12345;
    let first = String(num)[0];

    if (first == 1 || first == 2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num2 = 12340;
    let str2 = String(num2);
    let lastDigit = str2[str2.length - 1];

    if (lastDigit === '0') {
        console.log('последняя цифра 0');
    } else {
        console.log('последняя цифра не 0');
    }

    let num3 = 12346;
    let last3 = String(num3)[String(num3).length - 1];
    let even = ['0', '2', '4', '6', '8'];

    if (even.includes(last3)) {
        console.log('чётное');
    } else {
        console.log('нечётное');
    }
}

console.log('--- Остаток от деления ---');
{
    let a = 10;
    let b = 3;
    let rest = a % b;

    if (rest === 0) {
        console.log('делится нацело');
    } else {
        console.log('делится с остатком ' + rest);
    }

    let n1 = 8;

    if (n1 % 2 === 0) {
        console.log('чётное');
    } else {
        console.log('нечётное');
    }

    let n2 = 9;

    if (n2 % 3 === 0) {
        console.log('делится на 3');
    } else {
        console.log('не делится на 3');
    }
}

console.log('--- Поиск ошибок ---');
{
    let num1 = 1;
    let num2 = 2;

    if (num1 + num2 === 3) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let s1 = '1';
    let s2 = '2';

    if (Number(s1) + Number(s2) === 3) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num = 123;
    let first = String(num)[0];

    if (first === '1') {
        console.log('+++');
    } else {
        console.log('---');
    }

    let numTwo = 12;
    let strNum = String(numTwo);

    if (strNum.length === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let six = '123033';
    let sum1 = Number(six[0]) + Number(six[1]) + Number(six[2]);
    let sum2 = Number(six[3]) + Number(six[4]) + Number(six[5]);

    if (sum1 == sum2) {
        console.log('суммы равны');
    } else {
        console.log('суммы не равны');
    }
}

console.log('--- Практика ---');
{
    let month = 5;

    if (month >= 3 && month <= 5) {
        console.log('весна');
    } else if (month >= 6 && month <= 8) {
        console.log('лето');
    } else if (month >= 9 && month <= 11) {
        console.log('осень');
    } else if (month === 12 || month === 1 || month === 2) {
        console.log('зима');
    } else {
        console.log('неверный номер месяца');
    }

    let str = 'abcde';

    if (str[0] === 'a') {
        console.log('первый символ a');
    } else {
        console.log('первый символ не a');
    }

    let num = 12345;
    let first = String(num)[0];

    if (first === '1' || first === '2' || first === '3') {
        console.log('первая цифра 1, 2 или 3');
    } else {
        console.log('первая цифра не 1, 2, 3');
    }

    let three = 456;
    let s = String(three);
    let sum = Number(s[0]) + Number(s[1]) + Number(s[2]);
    console.log('сумма цифр 456 =', sum);

    let six = '123321';
    let sum1 = Number(six[0]) + Number(six[1]) + Number(six[2]);
    let sum2 = Number(six[3]) + Number(six[4]) + Number(six[5]);

    if (sum1 === sum2) {
        console.log('суммы первых и вторых трёх цифр равны');
    } else {
        console.log('суммы первых и вторых трёх цифр не равны');
    }
}

console.log('--- Все задания выполнены ---');