function setupSlick() {
    var centerElement = $(".center");
    var slidesToShow = window.innerWidth <= 600 ? 1 : 3;

    if (centerElement.hasClass('slick-initialized')) {
        centerElement.slick('unslick'); // Удаляем слайдер, только если он уже был инициализирован
    }

    centerElement.slick({
        dots: true,
        Infinity: true,
        centerMode: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        // autoplaySpeed:1000,
        // autoplay:true,
    });
}

// Вызываем функцию при загрузке страницы
setupSlick();

// Вызываем функцию при изменении размера окна
window.addEventListener('resize', setupSlick);
