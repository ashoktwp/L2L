// finding the max height of the price container, so that the buttons are aligned 	
// let priceContainerMaxHeight = 0;
// // let originalHeight = 0
// let screenWidth = $(window).width();

// $(".price-container").each(function() {
//   // originalHeight = $(this).height()
//   if ($(this).height() > priceContainerMaxHeight) {
//     priceContainerMaxHeight = $(this).height() + 20;
//   }
// });

// $(".price-container").height(priceContainerMaxHeight);


// $(window).resize(function() {
//   let screenWidth = $(window).width();

//   $(".price-container").each(function() {
//     originalHeight = $(this).height()
//     if ($(this).height() > priceContainerMaxHeight) {
//       priceContainerMaxHeight = $(this).height() + 20;
//     }

//   });
//   $(".price-container").height(priceContainerMaxHeight);

//   if (screenWidth >= 768) {
//     console.log("We're greater than or equal to 786!!")
//     console.log(screenWidth)
//     $(".price-container").height(priceContainerMaxHeight);
//   } else if (screenWidth < 768) {
//     $(".price-container").css("height", "unset")
//     console.log("Less than 786")
//     console.log(screenWidth)
//   }


// });