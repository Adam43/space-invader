Space Invaders Guide

Enemies 
1. Enemies on top of the screen
2. Enemies move side to side and down towards our player
3. At random the enemies can shoot bullets

Player
1. Bullets shoot faster than the enemies 
2. Player is able to move left and right to dodge and attack enemies
3. Objective is to stay alive and avoid enemy bullets. Shoot all the enemies and you win. If you get hit by the bullets or if the enemy comes in contact with you, you lose.

Enviroment:
1. Space background is added
2. Sound is added (pending)


enemyMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
    [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  ];


  Methods:
1.FOREACH
  The first forEach method is present when I use to represent the row and the row index on the canvas. This will esentially create a row and row index for all the numbers in the enemy Map array.
2.FOREACH
  The second forEach method is present when I use it to take the three enemy types in my enemy map which are [1,2,3] in the array. Then I included the enemy index to account for the position of the enemies within the array.
3.FOREACH
  I used the third forEach method to loop over all of the enemy rows. Essentially, I make the enemy objects draw itself using the flat method to allow the enemies to fill up all the rows in a 2D format.
4.FOR...OF 
  I used the for...of loop method to loop over the enemy rows again to check if the current moving direction is either right or left to make sure that enemies are able to move down 1 and continue to move to the next moving direction. 


  Current Errors:
1. Timer number is still being presented in the console
2. Player isn't visible on the canvas