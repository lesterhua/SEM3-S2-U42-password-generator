//define random index and return array value
function sample(collection) {
  const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

function generatePassword(options) {
  //define  all things of user need
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const number = "1234567890";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  //define dummy data of req.body
  //after export need to delete it
  // const options = {
  //   length: 7,
  //   lowercase: "on",
  //   uppercase: "on",
  //   numbers: "on",
  //   symbols: "on",
  //   excludeCharacters: "40"
  // };

  //create a collection to store things user picked up
  //setting new array
  let collection = [];
  //get date and string into array
  // add array to new array
  if (options.lowercase === "on") {
    collection = collection.concat(lowercaseLetters.split(""));
  }
  if (options.uppercase === "on") {
    collection = collection.concat(uppercaseLetters.split(""));
  }

  if (options.numbers === "on") {
    collection = collection.concat(number.split(""));
  }

  if (options.symbols === "on") {
    collection = collection.concat(symbols.split(""));
  }

  //remove things user do not need
  // if (options.excludeCharacters) {
  //   collection = collection.filter(function(character) {
  //     if (options.excludeCharacters.includes(character)) {
  //       return false;
  //     }
  //     return true;
  //   });
  // }
  if (options.excludeCharacters) {
    //use filter to search every string(collection)
    //if options.excludeCharacters includes a string = true
    // delete it ==] false , save it = true
    collection = collection.filter(character => {
      return !options.excludeCharacters.includes(character);
    });
  }
  // console.log("collection", collection);

  // return error if array(collection) is empty
  if (collection.length === 0) {
    return "There is no valid characters in your selection";
  }

  //start generating password
  let password = "";
  for (let i = 0; i < options.length; i++) {
    password += sample(collection);
  }
  // console.log("password", password);
  //return the generated password
  return password;
}

//export generatePassword function for another files using
module.exports = generatePassword;
