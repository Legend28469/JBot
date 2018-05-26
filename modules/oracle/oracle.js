exports.foresight = () => {
  let pick = 0;
  const random = Math.floor(Math.random() * 3 + 1);

  if (random === 1) {
    const positive = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes"
    ];
    pick = Math.floor(Math.random() * positive.length);
    return positive[pick];
  } else if (random === 2) {
    const neutral = [
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again"
    ];
    pick = Math.floor(Math.random() * neutral.length);
    return neutral[pick];
  } else {
    const negative = [
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
    ];
    pick = Math.floor(Math.random() * negative.length);
    return negative[pick];
  }
};
