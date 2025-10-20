const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par,strokes){
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if(strokes <= par -2) {
    return "Eagle";
  } else if (strokes === par -1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par +1) {
    return "Bogey";
  } else if (strokes === par +2) {
    return "Double Bogey";
  } else if (strokes >= par +3){
    return "Go Home!";
  }
}

golfScore(4, 1); // "Hole-in-one!"
golfScore(5, 2); // "Eagle"
golfScore(3, 2); // "Birdie"
golfScore(4, 4); // "Par"
golfScore(4, 5); // "Bogey"
golfScore(3, 5); // "Double Bogey"
golfScore(4, 8); // "Go Home!"