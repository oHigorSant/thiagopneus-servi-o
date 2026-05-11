// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        // Adjusted threshold for better mobile experience
        var elementVisible = windowHeight * 0.15; 
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Trigger reveal on load
document.addEventListener("DOMContentLoaded", () => {
    reveal();
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

// Logo Carousel Auto-scroll simulation (optional, just adds life)
const track = document.querySelector('.carousel-track');
if (track) {
    let items = track.innerHTML;
    track.innerHTML += items; // Double items for loop
}
