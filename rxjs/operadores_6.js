import { from, Observable } from "rxjs";

function createPipeableOperator(operatorFn) {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe(operatorFn(subscriber));
    });
  };
}

function primeiro() {
  return createPipeableOperator((subscriber) => ({
    next(v) {
      subscriber.next(v);
      subscriber.complete();
    },
  }));
}

function ultimo() {
  let ultimo;
  return createPipeableOperator((subscriber) => ({
    next(v) {
      ultimo = v;
    },
    complete() {
      subscriber.next(ultimo);
      subscriber.complete();
    },
  }));
}

function nenhum() {
  return createPipeableOperator((subscriber) => ({
    next() {
      subscriber.complete();
    },
  }));
}

from([1, 2, 3, 4, 5])
  .pipe(
    // primeiro()
    // nenhum()
    ultimo()
  )
  .subscribe(console.log);
