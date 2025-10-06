document.addEventListener('DOMContentLoaded', () => {
    const mobileOverlay = document.getElementById('mobile-block-overlay');

    function detectMobile() {
        const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent) 
                         || window.innerWidth < 981;

        if (isMobile) {
            // Always show Netflix-style overlay for mobile users
            mobileOverlay.style.display = 'flex';

            // Block scrolling or interactions on the page
            document.body.style.overflow = 'hidden';
        } else {
            // Hide overlay only for desktops/laptops
            mobileOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Run once on load and again when resized
    detectMobile();
    window.addEventListener('resize', detectMobile);
});
