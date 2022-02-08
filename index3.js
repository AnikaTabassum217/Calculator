let btnSend = document.querySelector('button');
let message = document.querySelector('h1');

btnSend.addEventListener('click', () =>{
    btnSend.innerText = 'Sending...';
    setTimeout(()=>{
        btnSend.style.display = "none";
        message.innerText = 'Message Sent';
    },5000);
});