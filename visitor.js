document.addEventListener("DOMContentLoaded", () => {
    const counterContainer = document.querySelector(".visitor-counter");
    let visitCount = localStorage.getItem("page_view");

    // Jika tidak ada data di localStorage, inisialisasi dengan 1
    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = Number(visitCount) + 1;
    }

    localStorage.setItem("page_view", visitCount);
    counterContainer.textContent = visitCount;
});
