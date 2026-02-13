var Trie = function () {
  this.map = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let temp = this.map;
  if (word.length === 0) {
    temp.end = true;
    return;
  }
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (!temp[ch]) temp[ch] = {};
    temp = temp[ch];
    if (i === word.length - 1) temp.end = true;
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let temp = this.map;
  if (word.length === 0) {
    return true;
  }
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (temp[ch]) {
      temp = temp[ch];
      if (i === word.length - 1) return Boolean(temp.end);
    } else {
      return false;
    }
  }
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let temp = this.map;
  if (prefix.length === 0) {
    return true;
  }
  for (let i = 0; i < prefix.length; i++) {
    const ch = prefix[i];
    if (temp[ch]) {
      temp = temp[ch];
      if (i === prefix.length - 1) return true;
    } else {
      return false;
    }
  }
};
