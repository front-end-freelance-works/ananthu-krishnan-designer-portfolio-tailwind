
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize all swipers
            const swipers = {
                minimalist: initSwiper('.minimalistSwiper', '.minimalistSwiper-button-prev', '.minimalistSwiper-button-next'),
                typography: initSwiper('.typographySwiper', '.typographySwiper-button-prev', '.typographySwiper-button-next'),
                vintage: initSwiper('.vintageSwiper', '.vintageSwiper-button-prev', '.vintageSwiper-button-next'),
                abstract: initSwiper('.abstractSwiper', '.abstractSwiper-button-prev', '.abstractSwiper-button-next'),
                photographic: initSwiper('.photographicSwiper', '.photographicSwiper-button-prev', '.photographicSwiper-button-next')
            };

            // Tab functionality
            const tabButtons = document.querySelectorAll('.tab-btn');
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons and tab contents
                    tabButtons.forEach(btn => btn.classList.remove('active', 'bg-indigo-600', 'text-white'));
                    document.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });

                    // Add active class to clicked button and corresponding content
                    this.classList.add('active', 'bg-indigo-600', 'text-white');
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');

                    // Update the swiper when tab changes
                    swipers[tabId].update();
                });
            });

            // Function to initialize swiper with navigation
            function initSwiper(swiperClass, prevButton, nextButton) {
                return new Swiper(swiperClass, {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    centeredSlides: true,
                    loop: true,
                    speed: 800,
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    navigation: {
                        nextEl: nextButton,
                        prevEl: prevButton,
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }
                });
            }
        });
