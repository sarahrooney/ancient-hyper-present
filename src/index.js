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
  }, 1500);

	homeContent.classList.add('fade')
});
