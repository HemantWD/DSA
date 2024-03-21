function ransome(ransomeNote, magzine) {
  for (let char of magzine) {
    ransomeNote = ransomeNote.replace(char, "");
  }
  if (!ransomNote) return false;
  return true;
}

const ransomNote = "a",
  magazine = "b";
console.log(ransome(ransomNote, magazine));
