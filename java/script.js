console.log('--- for-of: перебор массива ---');
{
    let arr = ['a', 'b', 'c', 'd', 'e'];

    for (let elem of arr) {
        console.log(elem);
    }
}

console.log('--- for-in: перебор объекта ---');
{
    let obj = {x: 1, y: 2, z: 3};

    for (let key in obj) {
        console.log(key);
    }

    for (let key in obj) {
        console.log(obj[key]);
    }
}

console.log('--- for: числа от 1 до 100 ---');
{
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

console.log('--- for: числа от 11 до 33 ---');
{
    for (let i = 11; i <= 33; i++) {
        console.log(i);
    }
}

console.log('--- for: четные от 0 до 100 ---');
{
    for (let i = 0; i <= 100; i += 2) {
        console.log(i);
    }
}

console.log('--- for: нечетные от 1 до 99 ---');
{
    for (let i = 1; i <= 99; i += 2) {
        console.log(i);
    }
}

console.log('--- for: числа от 100 до 0 ---');
{
    for (let i = 100; i >= 0; i--) {
        console.log(i);
    }
}

console.log('--- for по массиву ---');
{
    let arr = ['a', 'b', 'c', 'd', 'e'];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0 && i !== arr.length - 1) {
            console.log(arr[i]);
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

console.log('--- условия в циклах ---');
{
    let arr = [2, 5, 9, 15, 1, 4];

    for (let elem of arr) {
        if (elem > 3 && elem < 10) {
            console.log(elem);
        }
    }

    let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
            console.log(obj[key]);
        }
    }
}

console.log('--- накопление чисел ---');
{
    let res = 0;

    for (let i = 1; i <= 100; i++) {
        res += i;
    }
    console.log('сумма 1..100 =', res);

    let even = 0;
    for (let i = 2; i <= 100; i += 2) {
        even += i;
    }
    console.log('сумма чётных 2..100 =', even);

    let odd = 0;
    for (let i = 1; i <= 99; i += 2) {
        odd += i;
    }
    console.log('сумма нечётных 1..99 =', odd);

    let prod = 1;
    for (let i = 1; i <= 20; i++) {
        prod *= i;
    }
    console.log('произведение 1..20 =', prod);
}

console.log('--- накопление элементов массива ---');
{
    let arr = [2, 5, 9, 3, 1, 4];
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }
    console.log('сумма =', sum);

    let evenSum = 0;
    for (let elem of arr) {
        if (elem % 2 === 0) {
            evenSum += elem;
        }
    }
    console.log('сумма чётных =', evenSum);

    let sqSum = 0;
    for (let elem of arr) {
        sqSum += elem * elem;
    }
    console.log('сумма квадратов =', sqSum);

    let prod = 1;
    for (let elem of arr) {
        prod *= elem;
    }
    console.log('произведение =', prod);
}

console.log('--- формирование строк ---');
{
    let str = '';
    for (let i = 0; i < 5; i++) {
        str += '-';
    }
    console.log(str);

    let str2 = '';
    for (let i = 1; i <= 9; i++) {
        str2 += i;
    }
    console.log(str2);

    let str3 = '';
    for (let i = 9; i >= 1; i--) {
        str3 += i;
    }
    console.log(str3);

    let str4 = '';
    for (let i = 1; i <= 9; i++) {
        str4 += '-' + i;
    }
    str4 += '-';
    console.log(str4);
}

console.log('--- цифры числа в цикле ---');
{
    for (let i = 10; i <= 1000; i++) {
        console.log(String(i)[0]);
    }

    for (let i = 10; i <= 1000; i++) {
        let str = String(i);
        console.log(+str[0] + +str[1]);
    }

    for (let i = 10; i <= 1000; i++) {
        if (String(i)[0] === '1') {
            console.log(i);
        }
    }

    for (let i = 10; i <= 1000; i++) {
        let str = String(i);
        if (+str[0] + +str[1] === 5) {
            console.log(i);
        }
    }
}

console.log('--- while ---');
{
    let i = 1;
    while (i <= 100) {
        console.log(i);
        i++;
    }

    let j = 11;
    while (j <= 33) {
        console.log(j);
        j++;
    }

    let k = 100;
    while (k >= 1) {
        console.log(k);
        k--;
    }

    let num = 2;
    let count = 0;
    while (num <= 1000) {
        num = num * 3;
        count++;
    }
    console.log('число =', num, 'итераций =', count);
}

console.log('--- необязательность скобок ---');
{
    let arr = [1, 2, 3, 4, 5];

    for (let elem of arr)
        console.log(elem);
}

