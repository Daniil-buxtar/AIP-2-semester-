// ============================================================
// 1. Основы функций (intro)
// ============================================================
console.log('--- Основы функций ---');
{
    function showName() {
        console.log('Дмитрий');
    }
    showName();

    function showSum1to100() {
        let sum = 0;
        for (let i = 1; i <= 100; i++) {
            sum += i;
        }
        console.log('Сумма 1..100 =', sum);
    }
    showSum1to100();
}

// ============================================================
// 2. Параметры функций
// ============================================================
console.log('--- Параметры функций ---');
{
    function cube(num) {
        console.log('куб:', num ** 3);
    }
    cube(2);
    cube(3);

    function checkSign(num) {
        if (num >= 0) {
            console.log('+++');
        } else {
            console.log('---');
        }
    }
    checkSign(5);
    checkSign(-5);
}

// ============================================================
// 3. Несколько параметров
// ============================================================
console.log('--- Несколько параметров ---');
{
    function sum3(a, b, c) {
        console.log('сумма:', a + b + c);
    }
    sum3(1, 2, 3);
}

// ============================================================
// 4. Параметры-переменные
// ============================================================
console.log('--- Параметры-переменные ---');
{
    function func(a, b, c) {
        console.log('сумма переменных:', a + b + c);
    }

    let param1 = 1;
    let param2 = 2;
    let param3 = 3;
    func(param1, param2, param3);
}

// ============================================================
// 5. Необязательные параметры
// ============================================================
console.log('--- Необязательные параметры ---');
{
    function func1(num = 5) {
        console.log('func1:', num * num);
    }
    func1(2);
    func1(3);
    func1();

    function func2(num1 = 0, num2 = 0) {
        console.log('func2:', num1 + num2);
    }
    func2(2, 3);
    func2(3);
    func2();
}

// ============================================================
// 6. return
// ============================================================
console.log('--- return ---');
{
    function cube(num) {
        return num ** 3;
    }
    let res = cube(3);
    console.log('куб 3 =', res);

    function sqrt(num) {
        return Math.sqrt(num);
    }
    let res2 = sqrt(3) + sqrt(4);
    console.log('sqrt(3) + sqrt(4) =', res2);
}

// ============================================================
// 7. Последовательный вызов функций
// ============================================================
console.log('--- Последовательный вызов ---');
{
    function sqrt(num) {
        return Math.sqrt(num);
    }
    function round(num) {
        return num.toFixed(3);
    }
    console.log('sqrt(2) с округлением:', round(sqrt(2)));

    function sum(num1, num2, num3) {
        return num1 + num2 + num3;
    }
    let res = sum(sqrt(2), sqrt(3), sqrt(4));
    console.log('сумма корней:', res);
    console.log('округлённая сумма корней:', round(res));

    function square(num) {
        return num ** 2;
    }
    function cube(num) {
        return num ** 3;
    }
    console.log('cube(square(2)) =', cube(square(2)));
}

// ============================================================
// 8. Тонкое место return
// ============================================================
console.log('--- Тонкое место return ---');
{
    function func(num) {
        return num;
        let res = num ** 2;
        return res;
    }
    console.log('func(3) =', func(3));

    function func2(num) {
        if (num <= 0) {
            return Math.abs(num);
        } else {
            return num ** 2;
        }
    }
    console.log('func2(10) =', func2(10));
    console.log('func2(-5) =', func2(-5));

    function func3(num) {
        if (num <= 0) {
            return Math.abs(num);
        }
        return num ** 2;
    }
    console.log('func3(10) =', func3(10));
    console.log('func3(-5) =', func3(-5));
}

// ============================================================
// 9. return в цикле
// ============================================================
console.log('--- return в цикле ---');
{
    function func(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
        }
        return sum;
    }
    console.log('func(5) =', func(5));

    function brokenFunc(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
            return sum;
        }
    }
    console.log('brokenFunc(5) =', brokenFunc(5));
}

// ============================================================
// 10. Применение return в циклах
// ============================================================
console.log('--- Применение return в циклах ---');
{
    function countUntil10(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (sum >= 10) {
                return i + 1;
            }
        }
    }
    console.log('countUntil10([1,2,3,4,5]) =', countUntil10([1, 2, 3, 4, 5]));

    function countUntil100() {
        let sum = 0;
        let i = 1;
        while (true) {
            sum += i;
            if (sum >= 100) {
                return i;
            }
            i++;
        }
    }
    console.log('countUntil100() =', countUntil100());

    function divideBy2(num) {
        let count = 0;
        while (num >= 10) {
            num = num / 2;
            count++;
        }
        return count;
    }
    console.log('divideBy2(100) =', divideBy2(100));
}

// ============================================================
// 11. Приём работы с return
// ============================================================
console.log('--- Приём работы с return ---');
{
    function func(num) {
        if (num >= 0) {
            return Math.sqrt(num);
        } else {
            return 0;
        }
    }
    console.log('func(3) =', func(3));

    function func2(num1, num2) {
        if (num1 > 0 && num2 > 0) {
            return num1 * num2;
        } else {
            return num1 - num2;
        }
    }
    console.log('func2(3, 4) =', func2(3, 4));
}

