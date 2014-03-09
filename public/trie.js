Trie = function(){
  this.characters = {};
};

Trie.prototype.learn = function(word, index){
  if (index === undefined){index = 0;}
  if (index < word.length) {
    var letter = (word[index]);
    if (this.characters[letter] === undefined) {
      this.characters[letter] = new Trie();
    }
    if (index === (word.length - 1)) {
      this.characters[letter].isWord = true;
    }
    this.characters[letter].learn(word,(index+1));
  }
};

Trie.prototype.getWords = function(words, currentWord){
  words = words || [];
  currentWord = currentWord || "";
  if (this.isWord) {
    words.push(currentWord);
  }

  for (var char in this.characters) {
    var newWord = currentWord + char;
    if (this.characters[char].characters) {
      this.characters[char].getWords(words, newWord);
    }
  }
  return words;



  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.
};

Trie.prototype.find = function(word, index){
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.
};