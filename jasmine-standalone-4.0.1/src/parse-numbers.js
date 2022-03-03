function parseNumbers(...strings) {
  const numbers = [];
  strings.forEach((string) => {
    if (!isNaN(string)) {
      numbers.push(Number(string));
    }
  });
  return numbers;
}
