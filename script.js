document.addEventListener('DOMContentLoaded', () => {
    const revealMessageBtn = document.getElementById('revealMessageBtn');
    const messagePopup = document.getElementById('messagePopup');
    const closeBtn = document.querySelector('.close-btn');
    const photoFrames = document.querySelectorAll('.photo-frame');

    revealMessageBtn.addEventListener('click', () => {
        messagePopup.style.display = 'flex'; 
        messagePopup.style.alignItems = 'center';
        messagePopup.style.justifyContent = 'center';
    });
    closeBtn.addEventListener('click', () => {
        messagePopup.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target == messagePopup) {
            messagePopup.style.display = 'none';
        }
    });

    photoFrames.forEach(frame => {
        frame.addEventListener('mouseenter', () => {
            console.log('Mouse enter frame');
        });
        frame.addEventListener('mouseleave', () => {
            console.log('Mouse leave frame');
        });
    });
    
    const animatedBg = document.querySelector('.animated-background');
    if (animatedBg) { 
        function createParticles() {
            const particleCount = 30; // Jumlah partikel
            for (let i = 0; i < particleCount; i++) {
                let particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = Math.random() * 100 + 'vh';
                particle.style.width = Math.random() * 5 + 2 + 'px'; // Ukuran acak
                particle.style.height = particle.style.width;
                particle.style.backgroundColor = getRandomColor();
                animatedBg.appendChild(particle);
                
                animateParticle(particle);
            }
        }

        function getRandomColor() {
            const colors = ['#FBD9E5', '#FCE6F0', '#E9EDF6', '#EDE0D1'];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function animateParticle(particle) {
            let xSpeed = (Math.random() - 0.5) * 1; // Kecepatan horizontal acak
            let ySpeed = (Math.random() - 0.5) * 1; // Kecepatan vertikal acak

            function move() {
                let currentX = parseFloat(particle.style.left);
                let currentY = parseFloat(particle.style.top);

                particle.style.left = currentX + xSpeed + 'vw';
                particle.style.top = currentY + ySpeed + 'vh';

                // Batas layar
                if (currentX < -5 || currentX > 105 || currentY < -5 || currentY > 105) {
                    // Reset posisi jika keluar layar
                    particle.style.left = Math.random() * 100 + 'vw';
                    particle.style.top = Math.random() * 100 + 'vh';
                }
                requestAnimationFrame(move);
            }
            requestAnimationFrame(move);
        }
// createParticles(); // Panggil fungsi untuk membuat partikel
        // Tambahkan style untuk .particle di CSS jika menggunakan contoh partikel di atas:
        /*
        .particle {
            position: absolute;
            border-radius: 50%;
            opacity: 0.7;
            pointer-events: none; // Agar tidak mengganggu interaksi lain
        }
        */

        // Panggil fungsi jika ingin menggunakan contoh partikel di atas
        // createParticles(); // Aktifkan jika ingin mencoba partikel dasar
        // Disarankan menggunakan library untuk hasil lebih baik dan kontrol lebih mudah.
    }
});