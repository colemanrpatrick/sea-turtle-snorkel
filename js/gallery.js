
    const sliderLeft = document.getElementById("slider-left");
    const sliderRight = document.getElementById("slider-right");
    let slides = document.getElementsByClassName("hero-slide");
    let dots = document.getElementsByClassName("slider-button");
    let slideIndex;

    slideIndex = 0;

    let dataToUrl = (el) => {
      if(!el.style.backgroundImage){
        let bg = el.getAttribute("href");
        el.style.backgroundImage = `url(${bg})`;
      }
    };

    dataToUrl(slides[0]);

    let plusSlides = (n) => { 
      showSlides(slideIndex += n); 
    };

    let currentSlide = (n) => {
      showSlides(slideIndex = n);
    };

    let showSlides = (n) => {
      let i;
      if (n > slides.length - 1) { slideIndex = 0 };
      if (n < 0) { slideIndex = slides.length - 1; };
      for (i = 0; i < slides.length; i++) {
        slides[i].className = "hero-slide";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = "slider-button";
      }
      slides[slideIndex].className = "hero-slide active";
      dots[slideIndex].className = "slider-button active";
      dataToUrl(slides[slideIndex]);
    }; 

    currentSlide(0);

    setTimeout(() => { plusSlides(1) }, "2000");
    let carousel = setInterval(() => {plusSlides(1)},"6000");
    carousel;
      
            