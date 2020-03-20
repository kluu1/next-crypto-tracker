import Nomics from 'nomics';

const nomics = new Nomics({
  apiKey: process.env.API_KEY
});

const resolvers = {
  Query: {
    getCoins: async (_, args) => {
      // fetches all coins from nomics
      const coins = await nomics.currenciesTicker();

      // let's only return the top 30
      return coins.slice(0, 30);
    }
  }
};

export default resolvers;
