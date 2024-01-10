import plusIcons from "url:../../images/icon-plus.svg";
import minusIcons from "url:../../images/icon-minus.svg";

class accordinView {
  _parentElement = document.querySelector(".faq-container");
  _message = "Something Worng Please Try Again..)";

  _accordinContainer = document.querySelectorAll(".accordin-container");
  _accordinHeader = document.querySelectorAll(".accordin-header");
  _accordinDetails = document.querySelectorAll(".accordin-details");
  _accordinHeaderImg = document.querySelectorAll(".accordin-header-img");

  constructor() {
    this._addHandlerAccordionHeaderClick();
  }

  accordinShowHide(event) {
    try {
      event.preventDefault();
      // click accordin header
      const clicked = event.target.closest(".accordin-header");
      // Not click accordin header
      if (!clicked) return;

      // Select clicked accordion icon
      const accordationHeaderImage = event.target
        .closest(".accordin-header")
        .querySelector(".accordin-header-img");
      // Set all accordion plusIcons
      //console.log(this._accordinHeaderImg);
      this._accordinHeaderImg.forEach((img) => (img.src = plusIcons));
      //Set accordion minusIcons acive accordation header
      if (accordationHeaderImage.src.includes("plus")) {
        accordationHeaderImage.src = minusIcons;
      } else {
        accordationHeaderImage.src = plusIcons;
      }

      // Remove active class for all accordation heaader

      this._accordinHeader.forEach((accordin) =>
        accordin.classList.remove("active")
      );

      //Add active class for active accordation
      const accordinheaderActive = event.target.closest(".accordin-header");
      accordinheaderActive.classList.toggle("active");

      //Remove hide class for all accordation details
      this._accordinDetails.forEach((detail) => detail.classList.add("hide"));
      //Add hide class for active accordation details
      const accordinDetailsActive = event.target
        .closest(".accordin-container")
        .querySelector(".accordin-details");
      accordinDetailsActive.classList.toggle("hide");
    } catch (err) {
      console.error(err);
    }
  }

  _addHandlerAccordionHeaderClick() {
    this._parentElement.addEventListener(
      "click",
      this.accordinShowHide.bind(this)
    );
  }
}

export default new accordinView();
