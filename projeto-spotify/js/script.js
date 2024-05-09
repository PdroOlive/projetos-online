const playButton = document.getElementById("play-button");
const song = document.getElementById("song");
const imgAlbum = document.querySelector("#container-img img");
const songName = document.getElementById("songName");
const artist = document.getElementById("artist");
const barUpdated = document.querySelector("#container-bar-updated");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const barClicked = document.getElementById("container-bar");
const shuffleButton = document.getElementById("shuffle-button");



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
let newArraySong = [...arraySong];
let shuffled = false;
let play = false;
let index = 0;

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

    imgAlbum.src = `images/${newArraySong[index].file}.png`;
    song.src = `songs/${newArraySong[index].file}.mp3`;
    songName.innerText = `${newArraySong[index].songName}`
    artist.innerText = `${newArraySong[index].artist}`
    document.body.style.backgroundImage = `${newArraySong[index].style}`
}

function barProgress()
{
    const barWidth = (song.currentTime/song.duration)*100;
    barUpdated.style.setProperty("--updated", `${barWidth}%`);
}


function nextSong()
{
    if(index === newArraySong.length - 1)
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
        index = newArraySong.length - 1;
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

function randomArray(preArray)
{
    let size = preArray.length;
    let currentIndex = size -1;
    while(currentIndex > 0)
    {
        let randomIndex = Math.floor(Math.random()*size);
        let aux = preArray[currentIndex];
        preArray[currentIndex] = preArray[randomIndex]
        preArray[randomIndex] = aux;
        currentIndex -= 1;

    }
}

function shuffleSwitch()
{
    if(shuffled === false)
    {
        shuffled = true;
        randomArray(newArraySong);
        shuffleButton.style.filter = `brightness(0) saturate(100%) invert(63%) sepia(29%) saturate(1456%) hue-rotate(50deg) brightness(109%) contrast(83%)`;
    }
    else
    {
        shuffled = false;
        newArraySong = [...arraySong];
        shuffleButton.style.filter = `brightness(0) saturate(100%) invert(100%) sepia(4%) saturate(7500%) hue-rotate(151deg) brightness(115%) contrast(117%)`;
        
    }
}

loadingSong();

playButton.addEventListener("click", playPauseDecider);
song.addEventListener("timeupdate", barProgress);
nextButton.addEventListener("click", nextSong);
backButton.addEventListener("click", backSong);
barClicked.addEventListener("click", JumpBar);
shuffleButton.addEventListener("click", shuffleSwitch);