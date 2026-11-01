console.log('--- двухмерный массив ---');
{
    let arr = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l']
    ];

    console.log(arr[0][1]);
    console.log(arr[1][2]);
    console.log(arr[3][0]);
    console.log(arr[2][2]);

    let arr2 = [[1, 2], [3, 4], [5, 6]];
    let sum = 0;

    for (let sub of arr2) {
        for (let elem of sub) {
            sum += elem;
        }
    }
    console.log('сумма [[1,2],[3,4],[5,6]] =', sum);
}

console.log('--- трехмерный массив ---');
{
    let arr = [
        [
            [1, 2],
            [3, 4]
        ],
        [
            [5, 6],
            [7, 8]
        ]
    ];

    let sum = 0;

    for (let sub of arr) {
        for (let row of sub) {
            for (let elem of row) {
                sum += elem;
            }
        }
    }
    console.log('сумма трехмерного массива =', sum);
}

console.log('--- произвольный массив ---');
{
    let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
    let sum = 0;

    for (let sub of arr) {
        for (let row of sub) {
            if (Array.isArray(row)) {
                for (let elem of row) {
                    if (Array.isArray(elem)) {
                        for (let n of elem) {
                            sum += n;
                        }
                    } else {
                        sum += elem;
                    }
                }
            } else {
                sum += row;
            }
        }
    }
    console.log('сумма произвольного массива =', sum);
}

console.log('--- перебор for-of ---');
{
    let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
    let sum = 0;

    for (let subArr of arr) {
        for (let elem of subArr) {
            console.log(elem);
            sum += elem;
        }
    }
    console.log('сумма =', sum);

    let arr2 = [[1, 2, 3], [4, 5], [6]];
    let sum2 = 0;

    for (let sub of arr2) {
        for (let elem of sub) {
            sum2 += elem;
        }
    }
    console.log('сумма [[1,2,3],[4,5],[6]] =', sum2);

    let arr3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    let sum3 = 0;

    for (let a of arr3) {
        for (let b of a) {
            for (let c of b) {
                sum3 += c;
            }
        }
    }
    console.log('сумма трехмерного =', sum3);
}

console.log('--- перебор через for ---');
{
    let arr = [[1, 2, 3], [4, 5], [6]];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    console.log('сумма через for =', sum);

    let arr2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    let sum2 = 0;

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2[i].length; j++) {
            for (let k = 0; k < arr2[i][j].length; k++) {
                sum2 += arr2[i][j][k];
            }
        }
    }
    console.log('сумма трехмерного через for =', sum2);
}

console.log('--- заполнение многомерных массивов ---');
{
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        for (let j = 0; j < 5; j++) {
            arr[i].push(j + 1);
        }
    }
    console.log(arr);

    let arr2 = [];

    for (let i = 0; i < 3; i++) {
        arr2[i] = [];
        for (let j = 0; j < 4; j++) {
            arr2[i].push('x');
        }
    }
    console.log(arr2);

    let arr3 = [];

    for (let i = 0; i < 3; i++) {
        arr3[i] = [];
        for (let j = 0; j < 2; j++) {
            arr3[i][j] = [];
            for (let k = 0; k < 5; k++) {
                arr3[i][j].push(k + 1);
            }
        }
    }
    console.log(arr3);
}

console.log('--- заполнение по порядку ---');
{
    let arr = [];
    let k = 1;

    for (let i = 0; i < 4; i++) {
        arr[i] = [];
        for (let j = 0; j < 2; j++) {
            arr[i].push(k++);
        }
    }
    console.log(arr);

    let arr2 = [];
    let k2 = 2;

    for (let i = 0; i < 4; i++) {
        arr2[i] = [];
        for (let j = 0; j < 3; j++) {
            arr2[i].push(k2);
            k2 += 2;
        }
    }
    console.log(arr2);

    let arr3 = [];
    let k3 = 1;

    for (let i = 0; i < 2; i++) {
        arr3[i] = [];
        for (let j = 0; j < 2; j++) {
            arr3[i][j] = [];
            for (let m = 0; m < 2; m++) {
                arr3[i][j].push(k3++);
            }
        }
    }
    console.log(arr3);
}

