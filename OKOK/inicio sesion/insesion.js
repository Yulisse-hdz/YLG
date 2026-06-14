// Subtle input focus animation handler
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.querySelector('label').classList.add('text-primary');
            });
            input.addEventListener('blur', () => {
                input.parentElement.querySelector('label').classList.remove('text-primary');
            });
});

// Form submission prevention for demo
document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Login attempt registered in Bunny Market UI');
});