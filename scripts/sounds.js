class Sounds {
  screen1 = new Audio("/sounds/main.mp3");
 
  play(sound) {
    this[sound].play();
  }

  pause(sound) {
    this[sound].pause();
  }
  screen2 = new Audio("/sounds/game.mp3");
  screen3 = new Audio("/sounds/resume.mp3");

}
