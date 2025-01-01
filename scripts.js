// Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const images = document.querySelectorAll('.photo-gallery img');

    // Open lightbox when an image is clicked
    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImage.src = img.getAttribute('data-src');
            lightbox.classList.add('active');
        });
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImage) {
            lightbox.classList.remove('active');
            lightboxImage.src = ''; // Clear the image
        }
    });
});
