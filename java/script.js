console.log('--- Function Declaration vs Function Expression ---');
{
    function func() {
        console.log('!');
    }

    func();
}

{
    let func = function() {
        console.log('!');
    };

    func();
}

console.log('--- Задание 1: function func() {...} — Declaration или Expression? ---');
{
    function func() {
        console.log('!');
    }

    console.log('Ответ: Function Declaration');
}

console.log('--- Задание 2: let func = function() {...} — Declaration или Expression? ---');
{
    let func = function() {
        console.log('!');
    };

    console.log('Ответ: Function Expression');
}

console.log('--- Точка с запятой при объявлении функций ---');
{
    function func() {
        console.log('!');
    }

    let func2 = function() {
        console.log('!');
    };

    console.log('Function Declaration — без ; после }, Function Expression — с ;');
}

console.log('--- Задание 3: расставить точки с запятой ---');
{
    let func1 = function() {console.log('!')};
    let func2 = function() {
        console.log('!')
    };
    function func3() {
        console.log('!')
    }

    func1();
    func2();
    func3();
}

console.log('--- Функция с именем, но Function Expression ---');
{
    +function func() {
        console.log('!');
    };

    try {
        func();
    } catch (e) {
        console.log('func() выдаёт ошибку — это Function Expression');
    }
}

{
    let test = function func() {
        console.log('!');
    };

    test();
}

console.log('--- Задание 4: +function func() {...} — можно ли вызвать по имени? ---');
{
    +function func() {
        console.log('!');
    };

    try {
        func();
    } catch (e) {
        console.log('Ответ: нельзя, Function Expression не вызывается по имени');
    }
}

console.log('--- Присваивание функций в переменные ---');
{
    let func = function() {
        console.log('!');
    };

    func();
}

console.log('--- Задание 5: безымянная функция возвращает 1 в func1 ---');
{
    let func1 = function() {
        return 1;
    };

    console.log(func1());
}

console.log('--- Задание 6: безымянная функция возвращает 2 в func2 ---');
{
    let func2 = function() {
        return 2;
    };

    console.log(func2());
}

console.log('--- Задание 7: сумма func1() и func2() ---');
{
    let func1 = function() {return 1};
    let func2 = function() {return 2};

    console.log(func1() + func2());
}

console.log('--- Совпадение имени функции и переменной ---');
{
    function func() {
        return '!';
    }

    console.log(func());

    func = 'string';

    try {
        func();
    } catch (e) {
        console.log('Ошибка: func затёрта строкой, вызов невозможен');
    }
}

console.log('--- Именованные функциональные выражения ---');
{
    let test = function func() {
        console.log('!');
    };

    test();
}

{
    let test = function func() {
        console.log(typeof func);
    };

    test();
}

{
    let test = function func() {
        console.log('вызов через func внутри');
    };

    test();
}

console.log('--- Выражение слева функции ---');
{
    +function func() {
        console.log('! (Function Expression)');
    };
}

{
    function func() {
        console.log('! (Function Declaration)');
    }

    func();
}

{
    +1;
    function func() {
        console.log('! (Function Declaration, +1 — отдельная команда)');
    }

    func();
}

{
    +1+
    function func() {
        console.log('! (Function Expression, т.к. +1+ незавершено)');
    };
}

console.log('--- Задание 8: -function func() {...} ---');
{
    -function func() {
        console.log('!');
    };

    console.log('Ответ: Function Expression');
}

console.log('--- Задание 9: -1; function func() {...} ---');
{
    -1;
    function func() {
        console.log('!');
    }

    func();
    console.log('Ответ: Function Declaration');
}

console.log('--- Задание 10: -1 function func() {...} ---');
{
    -1
    function func() {
        console.log('!');
    }

    func();
    console.log('Ответ: Function Declaration (ASI вставил ; после -1)');
}

console.log('--- Задание 11: 1 function func() {...} ---');
{
    1
    function func() {
        console.log('!');
    }

    func();
    console.log('Ответ: Function Declaration');
}

console.log('--- Задание 12: -1- function func() {...} ---');
{
    -1-
    function func() {
        console.log('!');
    };

    console.log('Ответ: Function Expression (выражение -1- незавершено)');
}

