document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('mobile-warning-banner');
    const closeBtn = document.getElementById('close-banner-btn');
    const desktopWrapper = document.getElementById('desktop-site-wrapper');

    // More reliable mobile detection than just screen width
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile && banner) {
        // Show the banner only on mobile devices
        banner.classList.add('visible');
        
        // Hide the main site content while banner is shown for better focus
        if(desktopWrapper) {
            desktopWrapper.style.display = 'none';
        }

        // Add functionality to the close button
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                banner.style.display = 'none';
                
                // Show the main site content after banner is closed
                if(desktopWrapper) {
                    desktopWrapper.style.display = 'block';
                }
            });
        }
    } else {
        // Ensure the main site is visible if not on mobile
        if(desktopWrapper) {
            desktopWrapper.style.display = 'block';
        }
    }
});
