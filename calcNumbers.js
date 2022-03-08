function calcNumbers (action, a, b) {
    if (action === '' || typeof action !== 'string' || typeof a !== 'number' || typeof b !== 'number') {
        return 'Error';
    }
    
    switch (action) {
        case 'sum':
            return a + b;
            break;
        case 'subtr': 
            return a - b;
            break;
        case 'mult': 
            return a * b;
            break;
        case 'div': 
            if (b == 0) 
                return 'Dont do this!'; 
            else 
                return a / b; 
            break;
        case 'rem': 
            return a % b;
            break;
        case 'exp': 
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
