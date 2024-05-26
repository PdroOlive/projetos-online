window.addEventListener("keydown", (sound) =>
{
    const audio = document.querySelector(`audio[data-key="${sound.keyCode}"]`)
    console.log(audio)
});