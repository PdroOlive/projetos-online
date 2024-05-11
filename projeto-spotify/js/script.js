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
const repeatButton = document.getElementById("repeat-button");
const likedButton = document.getElementById("like-button");
const updatedTime = document.getElementById("current-time");
const totalTime = document.getElementById("total-time");

const Mars = {
    songName: "That's What I Like",
    artist: "Bruno Mars",
    style: "linear-gradient(to bottom, rgb(116, 1, 1), rgb(0, 0, 0) 110%)",
    file: "bruno-mars",
    liked: false,
}

const Savage = {
    songName: "Glock in my Lap",
    artist: "21 Savage",
    style:"linear-gradient(to bottom, rgb(214, 136, 33), rgb(0, 0, 0) 110%)",
    file: "savage",
    liked: false,
}

const Fun = {
    songName: "We are Young",
    artist: "Fun",
    style:"linear-gradient(to bottom, rgb(58, 0, 0), rgb(0, 0, 0) 110%)",
    file: "fun",
    liked: false,
}

const arraySong = JSON.parse(localStorage.getItem("curtidas")) ?? [Mars, Savage, Fun];
let newArraySong = [...arraySong];
let shuffled = false;
let play = false;
let index = 0;
let repeatOn = false;

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
    songName.innerText = `${newArraySong[index].songName}`;
    artist.innerText = `${newArraySong[index].artist}`;
    document.body.style.backgroundImage = `${newArraySong[index].style}`;
    checkLikedButton();
}

function barProgress()
{
    const barWidth = (song.currentTime/song.duration)*100;
    barUpdated.style.setProperty("--updated", `${barWidth}%`);
    updatedTime.innerText = formatNumberTime(song.currentTime);
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
    let currentIndex = size - 1;
    while(currentIndex > 0)
    {
        let randomIndex = Math.floor(Math.random()*size);
        let aux = preArray[currentIndex];
        preArray[currentIndex] = preArray[randomIndex]
        preArray[randomIndex] = aux;
        currentIndex -= 1;
        //FUNÇÃO PARA SER APLICADA SE UMA CONDIÇÃO FOR ATENDIDA!!!
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

function NextOrRepeatSong()
{
    if(repeatOn === false)
    {
        nextSong();
    }
    else
    {
        playSong();

    }

}

function repeatSwitch()
{
    if(repeatOn === false)
    {
        repeatOn = true;
        repeatButton.style.filter = `brightness(0) saturate(100%) invert(63%) sepia(29%) saturate(1456%) hue-rotate(50deg) brightness(109%) contrast(83%)`;
    }
    else
    {
        repeatOn = false;
        repeatButton.style.filter = `brightness(0) saturate(100%) invert(100%) sepia(4%) saturate(7500%) hue-rotate(151deg) brightness(115%) contrast(117%)`;
    }
}

function checkLikedButton()
{
    if(newArraySong[index].liked === true)
    {
        likedButton.src = `images/heart-fill.svg`;
        likedButton.style.filter = `brightness(0) saturate(100%) invert(63%) sepia(29%) saturate(1456%) hue-rotate(50deg) brightness(109%) contrast(83%)`;
    }
    else
    {
        likedButton.src = `images/heart.svg`;
        likedButton.style.filter = `brightness(0) saturate(100%) invert(100%) sepia(4%) saturate(7500%) hue-rotate(151deg) brightness(115%) contrast(117%)`;
    }
    
}

function updatedLiked()
{
    if(newArraySong[index].liked === false)
    {
        newArraySong[index].liked = true;
    }
    else
    {
        newArraySong[index].liked = false;    
    }
    checkLikedButton();
    localStorage.setItem("curtidas", JSON.stringify(arraySong));
}

function formatNumberTime(originalTime)
{
    let hours = Math.floor(originalTime / 3600);
    let min = Math.floor((originalTime - hours * 3600)/60);
    let sec = Math.floor((originalTime - hours * 3600 - min * 60));

    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

function checkTime()
{
    totalTime.innerText = formatNumberTime(song.duration);
}

loadingSong();

playButton.addEventListener("click", playPauseDecider);
song.addEventListener("timeupdate", barProgress);
nextButton.addEventListener("click", nextSong);
backButton.addEventListener("click", backSong);
barClicked.addEventListener("click", JumpBar);
shuffleButton.addEventListener("click", shuffleSwitch);
song.addEventListener("ended", NextOrRepeatSong);
repeatButton.addEventListener("click", repeatSwitch);
likedButton.addEventListener("click", updatedLiked);
song.addEventListener("loadedmetadata", checkTime);