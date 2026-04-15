// FAQ Accordion JavaScript
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const title = item.querySelector(".faq-title");
  const answer = item.querySelector(".answer");
  const icon = item.querySelector("ion-icon");

  title.addEventListener("click", () => {
    answer.classList.toggle("active");

    if (answer.classList.contains("active")) {
      icon.setAttribute("name", "remove-circle");
    } else {
      icon.setAttribute("name", "add-circle");
    }
  });
});
