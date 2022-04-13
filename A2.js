function division (numbers, divisor) {
    let array = [];                                     //создаем массив, который потом будем возвращать с числами делящимимся на делитель
    for (let i = 1; i < numbers.length; i++){           
        if (numbers[i] % divisor == 0) {
            array.push(numbers[i]);                     //проверяем кратность числа, если соответствует условию, добавляем такое число в массив 
        }
    }
    return array;
}
console.log(division([1, 2, 3, 4, 5, 6], 2));