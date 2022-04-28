class Sounds {
    main = new Audio("/module-1/project-1/pizza-time/sounds/tarantella.mp3");
  
    play(sound) {
      this[sound].play();
    }
  
    pause(sound) {
      this[sound].pause();
    }
  }