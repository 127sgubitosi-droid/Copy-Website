function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainO = document.getElementById("mainO");
    sidebar.classList.toggle("hidden");
    mainO.classList.toggle("expanded");
}
const images = [
    "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10",
    "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
];
let currentIdx = 0;

function updateSlide() {
    const imgElement = document.getElementById("carouselImg");
    imgElement.src = images[currentIdx];
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("prevBtn").addEventListener("click", function () {
        currentIdx = (currentIdx - 1 + images.length) % images.length;
        updateSlide();
    });
    document.getElementById("nextBtn").addEventListener("click", function () {
        currentIdx = (currentIdx + 1) % images.length;
        updateSlide();
    });

    document.querySelectorAll(".dropDown").forEach(function (button) {
        button.addEventListener("click", function () {
            const submenu = button.nextElementSibling;
            submenu.classList.toggle("pushIn");
        });
    });
});

function openDoc(url) {
    window.open(url, "_blank");
}


function openAP(url) {
    window.open(url, "_blank");
}
