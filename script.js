// Kita bungkus semua kode dalam satu fungsi agar rapi
(function() {
    
    /**
     * Fitur 1: Efek Header saat di-scroll
     * Menambahkan kelas 'scrolled' ke header jika pengguna scroll ke bawah
     */
    const header = document.querySelector('.header');
    
    // Pastikan header ada sebelum menambahkan event listener
    if (header) {
        window.addEventListener('scroll', function() {
            // Jika scroll lebih dari 50px ke bawah
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    /**
     * Fitur 2: Animasi Fade-in saat elemen masuk ke layar
     * Menggunakan Intersection Observer API untuk performa yang baik
     */
    
    // Opsi untuk observer
    const observerOptions = {
        root: null, // 'null' berarti relatif terhadap viewport
        rootMargin: '0px',
        threshold: 0.1 // Elemen dianggap terlihat jika 10% areanya masuk layar
    };

    // Fungsi yang akan dijalankan saat elemen terlihat
    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            // Jika elemennya (entry) sedang terlihat (isIntersecting)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Tambahkan kelas 'visible'
                observer.unobserve(entry.target); // Hentikan observasi setelah terlihat
            }
        });
    }

    // Buat observer baru
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Pilih semua elemen yang ingin kita animasikan
    // (Kita akan tambahkan kelas .fade-in ini di HTML nanti)
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    
    // Terapkan observer ke setiap elemen
    elementsToFadeIn.forEach(element => {
        observer.observe(element);
    });

})(); // Akhir dari pembungkus fungsi
