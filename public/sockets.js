const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
const nickv = document.getElementById('nickv')


nickv.addEventListener('submit', function(e) {
  e.preventDefault();
  if (nickname.value) {
    socket.emit('chat message', nickname.value + " just joined the chat");
    nickname.value = '';
    closeModal();
  }
});


form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value );
    input.value = '';
  }
});

// socket.on('user connected', function(msg) {
//   // alert(msg)
//   const item = document.createElement('li');
//   item.textContent = msg;
//   messages.appendChild(item);
//   window.scrollTo(0, document.body.scrollHeight);
// });

// socket.on('user connected from a', (msg) => {
//     // alert(msg)
//     const item = document.createElement('li');
//     item.textContent = msg;
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight);
//   });


socket.on('chat message', function(msg) {
  // alert(msg)
  const item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});




const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const closeSession = document.querySelector("#close-modal");
const chatsession = document.querySelector(".chat");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};


openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  openModalBtn.classList.add("hidden")
  chatsession.classList.remove("hidden")
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

const Sessioncloser = function (){
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
