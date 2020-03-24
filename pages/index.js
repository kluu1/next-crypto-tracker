import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Loader, Divider } from 'semantic-ui-react'
import CoinsTable from '../components/Index/CoinsTable'
import { GET_COINS_QUERY } from '../utils/queries'

export default () => {
  const { data, loading, error } = useQuery(GET_COINS_QUERY, {
    fetchPolicy: 'network-only',
    pollInterval: 5000,
  })

  return (
    <div>
      <h1>Top 30 Cryptocurrencies</h1>
      <Divider />
      {error ? <h1>Error Fetching Coin Data!</h1> : null}
      {loading ? (
        <Loader active inline="centered" content="Loading" />
      ) : (
          <CoinsTable coins={data.getCoins} />
        )}
    </div>
  )
}
