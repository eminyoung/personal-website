document.addEventListener('DOMContentLoaded', () => {
    const vidContainer = document.querySelector('.card');
    const video = document.querySelector('.vid');

    function playVideo() {
        video.load();
        video.play();
        console.log("play vid");
    }

    function stopVideo() {
        video.pause();
        video.currentTime = 0;
        console.log("stop vid");
    }

    vidContainer.addEventListener('mouseenter', playVideo);
    vidContainer.addEventListener('mouseleave', stopVideo);
});