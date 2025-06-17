const audio = document.getElementById('audio');
const title = document.getElementById('title');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
const profile= document.getElementById('profile');
const info= document.getElementById('info');
const post= document.getElementById('post');
const nextdev= document.getElementById('devn');
const prevdev= document.getElementById('devp');
const naam= document.getElementById('naam');

const dev=[
  {naaam:"Hitesh",pos:"Leader", pro:"Images/Profile1.jpg",info:"Hitesh is the leader of our team and a talented full stack developer. With strong command over both frontend and backend technologies, he ensures that the project stays on track and performs seamlessly. From writing clean code to integrating complex APIs, Hitesh handles technical challenges with ease while also managing task distribution and team coordination."},
  {naaam:"Yogesh",pos:"Member", pro:"Images/Profile2.jpg",info:"Yogesh is a skilled developer who works on both the frontend and backend. He focuses on building user-friendly interfaces and writing efficient logic for smooth functionality. Yogesh plays a key role in structuring the codebase, connecting databases, and ensuring that every part of the system runs without a hitch."},
  {naaam:"Aryan",pos:"Member", pro:"Images/Profile3.png",info:"Aryan is the creative force of our team, specializing in design and frontend development. He crafts modern, responsive, and visually engaging interfaces that enhance the user experience. Aryan pays close attention to detail and collaborates with the team to ensure the app looks great and feels intuitive to use."}
];
 let devIndex=0;

function loadprofile(index){
  profile.src=dev[index].pro;
  post.textContent=dev[index].pos;
  info.textContent=dev[index].info;
  naam.textContent=dev[index].naaam;
}

const songs = [
  { name: "Tell  em", file: "*/songs/Tell em.mp3"},
  { name: "Celestrial  warrior", file: "*/songs/song2.mp3"},
  { name: "Lock in", file: "*/songs/lock in.mp3"},
  { name: "Lobster", file: "*/songs/lobster.mp3"},
  { name: "Surrender", file: "*/songs/surrender.mp3"}
];
let songIndex = 0;
function loadSong(index) {
  title.textContent = songs[index].name;
  audio.src = songs[index].file;
}
function playSong() {
  audio.play();
  playBtn.src="Images/Pause.png";
}
function pauseSong() {
  audio.pause();
  playBtn.src = "Images/Play.png";
}
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});
nextBtn.addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  playSong();
});
nextdev.addEventListener('click', () => {
  devIndex = (devIndex + 1) % dev.length;
  loadprofile(devIndex);
});
prevBtn.addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  playSong();
});
prevdev.addEventListener('click', () => {
  devIndex = (devIndex - 1 + dev.length) % dev.length;
  loadprofile(devIndex);
});
audio.addEventListener('ended', () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  playSong();
});
loadSong(songIndex);
loadprofile(devIndex);
