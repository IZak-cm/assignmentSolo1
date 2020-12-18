function sortCharacters(words){
    return words.split('').sort().join('');
  };
  
  console.log(sortCharacters("hello"));
  console.log(sortCharacters("code"));
  console.log(sortCharacters("developer"));
  console.log(sortCharacters("backend"));