console.log('--- проблемы заполнения: исправленные варианты ---');
{
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        for (let j = 1; j <= 5; j++) {
            arr[i].push(j);
        }
    }
    console.log(arr);

    let arr2 = [];
    for (let i = 0; i < 3; i++) {
        arr2[i] = [];
        for (let j = 1; j <= 5; j++) {
            arr2[i].push(j);
        }
    }
    console.log(arr2);

    let arr3 = [];
    for (let i = 0; i < 3; i++) {
        arr3[i] = [];
        for (let j = 1; j <= 5; j++) {
            arr3[i].push(j);
        }
    }
    console.log(arr3);

    let arr4 = [];
    for (let i = 0; i < 3; i++) {
        arr4[i] = [];
        for (let j = 1; j <= 5; j++) {
            arr4[i].push(j);
        }
    }
    console.log(arr4);

    let arr5 = [];
    for (let i = 0; i < 3; i++) {
        arr5[i] = [];
        for (let j = 1; j <= 5; j++) {
            arr5[i].push(j);
        }
    }
    console.log(arr5);

    let arr6 = [];
    for (let i = 0; i < 3; i++) {
        arr6[i] = [];
        for (let j = 1; j <= 5; j++) {
            arr6[i].push(j);
        }
    }
    console.log(arr6);
}

console.log('--- многомерные объекты ---');
{
    let obj = {
        key1: {
            key1: 1,
            key2: 2,
            key3: 3
        },
        key2: {
            key1: 4,
            key2: 5,
            key3: 6
        },
        key3: {
            key1: 7,
            key2: 8,
            key3: 9
        }
    };

    let sum = 0;

    for (let k1 in obj) {
        for (let k2 in obj[k1]) {
            sum += obj[k1][k2];
        }
    }
    console.log('сумма объекта =', sum);

    let obj2 = {
        1: {
            1: 'a1',
            2: 'a2',
            3: 'a3'
        },
        2: {
            1: 'b1',
            2: 'b2',
            3: 'b3'
        },
        3: {
            1: 'c1',
            2: 'c2',
            3: 'c3'
        }
    };

    console.log(obj2['2']['2']);
    console.log(obj2['3']['1']);

    let obj3 = {
        key1: {
            a: 1, b: 2, c: {
                d: 3,
                e: 4
            }, f: 5
        },
        key2: {
            g: 6, h: 7
        }
    };

    let total = obj3.key1.a + obj3.key1.b + obj3.key1.c.d + obj3.key1.c.e + obj3.key1.f + obj3.key2.g + obj3.key2.h;
    console.log('сумма вручную =', total);
}

console.log('--- перебор многомерных объектов ---');
{
    let obj = {
        1: {1: 11, 2: 12, 3: 13},
        2: {1: 21, 2: 22, 3: 23},
        3: {1: 24, 2: 25, 3: 26}
    };

    let sum = 0;

    for (let k1 in obj) {
        let sub = obj[k1];
        for (let k2 in sub) {
            sum += sub[k2];
        }
    }
    console.log('сумма двухмерного объекта =', sum);

    let obj2 = {
        1: {
            1: {1: 111, 2: 112, 3: 113},
            2: {1: 121, 2: 122, 3: 123}
        },
        2: {
            1: {1: 211, 2: 212, 3: 213},
            2: {1: 221, 2: 222, 3: 223}
        },
        3: {
            1: {1: 311, 2: 312, 3: 313},
            2: {1: 321, 2: 322, 3: 323}
        }
    };

    let sum2 = 0;

    for (let k1 in obj2) {
        for (let k2 in obj2[k1]) {
            for (let k3 in obj2[k1][k2]) {
                sum2 += obj2[k1][k2][k3];
            }
        }
    }
    console.log('сумма трехмерного объекта =', sum2);
}

console.log('--- комбинированные структуры ---');
{
    let users = {
        boys: ['boy1', 'boy2', 'boy3'],
        girls: ['girl1', 'girl2', 'girl3']
    };

    console.log(users['boys'][1]);

    let students = {
        group1: ['name11', 'name12', 'name13'],
        group2: ['name21', 'name22', 'name23'],
        group3: ['name31', 'name32', 'name33']
    };

    console.log(students['group3'][0]);

    for (let group in students) {
        for (let name of students[group]) {
            console.log(name);
        }
    }
}

