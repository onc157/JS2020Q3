export default function shuffle(arr) {
  const arrShuffle = arr.concat();
  arrShuffle.sort(() => Math.random() - 0.5);
  return arrShuffle;
}
