/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

//console.log(getRandomNumber(12))

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

const arr = [1,5,2,9,6,6,5,3,2]
console.log(sortByNumber(arr))

/*******************
 * YOUR CODE BELOW *
 *******************/
const d6Image = document.querySelector('#d6-roll');
d6Image.src = 'images/start/d6.png';
d6Image.addEventListener('click', function () { 
  const random = getRandomNumber(6); 
  d6Image.src = `images/d6/${random}.png`;
  sixes.push(random);
});

//const firstName = Chris
//const lastName = Gross
//console.log(`${firstnMane} ${lastName} is here`)

// click listener 
// finding a random number/numbers
// adding that number to the database (array at top 
// change the image to reflect the number/numbers)
/*******************
 * EVENT LISTENERS *
 *******************/

const doubled6roll1 = document.querySelector('#double-d6-roll-1');
const doubled6roll2 = document.querySelector('#double-d6-roll-2');
d6Image.src = 'images/start/d6.png';
d6Image.src = 'images/start/d6.png';
  const random = getRandomNumber(6);
   
      






/******************
 * RESET FUNCTION *
 ******************/
//clear out the data from the arrays 
// reset the starting images


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
