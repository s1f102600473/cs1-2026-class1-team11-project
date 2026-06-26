document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section[id]");
    const tocLinks = document.querySelectorAll(".toc-link");

    tocLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offset = 20;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    const btn = document.getElementById('btn');
    const text = document.getElementById('digression-text');

    btn.addEventListener('click', () => {
        text.classList.toggle('open');
        text.classList.toggle('close');
    });

    window.addEventListener("scroll", setActiveLink);
    window.addEventListener("load", setActiveLink);

    setActiveLink();
});