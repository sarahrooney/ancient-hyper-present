let landingButton = document.querySelector('#landingLogo');
let landingSec = document.querySelector('#landingSec');
let main = document.querySelector('#main');
let homeContent = document.querySelector('#homeContent');

// window.addEventListener("pageshow", function(e) {
//     landingSec.style.display = 'none';
//     main.style.overflow = 'scroll';

//     homeContent.classList.add('fade')
// });

landingButton.addEventListener('click', function() {
	landingButton.classList.add('zoom');
	
	window.setTimeout(function() {
  	landingSec.style.display = 'none';
  	main.style.overflow = 'scroll';
  	homeContent.style.display = 'block';
  }, 1750);

  window.setTimeout(function() {
  	homeContent.style.display = 'block';
  }, 200);

  window.setTimeout(function() {
		homeContent.classList.add('fade')
  }, 1000);

});
