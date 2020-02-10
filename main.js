const state = {
  words
};

const textareaElement = document.getElementById("textarea");
const wordsElement = document.getElementById("words");

(function main() {
  refreshTextarea(textareaElement);
  textareaElement.addEventListener("click", refreshTextarea);
  textareaElement.addEventListener("keyup", refreshTextarea);
})();

function refreshTextarea() {
  changeHeightTextarea();
  const words = getWords(textareaElement.value);
  state.words = words;
  renderWords(words, wordsElement);
}

function changeHeightTextarea() {
  const padding = 4;
  textareaElement.style.height = "0px";
  textareaElement.style.height = textareaElement.scrollHeight + padding + "px";
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
