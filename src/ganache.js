const Web3 = require("web3");
const createNewBlock$ = require("@drizzle-utils/new-block-stream");

// run ganache-cli
const web3 = new Web3("http://127.0.0.1:8545"); // HttpProvider
// track new blocks
const { observable } = createNewBlock$({
  web3,
  pollingInterval: 200 // only used if non-WebsocketProvider
});
observable.subscribe((val) => console.log("GANACHE", val));
