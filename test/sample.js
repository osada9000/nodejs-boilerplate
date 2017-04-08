/* eslint-env node, mocha */

const assert = require('power-assert');

describe('simple', () => {
  before(() => {
    // runs before all tests in this block
    console.log('before');
  });

  after(() => {
    // runs after all tests in this block
    console.log('after');
  });

  beforeEach(() => {
    // runs before each test in this block
    console.log('beforeeach');
  });

  afterEach(() => {
    // runs after each test in this block
    console.log('aftereach');
  });

  const A = 3;
  const B = 5;

  it('加算', () => {
    assert(A + B === 8);
  });

  it('減算', () => {
    assert(A - B === -2);
  });
});


function getPromise(fail) {
  if (fail === true) {
    return Promise.resolve(true);
  }
  return Promise.reject(new Error('ERROR!!!'));
}

describe('Promise', () => {
  context('Promiseが返ってくる場合', () => {
    it('resolve', () => {
      getPromise(true).then((value) => {
        assert(value === true);
      });
    });
    it('reject', () => {
      getPromise(false).catch((error) => {
        assert(error instanceof Error);
        assert(error.message === 'ERROR!!!');
      });
    });
  });
});

