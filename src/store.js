import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import locations from './data/locations'

export default new Vuex.Store({
  state: {
    curTab: "new",
    loc: { name: '', art: '', text: '', dir: {}, cipher: false },
    key: "",
    messages: []
  },
  mutations: {
    addMsg: (state, msg) => { state.messages.push(msg) }
    , delMsg: (state, idx) => { state.messages.splice(idx, 1); }
    , setTab: (state, tab) => {
      state.curTab = tab;
    }
    , setLoc: (state, locKey) => {
      var loc = locKey.loc;
      var key = locKey.key;
      // Simple deep copy instead of reference
      var tmpLoc = JSON.parse(JSON.stringify(locations[loc]));
      if (tmpLoc.cipher)
        tmpLoc.text = vigenere(tmpLoc.text, key);
      state.loc = tmpLoc;
    }
  },
  actions: {
    addMsg: ({ commit }, msg) => { commit('addMsg', msg) }
    , delMsg: ({ commit }, msg) => { commit('delMsg', msg) }
    , setTab: ({ commit }, tab) => { commit('setTab', tab) }
    , setLoc: ({ commit }, locKey) => { commit('setLoc', locKey) }
  },
  getters: {
    //awards: () => { return Object.values(ments).filter(award => award.unlock === true) }
    //, ttlAwards: () => { return Object.keys(ments).length }
  }
})

// credit: https://www.nayuki.io/page/vigenere-cipher-javascript
function vigenere(text, key) {
  if (key == null || key == "") {
    return text;
  }

  let keyArray = filterKey(key);
  if (keyArray.length == 0) {
    alert("Key has no letters");
    return;
  }

  for (let i = 0; i < keyArray.length; i++)
    keyArray[i] = (26 - keyArray[i]) % 26;

  return crypt(text, keyArray);
}

function crypt(input, key) {
  let output = "";
  let j = 0;
  for (const ch of input) {
    const cc = ch.codePointAt(0);
    if (isUppercase(cc)) {
      output += String.fromCodePoint((cc - 65 + key[j % key.length]) % 26 + 65);
      j++;
    } else if (isLowercase(cc)) {
      output += String.fromCodePoint((cc - 97 + key[j % key.length]) % 26 + 97);
      j++;
    } else {
      output += ch;
    }
  }
  return output.replace(/\\n/g, '\n');
}
function filterKey(key) {
  let result = [];
  for (const ch of key) {
    const cc = ch.codePointAt(0);
    if (isLetter(cc))
      result.push((cc - 65) % 32);
  }
  return result;
}
function isLetter(c) {
  return isUppercase(c) || isLowercase(c);
}
function isUppercase(c) {
  return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
}
function isLowercase(c) {
  return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'.
}