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
	console.log("clic gauche")
})
arrowRight.addEventListener("click",()=>{
	console.log("clic droit")
})

//Ajout des bullets points
const dotsParent = document.querySelector(".dots")
//Création des points 
for (let i=0; i< slides.length; i++){
	const dotElement = document.createElement("span")
	dotElement.classList.add("dot")
	dotsParent.appendChild(dotElement)
	if (i=== 0){
		dotElement.classList.add("dot_selected")
	}
}