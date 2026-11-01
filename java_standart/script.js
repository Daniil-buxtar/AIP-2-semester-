// ============================================================
// 1. Экстремальные числа (Math.max / Math.min)
// ============================================================
console.log('--- Экстремальные числа ---');
{
    let max = Math.max(4, -2, 5, 19, -130, 0, 10);
    let min = Math.min(4, -2, 5, 19, -130, 0, 10);
    console.log('max =', max);
    console.log('min =', min);
}

// ============================================================
// 2. Степень и корень (Math.pow / Math.sqrt)
// ============================================================
console.log('--- Степень и корень ---');
{
    console.log('2^10 =', Math.pow(2, 10));
    console.log('sqrt(245) =', Math.sqrt(245));

    let arr = [4, 2, 5, 19, 13, 0, 10];
    let sumCubes = 0;
    for (let i = 0; i < arr.length; i++) {
        sumCubes += Math.pow(arr[i], 3);
    }
    console.log('sqrt(суммы кубов) =', Math.sqrt(sumCubes));
}

// ============================================================
// 3. Округление (Math.round / ceil / floor / toFixed)
// ============================================================
console.log('--- Округление ---');
{
    let sqrt379 = Math.sqrt(379);
    console.log('round:', Math.round(sqrt379));
    console.log('toFixed(1):', sqrt379.toFixed(1));
    console.log('toFixed(2):', sqrt379.toFixed(2));

    let sqrt587 = Math.sqrt(587);
    let result = {
        floor: Math.floor(sqrt587),
        ceil: Math.ceil(sqrt587)
    };
    console.log(result);
}

// ============================================================
// 4. Рандом (Math.random)
// ============================================================
console.log('--- Рандом ---');
{
    let randomInt = Math.floor(Math.random() * 100) + 1;
    console.log('случайное от 1 до 100:', randomInt);

    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log('массив из 10 случайных:', arr);
}

// ============================================================
// 5. Модуль (Math.abs)
// ============================================================
console.log('--- Модуль ---');
{
    let a = 5;
    let b = 12;
    console.log('|a - b| =', Math.abs(a - b));

    a = -3;
    b = 7;
    console.log('|a - b| =', Math.abs(a - b));
}

// ============================================================
// 6. Регистр символов (toUpperCase / toLowerCase)
// ============================================================
console.log('--- Регистр символов ---');
{
    let lower = 'js';
    console.log(lower.toUpperCase());

    let upper = 'JS';
    console.log(upper.toLowerCase());
}

// ============================================================
// 7. Вырезание строк (substr / substring / slice)
// ============================================================
console.log('--- Вырезание строк ---');
{
    let str = 'i study javascript';

    console.log('substr study:', str.substr(2, 5));
    console.log('substr javascript:', str.substr(8));

    console.log('substring study:', str.substring(2, 7));
    console.log('substring javascript:', str.substring(8));

    console.log('slice study:', str.slice(2, 7));
    console.log('slice javascript:', str.slice(8));
}

// ============================================================
// 8. Поиск по строкам (includes / startsWith / endsWith)
// ============================================================
console.log('--- Поиск по строкам ---');
{
    let url = 'http://example.com/page.html';
    console.log('начинается на http://:', url.startsWith('http://'));
    console.log('заканчивается на .html:', url.endsWith('.html'));

    let url2 = 'https://site.org';
    console.log('url2 начинается на http://:', url2.startsWith('http://'));
}

// ============================================================
// 9. Замена частей строки (replace)
// ============================================================
console.log('--- Замена частей строки ---');
{
    let str = '1-2-3-4-5';
    let replaced = str.replace(/-/g, '.');
    console.log(replaced);
}

// ============================================================
// 10. Разбиение строк (split / join)
// ============================================================
console.log('--- Разбиение строк ---');
{
    let str1 = '1-2-3-4-5';
    let arr1 = str1.split('-');
    console.log(arr1);

    let str2 = '12345';
    let arr2 = str2.split('');
    console.log(arr2);

    let arr3 = [1, 2, 3, 4, 5];
    let str3 = arr3.join('-');
    console.log(str3);
}

