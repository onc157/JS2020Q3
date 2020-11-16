export default function bgGenerate(a, b) {
  const rand = a + Math.random() * (b - a);
  let result = Math.round(rand);
  if (result < 10) result = `0${result}`;
  return `url('./assets/img/${result}.jpg')`;
}
