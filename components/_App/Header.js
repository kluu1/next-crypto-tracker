import { Menu, Container } from 'semantic-ui-react'
import Link from 'next/link'

function Header() {
  return (
    <Menu color="blue" inverted borderless>
      <Container textAlign="left">
        <Link href="/">
          <Menu.Item style={{ paddingLeft: 0 }}>
            <h1>Next Crypto Tracker</h1>
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  )
}

export default Header
