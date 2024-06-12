document.getElementById("open-modal-btn").addEventListener("click", () => {
    document.getElementById("modal-wrapper").classList.remove("hidden");
});
document.getElementById("close-modal-btn").addEventListener("click", () => {
    document.getElementById("modal-wrapper").classList.add("hidden");
})
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


        const loginToggle = document.getElementById('login-toggle');
        const registerToggle = document.getElementById('register-toggle');
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');

        loginToggle.addEventListener('click', () => {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
            loginToggle.classList.add('text-green-600', 'font-bold');
            registerToggle.classList.remove('text-green-600', 'font-bold');
            registerToggle.classList.add('text-gray-600');
        });

        registerToggle.addEventListener('click', () => {
            registerForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
            registerToggle.classList.add('text-green-600', 'font-bold');
            loginToggle.classList.remove('text-green-600', 'font-bold');
            loginToggle.classList.add('text-gray-600');
        });
        const loginToggle1 = document.getElementById('login-toggle1');
        const registerToggle1 = document.getElementById('register-toggle1');
        const loginForm1 = document.getElementById('login-form1');
        const registerForm1 = document.getElementById('register-form1');

        loginToggle1.addEventListener('click', () => {
            loginForm1.classList.remove('hidden');
            registerForm1.classList.add('hidden');
            loginToggle1.classList.add('text-green-600', 'font-bold','border-l-emerald-500');
            registerToggle1.classList.remove('text-green-600', 'font-bold','border-l-emerald-500');
            registerToggle1.classList.add('text-gray-600');
        });

        registerToggle1.addEventListener('click', () => {
            registerForm1.classList.remove('hidden');
            loginForm1.classList.add('hidden');
            registerToggle1.classList.add('text-green-600','border-l-emerald-500');
            loginToggle1.classList.remove('text-green-600','border-l-emerald-500');
            loginToggle1.classList.add('text-gray-600');
        });
