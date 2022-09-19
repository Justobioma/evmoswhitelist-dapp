require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
   solidity: "0.8.9",
  defaultNetwork: "local",
  networks: {
    hardhat: {
    },
    local: {
      url: "http://localhost:8545/",
      accounts: 'remote'
    },
  },

}
