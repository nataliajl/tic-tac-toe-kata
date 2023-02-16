# Notes

**Label**  
✅ done 🚧 WIP ❌ ERROR  

TODO:

# Domain
- tic-tac-toe board game 
    - also known as "jogo da velha" in portuguese
- 3 blocks for each line
- separator between blocks
    | |  - block
   -+-+- - separator
    | |  - block
   -+-+- - separator
    | |  - block

- board center is composed of 2 separators and one block 
   -+-+- - separator
    | |  - block
   -+-+- - separator

- played in rounds
- two players
    - player X
    - player O
- ends with one winner or a draw
- sequence of 3 Xs or Os is a win
- sequence can be horizontal, vertical or diagonal
- No sequence of Xs or Os is a drew

# Podmodoro 1 🍅:
- configure environment ✅
- Define domain ✅
- should return " | | " when creating block 🚧
- should return "-+-+-" when creating separator

# Pomodoro 2 🍅:
- should return " | | " when creating block ✅
- should return "-+-+-" when creating separator ✅
- should return list with "-+-+-", " | | ", "-+-+-" when creating board center ✅
- refactor generateCenter with generateSeparator and generateBlock ✅
- should return list with " | | ", "-+-+-", " | | ", "-+-+-", " | | " when creating board ❌

# Pomodoro 3 🍅:
- add break to the end of block and separator ✅
- should return " | | ", "-+-+-", " | | ", "-+-+-", " | | " with break after each line when creating board ✅
- Analyze Logic to continue 🚧