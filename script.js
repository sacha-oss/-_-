document.addEventListener("DOMContentLoaded", () => {
  fetch("links.json")
    .then(response => response.json())
    .then(links => {
      const lessons = document.querySelectorAll(".lesson");

      lessons.forEach(lesson => {
        const subject = lesson.childNodes[0].textContent.trim();

        if (links[subject]) {
          const link = document.createElement("a");
          link.href = links[subject];
          link.textContent = "Онлайн урок";
          link.target = "_blank";
          link.classList.add("online-link");

          lesson.appendChild(link);
        }
      });
    })
    .catch(error => {
      console.error("Помилка завантаження JSON:", error);
    });
});

