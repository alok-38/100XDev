function sum_char_codes(n) {
    var sum = 0;
    for (var index = 0; index < n.length; index++) {
        sum += n.charCodeAt(index);
    }
    return sum;
}
function count_characters(n) {
    return n.length;
}
console.log(sum_char_codes("Alok"));
console.log(count_characters("Alok"));
