class Sounds {
    main = new Audio("/module-1/project-1/pizza-time/sounds/pizza-time.mp3");
    // collision = new Audio("./sounds/collision.mp3");
  
    play(sound) {
      this[sound].play();
    }
  
    pause(sound) {
      this[sound].pause();
    }
  }