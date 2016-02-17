/////////// Prompt 1 ///////////
function findMax(array){
  var max = -Infinity; // + 1
  for (var i = 0; i < array.length; i++){ // for loop : n
    if (array[i] > max){  // + 1
      max = array[i]; // + 0 or 1
    }
  }
  return max; // this is not an operation per se, but if it were, it would be +1
}

//My comments: We consider the max number of times that var max will be reset, which is the array length (n). 
//My time complexity assessment: 1 + n (1 + 1) + 1 = 2n + 2 = O(n) = LINEAR TIME

/////////// Prompt 2 ///////////
function contains(array, target){
  return array.indexOf(target) > -1; // n
}

//My comments: The indexOf method in Javascript implements a for-loop to check every value in the input array.
function indexOf(){ 
    var index = -1; // + 1
    for (var i = 0; i < array.length; i++){ // n
      if (array[i] === target){ // +1 assess
        return index; // +0 or +1 return
      }
    }
    return index; // +1 at most
}
// this internal method has time complexity of 1 + n (1 + 1) + 1 = 2n +2

// My time complexity assessment: Time complexity for Prompt 2 should be 2n +2 PLUS returning the result (+1).
// which is 2n + 3 ... which again resolves to O(n) = LINEAR TIME

/////////// Prompt 3 ///////////
/////////// time complexity: 
function partialContains(array, target, start){
  return array.slice(start).indexOf(target) > -1;
}

//My comments: We already assessed that the indexOf method in Javascript results in O(n) time complexity. 
  // This function adds a .slice method. We know that slice makes a [modified] copy of the array.
  // If the slice method is simply 1 additional step, it should be O(n) + 1 or O(n). However, we must then return a boolean
  // which is its own operation.  
  
function partialContains(array, target, start){
  var newArray = array.slice(); // + 1
  var index = newArray.indexOf(target); // n
  return index > -1; // [+1]
}
  
//My time complexity assessment: n,  which resolves to O(n) = LINEAR TIME

/////////// Prompt 4 ///////////
function square(array){
  for (var i = 0; i < 3; i++){ // a for loop that only iterates 0 to 2 =  +3 operations
    array[i] = array[i] * array[i]; // + 2 operations (multiplication and assignment)
  }
  return array; // [+1]
}

//My time complexity assessment: 3(2) + 1 = 6 + 1 = 7 which is 0(c) or CONSTANT TIME 

/////////// Prompt 5 ///////////
function repeat(array){
  var repeat = []; // +1
  for (var j = 0; j < 10; j++){ // n
    repeat[j] = []; // + 10 (create 10 empty arrays)
    for (var i = 0; i < array.length; i++){ // n
      repeat[j].push(array[i]); // 1
    }
  }
  return repeat; // [+1]
}

// My time complexity assessment: 1 + n ( 10(n (1)) ) + 1 = n (1n x 10) + 2  = n^2 + 10n + 2 = O(n^2) or QUADRATIC TIME

// What if we replace 10 with a parameter? 
// Hmm, if we did that, we'd have a function that looks like this:

function repeat(array, number){
  var repeat = []; // +1
  for (var j = 0; j < number; j++){ // n
    repeat[j] = []; // + n (create n empty arrays)
    for (var i = 0; i < array.length; i++){ // n
      repeat[j].push(array[i]); // 1
    }
  }
  return repeat; // [+1]
}

// In that case, we would create a "parameter number" of empty arrays, rather than 10.  
// New time complexity assessment: 1 + n ( n(n (1)) ) + 1 = n(n(n(1))) + 2 = n^3 +2 = O(n^3) or CUBIC TIME!

/////////// Prompt 6 ///////////
/////////// time complexity: 
function gcf(num1, num2){
  if (num1 > num2){ //this ensures num1 is the smaller number
    var temp = num1;
    num1 = num2;
    num2 = temp;
  }
  for (var i = num1; i > 1; i--){
    if (num1 % i === 0 && num2 % i === 0){
      return i;
    }
  }
  return 1;
}


/////////// Prompt 7 ///////////
/////////// time complexity: 
function countChar(string){
  var counts = {};
  var currChar, currCharCount;
  for (var i = 0; i < string.length; i++){
    currChar = string[i];
    currCharCount = 1;
    for (var j = i+1; j < string.length; j++){
      if (currChar === string[j]){
        currCharCount++;
      }
    }
    if (!counts.hasOwnProperty(currChar)){
      counts[currChar] = currCharCount;
    }
  }
  return counts;
}


/////////// Prompt 8 ///////////
/////////// time complexity: 
var factorial = function(num){
  if (num < 0){
    return;
  }
  if (num === 0 || num === 1){
    return 1; 
  } else {
    return num * factorial(num-1);
  }
}


/////////// Prompt 9 ///////////
/////////// time complexity: 
function tournament(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    results = hotPotato(players); 
    //assume hotPotato is a function where sets of
    //three players are teleported simultaneously
    //to a room with a potato. at the end of 5 minutes, 
    //the player in each room holding the potato is the winner 
    //and all winners get teleported to the results array 
    return tournament(results);
  }
}



/////////// Prompt 10 ///////////
/////////// time complexity: 
function allPasswords(allowedChars, maxLength){
  var results = [];

  function findPassword(currentAttempt){
    if (currentAttempt.length > 0){
      results.push(currentAttempt.join(""));
    }
    if (currentAttempt.length <= maxLength){
      for (var i = 0; i < allowedChars.length; i++){
        findPassword(currentAttempt.concat(allowedChars[i]));
      }
    }
  }

  findPassword([]);
  return results;
}


/////////// Prompt 11 ///////////
/////////// time complexity: 
function findColor(quadTree, coordinates){
  //a quad tree is a tree where each node has 4 children 
  //or no children, usually used to divide a two-dimensional
  //space into coordinates
  //coordinates is an array [xpos, ypos]

  if (!Array.isArray(quadTree.color)){
    return quadTree.color;
  } else {
    var quadrant = findQuadrant(quadTree, coordinates); 
    if (quadrant === "NE") {
      return findColor(quadTree.color[0], coordinates);
    } 
    if (quadrant === "SE") {
      return findColor(quadTree.color[1], coordinates);
    }
    if (quadrant === "SW") {
      return findColor(quadTree.color[2], coordinates);
    } 
    if (quadrant === "NW") {
      return findColor(quadTree.color[3], coordinates);
    }
  }

  function findQuadrant(quadTree, coordinates){
    var y = (quadTree.coordinates.top + quadTree.coordinates.bottom)/2;
    var x = (quadTree.coordinates.left + quadTree.coordinates.right)/2;
    if (coordinates[0] > x){
      if (coordinates[1] > y){
        return "NE";
      } else {
        return "SE";
      }
    } else {
      if (coordinates[1] > y){
        return "NW";
      } else {
        return "SW";
      }
    }
  }
}



/////////// Bonus! ///////////
/////////// time complexity: 
//this will require some math to determine 

function tournamentRedux(players){
  var results;
  if (players.length < 3){
    return players[0];
  } else {
    for (i = 0; i < players.length; i = i + 3){
      results.push(hotPotato([players[i], players[i+1], players[i+2]])); 
      //assume hotPotato is a function where 
      //the three players at a time must play hot potato for 5 minutes. 
      //the player in the room holding the potato is the winner
      //and gets returned from the function 
    }
    return tournament(results);
  }
}







