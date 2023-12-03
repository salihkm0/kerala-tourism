// const multipleItemCarousel = document.querySelector(
//     "#carouselExampleControls"
//   );

// if(window.matchMedia("(min-width :576px)").matches){

//     const carousel = new bootstrap.Carousel(multipleItemCarousel ,{
//         interval : false
//     })

//     var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//     var cardWidth = $(".carousel-item").width();
//     var scrollPosition = 0;
    
//     $(".carousel-control-next").on("click", function () {
//         if (scrollPosition < (carouselWidth - cardWidth * 3)) { //check if you can go any further
//           scrollPosition += cardWidth;  //update scroll position
//           $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
//         }
//       });
    
//       $(".carousel-control-prev").on("click", function () {
//         if (scrollPosition > 0) {
//           scrollPosition -= cardWidth;
//           $(".carousel-inner").animate(
//             { scrollLeft: scrollPosition },
//             600
//           );
//         }
//       });
// }else{
//     $(multipleItemCarousel).addClass('slide')
// }


const initSlider = () => {
  const cardList = document.querySelector('.card-wrapper')
  const sliderButtons = document.querySelectorAll('.slide-btn')
  const maxScrolLeft = cardList.scrollWidth - cardList.clientWidth

  sliderButtons.forEach(button => {
      button.addEventListener("click",() => {
          const direction = button.id === 'prev-slid' ? -1 : 1;
          const scrollAmount = cardList.clientWidth * direction;
          cardList.scrollBy({ left : scrollAmount, behavior : 'smooth'})
      })
  })
  const handleSlideButtons = () => {
      sliderButtons[0].style.display = cardList.scrollLeft <= 0 ? 'none' : 'block';
      sliderButtons[1].style.display = cardList.scrollLeft >= maxScrolLeft ? 'none' : 'block';
  }
  
  cardList.addEventListener('scroll' , ()=> {
      handleSlideButtons();
  })
}
window.addEventListener("load",initSlider)