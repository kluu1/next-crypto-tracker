import { gql } from 'apollo-server-micro'

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

  type CoinDetails {
    volume: String!
    price_change: String!
    price_change_pct: String!
    volume_change: String!
    volume_change_pct: String!
    market_cap_change: String!
    market_cap_change_pct: String!
  }

  type Query {
    getCoins: [Coin]
    getCoinDetails(coinid: String!, interval: String!): CoinDetails
  }
`

export default typeDefs
