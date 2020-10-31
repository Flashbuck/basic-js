const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modif = true) {
    this.modif = modif;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!(message && key)) throw "Error";

    let newMessage = message.toUpperCase();
    let newKey = "";
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(newMessage[i])) {
        newKey += key[j % key.length]
        j++;
      } else {
        newKey += message[i];
      }
    }
    newKey = newKey.toUpperCase();
    let res = "";
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(newMessage[i])) {
        res += String.fromCharCode(((newMessage.charCodeAt(i) + newKey.charCodeAt(i)) - 130) % 26 + 65);
      } else {
        res += newMessage[i];
      }
    }

    if (this.modif) {
      return res;
    } else {
      return res.split("").reverse().join("");
    }
  }

  decrypt(message, key) {
    if (!(message && key)) throw "Error";

    let newMessage = message.toUpperCase();
    let newKey = "";
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(newMessage[i])) {
        newKey += key[j % key.length]
        j++;
      } else {
        newKey += message[i];
      }
    }
    newKey = newKey.toUpperCase();
    let res = "";
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(newMessage[i])) {
        res += String.fromCharCode((newMessage.charCodeAt(i) + 26 - newKey.charCodeAt(i))  % 26 + 65);
      } else {
        res += newMessage[i];
      }
    }

    if (this.modif) {
      return res;
    } else {
      return res.split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;