"use strict";

let obj1 = {1: 'a', 2: 'b', 3: 'c'};
console.log(obj1[1]);
console.log(obj1[2]);
console.log(obj1[3]);

let days = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
};
console.log(days);

let months = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь'
};
console.log(months);

let user = {
    name: 'Иван',
    surname: 'Иванов',
    patronymic: 'Иванович'
};
console.log(user.surname + ' ' + user.name + ' ' + user.patronymic);

let date = {
    year: 2025,
    month: 10,
    day: 5
};
console.log(date.year + '-' + date.month + '-' + date.day);

let obj2 = {x: 1, y: 2, z: 3};
let keys2 = Object.keys(obj2);
console.log(keys2);

let obj3 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj3).length);

let obj4 = {x: 1, y: 2, z: 3};
let key4 = 'x';
console.log(obj4[key4]);

let obj5 = {
    '1a': 1,
    'b2': 2,
    'c-c': 3,
    'd 4': 4,
    'e5': 5
};

let obj6 = {
    '1a': 1,
    'b2': 2,
    'c-c': 3,
    'd 4': 4,
    'e5': 5
};
console.log(obj6['1a']);
console.log(obj6['b2']);
console.log(obj6['c-c']);
console.log(obj6['d 4']);
console.log(obj6['e5']);

let obj7 = {a: 1, b: 2, c: 3};
delete obj7.b;
console.log(obj7);

let obj8 = {x: 1, y: 2, z: 3};
delete obj8.x;
console.log('x' in obj8);

let obj9 = {x: 1, y: 2, z: 3};
console.log('x' in obj9);
console.log('w' in obj9);

let obj10 = {a: 1, b: 2, c: 3};
console.log(typeof obj10);

let test1 = {x: 1, y: 2, z: 3};
console.log(typeof test1);

let test2 = {x: 1, y: 2, z: 3};
console.log(typeof test2.x);

let test3 = {x: 1, y: 2, z: 3};
console.log(test3);

let test4 = {x: 1, y: 2, z: 3};
console.log(test4.x);

let test5 = [1, 2, 3];
console.log(test5);

let test6 = [1, 2, 3];
console.log(test6[1]);

let test7 = [1, 2, 3];
let test8 = 1;
console.log(test7);

let test9 = [1, 2, 3];
let test10 = 1;
console.log(test9[test10]);

console.log(typeof {x: 1, y: 2, z: 3});
console.log(typeof {});
console.log(typeof [1, 2, 3]);

let arr1 = [1, 2, 3];
console.log(typeof arr1);

let arr2 = [1, 2, 3];
console.log(typeof arr2[0]);

let arr3 = ['1', '2', '3'];
console.log(typeof arr3[0]);

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({x: 1, y: 2, z: 3}));

let arr4 = [1, 2, 3];
let arr5 = arr4;
arr4[0] = 'a';
console.log(arr5);

let arr6 = [1, 2, 3];
let arr7 = arr6;
arr6[0] = 'a';
arr7[1] = 'b';
console.log(arr6);

let arr8 = [1, 2, 3];
let arr9 = arr8;
arr8[0] = 'a';
arr9[0] = 'b';
console.log(arr9);

const arr10 = ['a', 'b', 'c'];
arr10[1] = '!';
console.log(arr10);

const arr11 = ['a', 'b', 'c'];
console.log(arr11);

const arr12 = ['a', 'b', 'c'];
console.log(arr12);

let obj11 = {};
obj11['a'] = 1;
obj11['b'] = 2;
obj11['c'] = 3;
console.log(obj11);

let obj12 = {x: 1, y: 2, z: 3};
obj12.x = obj12.x ** 2;
obj12.y = obj12.y ** 2;
obj12.z = obj12.z ** 2;
console.log(obj12);

let obj13 = {
    '1a': 1,
    'b2': 2,
    'c-c': 3,
    'd 4': 4,
    'e5': 5
};
console.log(obj13['1a']);
console.log(obj13['b2']);
console.log(obj13['c-c']);
console.log(obj13['d 4']);
console.log(obj13['e5']);

let obj14 = {x: 1, y: 2, z: 3};
console.log(obj14['x']);

let obj15 = {x: 1, y: 2, z: 3};
let key15 = 'x';
console.log(obj15[key15]);

let obj16 = {x: 1, y: 2, z: 3};
let sum16 = obj16.x + obj16.y + obj16.z;
console.log(sum16);

let obj17 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj17).length);

let key18 = 'x';
let obj18 = {
    [key18]: 1,
    y: 2,
    z: 3
};
console.log(obj18);

let key19_1 = 'x';
let key19_2 = 'y';
let key19_3 = 'z';
let obj19 = {
    [key19_1]: 1,
    [key19_2]: 2,
    [key19_3]: 3
};
console.log(obj19);

const arr20 = [1, 2, 3, 4, 5];
const res20 = arr20[1] + arr20[2];
console.log(res20);