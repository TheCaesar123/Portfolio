// script.js

// Kada se DOM učita
document.addEventListener("DOMContentLoaded", () => {
  // Aktivacija animacija progres barova
  const bars = document.querySelectorAll(".progress span");
  bars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = width;
    }, 400);
  });

  // Efekat "fade-in" pri skrolovanju
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  // Dodaj fade-in efekt svakoj sekciji
  document.querySelectorAll("section, .card").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // Glatko skrolovanje do sekcija iz menija
  document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Mala animacija dugmeta "Pošalji"
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Hvala! Tvoja poruka je uspešno poslata.");
      contactForm.reset();
    });
  }
});
// Inicijalizacija EmailJS
emailjs.init("knloPVzg1BNyVtCk0"); // <-- zameni sa tvojim Public Key

// Slanje forme
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_aqgr06e", "template_lgwlgnk", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        this.reset(); // reset forme
      }, (err) => {
        alert("❌ Error sending message. Check console.");
        console.error("EmailJS error:", err);
      });
  });
}


