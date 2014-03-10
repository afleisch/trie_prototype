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
};

Trie.prototype.find = function(word, index){
  word = word || ""
  index = index || 0;
  var n = word[index]
  if (index === word.length){
    return this;
  } else if (this.characters[n]){
    return this.characters[n].find(word, index+1);
  }
};

Trie.prototype.autoComplete = function(prefix){
 var n = this.find(prefix);
 if (!n) {
  return [];
 }
 var result = n.getWords([], prefix);
 return n.getWords([], prefix);
};