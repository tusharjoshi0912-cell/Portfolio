document.addEventListener('DOMContentLoaded', () => {
    const mobileOverlay = document.getElementById('mobile-block-overlay');

    function isMobileDevice() {
        const ua = navigator.userAgent || navigator.vendor || window.opera;

        // Detect real mobile devices only
        return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua.toLowerCase());
    }

    function handleDisplay() {
        if (isMobileDevice()) {
            // Show overlay only on real mobile devices
            mobileOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            // Hide overlay for laptops/desktops
            mobileOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Run on page load
    handleDisplay();

    // Optional: han
