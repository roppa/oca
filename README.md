#The OCA test

This is a personality test used by the Cof$. I found it fascinating so wanted to create a digital version.

It can be used interactively via the terminal via:

```
node index.js
```

As a package, create a new instance of the OCA test with:

```
let oca = new OCA({ age: 25, sex: 'm' });
```

##Method getQuestion

Takes an integer between 1-200 representing one of the 200 questions. Added in case the form is going to be random.

```
oca.getQuestion(3);
```

It returns an object:

```
{
  id: 2,
  question: 'Is it hard on you when you fail?'
}
```

##Method answer:

Takes an id and a value. Answers are 'y', 'm', 'n', for 'yes', 'maybe', and 'no'.

```
oca.answer(2, 'y');
```

Returns true or throws an error if invalid values.

##Method generateResults:

```
oca.generateResults();
```

Returns false if some answers are missing. Returns object with raw and percentile properties if test has been completed. The obeject has two properties, raw and percentile. The percentile is used to create the chart.

```
{ raw: { a: 34, b: 55 }, percentile: { a: 34, b: 55 } };
```

##Testing

Test using Mocha:

```
mocha
```
