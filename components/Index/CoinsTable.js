import React, { useState } from 'react'
import { Image, Table } from 'semantic-ui-react'
import { formatCurrency } from '../../utils/filters'
import CoinDetailsModal from './CoinDetailsModal'

const CoinsTable = ({ coins }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCoin, setSelectedCoin] = useState(null)

  const handleModal = e => {
    setIsModalOpen(!isModalOpen)
    setSelectedCoin(e)
  }

  return (
    <>
      <Table color="blue" singleLine selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Symbol</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Market Cap</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {coins.map(row => (
            <Table.Row key={row.id} style={{ cursor: 'pointer' }} onClick={() => handleModal(row)}>
              <Table.Cell>{row.rank}</Table.Cell>
              <Table.Cell>
                <Image src={row.logo_url} avatar /> {row.name}
              </Table.Cell>
              <Table.Cell>{row.currency}</Table.Cell>
              <Table.Cell>{formatCurrency(row.price)}</Table.Cell>
              <Table.Cell>{formatCurrency(row.market_cap)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {isModalOpen ? (
        <CoinDetailsModal 
          isModalOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          coinDetails={selectedCoin} 
        />
      ) : null}
    </>
  )
}

export default CoinsTable
