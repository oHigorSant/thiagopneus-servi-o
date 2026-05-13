// Trigger reveal on load (fallback or initial check)
document.addEventListener("DOMContentLoaded", () => {
    // Reveal animations are handled by IntersectionObserver in index.html
    // but we can add any other initialization logic here
});

// Form Submission (Simulated)
const form = document.getElementById('orcamentoForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Enviando...';
        btn.disabled = true;

        // Simulate a small delay
        setTimeout(() => {
            alert('Obrigado! Recebemos sua solicitação. Entraremos em contato via WhatsApp em breve.');
            form.reset();
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    });
}


