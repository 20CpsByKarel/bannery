document.addEventListener("DOMContentLoaded", function() {
    var carouselItems = document.querySelectorAll(".carousel-item");
    carouselItems.forEach(function(item, index) {
        item.style.cursor = "pointer";
                if (index === 0) {
            item.setAttribute("href", "https://www.henrymorgan.cz/en/action");
        }
        else if (index === 1) {
            item.setAttribute("href", "https://t.me/henry_morgan_europe");
        }
        else if (index === 2) {
            item.setAttribute("href", "https://dsc.gg/henrymorgan");
        }
    });
});