console.log('--- проблема необязательности скобок ---');
{
    let arr = [1, 2, 3, 4, 5];
    let elem;

    for (elem of arr);
    console.log('elem после цикла с ; =', elem);
}

console.log('--- break ---');
{
    let arr = [1, 2, 3, 4, 5];

    for (let elem of arr) {
        if (elem === 3) {
            console.log('есть');
            break;
        }
    }

    let arr2 = [1, 2, 3, 0, 5];
    for (let elem of arr2) {
        if (elem === 0) {
            break;
        }
        console.log(elem);
    }

    let arr3 = [1, 2, 3, -1, 5];
    let sum = 0;
    for (let elem of arr3) {
        if (elem < 0) {
            break;
        }
        sum += elem;
    }
    console.log('сумма до первого отрицательного =', sum);

    let arr4 = [1, 2, 3, 4, 5];
    let pos = -1;
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i] === 3) {
            pos = i;
            break;
        }
    }
    console.log('позиция первого 3 =', pos);

    let total = 0;
    let n = 0;
    while (total <= 100) {
        n++;
        total += n;
    }
    console.log('нужно сложить', n, 'чисел, сумма =', total);
}

console.log('--- continue ---');
{
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        console.log(i);
    }
}

console.log('--- вложенные циклы ---');
{
    let str = '';
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 3; j++) {
            str += i;
        }
    }
    console.log(str);

    let str2 = '';
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            str2 += '' + i + j + ' ';
        }
    }
    console.log(str2);
}

console.log('--- вложенные циклы и область видимости ---');
{
    for (let i = 0; i <= 9; i++) {
        let num = 3;

        for (let j = 0; j <= 9; j++) {
            console.log(num);
        }
    }
}

console.log('--- область видимости в циклах ---');
{
    let num;

    for (let i = 1; i <= 9; i++) {
        num = 3;
    }

    console.log(num);
}

console.log('--- заполнение массива ---');
{
    let arr = [];

    for (let i = 1; i <= 10; i++) {
        arr.push(i);
    }
    console.log(arr);

    let arr2 = [];

    for (let i = 1; i <= 10; i++) {
        arr2.push('x');
    }
    console.log(arr2);

    let src = [1, -2, 3, -4, 5];
    let positive = [];

    for (let elem of src) {
        if (elem > 0) {
            positive.push(elem);
        }
    }
    console.log(positive);
}

console.log('--- изменение массива ---');
{
    let arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);

    let arr2 = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = arr2[i] - 1;
    }
    console.log(arr2);

    let arr3 = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr3.length; i++) {
        arr3[i] = arr3[i] + 10;
    }
    console.log(arr3);
}

console.log('--- заполнение объекта ---');
{
    let keys = ['a', 'b', 'c', 'd', 'e'];
    let values = [1, 2, 3, 4, 5];
    let obj = {};

    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }
    console.log(obj);

    let obj2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
    let evenObj = {};

    for (let key in obj2) {
        if (obj2[key] % 2 === 0) {
            evenObj[key] = obj2[key];
        }
    }
    console.log(evenObj);

    let swapped = {};

    for (let key in obj2) {
        swapped[obj2[key]] = key;
    }
    console.log(swapped);
}

console.log('--- изменение объекта ---');
{
    let obj = {x: 1, y: 2, z: 3};

    for (let key in obj) {
        obj[key] = obj[key] * obj[key];
    }
    console.log(obj);

    let obj2 = {x: 1, y: 2, z: 3};

    for (let key in obj2) {
        obj2[key] = obj2[key] + 1;
    }
    console.log(obj2);
}

console.log('--- флаги ---');
{
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let flag = false;

    for (let elem of arr) {
        if (elem === 'c') {
            flag = true;
            break;
        }
    }

    if (flag === true) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let num = 17;
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(num, 'простое?', isPrime);
}

