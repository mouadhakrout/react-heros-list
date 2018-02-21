const CryptoJS = require("crypto-js");
const PRIV_KEY = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";
const PUBLIC_KEY = "298bab46381a6daaaee19aa5c8cafea5";
const ts = new Date().getTime();
module.exports = {
    ts : ts,
    PUBLIC_KEY : PUBLIC_KEY,
    hash:CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString(),
    url : 'http://gateway.marvel.com/v1/public/characters'
};
