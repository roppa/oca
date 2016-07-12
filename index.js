'use strict';

const OCA = require('./oca/oca');
const prompt = require('prompt');
let generateTemplate = require('./oca/template');

prompt.start();

prompt.get(['sex (m for male, f for female)', 'age'], (error, result) => {
  if (error) {
    return console.log(error);
  }

  let oca = new OCA({ age: +result.age, sex: result['sex (m for male, f for female)'] });
  let questions = [];

  oca.questions.forEach(question => {
    questions.push({
      name: 'Q' + question.id + ': ' + question.question,
      pattern: /^[y,m,n]$/,
      id: this.name,
      required: true,
      before: (value) => {
        if (!!!value.match(/^[y,m,n]$/)) {
          return false;
        }

        oca.answer(question.id, value);
        return true;
      }
    });

  });

  console.log('Please enter y for yes, m for maybe, and n for no');

  prompt.get(questions, (error, result) => {
    if (error) {
      return console.log(error);
    }
    console.log(generateTemplate(oca.generateResults().percentile));

  });

});
