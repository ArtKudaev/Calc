function getAverage (marksArr) {
    let sumMarks = marksArr.reduce((sum, current) => sum + current, 0);      // вычисляем сумму всех элементов массива
    let marksAverage = Math.floor(sumMarks / marksArr.length);               // находим среднее арифметическое и округляем до ближайшего целого числа
    return marksAverage;
}
console.log(getAverage([2, 1, 4, 5]));