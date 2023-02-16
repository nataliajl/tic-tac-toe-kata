
# Tic-Tac-Toe

**Description**  
The exercise involves developing a Tic-Tac-Toe game strictly adhering to the TDD rules. 

**Game Rules**  
https://en.wikipedia.org/wiki/Tic-tac-toe

**TDD Scenarios**  
1. Game Board Creation phase
```
Game Board Creation...
    | |
   -+-+-
    | |
   -+-+- 
    | |
Board Created.
The game will start with player X
```
2. Player X won with a vertical line
```
Player X:
    X| |
    -+-+-
    X|O|
    -+-+-
    X| |O
PLAYER X WON!
```
3. Player O won with a horizontal line
```
Player O:
    X| |X
    -+-+-
    O|O|O
    -+-+-
    X| |
PLAYER O WON!
```
4. Player X won with a diagonal line
```
Player X:
    X| |
    -+-+-
    O|X|
    -+-+-
    O| |X
PLAYER X WON!
```
5. Game ends with a draw
```
Player X:
    X|O|X
    -+-+-
    O|O|X
    -+-+-
    X|X|O
GAME ENDS WITH A DRAW!
```
**GOAL**  
The system could be run in BOT mode to print on the screen all player's moves (with a 2 seconds timeout between each round) until someone won or the game ends with a draw.
