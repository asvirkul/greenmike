document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".preview-news").forEach(container => {
        const hoverCircle = document.createElement("div");
        hoverCircle.classList.add("hover-circle");
        hoverCircle.textContent = "ПРОЧИТАТИ";
        container.appendChild(hoverCircle);

        container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            hoverCircle.style.left = `${x}px`;
            hoverCircle.style.top = `${y}px`;
            hoverCircle.style.transform = "translate(-50%, -50%) scale(1)";
        });

        container.addEventListener("mouseleave", () => {
            hoverCircle.style.transform = "translate(-50%, -50%) scale(0)"; /* Эффект уменьшения */
        });
    });
});
