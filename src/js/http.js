export default function fetchData(url) {
  if (url === 'https://server/user') {
    throw new Error('id не был передан');
  }
  return {};
}
