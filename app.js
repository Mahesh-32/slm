document.getElementById('send-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    const chatContainer = document.getElementById('chat-container');

    if (userInput.trim() === "") return;

    // Display user's message
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerText = userInput;
    chatContainer.appendChild(userMessage);

    // Clear the input box
    document.getElementById('user-input').value = '';

    // Send the message to the backend
    const response = await fetch('https://<your-ngrok-url>/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userInput })
    });

    const data = await response.json();

    // Display the bot's message
    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.innerText = data.reply;
    chatContainer.appendChild(botMessage);

    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;
});
