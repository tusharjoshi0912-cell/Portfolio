document.addEventListener('DOMContentLoaded', () => {
    // Get the banner and its close button from the page
    const warningBanner = document.getElementById('mobile-warning-banner');
    const closeBannerBtn = document.getElementById('close-banner-btn');

    // This function checks if the user is on a mobile device
    function isMobileDevice() {
        // This looks for common keywords in the browser's description of itself
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // --- Main Logic ---
    // If the function detects a mobile device...
    if (isMobileDevice()) {
        // ...show the yellow warning banner.
        if (warningBanner) {
            warningBanner.style.display = 'flex';
        }
    } else {
        // Otherwise (if it's a desktop/laptop), make sure the banner is hidden.
         if (warningBanner) {
            warningBanner.style.display = 'none';
        }
    }

    // Add a click event to the banner's close button
    if (closeBannerBtn) {
        closeBannerBtn.addEventListener('click', () => {
            if (warningBanner) {
                warningBanner.style.display = 'none'; // Hide the banner when the 'x' is clicked
            }
        });
    }
});