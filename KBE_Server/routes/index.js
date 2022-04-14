module.exports = {
  login: require("./wallets/login"),
  logout: require("./wallets/logout"),
  accTokenReq: require("./wallets/accTokenReq"),
  refTokenReq: require("./wallets/refTokenReq"),
  collections: require("./items/collections"),
  nfts: require("./items/Nfts"),
  createCollection: require("./items/createCollection"),
  mint: require("./items/mint"),
  buy: require("./transactions/buy"),
};
