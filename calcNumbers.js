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
        if (b == 0) {
            return 'Dont do this!'; 
        } else {
            return a / b; 
        }
    } else if (action == 'rem') {
        return a % b;
    } else if (action == 'exp') {
        return a ** b;
    } else {
        return ('unknown operation');
    }
}
    console.log (calcNumbers ('sum', 2, 1));
    console.log (calcNumbers ('subtr', 2, 1));
    console.log (calcNumbers ('mult', 2, 1));
    console.log (calcNumbers ('div', 2, 1));
    console.log (calcNumbers ('rem', 2, 1));
    console.log (calcNumbers ('exp', 2, 1));
