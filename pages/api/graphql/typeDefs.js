import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Coin {
    id: String!
    currency: String!
    name: String!
    logo_url: String!
    rank: String!
    price: String!
    price_date: String!
    market_cap: String
    circulating_supply: String
    max_supply: String
  }

  type Query {
    getCoins: [Coin]
  }
`;

export default typeDefs;