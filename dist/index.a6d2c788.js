const accordin = document.querySelectorAll(".accordin-container");
const accordinHeader = document.querySelectorAll(".accordin-header");
const faqContainer = document.querySelector(".faq-container");
faqContainer.addEventListener("click", function(event) {
    const clicked = event.target.closest(".accordin-header");
    if (!clicked) return;
    const img = event.target.children[1];
    img.getAttribute("src");
    console.log(img.getAttribute("src"));
});

//# sourceMappingURL=index.a6d2c788.js.map