console.log('--- поиск ошибок ---');
{
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }

    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }

    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }

    let res = 0;
    for (let j = 1; j <= 10; j++) {
        res += j;
    }
    console.log('сумма 1..10 =', res);

    let prod = 1;
    for (let j = 1; j <= 10; j++) {
        prod *= j;
    }
    console.log('произведение 1..10 =', prod);

    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;
    for (let elem of arr) {
        sum += +elem;
    }
    console.log('сумма элементов массива =', sum);

    let sum2 = 0;
    for (let k = 0; k < arr.length; k++) {
        sum2 += +arr[k];
    }
    console.log('сумма через for =', sum2);

    let sum3 = 0;
    for (let k = 0; k < arr.length; k++) {
        sum3 += +arr[k];
    }
    console.log('сумма через for (второй) =', sum3);

    let src = [1, 2, 3, 4, 5];
    for (let k = 0; k < src.length; k++) {
        src[k] = src[k] ** 2;
    }
    console.log(src);

    let filled = [];
    for (let k = 1; k <= 5; k++) {
        filled.push(k);
    }
    console.log(filled);

    let obj = {a: 1, b: 2, c: 3};
    let objSum = 0;
    for (let key in obj) {
        objSum += obj[key];
    }
    console.log('сумма объекта =', objSum);

    let objSum2 = 0;
    for (let key in obj) {
        objSum2 += obj[key];
    }
    console.log('сумма объекта (второй) =', objSum2);

    let arr3 = [1, 2, 3, 4, 5];
    let found = false;
    for (let elem of arr3) {
        if (elem === 3) {
            found = true;
            break;
        }
    }
    console.log('есть 3?', found);

    let arr4 = [1, 2, 3, 4, 5];
    for (let elem of arr4) {
        if (elem % 2 === 0) {
            console.log(elem);
        }
    }

    let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let odd = [];
    for (let elem of arr5) {
        if (elem % 2 !== 0) {
            odd.push(elem);
        }
    }
    console.log(odd);
}

console.log('--- практика: вывод чисел и работа с массивами ---');
{
    let col = [];
    for (let i = 1; i <= 100; i++) {
        col.push(i);
    }
    console.log('столбец 1..100 — длина', col.length);

    let arr = [10, 20, 30, 50, 235, 3000];
    for (let elem of arr) {
        let first = String(elem)[0];
        if (first === '1' || first === '2' || first === '5') {
            console.log(elem);
        }
    }

    let arr2 = [1, 2, 3, 4, 5];
    for (let i = arr2.length - 1; i >= 0; i--) {
        console.log(arr2[i]);
    }

    let arr3 = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] === i) {
            console.log(arr3[i]);
        }
    }

    let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    let currentDay = 3;
    for (let i = 0; i < days.length; i++) {
        if (i === 5 || i === 6) {
            console.log('**' + days[i] + '**');
        } else if (i === currentDay) {
            console.log('*' + days[i] + '*');
        } else {
            console.log(days[i]);
        }
    }
}

console.log('--- практика: объекты ---');
{
    let workers = {
        employee1: 100,
        employee2: 200,
        employee3: 300,
        employee4: 400,
        employee5: 500,
        employee6: 600,
        employee7: 700
    };

    for (let key in workers) {
        workers[key] = workers[key] * 1.1;
    }
    console.log(workers);

    let workers2 = {
        employee1: 100,
        employee2: 200,
        employee3: 300,
        employee4: 400,
        employee5: 500,
        employee6: 600,
        employee7: 700
    };

    for (let key in workers2) {
        if (workers2[key] <= 400) {
            workers2[key] = workers2[key] * 1.1;
        }
    }
    console.log(workers2);

    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10];
    let obj = {};

    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr2[i];
    }
    console.log(obj);

    let obj2 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
    let keySum = 0;
    let valueSum = 0;

    for (let key in obj2) {
        keySum += +key;
        valueSum += obj2[key];
    }
    console.log('сумма ключей / сумма значений =', keySum / valueSum);

    let obj3 = {a: 1, b: 2, c: 3, d: 4, e: 5};
    let keys = [];
    let values = [];

    for (let key in obj3) {
        keys.push(key);
        values.push(obj3[key]);
    }
    console.log(keys, values);

    let obj4 = {
        1: 125,
        2: 225,
        3: 128,
        4: 356,
        5: 145,
        6: 281,
        7: 452
    };
    let result = [];

    for (let key in obj4) {
        let first = String(obj4[key])[0];
        if (first === '1' || first === '2') {
            result.push(obj4[key]);
        }
    }
    console.log(result);

    let arrA = ['a', 'b', 'c', 'd', 'e'];
    let objA = {};
    for (let i = 0; i < arrA.length; i++) {
        objA[i + 1] = arrA[i];
    }
    console.log(objA);

    let objB = {};
    for (let i = 0; i < arrA.length; i++) {
        objB[arrA[i]] = i + 1;
    }
    console.log(objB);
}

console.log('--- советы по написанию кода ---');
{
    let arr = [10, 20, 30, 40, 21, 32, 51];
    let sum = 0;

    for (let elem of arr) {
        let first = String(elem)[0];
        if (first === '1' || first === '2') {
            sum += elem;
        }
    }
    console.log('сумма =', sum);
}

console.log('--- советы по отладке ---');
{
    let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
    let sum = 0;

    for (let key in obj) {
        let val = String(obj[key]);
        if (val[0] === '1' || val[0] === '2') {
            sum += obj[key];
        }
    }
    console.log(sum);
}

console.log('--- Все задания выполнены ---');