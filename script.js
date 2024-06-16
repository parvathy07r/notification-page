const sections = document.querySelectorAll(".content");
const makAllAsRead = document.querySelector(".btn")

console.log(sections);
sections.forEach(function(section) {
    section.addEventListener('click', function(event) {
        const status = document.querySelector(".status");
        status.remove();
    });
});

makAllAsRead.addEventListener('click', function(event) {
    const statuses = document.querySelectorAll(".status");
    statuses.forEach(function(status) {
        status.remove();
    })
    });


