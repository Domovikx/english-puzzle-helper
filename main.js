(function main() {
  const textarea = document.getElementById("textarea");

  changeHeight(textarea);

  textarea.addEventListener("click", () => changeHeight(textarea));
  textarea.addEventListener("keyup", () => changeHeight(textarea));
})();

function changeHeight(element = document.getElementById("textarea")) {
  element.style.height = "0px";
  element.style.height = element.scrollHeight + "px";
}
