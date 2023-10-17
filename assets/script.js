const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let slideNumber = 0;
const lastSlideNumber = slides.length -1;
const pathSlidePicture = "./assets/images/slideshow/";
let pathBuild = "";
let banner = document.getElementById("banner");
let tagLine = banner.querySelector('p');
let bannerImg = banner.querySelector('img');

//arrow element refference
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

//dots
let dots = banner.querySelector(".dots");
//for is used to loop
for (let i = 0; i < slides.length; i++) {//To loop on all entries of the table'slides' it will also create as many dots as the number of slides.lenght
	let newDot = document.createElement("div");//To create a new html element on the js document
	newDot.classList.add("dot"); //To add a class
	newDot.setAttribute('id', 'dot'+i); //To set an unique id on every dot created

	dots.appendChild(newDot); //To associate the child (newDot) to the parent (dots) 
  }

  let selectedDot = document.getElementById("dot0");//variable of the selected dot
  selectedDot.classList.add("dot_selected"); //adding the css to the variable of the selected dot



//arrow numbers changes in console
arrowLeft.addEventListener('click', function() {


	let previousSlideNumber = slideNumber;

	if(slideNumber == 0){
		slideNumber = lastSlideNumber;
	}else{
		slideNumber = slideNumber - 1;
	}

	setPathImage(slideNumber);
	setTagline(slideNumber);
	changeSelectedDot("dot"+previousSlideNumber , "dot"+slideNumber);

});

arrowRight.addEventListener('click', function() {

	let previousSlideNumber = slideNumber;

	if(slideNumber == lastSlideNumber){
		slideNumber = 0;
	}else{
		slideNumber = slideNumber + 1;
	}

  setPathImage(slideNumber);
  setTagline(slideNumber);
  changeSelectedDot("dot"+previousSlideNumber , "dot"+slideNumber);
});
// concatenation = AB + CD =ABCD, adding = 1 + 1 =2, "1" + "1" = "11"
function setPathImage(slideNumber){
	pathBuild = pathSlidePicture + slides[slideNumber].image ;
	bannerImg.setAttribute("src", pathBuild );
}

function setTagline(slideNumber){
	tagLine.innerHTML = slides[slideNumber].tagLine;
}

function changeSelectedDot(previousDotSelectedId, nextDotSelectedId){
 let previousDotSelected = document.getElementById(previousDotSelectedId);
 let nextDotSelected = document.getElementById(nextDotSelectedId);

 nextDotSelected.classList.add("dot_selected");
 previousDotSelected.classList.remove("dot_selected");
}
