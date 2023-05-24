function versesUpṬo(upTo, verseIntro, giftDescription) {
  let lyrics = "";
  const range = [...Array(upTo).keys()].map((number) => number + 1);

  let giftList = "";
  for (const verseNumber of range) {
    let introduction = verseIntro(verseNumber) + "\n";
    giftList = giftDescription(verseNumber) + "\n" + giftList;
    lyrics = addVerseTo(lyrics, introduction + giftList);
  }

  return lyrics;
}

function addVerseTo(lyrics, verse) {
  if (lyrics === "") {
    lyrics = verse;
  } else {
    lyrics += "\n" + verse;
  }
  return lyrics;
}

module.exports = versesUpṬo;
