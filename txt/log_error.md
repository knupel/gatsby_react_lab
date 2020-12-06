warning MongoParseError: Invalid connection string
at parseConnectionString (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/mongodb/lib/core/uri_parser.js:565:21)
at connect (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/mongodb/lib/operations/connect.js:282:3)
at /Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/mongodb/lib/mongo_client.js:224:5
at maybePromise (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/mongodb/lib/utils.js:665:3)
at MongoClient.connect (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/mongodb/lib/mongo_client.js:220:10)
at Object.exports.sourceNodes (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/gatsby-source-mongodb/gatsby-node.js:37:22)
at runAPI (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/gatsby/src/utils/api-runner-node.js:425:22)
at Promise.catch.decorateEvent.pluginName (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/gatsby/src/utils/api-runner-node.js:554:17)
at Promise.\_execute (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/bluebird/js/release/debuggability.js:384:9)
at Promise.\_resolveFromExecutor (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/bluebird/js/release/promise.js:518:18)
at new Promise (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/bluebird/js/release/promise.js:103:10)
at /Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/gatsby/src/utils/api-runner-node.js:553:14
at tryCatcher (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/bluebird/js/release/util.js:16:23)
at Object.gotValue (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/bluebird/js/release/reduce.js:166:18)
at Object.gotAccum (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/bluebird/js/release/reduce.js:155:25)
at Object.tryCatcher (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/bluebird/js/release/util.js:16:23)

warning MongoError: Authentication failed.
at MessageStream.messageHandler (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/mongodb/lib/cmap/connection.js:268:20)
at MessageStream.emit (events.js:315:20)
at processIncomingData (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/mongodb/lib/cmap/message_stream.js:144:12)
at MessageStream.\_write (/Users/stan/En_cours/code/github/BASICS/gatsby_react_lab/node_modules/mongodb/lib/cmap/message_stream.js:42:5)
at doWrite (\_stream_writable.js:403:12)
at writeOrBuffer (\_stream_writable.js:387:5)
at MessageStream.Writable.write (\_stream_writable.js:318:11)
at TLSSocket.ondata (\_stream_readable.js:717:22)
at TLSSocket.emit (events.js:315:20)
at addChunk (\_stream_readable.js:295:12)
at readableAddChunk (\_stream_readable.js:271:9)
at TLSSocket.Readable.push (\_stream_readable.js:212:10)
at TLSWrap.onStreamRead (internal/stream_base_commons.js:186:23) {
ok: 0,
code: 8000,
codeName: 'AtlasError'
}
