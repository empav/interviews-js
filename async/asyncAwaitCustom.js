const apiUrl = "https://api.thecatapi.com/v1";

function async(generatorFunction) {
  const iterator = generatorFunction();

  function handleNext(value) {
    const next = iterator.next(value);
    if (next.done) {
      return next.value;
    } else {
      return Promise.resolve(next.value).then(handleNext, (err) =>
        Promise.resolve(iterator.throw(err)).then(handleNext)
      );
    }
  }

  handleNext();
}

async(function* () {
  try {
    const usersResponse = yield 5;
    console.log(usersResponse);
  } catch (err) {
    console.error(err);
  }
});

// https://www.freecodecamp.org/news/how-to-implement-async-and-await-with-generators-11ab0859010f/
