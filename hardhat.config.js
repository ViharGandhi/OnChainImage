require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/8OTSpvKT8H83Q-PNz9mI3NZrnztOacCV",
      accounts: [`0x${"c3496442d4ea1ecec1300d70febe91eb7555a778a98e5861c7b47e4883abd1c5"}`],
    },
  },
};
