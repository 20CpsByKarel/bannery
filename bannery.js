document.addEventListener("DOMContentLoaded", function() {
    var carouselItems = document.querySelectorAll(".carousel-item");
    carouselItems.forEach(function(item, index) {
        item.style.cursor = "pointer";
                if (index === 0) {
            item.setAttribute("href", "https://henrymorgan.cz/en/disposable-pods-pods);
        }
        else if (index === 0) {
            item.setAttribute("href", "https://dsc.gg/henrymorgan");
        }
        else if (index === 1) {
            item.setAttribute("href", "https://dsc.gg/henrymorgan");
        }
    });
});
