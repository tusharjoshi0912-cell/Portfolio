document.addEventListener('DOMContentLoaded', () => {
    // Get all the necessary elements from the page
    const mobileMessage = document.getElementById('mobile-message');
    const desktopSiteWrapper = document.getElementById('desktop-site-wrapper');
    const warningBanner = document.getElementById('mobile-warning-banner');
    const closeBannerBtn = document.getElementById('close-banner-btn');

    function checkDevice() {
        // This is the threshold to decide what is "mobile"
        if (window.innerWidth < 981) {
            // --- This is MOBILE view ---
            // Show the "Please Enable Desktop Mode" message
            mobileMessage.style.display = 'flex';
            desktopSiteWrapper.style.display = 'none';

            // ALSO, show our new yellow warning banner
            if (warningBanner) {
                warningBanner.style.display = 'flex';
            }

        } else {
            // --- This is DESKTOP view ---
            // Hide the "Enable Desktop Mode" message
            mobileMessage.style.display = 'none';
            desktopSiteWrapper.style.display = 'block';
            
            // HIDE the yellow warning banner on desktop
            if (warningBanner) {
                warningBanner.style.display = 'none';
            }
        }
    }

    // Add a click event to the close button
    if (closeBannerBtn) {
        closeBannerBtn.addEventListener('click', () => {
            if (warningBanner) {
                warningBanner.style.display = 'none'; // Hide the banner when clicked
            }
        });
    }

    // Check on initial load
    checkDevice();

    // Check again if the window is resized
    window.addEventListener('resize', checkDevice);
});