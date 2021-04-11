//Array
var messages = [];

//Message Type lookup object - similar to enum
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

//Seed data
var data = [
    {
        type: messageType.out,
        user: 'ChatteringChickadee55',
        message: 'Apology for poor english.'
    },
    {
        type: messageType.in,
        user: '~xX d4Rk aVeNgeR Xx~',
        message: "That's ok, who is this?"
    },
    {
        type: messageType.out,
        user: 'ChatteringChickadee55',
        message: "Where were you when heat leger dies?"
    },
    {
        type: messageType.in,
        user: '~xX d4Rk aVeNgeR Xx~',
        message: 'Excuse me?'
    },
    {
        type: messageType.out,
        user: 'ChatteringChickadee55',
        message: "I was sat in kitchen drinking wodka when Pjotr ring."
    },
    {
        type: messageType.out,
        user: 'ChatteringChickadee55',
        message: "'heat is die'"
    },
    {
        type: messageType.out,
        user: 'ChatteringChickadee55',
        message: "'no'"
    },
    {
        type: messageType.out,
        user: 'ChatteringChickadee55',
        message: "and you??????????????"
    },
];

//Message constructor function
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
};

//Function to create and return an element for the supplied message
function createMessageElement(message) {
    //Create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );
    
    //Create the element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //Add a class using the message type.
    messageEl.className = message.type;

    return messageEl;
};

//Button click handler to add new message
function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    //Determine message type and set message variables accordingly
    switch (event.target.id) {
        case 'send-button':
            user = 'ChatteringChickadee55';
            type = messageType.out;
            break;
        case 'reply-button':
            user = '~xX d4Rk aVeNgeR Xx~';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    //Create new message
    if (messageInput.value !== '') {
        //Construct a message and add it to the array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //Create a message element
        var el = createMessageElement(message);

        //Add the message element to the DOM
        messagesContainerEl.appendChild(el);

        //Reset input
        messageInput.value = '';
    }
};

function loadSeedData() {
    for (var i = 0; i < data.length; i++) {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);
    }
}

var init = function() {
    //Wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //Load seed data from array above
    loadSeedData();

};

init();