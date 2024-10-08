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
console.log(slides)
//Récupération des images flèches
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
// Ajout Eventlistenersur les flèches au clic
arrowLeft.addEventListener("click",function (){
	//console.log("clic gauche")
	clickLeftSlide()
})
arrowRight.addEventListener("click",()=>{
	//console.log("clic droit")
	clickRightSlide()
})

//Ajout des bullets points
const dotsParent = document.querySelector(".dots")
//Création des points 
for ( i=0; i< slides.length; i++){
	const dotElement = document.createElement("span")
	dotElement.classList.add("dot")
	dotsParent.appendChild(dotElement)
	if (i=== 0){
		dotElement.classList.add("dot_selected")
	}
}

//Modification de slide
//Récupération de tous les points 
const dotAll = document.querySelectorAll(".dot")
const bannerImg = document.querySelector(".banner-img")
const textBanner = document.querySelector("#banner p")
let index=0
console.log(dotAll)
function clickRightSlide(){
	//Déplacemment du point au suivant 
	dotAll[index].classList.remove("dot_selected")
	index++
	if (index >= slides.length){
		index=0
	}
	dotAll[index].classList.add("dot_selected")
	//Changement de l'image
	bannerImg.src=`./assets/images/slideshow/${slides[index].image}`
	//Changement de text
	textBanner.innerHTML = `${slides[index].tagLine}`
}

function clickLeftSlide(){
	//Déplacemment du point au suivant 
	dotAll[index].classList.remove("dot_selected")
	index--
	if (index < 0){
		index = slides.length-1
	}
	dotAll[index].classList.add("dot_selected")
	//Changement de l'image
	bannerImg.src=`./assets/images/slideshow/${slides[index].image}`
	//Changement de text
	textBanner.innerHTML = `${slides[index].tagLine}`
}