// ============================================================
// 11. Граничные элементы массива (shift / pop / push / unshift)
// ============================================================
console.log('--- Граничные элементы массива ---');
{
    let arr1 = [1, 2, 3];
    console.log('первый:', arr1[0]);

    let arr2 = [1, 2, 3];
    console.log('последний:', arr2[arr2.length - 1]);

    let arr3 = [1, 2, 3];
    arr3.push(4, 5, 6);
    console.log('после push:', arr3);

    let arr4 = [1, 2, 3];
    arr4.unshift(4, 5, 6);
    console.log('после unshift:', arr4);
}

// ============================================================
// 12. Части массива (slice)
// ============================================================
console.log('--- Части массива (slice) ---');
{
    let arr1 = [1, 2, 3, 4, 5];
    console.log('первые три:', arr1.slice(0, 3));

    let arr2 = [1, 2, 3, 4, 5];
    let last = arr2.slice(3);
    console.log('последние два:', last);
}

// ============================================================
// 13. Вырезание массивов (splice)
// ============================================================
console.log('--- Вырезание массивов (splice) ---');
{
    let arr1 = [1, 2, 3, 4, 5];
    arr1.splice(1, 2);
    console.log('[1, 4, 5]:', arr1);

    let arr2 = [1, 2, 3, 4, 5];
    arr2.splice(3, 0, 'a', 'b', 'c');
    console.log("[1,2,3,'a','b','c',4,5]:", arr2);

    let arr3 = [1, 2, 3, 4, 5];
    arr3.splice(1, 0, 'a', 'b');
    arr3.splice(6, 0, 'c');
    arr3.splice(arr3.length, 0, 'e');
    console.log("[1,'a','b',2,3,4,'c',5,'e']:", arr3);
}

// ============================================================
// 14. Поиск по массивам (includes / indexOf / find)
// ============================================================
console.log('--- Поиск по массивам ---');
{
    let arr = [1, 2, 3, 4, 5];
    console.log('includes(3):', arr.includes(3));
    console.log('indexOf(3):', arr.indexOf(3));

    let found = arr.find(function (el) {
        return el === 3;
    });
    console.log('find(3):', found);
}

// ============================================================
// 15. Массив ключей объекта (Object.keys)
// ============================================================
console.log('--- Object.keys ---');
{
    let obj = { a: 1, b: 2, c: 3 };
    let keys = Object.keys(obj);
    console.log(keys);
}

// ============================================================
// 16. Поиск ошибок (исправленные версии)
// ============================================================
console.log('--- Поиск ошибок ---');
{
    let num = 12345;
    let arr = String(num).split('');

    let sum = 0;
    for (let digit of arr) {
        sum += Number(digit);
    }
    console.log('сумма цифр 12345 =', sum);

    let num2 = 12345;
    let arr2 = String(num2).split('');

    let prod = 1;
    for (let digit of arr2) {
        prod *= Number(digit);
    }
    console.log('произведение цифр 12345 =', prod);
}

// ============================================================
// 17. Практика на условия (для закрепления)
// ============================================================
console.log('--- Практика на условия ---');
{
    let min = 10;
    if (min >= 0 && min <= 19) console.log('1 треть');
    if (min >= 20 && min <= 39) console.log('2 треть');
    if (min >= 40 && min <= 59) console.log('3 треть');

    let str = '12345';
    if (str.length >= 3) console.log('длина строки >= 3');

    let arr = [1, 2, 3];
    if (arr.length === 3) {
        console.log('сумма массива:', arr[0] + arr[1] + arr[2]);
    }

    let num3 = 12345;
    let first = String(num3)[0];
    if (first == 1 || first == 2) console.log('первая цифра 1 или 2');

    let a = 10;
    let b = 3;
    let rest = a % b;
    if (rest === 0) {
        console.log('делится нацело');
    } else {
        console.log('делится с остатком ' + rest);
    }
}

console.log('--- Все задания выполнены ---');