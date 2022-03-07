function calcNumbers (action, a, b) {
    if (action === '' || typeof action !== 'string' || typeof a !== 'number' || typeof b !== 'number') {
        return 'Error';
    }
    if (action == 'sum') {
        return a + b;
    } else if (action == 'subtr') {
        return a - b;
    } else if (action == 'mult') {
        return a * b;
    } else if (action == 'div') {
        return a / b;
    } else if (action == 'rem') {
        return a % b;
    } else if (action == 'exp') {
        return a ** b;
    } else {
        alert ('unknown operation');
    }
}
    console.log (calcNumbers ('sum', 2, 1));
    console.log (calcNumbers ('subtr', 2, 1));
