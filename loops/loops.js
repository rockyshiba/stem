//LOOPS
//Loops are a way of automating code. They do repeatable code so you don't have to. 

//Consider this: let's say you want to display numbers 1 to 10
//console.log(1)
//console.log(2)
//console.log(3)

//although we could do that, it would require a lot of typing. What if you had to display 1 to 1000?

//There are at least two kinds of loops common throughout programming languages: for and while

//FOR LOOPS
//These are the most common loops and are used when there's a known condition (like counting 1 to 10. You know the code should end once 10 is reached.

//Here's an example of a for loop in javascript
for(var i = 1; i < 10; i++){
    console.log(i);
}

//Run this loop and take a look at the console. Do you see numbers 1 to 10? What needs to be changed?
//Read the for loop condition out loud
//Let's look at it in more depth

//we start forloops with "for" and follow it with a condition in () parentheses. 
//for()

//next, we have a starting point. Here we set up a variable called i and assigned it a value of 1. It doesn't have to be i, but the standard
//is usually to use i in loops. The i stands for index amongst programmers. Remember that we're making a statement, so we have to use ; at the end of it
//for(var i = 1;

//next, we have a condiional that checks for a boolean value true or false. Here, it tells the loop to keep going if the condition is true.
//When that condition is false, the loop stops. Here, we're telling the loop to continue looping if i is less than 10. 
//If i is greater than 10, the loop stops.
//for(var i = 1; i < 10;

//next, we're telling the loop to increase the value of i by 1 after each round of the loop. i++ is another way of saying i = i + 1. Because
//a = a + 1 is so common, javascript uses ++ to do the same thing. If you want to subtract by 1 (a = a - 1), javascript has that too and it's --
//for(var i = 1; i < 10; i++)

//and now you have a for loop with a condition. With that, you can do stuff with it and that stuff is done within {} brackets
//for(var i = 1; i < 10; i++){}

//we wanted the loop to count to 10 so we put that inside the {} brackets
console.log("Counting from 1 to 10");
for(var i = 1; i < 10; i++){
    console.log(i);
}

//In summary, this loop initates a variable called i and assigns it a value of 1. If i is less than 10, the loop continues. Once a round of the loop is done,
//the value of i increases by 1.

//Here's an example of a for loop counting down from 10 to 1 using --
console.log("Counting down from 10 to 1");
for(var i = 10; i > 0; i--){
    console.log(i);
}
//We're setting i to 10. If i is greater than 0, continue. Decrease the value of i by 1 


//WHILE LOOPS
//while loops also automate code but are used when a condition is unknown or indeterminate
//Like for loops, while loops operate on a condition as long as the condition is true. 
//If the condition is true, the loop executes
//When the condition is false, the loop terminates and javascript continues on the rest of the script

//Let's go through an example of simple while loop
console.log("A while loop that counts to 10");
var aNumber = 1;
while(aNumber <= 10){
    console.log(aNumber);
    aNumber++;
}

//IN DETAIL
/*The goal here is to have a while loop that counts to 10. For this to happen, we need to set up a variable first that contains a number to start with.
Here we initialized a variable called aNumber to 0 for the while loop to start with. 

We start off the while loop with while
while

In () parentheses, we set a condition for the while loop to check. We want to count to 10 so we have to include 10. How this is done is using
<= which means "less than or equal to". 
while(aNumber <= 10)

In English, we're saying "while aNumber is less than or equa to 10, do this loop". If aNumber is not less than or equal to 10 the while loop 
will no execute.

Next, give the while loop something to and that's done in {} brackets
while(aNumber <= 10){
    console.log(aNumber); if aNumber was found to be less than or equal to 10 then output to the console the value of aNumber
    aNumber++; then add 1 to the value of aNumber
}

If aNumber was initialized to 11, what would happen? Or rather, what wouldn't happen? Try it. 


*/

//Here's an example of a while loop
console.log("A while loop that checks for a name.");
var notFound = true;
var names = ["Aaron", "Bob", "Cassidy", "Edward"];
var targetName = "Cassidy";
var namesIndex = 0;

while(notFound){
    if(names[namesIndex] === targetName){
        notFound = false;
        console.log(targetName + " found!");
    }
    else{
        namesIndex++;
    }
}

//IN DETAIL
//We start with a goal in mind. Here we want to find a target name (var targetName) in an array of names.
//Arrays have indices so we need to declare an index and at the beginning of an array which is index 0 (var namesIndex = 0)
//We need to get the loop going so I've declared a boolean variable (var notFound = true). This is going to be used as a condition for the loop.

//we start a while loop with the while
//while

//Then add a condtion in () parentheses
//while(notFound)

//Now you can do something with the loop in {} brackets
//while(notFound){}

//In this loop let's check for a name
/*while(notFound){
    if(names[namesIndex] === targetName){ if the value of the index of the names array equals the target name
    }
    else{ otherwise, do this
    }
}*/

//Adding in the action of the if/else logic
/*while(notFound){
    if(names[namesIndex] === targetName){
        notFound = false; now that the name has been found, notFound will set to false so the while loop won't do another loop
        console.log(targetName + " found!"); tells you that the target name has been found
    }
    else{
        namesIndex++; Name wasn't found so the namesIndex value will increase by 1 so when the while loop executes again the namesIndex 
                        will be the next item in the names array
    }
} */

//You can actually do this another way
/*for(var i = 0; i < length.names; i++){ 
    //here, i starts at 0. As long as i is less than the length of the names array, continue. Then add 1 to i. 
    //This loop ends when i is not less than the length of the names array
    if(names[i] === targetName){
        console.log("You've found another way to find " + targetName);
    }
}*/

//A WARNING ABOUT WHILE LOOPS
/*For loops are typically the norm for looping. While loops are used if you don't know where the loop will end. Potentially, what if
there is no end? Then you'll end up with a while loop that executes forever. This could prevent a page from running and most importantly,
the rest of your javascript code after the while loop won't continue until the while loop ends.

Here are some examples of never ending while loops. Remember that while loops execute when a condition is true, so think of conditions that
will always be true.

while(true){
    //here I'm using a boolean true. True is always true so this while loop will go on forever. 
    console.log("This while loop goes on forever.");
}

while(a = 1){
    //here there's a variable assignment which are always true.
    console.log("This loop will also go on forever");
}

var bee = "bee";
while(bee === "bee"){
    //here we're using the === comparator. This is fine.
    console.log(bee);
}
//However, we're not changing the value of bee anywhere so this loop will also go on forever.  
 */