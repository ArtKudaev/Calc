function calcNumbers (action, a, b) {
    
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