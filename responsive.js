document.addEventListener('DOMContentLoaded', () => {
    const warningBanner = document.getElementById('mobile-warning-banner');
    const closeBannerBtn = document.getElementById('close-banner-btn');

    // This function reliably checks if the user is on a mobile device
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // If the script detects a mobile device, show the banner
    if (isMobileDevice()) {
        if (warningBanner) {
            warningBanner.style.display = 'flex';
        }
    }

    // Add the click event to the close button
    if (closeBannerBtn) {
        closeBannerBtn.addEventListener('click', () => {
            if (warningBanner) {
                warningBanner.style.display = 'none';
            }
        });
    }
});