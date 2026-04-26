Problem Statement 1: Diagonal Navigation in a Constrained Grid

Objective: Program Karel to navigate from the starting position (1, 1) to the diagonally opposite corner (5, 5) of a $5 \times 5$ grid.
Technical Constraints: * Utilize basic movement primitives (move(), turnLeft()).
Implement a logic loop or sequence that compensates for Karel’s initial orientation (facing East).
The robot must terminate its execution exactly at the coordinates $(5, 5)$.


Problem Statement 2: Conditional Object Placement on Diagonal Coordinates
Objective: Implement a JavaScript function for Karel that traverses the $5 \times 5$ grid and deposits a "beeper" specifically at the terminal diagonally opposite end.
Technical Constraints:
Function Definition: Create a reusable function (e.g., putBeeperAtEnd()).
Action Sequence: The function must handle the movement logic to reach $(5, 5)$ and invoke the putBeeper() command only upon reaching the target destination.
State Management: Ensure the robot maintains its position at the opposite end after the beeper is placed.

Problem Statement 3: Checkerboard Pattern Implementation

Objective: Program Karel to fill a $5 \times 5$ grid with beepers in a "checkerboard" style, mimicking the alternating pattern of a chessboard.
Technical Constraints & Requirements:
Alternating Logic: Karel must place beepers such that no two beepers are horizontally or vertically adjacent (e.g., if a beeper is at (1, 1), the next beepers should be at (3, 1) and (2, 2)).
Row Transitions: Karel must successfully navigate from the end of one row (e.g., 5, 1) to the start of the next row (e.g., 1, 2) while maintaining the correct alternating sequence.
Grid Boundary Awareness: The program must account for the $5 \times 5$ dimensions, ensuring the pattern remains consistent across odd-numbered and even-numbered rows.
Final State: Upon completion, the grid should display exactly 13 beepers (for a $5 \times 5$ grid starting with a beeper at 1, 1).

