const phrase =
  "Phil Claire Haley Alex Luke Jay Gloria Manny Joe Mitchell Cam Lily Stella";
const words = phrase.split(" ");
let allButtons;
let iterator = 0;
let modernFamilyImg;
let intro;

function preload() {
  modernFamily = loadImage("./assets/modernfamily.jpg");
  intro = loadSound("./assets/intro.mp4");
}

//adattare l'animazione alla finestra
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // the same as writing: function (variable) {}
  words.forEach((word) => {
    createElement("button", word);
  });

  allButtons = selectAll("button");

  console.log(allButtons);
}

function draw() {
  //carico l'immagine
  modernFamilyImg = image(modernFamily, 0, 0, windowWidth, windowHeight);

  //testo 1
  textAlign(CENTER);
  fill("#FE5D9F");
  strokeWeight(3);
  textSize(36);
  text("Find the intruder", windowWidth / 2, windowHeight / 9);

  //testo 2
  textAlign(CENTER);
  fill("#FE5D9F");
  strokeWeight(3);
  textSize(16);
  text("(and click to let the intro begin)", windowWidth / 2, windowHeight / 7);

  //muovo i pulsanti
  iterator++;
  allButtons.forEach((singleButton, i) => {
    let x = noise((iterator + 40 * i) / 400) * windowWidth;
    let y = noise((iterator - 40 * i) / 400) * windowHeight;

    singleButton.style("position: absolute; background-color: #FE5D9F");
    singleButton.position(x, y);
  });
}

//metto la musica
function mouseClicked() {
  if (intro.isPlaying()) {
    intro.pause();
    play = false;
  } else {
    intro.play();
    play = true;
  }
}
