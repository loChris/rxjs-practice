import { Observable, subscribeOn } from 'rxjs';

const observable = new Observable((subscriber) => {
  const id = setInterval(() => {
    subscriber.next('hi');
    console.log('inside interval');
  }, 1000);

  return () => {
    clearInterval(id);
    console.log('clean up');
  };
});

const subscription = observable.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log('done'),
});

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);
