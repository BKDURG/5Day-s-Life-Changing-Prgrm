// Initialize AOS
        AOS.init({
            duration: 700, // Reduced from 1000 to 700 for faster animation
            once: true,     // Animation should happen only once - while scrolling down
            mirror: false,  // Whether elements should animate out while scrolling past them
            offset: 100     // Offset (in px) from the original trigger point
        });