document.addEventListener('DOMContentLoaded', () => {
   const registrationForm = document.getElementById('registrationForm');

   registrationForm.addEventListener('submit', (event) => {
       event.preventDefault(); // Prevent the form from submitting the traditional way

       // Simulate a successful registration (you can replace this with actual form submission logic)
       setTimeout(() => {
           showSuccessMessage('Registration successful!');
           registrationForm.reset(); // Reset the form fields
       }, 1000); // Simulating a delay for the example
   });

   function showSuccessMessage(message) {
       const messageContainer = document.createElement('div');
       messageContainer.className = 'success-message';
       messageContainer.textContent = message;

       document.body.appendChild(messageContainer);

       setTimeout(() => {
           messageContainer.remove();
       }, 3000); // Message disappears after 3 seconds
   }
});


let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
}