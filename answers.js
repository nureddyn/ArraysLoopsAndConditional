//Part II: JavaScript Reps
/////////////////////////////////
//Easy Going
/////////////////////////////////
//Write a for loop that will log the numbers 1 through 20.
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

/////////////////////////////////
//Get Even
/////////////////////////////////
// Write a for loop that will log only the even numbers in 0 through 200.
// for (let i = 0; i <= 200; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

/////////////////////////////////
//Fizz Buzz
/////////////////////////////////
/*This is a classic problem that you should get really comfortable solving. If you've solved it before,
try to make it more elegant and short.*/
// 1. Write a javascript application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if(i % 5 === 0) console.log("Buzz");
//     else console.log(i);
// }

/////////////////////////////////
//Wild Wild Life
/////////////////////////////////
/*
Use the following arrays to answer the questions below (name,species ,age, hometown):
You should be modifying the elements by accessing them. It is up to you which methods to use.
*/
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// // 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2]++;

// // 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City";

// // 3. Give D'Art a second hometown by adding "Hawkins".
// dart.push("Hawkins");

// // 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// wolfy[0] = "Gameboy";

/////////////////////////////////
//Yell at the Ninja Turtles
/////////////////////////////////
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// // 2. Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
// for (turtle of ninjaTurtles) {
//     console.log(turtle.toUpperCase());
// }

/////////////////////////////////
// Methods, Revisited
/////////////////////////////////
// Here is a list of favMovies:
// const favMovies = [
//     'Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained',
//     'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic',
//     'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther',
//     'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'
// ];
// // - Console log: the index of Titanic
// console.log(favMovies.indexOf('Titanic'));

// /* - Do the following and console.log the final results (I have included some thought questions,
// you don't have to write out an answer for those marked as such):
// */
// // 1. use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
// favMovies.sort();

// // A. The sort() method returned the same array sorted alphabetically.

// // 2. Use the method pop
// favMovies.pop();

// // 3. push "Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy");
// // 4. Reverse the array
// favMovies.reverse();

// // 5. Use the shift method
// favMovies.shift();
// // 6. unshift- what does it return?
// // A. unshift() method returns the array with the new element provided, placed at the beginning

// /* 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself)
// Thought question: did this permanently alter our array?
// */
// favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");
// // A. the splice method altered the original array.

// /* 8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array
// rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// */
// favMovies.splice(favMovies.length / 2, favMovies.length);

// // 9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// let myVariable = favMovies.splice(favMovies.length / 2, favMovies.length);
// console.log(myVariable);

// // 10. console.log your final results
// console.log(favMovies);

// /* 11. After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array,
// what value do we get when we look for the index of something that is not in the array?
// */
// console.log(favMovies.indexOf("Fast and Furious"));
// // A. -1.

/////////////////////////////////
// Where is Waldo
/////////////////////////////////

// With the following multi-dimensional array
// const whereIsWaldo = [
//         ["Timmy", "Frank"], "Eggbert",
//         ["Lucinda", "Jacc", "Neff", "Snoop"],
//         ["Petunia", ["Baked Goods", "Waldo"]]
// ];
// // Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.splice(1, 1);

// // Change "Neff" to "No One"
// whereIsWaldo[1][2] = "No one";

// // Access and console.log "Waldo"
// console.log(whereIsWaldo[2][1][1]);

/////////////////////////////////
// Excited Kitten
/////////////////////////////////

// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
/* 2. For every even number in your loop, log "...human...why you taking pictures of me?...",
"...the catnip made me do it...", or "...why does the red dot always get away..." at random.*/
// let sentences = [
//     "...human...why you taking pictures of me?...",
//     "...the catnip made me do it...",
//     "...why does the red dot always get away..."
// ]
// for (let times = 0; times < 20; times++) {
//     console.log("Love me, pet me! HSSSSSS!");
//     if (times % 2 === 0) {
//         let randomIndex = Math.floor(Math.random() * sentences.length);
//         console.log(sentences[randomIndex]);
//     }
// }

/////////////////////////////////
// Find the Median
/////////////////////////////////

// - Find the median number in the following nums array, then console.log that number.
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// nums.sort((a, b) => a - b);

// function median(array) {
//     let result;
//     if (array.length % 2 === 0) {
//         result = (array[(array.length / 2) - 1] + array[(array.length / 2)]) / 2;
// } else result = array[Math.floor((array.length - 1) / 2) + 1];
//     return result;
// }
// console.log(median(nums));

/////////////////////////////////
// Fibonacci
/////////////////////////////////
// Return the first 'number' elements of the Fibonacci sequence
// function fib(n) {
//     if (n <= 0) return 0;
//     else if (n === 1) return 1;
//     return fib(n - 1) + fib(n - 2);
// }
// let number = 6
// for (let i = 0; i < number; i++) {
//     console.log(fib(i));
// }


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// let kristynsShoe = kristynsCloset[0];
// kristynsCloset.shift();
// thomsCloset[2].push(kristynsShoe);

// console.log(`Kristyn is wearing a ${kristynsCloset[1]}, a ${kristynsCloset[3]} and a ${kristynsCloset[4]}`);
// console.log(`Thom is wearing a ${thomsCloset[0][3]}, a ${thomsCloset[1][0]} and a ${thomsCloset[2][0]}`);


/////////////////////////
// Dirty Laundry
////////////////////////
/*1. Time to do laundry - loop through Kristyn's closet and log
the sentence "WHIRR: Now washing (item)" for each item in the array.
*/
kristynsCloset.forEach(item => console.log(`WHIRR: Now washing ${item}`));

/////////////////////////
// Inventory
////////////////////////
/* Thom wants to do inventory on his closet. Using bracket notation, 
log the arrays containing all of Thom's shirts, pants, and accessories.
*/
thomsCloset.forEach((division) => {
    division.forEach(item => console.log(item));
});
