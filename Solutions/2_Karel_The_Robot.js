/**
 * Program: L-Shaped Path
 * Description: Karel moves four spaces, turns left, and moves four more.
 **/
function main() {
   moveFour(); 
   turnLeft();
   moveFour();
}

/**
 * Helper function to handle four consecutive moves.
 **/
function moveFour() {
   move();
   move();
   move();
   move();
}
