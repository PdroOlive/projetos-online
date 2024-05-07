const playButton = document.getElementById("play-button");
const song = document.getElementById("song");
let play = false;

const Mars = {
    songName: "That's What I Like",
    artitst: "Bruno Mars",
    estilo: "linear-gradient(to bottom, rgb(116, 1, 1), rgb(0, 0, 0) 110%)",
    file: "bruno-mars"
}

const Savage = {
    songName: "Glock in my Lap",
    artitst: "21 Savage",
    style:"",
    file: "savage"
}

const Fun ={
    songName: "We are Young",
    artitst: "Fun",
    style:"",
    file: "fun"
}

const arraySong = [Mars, Savage, Fun];

function playSong()
{
    playButton.src = `images/pause.svg`
    song.play();
    play = true;
}

function pauseSong()
{
    playButton.src = `images/play.svg`;
    song.pause();
    play = false;
}

function playPauseDecider()
{
    if(play === false)
    {
        playSong();
    }
    else if (play === true)
    {
        pauseSong();
    }
}

playButton.addEventListener("click", playPauseDecider);
