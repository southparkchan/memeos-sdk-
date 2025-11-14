module.exports = (prompt) => {
  const id = Math.random().toString(36).substring(2, 8);
  console.log(`Created Meme #${id}`);
  console.log(`Prompt: ${prompt}`);
};
