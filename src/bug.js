const Web3 = require("web3");
const createNewBlock$ = require("@drizzle-utils/new-block-stream");

const web3 = new Web3("https://mainnet.infura.io/v3/KEY"); // HttpProvider
// track new blocks
const { observable } = createNewBlock$({
  web3,
  pollingInterval: 200, // only used if non-WebsocketProvider
});
observable.subscribe((val) => console.log("INFURA", val))
