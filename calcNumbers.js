let action = {
    sum: 'sum',
    subtr: 'subtr',
    mult: 'mult',
    div: 'div',
    rem: 'rem',
    exp: 'exp',
}
function calcNumbers (operation, a, b) {
    if (operation === '' || typeof operation !== 'string' || typeof a !== 'number' || typeof b !== 'number') {
        return 'Error';
    }
    
    switch (operation) {
        case action.sum:
            return a + b;
            break;
        case action.subtr: 
            return a - b;
            break;
        case action.mult: 
            return a * b;
            break;
        case action.div: 
            if (b == 0) 
                return 'Dont do this!'; 
            else 
                return a / b; 
            break;
        case action.rem: 
            return a % b;
            break;
        case action.exp: 
            return a ** b;
            break;
        default: 
        return ('unknown operation');
    }
}
    console.log (calcNumbers ('sum', 2, 1));
    console.log (calcNumbers ('subtr', 2, 1));
    console.log (calcNumbers ('mult', 2, 1));
    console.log (calcNumbers ('div', 2, 1));
    console.log (calcNumbers ('rem', 2, 1));
    console.log (calcNumbers ('exp', 2, 1));
