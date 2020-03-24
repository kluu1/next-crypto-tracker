import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Image, Modal, Menu, Grid } from 'semantic-ui-react'
import CoinDetailsModalTable from './CoinDetailsModalTable'
import { GET_COIN_DETAILS } from '../../utils/queries'

const CoinDetailModals = ({ isModalOpen, onClose, coinDetails }) => {
  const [interval, setInterval] = useState('1d')

  const { data, loading, error, refetch } = useQuery(GET_COIN_DETAILS, {
    variables: {
      coinid: `${coinDetails.id}`,
      interval: '1d'
    }
  })

  const handleSetInterval = async (e, { name }) => {
    const newInterval = name
    setInterval(newInterval)

    refetch({
      coinid: `${coinDetails.id}`,
      interval: newInterval
    })
  }

  return (
    <Modal open={isModalOpen} onClose={onClose} style={{ top: '33%' }}>
      <Modal.Header>
        <Grid>
          <Grid.Column floated="left" width={8}>
            {coinDetails.name}
          </Grid.Column>
          <Grid.Column floated="right" width={8}>
            <Menu floated="right">
              <Menu.Item name="1d" active={interval === '1d'} onClick={handleSetInterval} />
              <Menu.Item name="7d" active={interval === '7d'} onClick={handleSetInterval} />
              <Menu.Item name="30d" active={interval === '30d'} onClick={handleSetInterval} />
              <Menu.Item name="365d" active={interval === '365d'} onClick={handleSetInterval} />
              <Menu.Item name="ytd" active={interval === 'ytd'} onClick={handleSetInterval} />
            </Menu>
          </Grid.Column>
        </Grid>
      </Modal.Header>
      <Modal.Content image>
        {error ? <h1>Error loading data</h1> : null}
        {loading ? (
          <h1>Loading...</h1>
        ) : (
            <>
              <Modal.Description>
                <Grid columns={2}>
                  <Grid.Column>
                    <Image wrapped size="medium" src={coinDetails.logo_url} />
                  </Grid.Column>
                  <Grid.Column>
                    <CoinDetailsModalTable data={data} coinDetails={coinDetails} />
                  </Grid.Column>
                </Grid>
              </Modal.Description>
            </>
          )}
      </Modal.Content>
    </Modal>
  )
}

export default CoinDetailModals
