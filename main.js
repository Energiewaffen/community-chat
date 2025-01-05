
function sendMessage() {
    const input = document.getElementById('chat-input');
    if (input.value.trim() !== '') {
        alert('Message sent: ' + input.value);
        input.value = '';
    }
}
