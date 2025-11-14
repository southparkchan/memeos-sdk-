import { randomId } from "./utils/id";
import { MemeInput, MemeRecord } from "./types/meme";

export const memeVM = {
  createMeme: (input: MemeInput): MemeRecord => {
    return {
      id: randomId(),
      createdAt: Date.now(),
      ...input
    };
  },

  amplify: (meme: MemeRecord, power = 1): MemeRecord => {
    return {
      ...meme,
      power: meme.power + power
    };
  }
};

