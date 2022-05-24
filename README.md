# Fetch-Project

## Thank you for taking the time to review my project!

## I achieved the requirements for the project in the following way:

### We want no payer's points to go negative
    1) We have a in-memory data of the total amount of points in user's database (found in public, points.json) if the user total is less than the item purchase price, the transaction does not even start. preventing any instances where the total goes below zero (try clicking "Quick Buy" for the Fetch giftcare).
    2) After the transaction function is ran, the user total updates to the new amount in the updated database after the transaction posts which will have the negative values of the transactions (we dont have to worry about any one payer value going negative either since we know the user will have enough points)

### We want the oldest points to be spent first (oldest based on transaction timestamp, not the order they’re received)  
    1) We have a separate in-memory array of the databasse that is sorted by the timestamp (you will notice that the json database in the public folder is not sorted by date but the "View Your Points Log!" page is) so that when it is pulled by our transaction loops, the database is iterated in reverse order.
    2) We do a greedy operation with current point set as the initial total cost. 
    3) In every interation the points inside the payer database is deducted for its value and a new record is created in the database with the negative value of the temporary transaction.
    4) Remaining value is swapped with the "current points" and the loop repeats until the transaction cost reaches zero. the final iteration will post the negtaive value of the final transction.
    5) The total of user's points is updated since we have a negative value transaction adding up to the new total cost now.

This was acheived in the final requirement of having this done in a few hours (took me about 5-6 hours) so the CSS is messy and the functions are basic. But it is still very scalable using any of the database pulling modules like mongoose I used in my team's website starryfields.com.


## How to navigate the project:
    1) clone or download the whole folder. cd to root folder and "npm run dev" (nodeJS)
    2) "Your Total Remaining Points!" Shows the running user's total pulled from the json file in the public directory inside the "fetchrewards" folder.
    3) "View Your Points Log!" shows the sorted version of the point.json file sorted by its date. Try changing the values in the JSON Database!
    4) "Quick Buy" function will deduct the points listed in "productlist.json" database. and the transaction function that runs on click will post new data to "points.json" giving us a running total everytime its run.


## Thanks again for chekcing it out!

## To see my full-stack project please visit starryfields.com, its hosted on a real domain name! 