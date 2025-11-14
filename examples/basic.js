import { memeVM } from "../dist/index.js";

const meme = memeVM.createMeme({
  prompt: "Sparkchan eating ramen",
  power: 12
});

console.log(meme);

console.log(memeVM.amplify(meme, 5));
