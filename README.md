# Chanko: CSP Channels for JavaScript

*A Go-inspired library for communication between async functions in JavaScript*

Communicating Sequential Processes (CSP) is a mechanism for concurrency originally formulated by Tony Hoare in 1978 and brought into the mainstream by languages such as Go (where it is [built into the language][1] and Clojure (when it was included in the [core.async][2] package). CSP consists of processes, which are single lines of execution not dissimilar to threads, and channels to communicate between them. Concurrent programming becomes much simpler when its only communication happens with these channels rather than with shared memory. This is an idea realized by other mechanisms as well, such as the Actor model popular in Erlang, Elixir, and Scala.

In JavaScript, CSP became feasible with the release of generators in ES2015, but the now-widely-supported async function has really brought it into its own. Async functions serve as processes by themselves, and when combined with some small utility functions and channels, they drastically improve the ease of programming concurrently (especially when compared to the callbacks that have traditionally been used for this purpose).

## Example

```javascript
// A simple pong example using Chanko
// Adaptation of Go code at https://talks.golang.org/2013/advconc.slide#6

import { go, sleep, timedChan, send, recv, CLOSED } from "chanko";
const table = timedChan(10000);

async function player(name) {
  for (;;) {
    const ball = await recv(table);
    if (ball === CLOSED) {
      break;
    }
    ball.hits++;
    console.log(`${name}: ${ball.hits}`);
    await sleep(500);
    await send(table, ball);
  }
  console.log(`${name} finished.`);
}

go(async () => {
  await send(table, { hits: 0 });
});

go(player, "ping");
go(player, "pong");
```

## Features

### Channels
- Full implementation of channels as objects
- Channels are buffered or unbuffered, with three types of buffers available
- Channels accept any value (except for the provided special value `CLOSED`), including `null` and `undefined`
- Channels are not tied to any process, so any process can send to/receive from any channel
- Option to have channel automatically close after some amount of time
- Values sent to a channel can be modifed by transducers so that receivers only see the transformed values (see [Xduce][3])
- Comes with a full set of channel operations for merging, splitting, tapping, throtting, selecting, and more
- Functional style that plays well with tree-shaking

### Processes
- JavaScript async functions are used as processes
- Utilities for starting (`go`) and pausing (`sleep`) processes
- Values can be sent to the process at the beginning and received as a return value at the end

## Project Status

This project was begun on 21 Feb 2020 and this is currently just a placeholder page for it. However, this is an offshoot of another project that changed enough to justify starting a whole new project, so most of the code is already written and it won't be long until it is available.

## License


[MIT][4] License

[1]: https://tour.golang.org/concurrency/1
[2]: http://clojure.github.io/core.async
[3]: https://barandis.github.io/xduce
[4]: https://raw.githubusercontent.com/Barandis/chanko/master/LICENSE