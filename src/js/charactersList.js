export default function charactersList(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
