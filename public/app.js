const socket = io();
const client = feathers();

client.configure(feathers.hooks());

// Create the feathers application with a socketio connection
client.configure(feathers.socketio(socket));

// Get the service for our message endpoint
const messages = client.service('messages');

// Log when anyone creates a message in realtime
messages.on('created', message => alert(`New message from ${message.name}: ${message.text}`));

// Create a test message
messages.create({
    name:'Test user',
    text: 'Hello world!'
});
