const PubSub = require('../../helpers/pub_sub.js');
const SizeChecker = function () {

};

SizeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:sentence-inputted', (evt) => {
    const inputtedSentence = evt.detail;
    const result = this.countWords(inputtedSentence);
    PubSub.publish('SizeChecker:result', result)
  })
};

SizeChecker.prototype.countWords = function (sentence) {
  let res = sentence.split(" ");
  let emptyString = " ";
  let filtered = res.filter((word) => {
    if (word != emptyString){
      return word;
    }
    });
  return filtered.length;
};

module.exports = SizeChecker;
