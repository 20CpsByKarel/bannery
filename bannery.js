document.addEventListener("DOMContentLoaded", function() {
    var carouselItems = document.querySelectorAll(".carousel-item");
    var language = upgates.language.toLowerCase();  // Převod na malá písmena pro zajištění konzistence

    // Povolené jazyky
    var supportedLanguages = ["hu", "ro", "pl", "en", "de", "it", "sl", "sk", "fi"];
    
    // Nastavení výchozího jazyka na "en" pokud je jazyk nepodporovaný
    if (!supportedLanguages.includes(language)) {
        language = "en";
    }

    carouselItems.forEach(function(item, index) {
        item.style.cursor = "pointer";

        if (index === 0) {
            // Dynamické nastavení URL na základě jazyka
            item.setAttribute("href"," https://t.me/+iDeOp5VXKVQ4NDhk");
        }
        else if (index === 1) {
            item.setAttribute("href", "https://dsc.gg/henrymorgan");
        }
        else if (index === 2) {
            item.setAttribute("href", "https://dsc.gg/henrymorgan");
        }
    });
});
