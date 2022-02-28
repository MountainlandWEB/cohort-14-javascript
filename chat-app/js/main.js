const chats = [];
const user1 = {
  username: 'unicorns4lyfe',
};
const user2 = {
  username: 'rainbowsandcandy',
};

const message = {
  text: 'hello!',
  user: user1.username,
};

const chat = {
  name: 'Friends',
  id: 0,
  messages: [message],
};

const chat2 = {
  name: 'Work',
  id: 1,
  messages: [
    {
      text: 'good morning',
      user: user1.username,
    },
    {
      text: "mornin'",
      user: 'dev4now',
    },
  ],
};

chats.push(chat);
chats.push(chat2);

let currentChat = chats[0];

render();

function render() {
  // render chats
  let chatsHTML = '';
  chats.forEach((chat) => {
    chatsHTML += `<div class="list-group-item" onclick="selectChat(${chat.id})">${chat.name}</div>`;
  });
  document.getElementById('chats').innerHTML = chatsHTML;

  // render current chat
  let messagesHtml = '';
  currentChat.messages.forEach((message) => {
    messagesHtml += `
      <div class="message">
        <div class="message-text">${message.text}</div>
        <div class="message-username">${message.user}</div>
      </div>
      `;
  });
  document.getElementById('chat-window').innerHTML = messagesHtml;

  document.getElementById('current-chat-name').innerText = currentChat.name;
}

function addMessage(username) {
  const text = document.getElementById(username).value;
  document.getElementById(username).value = '';
  currentChat.messages.push({
    text: text,
    user: username,
  });
  render();
}

function selectChat(chatId) {
  const selectedChat = chats.find((chat) => chat.id == chatId);
  currentChat = selectedChat;
  render();
}