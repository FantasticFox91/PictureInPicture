const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Propmpt to select media  stream, pass to video elemet, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    }catch(error){
        // Catch our errors
        console.log("Ohhhh: ", error);
    }
}

button.addEventListener("click", async () =>{
    // Disable the button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false;
});


// On Load
selectMediaStream();