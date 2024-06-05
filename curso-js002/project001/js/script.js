function playSound(sound)
{
    const audio = document.querySelector(`audio[data-key="${sound.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${sound.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play()
    key.classList.add("is-clicked");
}

function removeTransition(e)
{
    if(e.propertyName !== "transform") return; // skip if it's not a transform
    this.classList.remove("is-clicked");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition))

window.addEventListener("keydown", playSound);