function toggleMenu() {
    document.querySelector(".hamburger-menu").classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}

$(function () {
    $(window).on("scroll", function () {
        const items = $(".carousel-item");
        const scrollPosition = $(window).scrollTop();
        const totalHeight = $(document).height();
        const sectionHeight = totalHeight / 4;

        items.each(function (index) {
            if (
                scrollPosition >= sectionHeight * index &&
                scrollPosition < sectionHeight * (index + 1)
            ) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    });

    $(".carousel-item img").on("click", function () {
        const index = $(this).parent().index();
        const totalHeight = $(document).height();
        const sectionHeight = totalHeight / 4;
        const scrollPosition = sectionHeight * index;

        $("html, body").animate(
            {
                scrollTop: scrollPosition,
            },
            500
        );
    });
});

const video = document.getElementById("myVideo4");
const vodImage = document.getElementById("vodImage");

function togglePlay() {
    if (video.paused) {
        video.play();
        vodImage.classList.add("hidden");
    } else {
        video.pause();
        vodImage.classList.remove("hidden");
    }
}

video.addEventListener("play", function () {
    vodImage.classList.add("hidden");
});

video.addEventListener("pause", function () {
    vodImage.classList.remove("hidden");
});

document.addEventListener("scroll", function () {
    const lines = document.querySelectorAll(".line:not(.no-animation)");
    lines.forEach(function (line) {
        const rect = line.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            line.classList.add("visible");
        }
    });

    const group = document.querySelector(".line4-group");
    if (group) {
        const groupRect = group.getBoundingClientRect();
        if (groupRect.top < window.innerHeight && groupRect.bottom >= 0) {
            const groupLines = group.querySelectorAll(".line4");
            groupLines.forEach(function (line) {
                line.classList.add("visible");
            });
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelectorAll(".line:not(.no-animation)");
    lines.forEach(function (line) {
        const rect = line.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            line.classList.add("visible");
        }
    });

    const group = document.querySelector(".line4-group");
    if (group) {
        const groupRect = group.getBoundingClientRect();
        if (groupRect.top < window.innerHeight && groupRect.bottom >= 0) {
            const groupLines = group.querySelectorAll(".line4");
            groupLines.forEach(function (line) {
                line.classList.add("visible");
            });
        }
    }
});

document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(
        ".content-section h1, .content-section .paragraphs"
    );
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add("show");
        }
    });
});

document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(
        ".second-right-text h1, .second-right-text .paragraphs, .second-left-text h1, .second-left-text .paragraphs"
    );
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add("show");
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".text-overlay").forEach((element) => {
    observer.observe(element);
});

const beerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("beer-visible");
        }
    });
});

document.querySelectorAll(".beer-text-overlay").forEach((element) => {
    beerObserver.observe(element);
});

document.addEventListener("DOMContentLoaded", function () {
    const productItems = document.querySelectorAll(".product-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target); // 애니메이션 후 더 이상 관찰하지 않음
                }
            });
        },
        {
            threshold: 0.1, // 요소의 10%가 보일 때 애니메이션 시작
        }
    );

    productItems.forEach((item) => {
        observer.observe(item);
    });
});

function toggleMenu() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const logoImg = document.querySelector(".logo img");
    const menuOverlay = document.querySelector(".menu-overlay");

    hamburgerMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");

    if (hamburgerMenu.classList.contains("active")) {
        logoImg.style.display = "none";
    } else {
        logoImg.style.display = "block";
    }
}

document.getElementById("noButton").addEventListener("click", function () {
    alert("19세 미만은 사이트 사용이 불가능합니다");
});

document.getElementById("yesButton").addEventListener("click", function () {
    document.getElementById("ageChecker").style.display = "none";
    document.getElementById("mainContent").style.opacity = "1";
});

document.querySelectorAll("nav .main-menu li").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
        this.querySelector(".submenu").style.display = "block";
    });
    item.addEventListener("mouseleave", function () {
        // 지연 시간을 두고 서브메뉴가 사라지도록 함
        setTimeout(() => {
            if (!this.querySelector(".submenu:hover")) {
                this.querySelector(".submenu").style.display = "none";
            }
        }, 300); // 0.3초 후에 서브메뉴가 사라짐
    });
});

document.querySelectorAll("nav .submenu").forEach(function (submenu) {
    submenu.addEventListener("mouseleave", function () {
        this.style.display = "none";
    });
});