// ============================================================
// 12. Флаги в функциях
// ============================================================
console.log('--- Флаги в функциях ---');
{
    function isPositive(arr) {
        for (let elem of arr) {
            if (elem < 0) {
                return false;
            }
        }
        return true;
    }
    console.log('isPositive([1,2,3]) =', isPositive([1, 2, 3]));
    console.log('isPositive([1,-2,3]) =', isPositive([1, -2, 3]));

    function isAllEven(arr) {
        for (let elem of arr) {
            if (elem % 2 !== 0) return false;
        }
        return true;
    }
    console.log('isAllEven([2,4,6]) =', isAllEven([2, 4, 6]));
    console.log('isAllEven([2,3,6]) =', isAllEven([2, 3, 6]));

    function isAllDigitsOdd(num) {
        let str = String(num);
        for (let digit of str) {
            if (Number(digit) % 2 === 0) return false;
        }
        return true;
    }
    console.log('isAllDigitsOdd(135) =', isAllDigitsOdd(135));
    console.log('isAllDigitsOdd(132) =', isAllDigitsOdd(132));

    function hasAdjacentDuplicates(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) return true;
        }
        return false;
    }
    console.log('hasAdjacentDuplicates([1,2,2,3]) =', hasAdjacentDuplicates([1, 2, 2, 3]));
    console.log('hasAdjacentDuplicates([1,2,3]) =', hasAdjacentDuplicates([1, 2, 3]));
}

// ============================================================
// 13. Логические операторы без if
// ============================================================
console.log('--- Логические операторы без if ---');
{
    function isEqual(a, b) { return a == b; }
    function isNotEqual(a, b) { return a != b; }
    function isSumBig(a, b) { return a + b >= 10; }
    function isPositive(num) { return num >= 0; }

    console.log('isEqual(2,2) =', isEqual(2, 2));
    console.log('isNotEqual(2,3) =', isNotEqual(2, 3));
    console.log('isSumBig(5,6) =', isSumBig(5, 6));
    console.log('isPositive(-1) =', isPositive(-1));
}

// ============================================================
// 14. Советы по функциям (исправления)
// ============================================================
console.log('--- Советы по функциям ---');
{
    function getAverage(arr) {
        let res = 0;
        for (let elem of arr) {
            res += elem;
        }
        return res / arr.length;
    }
    console.log('getAverage([1,2,3]) =', getAverage([1, 2, 3]));

    function getSum(arr) {
        let res = 0;
        for (let elem of arr) {
            res += elem;
        }
        return res;
    }
    function getRatio(arr1, arr2) {
        return getSum(arr1) / getSum(arr2);
    }
    console.log('getRatio([1,2,3], [4,5,6]) =', getRatio([1, 2, 3], [4, 5, 6]));

    function getProduct(arr) {
        let res = 1;
        for (let elem of arr) {
            res *= elem;
        }
        return res;
    }
    console.log('getProduct([2,3,4]) =', getProduct([2, 3, 4]));
}

// ============================================================
// 15. Поиск ошибок в функциях (исправленные версии)
// ============================================================
console.log('--- Поиск ошибок ---');
{
    function func1() { return 3; }
    function func2() { return 5; }
    console.log('func1() + func2() =', func1() + func2());

    function sum(arr) {
        let res = 0;
        for (let elem of arr) {
            res += elem;
        }
        return res;
    }
    console.log('sum([1,2,3,4,5]) =', sum([1, 2, 3, 4, 5]));

    let arr = [1, 2, 3, 4, 5];
    function funcPrint(arr) {
        let res = 0;
        for (let elem of arr) {
            res += elem;
        }
        console.log('сумма:', res);
    }
    funcPrint(arr);

    let sumResult = sum([1, 2, 3, 4, 5]);
    console.log('sum результат:', sumResult);

    function add(num) {
        if (num <= 9) {
            return '0' + num;
        }
        return String(num);
    }
    console.log('add(5) =', add(5));
    console.log('add(15) =', add(15));

    function getDigitsSum(num) {
        let arr2 = String(num).split('');
        let sum2 = 0;
        for (let elem of arr2) {
            sum2 += Number(elem);
        }
        return sum2;
    }
    console.log('getDigitsSum(12345) =', getDigitsSum(12345));

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    console.log('isPrime(13) =', isPrime(13));
    console.log('isPrime(15) =', isPrime(15));
}

// ============================================================
// 16. Практика на функции
// ============================================================
console.log('--- Практика на функции ---');
{
    function getDivisors(num) {
        let res = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) res.push(i);
        }
        return res;
    }
    console.log('делители 12:', getDivisors(12));

    function getCommonDivisors(a, b) {
        let res = [];
        for (let i = 1; i <= Math.min(a, b); i++) {
            if (a % i === 0 && b % i === 0) res.push(i);
        }
        return res;
    }
    console.log('общие делители 12 и 18:', getCommonDivisors(12, 18));

    function getDigitsSum(num) {
        let sum = 0;
        for (let digit of String(num)) {
            sum += Number(digit);
        }
        return sum;
    }
    console.log('сумма цифр 12345 =', getDigitsSum(12345));

    function getWeekDay() {
        let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        return days[new Date().getDay()];
    }
    console.log('сегодня:', getWeekDay());

    function getWeekDayByDate(date) {
        let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        return days[date.getDay()];
    }
    console.log('день недели 2025-01-01:', getWeekDayByDate(new Date(2025, 0, 1)));

    function secondsToDays(seconds) {
        return Math.floor(seconds / 86400);
    }
    console.log('секунд в сутках (200000):', secondsToDays(200000));

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
    console.log('2024 високосный:', isLeapYear(2024));
    console.log('2023 високосный:', isLeapYear(2023));

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    console.log('17 простое:', isPrime(17));
    console.log('18 простое:', isPrime(18));
}

console.log('--- Все задания выполнены ---');