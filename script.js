$(document).ready(function () {
            // Back to top button
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('.back-to-top').addClass('active');
                } else {
                    $('.back-to-top').removeClass('active');
                }
            });

            $('.back-to-top').click(function () {
                $('html, body').animate({ scrollTop: 0 }, 800);
                return false;
            });

            // Smooth scrolling for navigation links
            $('a[href*="#"]').on('click', function (e) {
                e.preventDefault();
                $('html, body').animate(
                    {
                        scrollTop: $($(this).attr('href')).offset().top - 70,
                    },
                    800,
                    'swing'
                );
            });

            // Navbar background change on scroll
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('.navbar').addClass('scrolled');
                } else {
                    $('.navbar').removeClass('scrolled');
                }
            });

            // FAQ accordion
            $('.faq-question').click(function () {
                $(this).parent().toggleClass('active');
                $(this).parent().siblings().removeClass('active');
            });

            // Animation on scroll
            function animateOnScroll() {
                $('.animate').each(function () {
                    var position = $(this).offset().top;
                    var scrollPosition = $(window).scrollTop() + $(window).height() * 0.8;

                    if (position < scrollPosition) {
                        $(this).css('opacity', '1');
                    }
                });
            }

            // Initial check
            animateOnScroll();

            // Check on scroll
            $(window).scroll(function () {
                animateOnScroll();
            });

            // Form submission
            $('#consultationForm').submit(function (e) {
                e.preventDefault();
                alert('Terima kasih! Permintaan konsultasi Anda telah berhasil dikirim. Tim kami akan segera menghubungi Anda.');
                $(this).trigger('reset');
            });
        });