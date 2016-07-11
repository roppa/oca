'use strict';

let user = {
  age: null,
  sex: null
};

let questions = require('./questions');

//Values are the numbers allocated to each question +, m, -
let values = require('./values');

let checkValidId = function (id) {
  if (!!!id || isNaN(+id) || +id < 0 || +id > this.questions.length) {
    throw new Error('Invalid id');
  }

  return id.toString();
};

let percentileLookup = require('./lookup');

/**
 * OCA Class
 */
class OCA {

  constructor (user) {

    if (!user || !user.sex || !user.age
      || isNaN(+user.age)
      || +user.age < 0
      || !(user.sex in { m: 'm', f: 'f' })) {
      throw new Error('You must pass in a valid user object');
    }

    user.age = +user.age;
    user.type = (user.age < 18) ? 'c' : 'a';

    this.user = user;

    this.questions = questions;

    this.answered = [];

    this.columns = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0
    };

    this.percentiles = {
      a: 'x',
      b: 'x',
      c: 'x',
      d: 'x',
      e: 'x',
      f: 'x',
      g: 'x',
      h: 'x',
      i: 'x',
      j: 'x'
    };

  }

  getQuestion(id) {
    id = checkValidId.bind(this)(id);
    return this.questions[--id].question;
  }

  answer (id, value) {
    id = checkValidId.bind(this)(id);
    if (!!!value || ['y', 'm', 'n'].indexOf(value) === -1) {
      throw new Error('Invalid answer, should be "y", "m", "n"');
    }

    let result = values[id][value];
    this.columns[result.column] += result.value;
    this.answered.push(id);
    return true;
  }

  generateResults () {
    if (this.answered.length !== 200) {
      return false;
    }

    Object.keys(this.columns)
      .forEach(key => {
        let type = this.user.type;
        let sex = this.user.sex;
        let num = this.columns[key];
        this.percentiles[key] = percentileLookup[key][num][type][sex];
      });

    return { raw: this.columns, percentile: this.percentiles };
  }

}

module.exports = OCA;
