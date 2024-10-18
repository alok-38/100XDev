function sum_char_codes(n: string): number {
  let sum = 0;
  for (let index = 0; index < n.length; index++) {
    sum += n.charCodeAt(index);
  }
  return sum;
}

function count_characters(n: string): number {
  return n.length;
}

console.log(sum_char_codes("Alok"));
console.log(count_characters("Alok"));
