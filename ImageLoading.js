var carPic = document.createElement("img")
var roadPic = document.createElement("img")
var wallPic = document.createElement("img")

var picsToLoad = 0; //set after auto based on loadImages();

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--; //the 3 images are loaded before setinterval is run and game starts
		if(picsToLoad == 0){ 
			imageLoadingDoneSoStartGame();
		}
}
//this function is basically here to load image functionality (set img.onload and img.src)[loads] 
// then make sure all loaded(3) from picstoLoad THEN run imageLoadingDoneSoStartGame (which is in main and start the set interval)
function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = fileName;
}

function loadImages() {
	var imageList = [
		{varName: carPic, theFile: "player1car.png"},
		{varName: roadPic, theFile: "track_road.png"},
		{varName: wallPic, theFile: "track_wall.png"},
	];

	picsToLoad = imageList.length

	for(var i = 0; i < imageList.length; i++){
		beginLoadingImage(imageList[i].varName, imageList[i].theFile)
	}
}