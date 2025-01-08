// Iteration 1: Names and Input
let hacker1 = "Bobby";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jean";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let hacker1UpperCase = hacker1.toUpperCase();
// let hacker1Final = hacker1UpperCase.slice(0, 1);

let x = 0;
let newName = "";
while (x < hacker1UpperCase.length) {
  newName += hacker1UpperCase[x] + " ";
  x++;
}
console.log(newName);

let y = hacker1.length - 1;
let nameBackwards = "";

while (y >= 0) {
  nameBackwards += hacker1[y];
  y--;
}
console.log(nameBackwards);

// let i = 0
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let j = 10;
// while (j >= 0) {
//     console.log(j);
//     j--;
// }

// bonus

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum dolor semper dolor lobortis, et finibus quam efficitur. Praesent semper ante metus, eget pharetra velit pretium a. Nullam laoreet nec dui ut cursus. Nunc blandit tristique tellus, ut tempus risus fermentum sit amet. Etiam tempus consectetur neque, non scelerisque nisl convallis quis. Nunc egestas, purus vel commodo sollicitudin, elit elit dapibus dui, in dictum magna lacus id justo. Vestibulum blandit vel quam sit amet laoreet. Nulla cursus, eros sed laoreet fringilla, nisi massa blandit diam, at sodales purus quam quis ex. Donec in augue urna. Curabitur sit amet accumsan dui.

Sed ut aliquet quam, quis placerat ipsum. Donec mollis lectus orci, id facilisis orci pretium ac. Ut feugiat euismod massa, hendrerit volutpat sem volutpat in. Nulla lacinia quam quis lorem luctus, quis ultrices leo ultrices. Etiam risus nulla, commodo sed lacinia sit amet, commodo in risus. Aenean quis convallis magna. Praesent fermentum mattis rhoncus. Vivamus quam justo, semper sed nunc vel, tincidunt dictum ligula. Maecenas eget lobortis quam, vitae hendrerit leo. Fusce placerat hendrerit lorem, in mollis augue scelerisque eleifend.

Phasellus a lectus nec risus euismod porttitor. Fusce dictum auctor tellus non malesuada. Maecenas consequat dapibus mi, a cursus sapien dictum vitae. Aliquam semper odio non congue aliquam. Aliquam lorem lacus, faucibus at facilisis id, gravida placerat ex. Donec congue sem quis sem blandit mollis. Donec volutpat lacus ac urna efficitur varius.`;
function countWords(str) {
  const wordsArray = str
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  return wordsArray.length;
}

const wordCount = countWords(longText);
console.log(wordCount);

function countOccurrences(str, word) {
  // split the string by spaces in a
  let a = str.split(" ").join(",").split(".").join(",").split(",");
  //   console.log(a);
  // search for pattern in a
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    // if match found increase count
    if (word == a[i]) count++;
  }
  return count;
}

console.log(countOccurrences(longText, "et"));

// for (let i = 0; i < longText.length; i++) {

//     wordCount = i;

// }
