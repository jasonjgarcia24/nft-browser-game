require('@nomiclabs/hardhat-waffle');
require("dotenv").config();

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const PRIVATE_RINKEBY_ACCOUNT_KEY = process.env.PRIVATE_RINKEBY_ACCOUNT_KEY

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: [PRIVATE_RINKEBY_ACCOUNT_KEY],
    },
  },
};