console.log('--- Массив с анонимными функциями ---');
{
    let arr = [
        function() {console.log('1')},
        function() {console.log('2')},
        function() {console.log('3')},
    ];

    console.log(arr[0]);

    arr[0]();

    for (let func of arr) {
        func();
    }
}

console.log('--- Задание 13: массив с тремя функциями, возвращающими 1, 2, 3 ---');
{
    let arr = [
        function() {return 1},
        function() {return 2},
        function() {return 3},
    ];
}

console.log('--- Задание 14: вывести число 3, вызвав функцию из массива ---');
{
    let arr = [
        function() {return 1},
        function() {return 2},
        function() {return 3},
    ];

    console.log(arr[2]());
}

console.log('--- Задание 15: сумма результатов функций без цикла ---');
{
    let arr = [
        function() {return 1},
        function() {return 2},
        function() {return 3},
    ];

    let sum = arr[0]() + arr[1]() + arr[2]();
    console.log(sum);
}

console.log('--- Задание 16: перебор массива функций циклом ---');
{
    let arr = [
        function() {return 1},
        function() {return 2},
        function() {return 3},
    ];

    for (let func of arr) {
        console.log(func());
    }
}

console.log('--- Объект с анонимными функциями ---');
{
    let obj = {
        func1: function() {console.log(1)},
        func2: function() {console.log(2)},
        func3: function() {console.log(3)},
    };

    obj.func1();
}

console.log('--- Задание 17: объект с тремя функциями, сумма возвращаемых чисел ---');
{
    let obj = {
        func1: function() {return 1},
        func2: function() {return 2},
        func3: function() {return 3},
    };

    let sum = obj.func1() + obj.func2() + obj.func3();
    console.log(sum);
}

console.log('--- Задание 18: перебор объекта с функциями циклом ---');
{
    let obj = {
        func1: function() {return 1},
        func2: function() {return 2},
        func3: function() {return 3},
    };

    for (let key in obj) {
        console.log(obj[key]());
    }
}

console.log('--- Применение объекта с функциями ---');
{
    let math = {
        square: function(num) {return num * num},
        cube: function(num) {return num * num * num},
    };

    console.log(math.square(2));
    console.log(math.cube(2));
}

console.log('--- Задание 19: объект с тремя функциями над массивом чисел ---');
{
    let obj = {
        sum: function(arr) {
            let res = 0;
            for (let num of arr) {
                res += num;
            }
            return res;
        },
        sumSquares: function(arr) {
            let res = 0;
            for (let num of arr) {
                res += num * num;
            }
            return res;
        },
        sumCubes: function(arr) {
            let res = 0;
            for (let num of arr) {
                res += num * num * num;
            }
            return res;
        },
    };

    let numbers = [1, 2, 3];
    console.log(obj.sum(numbers));
    console.log(obj.sumSquares(numbers));
    console.log(obj.sumCubes(numbers));
}

console.log('--- Проверка типа функции: Function Declaration vs Function Expression ---');
{
    let test = function() {
        console.log('!');
    };

    test();
}

{
    func();

    function func() {
        console.log('!');
    }
}

{
    try {
        func();
    } catch (e) {
        console.log('Ошибка: func недоступна до объявления (Function Expression)');
    }

    let func = function() {
        console.log('!');
    };
}

console.log('--- Задание 20: let test = function func() — Declaration или Expression? ---');
{
    let test = function func() {
        console.log('!');
    };

    test();
    try {
        func();
    } catch (e) {
        console.log('func недоступна снаружи — Function Expression');
    }
}

console.log('--- Задание 21: console.log(function func(){...}) — Declaration или Expression? ---');
{
    console.log(
        function func() {
            console.log('!');
        }
    );
}

console.log('--- Задание 22: +function func(){...} — Declaration или Expression? ---');
{
    +function func() {
        console.log('!');
    };

    try {
        func();
    } catch (e) {
        console.log('func недоступна — Function Expression');
    }
}

console.log('--- Задание 23: function func(){...} — Declaration или Expression? ---');
{
    func();

    function func() {
        console.log('!');
    }
}

console.log('--- Все задания выполнены ---');