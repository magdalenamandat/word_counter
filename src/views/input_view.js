const PubSub = require('../../helpers/pub_sub.js')
const InputView = function() {

};

InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (evt) => {
    event.preventDefault();
    const inputtedSentence = evt.target.text.value;
    PubSub.publish('InputView:sentence-inputted', inputtedSentence);
  })
};

module.exports = InputView;
