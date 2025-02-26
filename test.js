// Importing of addAccount
import addAccount from './index.js';

addAccount(["no"])
addAccount(["no", "nah", "nn", 1,2], true)
addAccount(["no", "", "test@g.com", 1], true)
addAccount(["", "nah", "nn", 1], true)
addAccount(["no", "nah", "", 1], true)
addAccount(["no", "nah", "test@g.co", 122], true)
// addAccount([])
addAccount(["Alan", "Turing", "aturing@w3c.com", 58]);
addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25])
addAccount(["Ted", "Nelson", "ted.@w3c.com", 43])