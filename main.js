(function main() {
  const textarea = document.getElementById("textarea");
  const wordsElement = document.getElementById("words");

  refreshTextarea(textarea);

  textarea.addEventListener("click", refreshTextarea);
  textarea.addEventListener("keyup", refreshTextarea);

  function refreshTextarea() {
    changeHeight(textarea);
    const words = getWords(textarea);
    renderWords(words, wordsElement);
  }
})();

function changeHeight(element) {
  element.style.height = "0px";
  element.style.height = element.scrollHeight + "px";
}

function getWords(element) {
  const words = element.value
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
