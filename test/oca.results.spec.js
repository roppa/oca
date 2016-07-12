'use strict';

const expect = require('chai').expect;
let OCA = require('../oca/oca');
let traits = require('../oca/traits');
let generateTemplate = require('../oca/template');

describe('The OCA test', () => {

  describe('instance', () => {

    it('should take in a user object with correct attributes', () => {
      expect(() => new OCA()).to.throw(Error);
      expect(() => new OCA({})).to.throw(Error);
      expect(() => new OCA({ age: 21 })).to.throw(Error);
      expect(() => new OCA({ sex: 'm' })).to.throw(Error);
      expect(() => new OCA({ age: 'a', sex: 'm' })).to.throw(Error);
      expect(() => new OCA({ age: -1, sex: 'x' })).to.throw(Error);
      expect(() => new OCA({ age: 21, sex: 'm' })).to.be.ok;
    });

    it('instance should have a columns object', () => {
      let oca = new OCA({ age: 21, sex: 'm' });
      expect(oca).to.be.an('object');
      expect(oca.columns).to.be.an('object');
    });

  });

  describe('getQuestion method', () => {

    let oca;

    beforeEach(() => {
      oca = new OCA({ age: 21, sex: 'm' });
    });

    it('should return correct question with number', () => {
      expect(oca.getQuestion(1))
        .to.eql('Do you make thoughtless remarks or accusations which you later regret?');
    });

    it('should return correct question with string number', () => {
      expect(oca.getQuestion('1')).to
        .eql('Do you make thoughtless remarks or accusations which you later regret?');
      expect(oca.getQuestion('200')).to.eql('Do you consider you have many warm friends?');
    });

    it('should throw an invalid id when no param', () => {
      expect(() => { oca.getQuestion(); }).to.throw('Invalid id');
    });

    it('should throw an invalid id when invalid id', () => {
      expect(() => { oca.getQuestion('test'); }).to.throw('Invalid id');
    });

    it('should throw an invalid id when id < length', () => {
      expect(() => { oca.getQuestion(-9); }).to.throw('Invalid id');
    });

    it('should throw an invalid id when id < length', () => {
      expect(() => { oca.getQuestion(0); }).to.throw('Invalid id');
    });

    it('should throw an invalid id when id > length', () => {
      expect(() => { oca.getQuestion(201); }).to.throw('Invalid id');
    });

  });

  describe('answer method', () => {

    let oca;

    beforeEach(() => {
      oca = new OCA({ age: 21, sex: 'm' });
    });

    it('should throw when invalid question id', () => {
      expect(() => { oca.answer(); }).to.throw('Invalid id');
      expect(() => { oca.answer('test'); }).to.throw('Invalid id');
      expect(() => { oca.answer(-9); }).to.throw('Invalid id');
      expect(() => { oca.answer(0); }).to.throw('Invalid id');
      expect(() => { oca.answer(201); }).to.throw('Invalid id');
    });

    it('should store answer values correctly', () => {
      oca.answer(1, 'y');
      oca.answer(2, 'y');
      oca.answer(3, 'y');
      expect(oca.columns['a']).to.eql(2);
      expect(oca.columns['b']).to.eql(2);
      expect(oca.columns['c']).to.eql(6);
      expect(oca.answered.length).to.eql(3);
    });

  });

  describe('generateResults', () => {

    let oca;

    beforeEach(() => {
      oca = new OCA({ age: 21, sex: 'm' });
    });

    it('should return false if <> 200 answers', () => {
      expect(oca.generateResults()).to.not.be.ok;
    });

    it('should return a value if all questions are answered', () => {
      for (let i = 1; i < 201; i++) {
        oca.answer(i, 'y');
      }

      expect(oca.generateResults()).to.be.ok;
      expect(oca.generateResults()).to.be.an('object');
    });

  });

  describe('traits result', () => {

    let percentileA = {
      a: -92,
      b: -100,
      c: -99,
      d: 4,
      e: 4,
      f: 44,
      g: 94,
      h: 89,
      i: 56,
      j: 22
    };

    let percentileB = {
      a: -92,
      b: 50,
      c: 99,
      d: -4,
      e: 4,
      f: 44,
      g: 94,
      h: 89,
      i: 56,
      j: 22
    };

    let percentileC = {
      a: -92,
      b: 50,
      c: -99,
      d: 4,
      e: 4,
      f: 44,
      g: -94,
      h: 89,
      i: 56,
      j: 22
    };

    let percentileD = {
      a: -92,
      b: -50,
      c: -99,
      d: 4,
      e: 4,
      f: 44,
      g: -94,
      h: -89,
      i: -56,
      j: -22
    };

    let percentileE = {
      a: 92,
      b: -50,
      c: 99,
      d: 4,
      e: 4,
      f: 44,
      g: 94,
      h: 89,
      i: 56,
      j: 22
    };

    let percentileF = {
      a: -92,
      b: 50,
      c: 99,
      d: 4,
      e: 4,
      f: 44,
      g: 94,
      h: 89,
      i: 56,
      j: -22
    };

    let percentileG = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: 4,
      f: 44,
      g: 94,
      h: -89,
      i: 56,
      j: 22
    };

    let percentileH = {
      a: 92,
      b: 50,
      c: -99,
      d: -4,
      e: 4,
      f: 44,
      g: 94,
      h: 89,
      i: 56,
      j: 22
    };

    let percentileI = {
      a: 92,
      b: 50,
      c: -99,
      d: 4,
      e: 4,
      f: 44,
      g: 94,
      h: -89,
      i: 56,
      j: 22
    };

    let percentileJ = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: -4,
      f: 44,
      g: 94,
      h: 89,
      i: 56,
      j: 22
    };

    let percentileK = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: -4,
      f: 44,
      g: 94,
      h: 89,
      i: 56,
      j: 22
    };

    let percentileL = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: -4,
      f: 44,
      g: 94,
      h: 89,
      i: 56,
      j: 22
    };

    let percentileM = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: -4,
      f: 44,
      g: 94,
      h: -89,
      i: -56,
      j: -22
    };

    let percentileN = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: -4,
      f: -44,
      g: 94,
      h: 89,
      i: 56,
      j: -22
    };

    let percentileO = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: 4,
      f: -44,
      g: -94,
      h: 89,
      i: 56,
      j: 22
    };

    let percentileP = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: 4,
      f: -44,
      g: 94,
      h: -89,
      i: 56,
      j: 22
    };

    let percentileQ = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: 4,
      f: 44,
      g: -94,
      h: 89,
      i: 56,
      j: 22
    };

    let percentileR = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: 4,
      f: 44,
      g: -94,
      h: -89,
      i: -56,
      j: 22
    };

    let percentileS = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: 4,
      f: 44,
      g: -94,
      h: -89,
      i: 56,
      j: 22
    };

    let percentileT = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: 4,
      f: 44,
      g: -94,
      h: 89,
      i: 56,
      j: -22
    };

    let percentileU = {
      a: 92,
      b: 50,
      c: 99,
      d: 4,
      e: 4,
      f: 44,
      g: 94,
      h: 89,
      i: 56,
      j: -22
    };

    it('should throw with invalid percentile object', () => {
      expect(() => traits()).to.throw();
    });

    it('should return feedback for trait A', () => {
      expect(traits(percentileA)).to.eql('Neurotic. Stuck heavily with past losses. Frequently abandoned in childhood.');    });

    it('should return feedback for trait B', () => {
      expect(traits(percentileB)).to.eql('Extremely unstable, unreliable and impulsive.');
    });

    it('should return feedback for trait C', () => {
      expect(traits(percentileC)).to.eql('Angry outbursts. Temper.');
    });

    it('should return feedback for trait D', () => {
      expect(traits(percentileD)).to.eql('Capricious, irresponsible, self-centred, inverted on all dynamics. A potential murderer.');
    });

    it('should return feedback for trait E', () => {
      expect(traits(percentileE)).to.eql('Actively dispersed.');
    });

    it('should return feedback for trait F', () => {
      expect(traits(percentileF)).to.eql('There is an indication that a you could be in a passive aggressive environment where your reality is cut and you cannot communicate because it will be twisted and used against him.');
    });

    it('should return feedback for trait G', () => {
      expect(traits(percentileG)).to.eql('Perfectionist.');
    });

    it('should return feedback for trait H', () => {
      expect(traits(percentileH)).to.eql('Apprehension and anxiety.');
    });

    it('should return feedback for trait I', () => {
      expect(traits(percentileI)).to.eql('Feelings of inferiority.');
    });

    xit('should return feedback for trait J', () => {
      expect(traits(percentileJ)).to.eql('Riding a manic - glee of insanity.');
    });

    xit('should return feedback for trait K', () => {
      expect(traits(percentileK)).to.eql('Present time problem.');
    });

    xit('should return feedback for trait L', () => {
      expect(traits(percentileL)).to.eql('Compulsive extrovert.');
    });

    it('should return feedback for trait M', () => {
      expect(traits(percentileM)).to.eql('Doesn\'t grant beingness.');
    });

    it('should return feedback for trait N', () => {
      expect(traits(percentileN)).to.eql('Hormone deficiency. May need medical treatment.');
    });

    it('should return feedback for trait O', () => {
      expect(traits(percentileO)).to.eql('If remainder of the graph is reasonable, the person may be on drugs or alcohol or being heavily suppressed.');
    });

    it('should return feedback for trait P', () => {
      expect(traits(percentileP)).to.eql('Lacks initiative.');
    });

    it('should return feedback for trait Q', () => {
      expect(traits(percentileQ)).to.eql('Affectionate disposition.');
    });

    it('should return feedback for trait R', () => {
      expect(traits(percentileR)).to.eql('Paranoid and psychotic. Very much effect. Lacking in accord and self-centred.');
    });

    it('should return feedback for trait S', () => {
      expect(traits(percentileS)).to.eql('Hard to get along with.');
    });

    it('should return feedback for trait T', () => {
      expect(traits(percentileT)).to.eql('Introverted. Self-centred.');
    });

    it('should return feedback for trait U', () => {
      expect(traits(percentileU)).to.eql('Propitiation.');
    });

  });

});
