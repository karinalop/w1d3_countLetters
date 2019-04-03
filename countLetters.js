function countLetters(str){ // "Lighthouse Labs"
  var noSpaces = str.split(" ").join("");
  var countLetters={};

  for (var i = 0 ; i < noSpaces.length; i++){ // each character in the array
    if(countLetters[noSpaces[i]]) // this character already a key
        countLetters[noSpaces[i]] ++;
        //console.log(countLetters);
      else
        countLetters[noSpaces[i]]=1;
  }
  return countLetters;
}

console.log(countLetters("Lighthouse labs"));
