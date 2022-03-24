function showVerticalMessage(message) {
    
    if (message.includes('u', 0))
        message = message[0].toUpperCase() + message.slice(1, 10);
        
    for (let i = 0; i < message.length; i++) {
        
        console.log(message[i] + '\n');
    }
}
(showVerticalMessage('unbelievable'));