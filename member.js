function skillsMember() {
    var skills = document.querySelectorAll(".skills");
    var skillsMember = document.querySelector(".skills-member");

    skillsMember.addEventListener("click", function () {
        skills.forEach(function (item) {
            item.classList.toggle("skills-show");
        });
    });
}