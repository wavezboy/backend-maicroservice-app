const comments = [
  "Great post! $Gari",
  "Really insightful! $Gari",
  "Thanks for sharing! $Gari",
  "Love this! $Gari",
  "Interesting perspective! $Gari",
  "Keep it up! $Gari",
  "Nice one! $Gari",
  "Well said! $Gari",
  "Absolutely! $Gari",
  "Couldn’t agree more! $Gari",
  "Absolutely stunning! $Gari",
  "You're glowing! $Gari",
  "Such elegance and beauty! $Gari",
  "Love your style! $Gari",
  "Incredible photo! $Gari",
  "You look amazing! $Gari",
  "Simply gorgeous! $Gari",
  "Radiant and beautiful! $Gari",
  "Perfect smile! $Gari",
  "Beauty and grace! $Gari",
  "Captivating look! $Gari",
  "Stunning as always! $Gari",
  "You’re a true beauty! $Gari",
  "Lovely and charming! $Gari",
  "Beautiful inside and out! $Gari",
  "You have such a radiant glow! $Gari",
  "Absolutely gorgeous! $Gari",
  "You look fabulous! $Gari",
  "Wow, just wow! $Gari",
  "Mesmerizing beauty! $Gari",
  "Always so elegant! $Gari",
  "Breathtakingly beautiful! $Gari",
  "You're a true gem! $Gari",
  "Lovely photo! $Gari",
  "So photogenic! $Gari",
  "You have such an enchanting smile! $Gari",
  "Your beauty is captivating! $Gari",
  "Stunning beauty! $Gari",
  "You look absolutely divine! $Gari",
  "Your elegance is unmatched! $Gari",
];

const generateRandomComment = (): string => {
  const randomIndex = Math.floor(Math.random() * comments.length);
  return `${comments[randomIndex]} $Gari`;
};

export default generateRandomComment;
