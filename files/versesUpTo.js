function versesUpṬo(upTo, verseIntro, giftDescription) {
  let lyrics = "";
  const range = [...Array(upTo).keys()].map((number) => number + 1);

  let giftList = "";
  for (const verseNumber of range) {
    let verse = verseIntro(verseNumber) + "\n";
    giftList = giftDescription(verseNumber) + "\n" + giftList;
    if (lyrics === "") {
      lyrics = verse + giftList;
    } else {
      lyrics = lyrics + "\n" + verse + giftList;
    }
  }

  return lyrics;
}

module.exports = versesUpṬo;
