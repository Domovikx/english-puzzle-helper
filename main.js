const state = {
  words
};

(function main() {
  const textarea = document.getElementById("textarea");

  refreshTextarea(textarea);

  textarea.addEventListener("click", refreshTextarea);
  textarea.addEventListener("keyup", refreshTextarea);
})();

function refreshTextarea() {
  const wordsElement = document.getElementById("words");
  changeHeightTextarea();
  const words = getWords(textarea.value);
  state.words = words;
  renderWords(words, wordsElement);
}

function changeHeightTextarea() {
  const element = document.getElementById("textarea");
  element.style.height = "0px";
  element.style.height = element.scrollHeight + "px";
}

function getWords(value) {
  const words = value
    .toLowerCase()
    .replace(/[^A-Za-zА-Яа-яЁё]/g, " ")
    .split(" ")
    .filter(word => word != "");
  const uniqueWords = [...new Set(words)].join("\n");
  return uniqueWords;
}

function renderWords(words, wordsElement) {
  wordsElement.innerHTML = words;
}

function copyToClipboard() {
  navigator.clipboard.writeText(state.words).catch(err => {
    console.log("Something went wrong", err);
  });
}

function pasteFromClipboard() {
  navigator.clipboard
    .readText()
    .then(text => {
      const textarea = document.getElementById("textarea");
      textarea.value = text;
      refreshTextarea();
    })
    .catch(err => {
      console.log("Something went wrong", err);
    });
}
