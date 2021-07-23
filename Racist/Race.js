// variables used in script
let isFirstStart = true;
// <- this variable is to check if this is the first time the video player started

// apply onend function to background video player
document.getElementById('video').onended = interaction;

// function to choose what video to play
function interaction() {
    // default videos
let images["Race.mp4"]
let videos["Race.mp4"]

let givebjVideos["Race.mp4"]

let videosZest["Race.mp4"]

// select what playlist should be used
let selectedVideo = videos.concat(givebjVideos).concat(videosZest);
let selectedImages = images;

// select what playlist should be used
let selectedVideo = videos.concat(givebjVideos).concat(videosZest);
let selectedImages = images;

// console log the amount of images and videos that exist
console.log("Image count: " + selectedImages.length)
console.log("Video count: " + selectedVideo.length)

// this determines the position in the playlit for what to play
let posImg = Math.floor((Math.random() * selectedImages.length));
let posVid = Math.floor((Math.random() * selectedVideo.length));

// get the background video player element from html code
var bgvideo = document.getElementById("video");

// change the video and poster source
bgvideo.poster = selectedImages[posImg];
bgvideo.src = selectedVideo[posVid];

    // based on video position change volume (this is done for only one video atm due to it being pretty quiet)
    if (posVid != 0) {
        bgvideo.volume = 0.1;
    } else {
        bgvideo.volume = 1;
    }

setTimeout(interaction, 10);