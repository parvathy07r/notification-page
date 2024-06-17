const sections = document.querySelectorAll(".content");
const markAllAsRead = document.querySelector(".btn");
let totalCount = 0;
totalCount = addTotalCount();
displayCount(totalCount);

function addTotalCount() {
    const statuses = document.querySelectorAll(".status");
    let count = 0;
    statuses.forEach(function(status) {
        if (status) {
            count++;
        }
    });
    return count;
}


sections.forEach(function(section) {
    section.addEventListener('click', function(event) {
        const status = section.querySelector(".status");
        if (status) {
            status.remove();
            totalCount = addTotalCount();
            
            displayCount(totalCount);
        }
        
    });
});

markAllAsRead.addEventListener('click', function(event) {
    const statuses = document.querySelectorAll(".status");
    statuses.forEach(function(status) {
        status.remove();
    });
    totalCount = addTotalCount();
    totalCount=0;
    displayCount(totalCount);
});

function displayCount(totalCount) {
    const node = document.querySelector(".count")
    node.textContent = `${totalCount}`
}

