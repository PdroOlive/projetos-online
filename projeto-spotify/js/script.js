const playButton = document.getElementById("play-button");
const song = document.getElementById("song");
const imgAlbum = document.querySelector("#container-img img");
const songName = document.getElementById("songName");
const artist = document.getElementById("artist");
const barUpdated = document.getElementById("container-bar-updated");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const barClicked = document.getElementById("container-bar");


let play = false;
let index = 0;

const Mars = {
    songName: "That's What I Like",
    artist: "Bruno Mars",
    style: "linear-gradient(to bottom, rgb(116, 1, 1), rgb(0, 0, 0) 110%)",
    file: "bruno-mars"
}

const Savage = {
    songName: "Glock in my Lap",
    artist: "21 Savage",
    style:"linear-gradient(to bottom, rgb(214, 136, 33), rgb(0, 0, 0) 110%)",
    file: "savage"
}

const Fun ={
    songName: "We are Young",
    artist: "Fun",
    style:"linear-gradient(to bottom, rgb(58, 0, 0), rgb(0, 0, 0) 110%)",
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

function loadingSong()
{

    imgAlbum.src = `images/${arraySong[index].file}.png`;
    song.src = `songs/${arraySong[index].file}.mp3`;
    songName.innerText = `${arraySong[index].songName}`
    artist.innerText = `${arraySong[index].artist}`
    document.body.style.backgroundImage = `${arraySong[index].style}`
}

function barProgress()
{
    const barWidth = (song.duration/song.currentTime)*100;
    barUpdated.style.setProperty("--updated", `${barWidth}%`);
}


function nextSong()
{
    if(index === arraySong.length - 1)
    {
        index = 0;
    }
    else
    {
        index += 1;
    }
    loadingSong();
    playSong();
}

function backSong()
{
    if(index === 0)
    {
        index = arraySong.length - 1;
    }
    else
    {
        index -= 1;
    }
    loadingSong();
    playSong();
}

function JumpBar(event)
{
    const width = barClicked.clientWidth;
    const clickPosition = event.offsetX;
    const JumpTime = (clickPosition/width) * song.duration;
    song.currentTime = JumpTime;
}

loadingSong();

playButton.addEventListener("click", playPauseDecider);
song.addEventListener("timeupdate", barProgress);
nextButton.addEventListener("click", nextSong);
backButton.addEventListener("click", backSong);
barClicked.addEventListener("click", JumpBar);