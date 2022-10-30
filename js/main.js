const play = document.getElementById('play');
const music = document.querySelector("audio");
let  isplaying = false; 
// for play function 
function playmusic(){
    isplaying = true;
    music.play();
    document.getElementById('playbtn').classList.replace("fa-play",'fa-pause');
    document.getElementById('album').classList.add('amine');
}


// for pause function
function paussemusic(){
    isplaying = false;
    music.pause();
    document.getElementById('playbtn').classList.replace('fa-pause',"fa-play");
    document.getElementById('album').classList.remove('amine');
}

//call to action function 
play.addEventListener('click', () => {
   
    isplaying ? paussemusic() : playmusic();
   
})
// music data 
const songs = [
    {
        name: 'let-me-love-you.mp3',
        title: 'Let me love you',
        artist: 'Justin Bieber',
        image: 'Justin-Bieber-Let-Me-Love-You.png'
    },
    {
        name: 'Ariana Grande - Love Me Harder.mp3',
        title: 'Love Me Harder',
        artist: 'Ariana Grande',
        image: 'love me harder.jpg'
    },
      {
        name: 'Arijit Singh - Tum Hi Ho.mp3',
        title: 'Tum Hi Ho',
        artist: 'Arijit Singh',
        image: 'Aashiqui_2.jpg'
    },
      {
        name: 'Tu Jo Mili.mp3',
        title: 'Tu Jo Mili',
        artist: 'Yasser Desai',
        image: 'hqdefault.jpg'
    },
]
// changing the music data 
let pre = document.getElementById('pre');
let next = document.getElementById('next');
let title = document.getElementById('title');
let artist = document.getElementById('artist');

const loadsong = (songs) => {
    title.textContent = songs.title; 
    artist.textContent = songs.artist; 
    music.src = "./music/"+ songs.name ; 
    document.getElementById('album').src = "./image/"+songs.image;

}
var songIndex = 0;

const nextsong = () => {
    songIndex = (songIndex +1)% songs.length;
    loadsong(songs[songIndex]); 
    playmusic();
}
const prevsong = () => {
    songIndex = (songIndex -1 + songs.length) % songs.length;
    loadsong(songs[songIndex]); 
    playmusic();
}
next.addEventListener('click',nextsong)
pre.addEventListener('click',prevsong)

// img darg and download protected code 

$("img").bind
("contextmenu", function(e) {
return false;
});

$("img").mousedown
(function(e) {
return false;
});
