document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    // Ẩn menu khi click ra ngoài
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.add("hidden");
        }
    });
});