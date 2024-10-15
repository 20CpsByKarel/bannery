    document.addEventListener("DOMContentLoaded", function() {
        var carouselItems = document.querySelectorAll(".carousel-item");
        var language = upgates.language.toLowerCase();  // Convert to lowercase for consistency

        // Allowed languages
        var supportedLanguages = ["hu", "ro", "pl", "en", "de", "it", "sl", "sk", "fi"];
        
        // Set default language to "en" if unsupported
        if (!supportedLanguages.includes(language)) {
            language = "en";
        }

        console.log('Number of carousel items:', carouselItems.length); // Debugging line

        carouselItems.forEach(function(item, index) {
            item.style.cursor = "pointer"; // Set cursor to pointer

            // Conditional URL setting based on the number of items
            if (carouselItems.length === 3) {
                // Dynamic URL setting for 3 items
                if (index === 0) {
                    item.setAttribute("href", "https://www.henrymorgan.cz/" + language + "/action");
                } else if (index === 1) {
                    item.setAttribute("href", "https://t.me/+iDeOp5VXKVQ4NDhk");
                } else if (index === 2) {
                    item.setAttribute("href", "https://dsc.gg/henrymorgan");
                }
            } else if (carouselItems.length === 2) {
                // Dynamic URL setting for 2 items
                if (index === 0) {
                    item.setAttribute("href", "https://www.henrymorgan.cz/" + language + "/action");
                } else if (index === 1) {
                    item.setAttribute("href", "https://t.me/+iDeOp5VXKVQ4NDhk");
                }
            }
        });
        
        // Debugging: Log the set URLs
        carouselItems.forEach(function(item, index) {
            console.log('Item ' + index + ' href:', item.getAttribute("href"));
        });
    });
