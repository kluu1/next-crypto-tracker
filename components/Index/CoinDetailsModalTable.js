import { Table } from 'semantic-ui-react'
import { formatCurrency, convertToPercentage } from '../../utils/filters'

const CoinDetailsModalTable = ({ coinDetails, data }) => (
  <Table basic="very">
    <Table.Body>
      <Table.Row>
        <Table.Cell>Symbol</Table.Cell>
        <Table.Cell>{coinDetails.currency}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Rank</Table.Cell>
        <Table.Cell>{coinDetails.rank}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Price</Table.Cell>
        <Table.Cell>{formatCurrency(coinDetails.price)}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Price Change</Table.Cell>
        <Table.Cell>
          {data && data.getCoinDetails && convertToPercentage(data.getCoinDetails.price_change_pct)}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Circulating Supply</Table.Cell>
        <Table.Cell>{coinDetails.circulating_supply}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Max Supply</Table.Cell>
        <Table.Cell>{coinDetails.max_supply}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Market Cap Change</Table.Cell>
        <Table.Cell>
          {data && data.getCoinDetails && formatCurrency(data.getCoinDetails.market_cap_change)}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Market Cap Change (%)</Table.Cell>
        <Table.Cell>
          {data &&
            data.getCoinDetails &&
            convertToPercentage(data.getCoinDetails.market_cap_change_pct)}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default CoinDetailsModalTable