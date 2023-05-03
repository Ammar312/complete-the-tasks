// Write a function that takes in a number from an input element and displays the factorial of that number in an output element.
window.getTask1 = () => {
  let num = document.querySelector("#task1").value;
  let factorial = 1;
  if (num < 0) {
    alert(" factorial does not exist for negative numbers");
  } else if (num === 0) {
    alert("The factorial of 0 is 1");
  } else {
    for (let i = 0; i < num; i++) {
      factorial = factorial * (i + 1);
    }
  }
  document.querySelector("#result1").style.display = "block";
  document.querySelector(
    "#result1"
  ).textContent = `The factorial is ${factorial}`;
};
// console.log(factorial);
// Write a function that takes in a string from an input element and displays the same string with all the vowels removed in an output element.
window.getTask2 = () => {
  let str = document.querySelector("#task2").value;
  let modify = str.replace(/[aeiou]/gi, "");
  document.querySelector("#result2").style.display = "block";
  document.querySelector("#result2").textContent = modify;
};
// Write a function that takes in an array of numbers from an input element and displays the largest number in the array in an output element.
window.getTask3 = () => {
  let arr1 = document.querySelector("#task3").value;
  const arr1Split = arr1.split(",");
  const resultTask3 = Math.max(...arr1Split);
  document.querySelector("#result3").style.display = "block";
  document.querySelector("#result3").textContent = resultTask3;
};
// Write a function that takes in a string from an input element and displays the same string with the first letter of every word capitalized in an output element.
window.getTask4 = () => {
  const sentence = document.querySelector("#task4").value;
  const breakWords = sentence.split(" ");
  for (let i = 0; i < breakWords.length; i++) {
    breakWords[i] = breakWords[i][0].toUpperCase() + breakWords[i].slice(1);
  }
  const capatilizedSentence = breakWords.join(" ");
  document.querySelector("#result4").style.display = "block";
  document.querySelector("#result4").textContent = capatilizedSentence;
};
// Write a function that takes in an array of numbers from an input element and displays the average of those numbers in an output element.
window.getTask5 = () => {
  let arr2 = document.querySelector("#task5").value;
  const numbersArray = arr2.split(",");
  let sumArray = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sumArray = sumArray + Number(numbersArray[i]);
  }
  const averageArray = sumArray / numbersArray.length;
  document.querySelector("#result5").style.display = "block";
  document.querySelector(
    "#result5"
  ).textContent = `The Average is ${averageArray.toFixed(2)}`;
};
// Write a function that takes in a string from an input element and displays true if the string is a palindrome and false if it is not in an output element.
window.getTask6 = () => {
  const word = document.querySelector("#task6").value;
  // kayak, deified, rotator, repaper, deed, peep, wow, noon.
  const lowerWord = word.toLowerCase();
  const splitWord = lowerWord.split("");
  const reverseWord = splitWord.reverse();
  const joinWord = reverseWord.join("");
  if (lowerWord === joinWord) {
    document.querySelector("#result6").style.display = "block";
    document.querySelector("#result6").textContent = "True";
  } else {
    document.querySelector("#result6").style.display = "block";
    document.querySelector("#result6").textContent = "False";
  }
};
// Write a function that takes in an array of strings from an input element and displays a new array with all the strings sorted in alphabetical order in an output element.
window.getTask7 = () => {
  const getString7 = document.querySelector("#task7").value;
  const strArray = getString7.split(",");
  const sortArray = strArray.sort();
  document.querySelector("#result7").style.display = "block";
  document.querySelector("#result7").textContent = sortArray;
};
// console.log(sortArray);
// Write a function that takes in a number from an input element and displays true if the number is prime and false if it is not in an output element.
window.getTask8 = () => {
  const number = Number(document.querySelector("#task8").value);
  let isPrime = true;
  document.querySelector("#result8").style.display = "block";
  // check if number is equal to 1
  if (number === 1) {
    document.querySelector("#result8").textContent =
      "1 is neither prime nor composite number.";
  }
  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime === true) {
      document.querySelector(
        "#result8"
      ).textContent = `True. ${number} is a prime number`;
    } else {
      document.querySelector(
        "#result8"
      ).textContent = `False. ${number} is not a prime number`;
    }
  }

  // check if number is less than 1
  else {
    document.querySelector("#result8").textContent =
      "The number is not a prime number.";
  }
};
// Write a function that takes in an array of objects from an input element and displays a new array with all the objects sorted by a given property in an output element.
window.getTask9 = () => {};
