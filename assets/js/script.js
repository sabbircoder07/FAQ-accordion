import plusIcons from "../../assets/images/icon-plus.svg";
import minusIcons from "../../assets/images/icon-minus.svg";

const accordinContainer = document.querySelectorAll(".accordin-container");
const accordinHeader = document.querySelectorAll(".accordin-header");
const accordinDetails = document.querySelectorAll(".accordin-details");
const faqContainer = document.querySelector(".faq-container");
const accordinHeaderImg = document.querySelectorAll(".accordin-header-img");

faqContainer.addEventListener("click", function (event) {
  try {
    const clicked = event.target.closest(".accordin-header");
    if (!clicked) return;
    const accordationHeaderImage = event.target
      .closest(".accordin-header")
      .querySelector(".accordin-header-img");
    if (!accordationHeaderImage) return;
    accordinHeaderImg.forEach((img) => (img.src = plusIcons));
    if (accordationHeaderImage.src.includes("plus")) {
      accordationHeaderImage.src = minusIcons;
    } else {
      accordationHeaderImage.src = plusIcons;
    }

    accordinContainer.forEach((accordin) =>
      accordin.classList.remove("active")
    );
    const accordinActive = event.target.closest(".accordin-container");
    accordinActive.classList.add("active");

    accordinDetails.forEach((detail) => detail.classList.add("hide"));
    const accordinDetailsActive = event.target
      .closest(".accordin-container")
      .querySelector(".accordin-details");
    accordinDetailsActive.classList.toggle("hide");
  } catch (err) {
    console.error(err);
  }
});
