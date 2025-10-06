document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('mobile-block-overlay');

    function isMobile() {
        const ua = navigator.userAgent || navigator.vendor || window.opera;

        // Mobile user agents
        const isMobileUA = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua.toLowerCase());

        // Touch-enabled devices
        const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 1);

        // Small screens (for large phones/tablets)
        const isSmallScreen = Math.min(window.innerWidth, window.innerHeight) < 981;

        return isMobileUA || (isTouch && isSmallScreen);
    }

    function checkMobileBlock() {
        if (isMobile()) {
            // Show overlay and block scrolling
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        } else {
            // Desktop/laptop: hide overlay
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    checkMobileBlock();
    window.addEventListener('resize', checkMobileBlock);
    window.addEventListener('orientationchange', checkMobileBlock);
});
