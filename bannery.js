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
            item.style.cursor = "pointer"; // Nastavení kurzoru na pointer

            // Kontrola počtu indexů
            if (carouselItems.length === 3) {
                // Dynamické nastavení URL na základě jazyka pro 3 indexy
                if (index === 0) {
                    item.setAttribute("href", "https://www.henrymorgan.cz/" + language + "/action");
                } else if (index === 1) {
                    item.setAttribute("href", "https://t.me/+iDeOp5VXKVQ4NDhk");
                } else if (index === 2) {
                    item.setAttribute("href", "https://dsc.gg/henrymorgan");
                }
            } else if (carouselItems.length === 2) {
                // Dynamické nastavení URL na základě jazyka pro 2 indexy
                if (index === 0) {
                    item.setAttribute("href", "https://www.henrymorgan.cz/" + language + "/action");
                } else if (index === 1) {
                    item.setAttribute("href", "https://t.me/+iDeOp5VXKVQ4NDhk");
                }
            }
        });
    });
