// ============================================================
// 1. Глобальные переменные
// ============================================================
console.log('--- Глобальные переменные ---');
{
    let num = 1;

    function func() {
        console.log('внутри функции:', num);
    }
    func();
}

console.log('--- Глобальные переменные: меняем ---');
{
    function func() {
        console.log('внутри:', num);
    }

    let num;
    num = 1;
    func();

    num = 2;
    func();
}

console.log('--- Глобальная переменная в нескольких функциях ---');
{
    function func1() {
        console.log('func1:', num);
    }
    function func2() {
        console.log('func2:', num);
    }

    let num = 1;
    func1();
    func2();
}

console.log('--- Изменение глобальной из функции ---');
{
    function func1() {
        console.log('func1:', num);
        num++;
    }
    function func2() {
        console.log('func2:', num);
    }

    let num = 1;
    func1();
    func2();
}

// ============================================================
// 2. Локальные переменные
// ============================================================
console.log('--- Локальные переменные ---');
{
    function func() {
        let num = 5;
        console.log('локальная:', num);
    }
    func();

    // console.log(num); // ошибка - снаружи локальная не видна
    console.log('локальная переменная снаружи не видна — это ожидаемо');
}

// ============================================================
// 3. Одинаковые имена (локальная перекрывает глобальную)
// ============================================================
console.log('--- Совпадение имён локальной и глобальной ---');
{
    let num = 1;

    function func() {
        let num = 2;
        console.log('внутри (локальная):', num);
    }
    func();

    console.log('снаружи (глобальная):', num);
}

console.log('--- Забыли let: меняем глобальную ---');
{
    let num = 1;

    function func() {
        num = 2;
        console.log('внутри (изменили глобальную):', num);
    }
    func();

    console.log('снаружи (тоже изменилась):', num);
}

// ============================================================
// 4. Глобальные переменные и параметры
// ============================================================
console.log('--- Глобальная и параметр с разными именами ---');
{
    function func(localNum) {
        console.log('localNum:', localNum);
        console.log('num (глобальная):', num);
    }

    let num = 1;
    func(num);
}

console.log('--- Меняем параметр — глобальная не меняется ---');
{
    function func(localNum) {
        localNum = 2;
    }

    let num = 1;
    func(num);
    console.log('num после func:', num);
}

console.log('--- Меняем глобальную внутри — меняется снаружи ---');
{
    function func(localNum) {
        num = 2;
    }

    let num = 1;
    func(num);
    console.log('num после func:', num);
}

console.log('--- Объявили let внутри — глобальная не тронута ---');
{
    function func(localNum) {
        let num = 2;
    }

    let num = 1;
    func(num);
    console.log('num после func:', num);
}

// ============================================================
// 5. Совпадение имени параметра и глобальной переменной
// ============================================================
console.log('--- Параметр с тем же именем ---');
{
    function func(num) {
        num = 2;
    }

    let num = 1;
    func(num);
    console.log('num после func:', num);
}

console.log('--- Без let внутри — меняется глобальная ---');
{
    function func() {
        num = 2;
    }

    let num = 1;
    func();
    console.log('num после func:', num);
}

console.log('--- С let внутри — глобальная не тронута ---');
{
    function func() {
        let num = 2;
    }

    let num = 1;
    func();
    console.log('num после func:', num);
}

// ============================================================
// 6. Изменение глобальных переменных (момент вызова)
// ============================================================
console.log('--- Функция не вызвана — глобальная не меняется ---');
{
    let num = 1;

    function func() {
        num = 2;
        console.log('внутри func:', num);
    }
    // func(); — закомментировали

    console.log('num снаружи:', num);
}

console.log('--- Функция вызвана — глобальная меняется ---');
{
    let num = 1;

    function func() {
        num = 2;
    }

    console.log('до func:', num);
    func();
    console.log('после func:', num);
}

console.log('--- Несколько вызовов func ---');
{
    let num = 1;

    function func() {
        num++;
    }

    func();
    func();
    func();
    console.log('num после 3 вызовов:', num);
}

console.log('--- func до объявления num ---');
{
    function func() {
        num = 2;
    }

    let num = 1;
    console.log('до func:', num);
    func();
    console.log('после func:', num);
}

// ============================================================
// 7. Параметры-объекты (передача по ссылке)
// ============================================================
console.log('--- Параметры-объекты: изменение массива ---');
{
    function func(arr) {
        arr[0] = '!';
    }

    let arr = [1, 2, 3];
    func(arr);
    console.log('arr после func:', arr);
}

console.log('--- Изменение свойства объекта ---');
{
    function func(obj) {
        obj.a = '!';
    }

    let obj = { a: 1, b: 2, c: 3 };
    func(obj);
    console.log('obj после func:', obj);
}

console.log('--- Передали примитив (obj.a) — объект не меняется ---');
{
    function func(arg) {
        arg = '!';
    }

    let obj = { a: 1, b: 2, c: 3 };
    func(obj.a);
    console.log('obj после func:', obj);
}

console.log('--- Передали примитив в параметр obj — объект не меняется ---');
{
    function func(obj) {
        obj = '!';
    }

    let obj = { a: 1, b: 2, c: 3 };
    func(obj.a);
    console.log('obj после func:', obj);
}

console.log('--- splice меняет массив ---');
{
    function func(arr) {
        arr.splice(1, 1);
    }

    let arr = [1, 2, 3];
    func(arr);
    console.log('arr после func:', arr);
}

console.log('--- slice не меняет массив ---');
{
    function func(arr) {
        arr.slice(1, 1);
    }

    let arr = [1, 2, 3];
    func(arr);
    console.log('arr после func:', arr);
}

console.log('--- newArr = arr (та же ссылка) ---');
{
    function func(arr) {
        let newArr = arr;
        newArr[0] = '!';
    }

    let arr = [1, 2, 3];
    func(arr);
    console.log('arr после func:', arr);
}

console.log('--- Все задания выполнены ---');