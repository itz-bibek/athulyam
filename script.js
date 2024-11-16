// Open Lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
}

// Close Lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}