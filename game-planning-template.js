//Game title: 

 /*General Overview of Gameplay 
Enemies 
1. Enemies on top of the screen
2. Enemies move side to side and down towards our player
3. At random the enemies can shoot bullets

Player
1. Bullets shoot faster than the enemies 
2. Player is able to move left and right to dodge and attack enemies
3. Objective is to stay alive and avoid enemy bullets. Shoot all the enemies and you win. If you get hit by the bullets or if the enemy comes in contact with you, you lose.

Game starts with user vs computer enemies 
The main characters job is to shoot and dodge incoming danger from the enemies as they collect points along the way
As the main character hits each level the enemies get faster on their pursit to kill the main character
*/


/*Requirements - include a short note about how your game will fulfill each of these requirements 

user interaction causes changes to the web page using DOM methods (at least 3 changes during game play) can be images, text, score indicator 
  -

correct use of at least 1 JavaScript Class that is used in the game 
  -1 Class that is used is class space ship

use of a method defined in your class 
  -Two methods that will be defined in my class is the method to move left, right and a method to shoot laser.

keep score - user must be able to gain points
  -The user will be able to gain points by attacking enemies as the score board is presented on the top center of the game

declare if the user won or lost at the end of the game and display on the page 
-The user will win if the user eleminates all enemies off the screen.  
-The user will lose if user's icon is attacked by enemy or debri. An attack is if the user icon comes in contact with the enemy or debri icon.

 Use of CSS to set colors, fonts and overall layout of the page
  -My game will use CSS to color the background, main character and enemy icon colors, the main characters attack seqence as well as any objects that need to be avoided. 

  -My game is placed on a canvas which is styled to create a shadow affect around the game and a background space image is implemented.

use of iteration. examples: for loop, while loop, .forEach method, .map method
  -  Methods:
1.FOREACH
  The first forEach method is present when I use to represent the row and the row index on the canvas. This will esentially create a row and row index for all the numbers in the enemy Map array.
2.FOREACH
  The second forEach method is present when I use it to take the three enemy types in my enemy map which are [1,2,3] in the array. Then I included the enemy index to account for the position of the enemies within the array.
3.FOREACH
  I used the third forEach method to loop over all of the enemy rows. Essentially, I make the enemy objects draw itself using the flat method to allow the enemies to fill up all the rows in a 2D format.
4.FOR...OF 
  I used the for...of loop method to loop over the enemy rows again to check if the current moving direction is either right or left to make sure that enemies are able to move down 1 and continue to move to the next moving direction. 
*/



/* Plan functions 
start thinking about your basic functions! give them a name and list what they do 
-The Basic should be the left and right key while using the space bar to shoot







*/