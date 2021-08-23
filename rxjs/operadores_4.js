import { from, Observable } from "rxjs";

function primeiro() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(v) {
          subscriber.next(v);
          subscriber.complete();
        },
      });
    });
  };
}

function ultimo() {
  return function (source) {
    return new Observable((subscriber) => {
      let ultimo;
      source.subscribe({
        next(v) {
          ultimo = v;
        },
        complete() {
          subscriber.next(ultimo);
          subscriber.complete();
        },
      });
    });
  };
}

function nenhum() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next() {
          subscriber.complete();
        },
      });
    });
  };
}

from([1, 2, 3, 4, 5])
  .pipe(
    // primeiro(),
    // nenhum()
    ultimo()
  )
  .subscribe(console.log);
