'use strict';

let generateTemplate = percentileObject => {

  let template = `
  -------------------------------------------------------------------------------------------------------------------
  |    |    A     |    B     |    C     |    D     |     E    |     F    |     G    |    H     |     I    |     J    |
  |    |  stable  |  happy   | composed | certain  |  active  |aggressive| respons- |  correct | appreci- |   comm   |
  |    |          |          |          |          |          |          |   ible   |estimation|  ative   |  level   |
  -------------------------------------------------------------------------------------------------------------------|\n`;

  for (let i = 100; i > -110; i -= 10) {
    template += '  ';
    template += (i === 0) ? '  ' : '';
    template += (i > 0) ? '+' : '';
    template += i;
    template += (i < 100 && i > -100) ? ' ' : '';
    template += ' |';
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
      .forEach(value => {
        template += '    ';
        template += ((Math.round(percentileObject[value] / 10) * 10) === i) ? 'x' : ' ';
        template += '     |';
      });

    template += '\n';
  }

  template = template.substring(0, template.length - 1);

  template += `
  -------------------------------------------------------------------------------------------------------------------
  |    | unstable |  unhappy |  nervous | uncertain| inactive |inhibited | irres-   | critical | lack of  |  with-   |
  |    |          |          |          |          |          |          | ponsible |          |  accord  |  drawn   |
  -------------------------------------------------------------------------------------------------------------------`;

  return template;

};

module.exports = generateTemplate;
