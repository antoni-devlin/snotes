document.getElementsByClassName("toggle-menu")[0].addEventListener("click", function(e){
	e.preventDefault()
	document.getElementsByClassName("sidebar")[0].classList.toggle("toggled")});

// document.getElementsByClassName("toggle-menu")[0].addEventListener("click", function(e){
//   e.preventDefault()
//   document.getElementById("sidebar").classList.toggle("toggled");
//   
// });