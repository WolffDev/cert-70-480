// require('uWebSockets.js').App()
//   .ws('/', {
//     message: (ws, message, isBinary) => {
//       const ok = ws.send(message, isBinary);
//       console.log(ok);
//     },
//   }).any('/*', (res, req) => {
//     console.log(req);
//     res.end('Nothing to see here!');
//   })
//   .listen(9001, (listenSocket) => {
//     if (listenSocket) {
//       console.log('Listening to port 9001');
//     }
//   });

const app = require('uWebSockets.js').App();

app.ws('/', {
  message: (ws, message, isBinary) => {
    // ws.send(message, isBinary);
    ws.publish('broadcast', message, isBinary);
  },
  open: (ws, req) => {
    ws.subscribe('broadcast');
  },
});

app.post('/*', (res, req) => {
  const url = req.getUrl();

  readJson(res, (obj) => {
    console.log(`Posted to ${url}`);
    console.log(obj);
    res.end('Thanks');
  }, () => {
    console.log('Invalid JSON');
  });
});

app.listen(9001, (listenSocket) => {
  if (listenSocket) {
    console.log('Listening to port 9001');
  }
});

function readJson(res, cb, err) {
  let buffer;
  /* Register data cb */
  res.onData((ab, isLast) => {
    const chunk = Buffer.from(ab);
    if (isLast) {
      let json;
      if (buffer) {
        try {
          json = JSON.parse(Buffer.concat([buffer, chunk]));
        } catch (e) {
          /* res.close calls onAborted */
          res.close();
          return;
        }
        cb(json);
      } else {
        try {
          json = JSON.parse(chunk);
        } catch (e) {
          /* res.close calls onAborted */
          res.close();
          return;
        }
        cb(json);
      }
    } else if (buffer) {
      buffer = Buffer.concat([buffer, chunk]);
    } else {
      buffer = Buffer.concat([chunk]);
    }
  });

  /* Register error cb */
  res.onAborted(err);
}
