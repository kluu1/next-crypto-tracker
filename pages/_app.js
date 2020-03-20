import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks';
import { Container} from 'semantic-ui-react'
import withData from '../utils/apollo-client';
import Layout from '../components/_App/Layout'

class MyApp extends App {
  render() {
    const { Component, apollo } = this.props

    return (
      <ApolloProvider client={apollo}>
        <Layout>
          <Container>
            <Component />
          </Container>
        </Layout>
      </ApolloProvider>
    )
  }
}

export default withData(MyApp)
