import Head from 'next/head'
import { Container } from 'semantic-ui-react'
import Header from './Header'

const styles = {
  container: {
    paddingTop: '1em',
    paddingBottom: '1em',
    minWidth: '100%'
  }
}

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
        <title>Next Crypto Tracker</title>
      </Head>
      <Header />
      <Container text style={styles.container}>
        {children}
      </Container>
    </>
  )
}

export default Layout
