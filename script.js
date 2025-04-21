document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    
    // Animasi popup yang lebih smooth untuk logo
    if (logo) {
        logo.style.transform = 'scale(0.8)';
        logo.style.opacity = '0';
        logo.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        
        setTimeout(() => {
            logo.style.transform = 'scale(1)';
            logo.style.opacity = '1';
        }, 200);
    }
    
    console.log('Animasi logo siap!');

    // Tambahkan animasi fade-in pada body saat halaman dimuat
    document.body.classList.add('fade-in');

    // Tangani klik pada semua tautan internal untuk animasi fade-out
    const links = document.querySelectorAll('a[href^]:not([href^="#"])');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 500); // durasi animasi fade-out
        });
    });

    // Modal foto
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    // Modal teks (untuk puisi.html)
    const textModal = document.getElementById('textModal');
    const modalText = document.getElementById('modalText');
    const textCloseBtn = textModal ? textModal.querySelector('.close') : null;

    if (!modal || !modalImg || !captionText || !closeBtn) {
        console.error('Modal foto elements not found!');
    }

    if (!textModal || !modalText || !textCloseBtn) {
        console.error('Modal teks elements not found!');
    }

    const photos = document.querySelectorAll('.clickable-photo');
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            console.log('Photo clicked:', this.src);
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            console.log('Modal close button clicked');
            modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                console.log('Modal background clicked');
                modal.style.display = 'none';
            }
        });
    }

    // Modal teks untuk puisi.html
    const clickableTexts = document.querySelectorAll('.clickable-text');
    clickableTexts.forEach(textElem => {
        textElem.addEventListener('click', function() {
            console.log('Text clicked:', this.dataset.fulltext);
            if (textModal && modalText) {
                modalText.textContent = this.dataset.fulltext;
                textModal.style.display = 'block';
            }
        });
    });

    if (textCloseBtn) {
        textCloseBtn.addEventListener('click', function() {
            console.log('Text modal close button clicked');
            if (textModal) {
                textModal.style.display = 'none';
            }
        });
    }

    if (textModal) {
        textModal.addEventListener('click', function(event) {
            if (event.target === textModal) {
                console.log('Text modal background clicked');
                textModal.style.display = 'none';
            }
        });
    }
});

function scaleUp(img) {
            const card = button.parentElement;
            const image = card.querySelector('img');

            const fullscreenContainer = document.getElementById('fullscreen-container');
            fullscreenContainer.innerHTML = `
                <div class="scale-fullscreen" onclick="closeFullscreen()">
                    <img src="${image.src}" alt="${image.alt}" class="rounded-lg">
                </div>
            `;
            fullscreenContainer.classList.remove('hidden');
        }

        function closeFullscreen() {
            const fullscreenContainer = document.getElementById('fullscreen-container');
            fullscreenContainer.classList.add('hidden');
            fullscreenContainer.innerHTML = '';
}
