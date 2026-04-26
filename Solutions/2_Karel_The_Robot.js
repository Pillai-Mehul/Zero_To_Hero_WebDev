/**
Problem Statement 1: Diagonal Navigation in a Constrained Grid
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

/**
Problem Statement 2: Conditional Object Placement on Diagonal Coordinates
 * Problem: Move Karel from (1,1) to (5,5) 
 * and place a beeper at every diagonal point.
 **/
function main() {
   putBeeper();      // Start by placing a beeper at (1,1)
   
   moveDiagonal();   // Reaches (2,2)
   moveDiagonal();   // Reaches (3,3)
   moveDiagonal();   // Reaches (4,4)
   moveDiagonal();   // Reaches (5,5)
}

/**
 * Moves Karel one step up and one step right,
 * then places a beeper.
 */
function moveDiagonal() {
   turnLeft();
   move();
   turnRight();
   move();
   putBeeper();
}

/**
 * Helper Function:
 * Since Karel doesn't have a 'turnRight' command, 
 * we define it using three left turns.
 */
function turnRight() {
   turnLeft();
   turnLeft();
   turnLeft();
}
