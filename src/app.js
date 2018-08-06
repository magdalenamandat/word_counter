const InputView = require("./views/input_view.js");
const SizeChecker = require ('./models/size_checker.js');
const ResultView = require("./views/result_view.js");
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const inputView = new InputView();
  inputView.bindEvents();

  const sizeChecker = new SizeChecker();
  sizeChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
