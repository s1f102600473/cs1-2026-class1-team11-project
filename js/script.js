document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section[id]");
    const tocLinks = document.querySelectorAll(".toc-link");

    function setActiveLink() {
        let currentSectionId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;

            if (window.scrollY >= sectionTop - 120) {
                currentSectionId = section.getAttribute("id");
            }
        });

        tocLinks.forEach((link) => {
            link.classList.remove("active");

            const href = link.getAttribute("href");
            if (href === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    }

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

    window.addEventListener("scroll", setActiveLink);
    window.addEventListener("load", setActiveLink);

    setActiveLink();
});