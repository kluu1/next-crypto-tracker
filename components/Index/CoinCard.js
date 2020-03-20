import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Card, Image, Loader } from 'semantic-ui-react'

const GET_COINS_QUERY = gql`
  query getCoins {
    getCoins {
      id
      currency
      name
      logo_url
      rank
      price
      price_date
      market_cap
      circulating_supply
      max_supply
    }
  }
`

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

const CoinCard = () => {
  const { data, loading } = useQuery(GET_COINS_QUERY)

  return (
    <>
      {loading ? (
        <Loader active inline='centered' content="Loading" />
      ) : (
        <Card.Group>
          {data &&
            data.getCoins.map(coin => (
              <Card key={coin.id}>
                <Card.Content>
                  <Image floated="right" size="mini" src={coin.logo_url} />
                  <Card.Header>{coin.name}</Card.Header>
                  <Card.Meta>{coin.currency}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>
                    <p>
                      <strong>Rank {coin.rank}</strong>
                    </p>
                    <p>Current Price {formatter.format(coin.price)}</p>
                    <p>Market Cap: {formatter.format(coin.market_cap)}</p>
                    <p>Circulating supply: {coin.circulating_supply}</p>
                    <p>Max supply: {coin.max_supply || 'N/A'}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
        </Card.Group>
      )}
    </>
  )
}

export default CoinCard