console.log('--- перебор комбинированных структур ---');
{
    let data = {
        1: ['data11', 'data12', 'data13'],
        2: ['data21', 'data22', 'data23'],
        3: ['data31', 'data32', 'data33'],
        4: ['data41', 'data42', 'data43']
    };

    for (let key in data) {
        for (let item of data[key]) {
            console.log(item);
        }
    }

    let data2 = [
        {1: 'data11', 2: 'data12', 3: 'data13'},
        {1: 'data21', 2: 'data22', 3: 'data23'},
        {1: 'data31', 2: 'data32', 3: 'data33'}
    ];

    for (let sub of data2) {
        for (let key in sub) {
            console.log(sub[key]);
        }
    }

    let data3 = [
        {
            1: ['data111', 'data112', 'data113'],
            2: ['data121', 'data122', 'data123']
        },
        {
            1: ['data211', 'data212', 'data213'],
            2: ['data221', 'data222', 'data223']
        },
        {
            1: ['data411', 'data412', 'data413'],
            2: ['data421', 'data422', 'data423']
        }
    ];

    for (let sub of data3) {
        for (let key in sub) {
            for (let item of sub[key]) {
                console.log(item);
            }
        }
    }
}

console.log('--- массив объектов ---');
{
    let users = [
        {name: 'name1', surn: 'surn1'},
        {name: 'name2', surn: 'surn2'},
        {name: 'name3', surn: 'surn3'}
    ];

    for (let user of users) {
        console.log(user.name + ' ' + user.surn);
    }

    let employees = [
        {name: 'name1', salary: 300},
        {name: 'name2', salary: 400},
        {name: 'name3', salary: 500}
    ];

    for (let emp of employees) {
        console.log(emp.name + ' - ' + emp.salary);
    }

    let total = 0;
    for (let emp of employees) {
        total += emp.salary;
    }
    console.log('сумма зарплат =', total);

    let employees2 = [
        {name: 'name1', salary: 300, age: 28},
        {name: 'name2', salary: 400, age: 29},
        {name: 'name3', salary: 500, age: 30},
        {name: 'name4', salary: 600, age: 31},
        {name: 'name5', salary: 700, age: 32}
    ];

    let olderSum = 0;
    for (let emp of employees2) {
        if (emp.age >= 30) {
            olderSum += emp.salary;
        }
    }
    console.log('сумма зарплат 30+ =', olderSum);

    employees.push({name: 'name4', salary: 600});
    console.log(employees);
}

console.log('--- ключи из переменных ---');
{
    let obj = {
        sub1: ['11', '12', '13'],
        sub2: ['21', '22', '23']
    };

    let key1 = 'sub2';
    let key2 = 1;

    console.log(obj[key1][key2]);

    let affairs = {
        '2018': {
            11: {
                29: ['name111', 'name112', 'name113'],
                30: ['name121', 'name122', 'name123']
            },
            12: {
                30: ['name211', 'name212', 'name213'],
                31: ['name221', 'name222', 'name223']
            }
        },
        '2019': {
            12: {
                29: ['name311', 'name312', 'name313'],
                30: ['name321', 'name322', 'name323'],
                31: ['name331', 'name332', 'name333']
            }
        }
    };

    let year = '2018';
    let month = 11;
    let day = 30;

    console.log(affairs[year][month][day]);

    let obj2 = {
        key1: {
            key2: '12',
            key3: '13'
        },
        key2: {
            key4: '24',
            key5: '25'
        }
    };

    let k1 = 'key2';
    let k2 = 'key4';

    console.log(obj2[k1][k2]);
}

console.log('--- добавление элементов в многомерные структуры ---');
{
    let students = {
        group1: ['student11', 'student12', 'student13'],
        group2: ['student21', 'student22', 'student23'],
        group3: ['student31', 'student32']
    };

    students.group1.push('student14');
    students.group4 = [];
    students.group4.push('student41');
    console.log(students);

    let affairs = {
        '2019-12-28': ['data11', 'data12', 'data13'],
        '2019-12-29': ['data21', 'data22', 'data23'],
        '2019-12-30': ['data31', 'data32', 'data33']
    };

    affairs['2019-12-29'].push('data24');
    affairs['2019-12-31'] = ['data41', 'data42'];
    console.log(affairs);

    let students2 = {
        group1: {
            subgroup11: ['student111', 'student112', 'student113'],
            subgroup12: ['student121', 'student122', 'student123']
        },
        group2: {
            subgroup21: ['student211', 'student212', 'student213'],
            subgroup22: ['student221', 'student222', 'student223']
        },
        group3: {
            subgroup31: ['student311', 'student312', 'student313'],
            subgroup32: ['student321', 'student322', 'student323']
        }
    };

    students2.group1.subgroup11.push('student114');
    students2.group1.subgroup13 = ['student131'];
    students2.group4 = {
        subgroup41: ['student411', 'student412']
    };
    console.log(students2);
}

console.log('--- Все задания выполнены ---');