function showVerticalMessage(message) {
    
    if (message.includes('м', 0) )
        message = message[0].toUpperCase() + message.slice(1);
    
    if (message.length > 10)    
        message = message.slice(0, 10)

    for (let i = 0; i < message.length; i++) {
        
        console.log(message[i] + '\n');
    }
}
(showVerticalMessage('unbelievable'));