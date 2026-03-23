Tank Grid Simulation
Problem Description
You are given a 2D grid of dimensions M × N filled with zeros. A tank is placed at a specific position on the grid and faces a given direction.
The tank is represented by a directional symbol:

^ — facing Up
v — facing Down
< — facing Left
> — facing Right

All other cells contain 0.

Initial State Example
Grid: 4 rows × 4 cols
Tank position: row 1, col 2
Tank direction: LEFT

0, 0, 0, 0
0, 0, <, 0
0, 0, 0, 0
0, 0, 0, 0

Commands
Implement a system that accepts the following commands:
CommandDescriptionMOVEMove the tank 1 step forward in its current directionROTATE_LEFTRotate the tank 90° to the left without movingROTATE_RIGHTRotate the tank 90° to the right without movingFIREFire a bullet in the current direction (marks cells with 1 until boundary)PRINTPrint the current state of the grid

Rules & Constraints

The tank cannot move outside the grid boundary — ignore the move if it hits a wall
Rotating does not change position, only direction
When FIRE is called, mark all cells in the firing direction with 1 until the grid edge
The tank symbol always reflects its current facing direction
Grid cells are either 0 (empty), a tank symbol, or 1 (bullet trail)


Example Walkthrough
Initial:          After ROTATE_RIGHT:    After MOVE:
0, 0, 0, 0        0, 0, 0, 0             0, 0, ^, 0
0, 0, <, 0   →    0, 0, ^, 0    →        0, 0, 0, 0
0, 0, 0, 0        0, 0, 0, 0             0, 0, 0, 0
0, 0, 0, 0        0, 0, 0, 0             0, 0, 0, 0

After FIRE:
0, 0, 0, 0   ← bullet trail stops at boundary
0, 0, 0, 0
0, 0, 0, 0
0, 0, ^, 0   ← tank stays, fires upward → cells above become 1

What You Need to Build
javascript// 1. Create the grid
createGrid(rows, cols)

// 2. Place the tank
placeTank(row, col, direction)

// 3. Execute commands
executeCommand(command)

// 4. Return grid state at any point
getGrid()
```

---

### Follow-up Questions (likely asked in interview)

1. What happens if **two tanks** are on the same grid?
2. How would you handle a tank being **hit by a bullet**?
3. Can you make this work in **real-time** with keyboard controls?
4. How would you **store and replay** a sequence of moves?

---

### Difficulty Level
```
Category  : Simulation / OOP Design
Difficulty: Medium
Companies : Warner Bros, EA, Activision, game-adjacent tech roles
Skills    : 2D arrays, state management, OOP, boundary conditions