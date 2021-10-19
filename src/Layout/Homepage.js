import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from '../Pages/Home'
import Episodes from '../Pages/Episodes'
class DesktopContainer extends Component {
  state = {}
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  render() {
    const { children } = this.props
    const { fixed } = this.state
    return (
      <Router>
        <Responsive {...Responsive.onlyComputer}>
          <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
            <Segment inverted textAlign='center' vertical>
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item as={Link} to="/home">Home</Menu.Item>
                  <Menu.Item as={Link} to="/episodes">Episodes</Menu.Item>
                </Container>
              </Menu>
            </Segment>
            <Route exact activeClassName="active" path="/home" component={Home} />
            <Route exact activeClassName="active" path="/episodes" component={Episodes} />
          </Visibility>
          {children}
          <Grid textAlign="center" relaxed stackable container divided columns={2}>
            <Grid.Row>
              <Grid.Column>
                Source on <a href="https:
              </Grid.Column>
              <Grid.Column>
                Published on <a href="http:
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Router>
    )
  }
}
DesktopContainer.propTypes = {
  children: PropTypes.node,
}
class MobileContainer extends Component {
  state = {}
  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>Home</Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a' primary>Sign Up</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handleToggle} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>Log in</Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}
MobileContainer.propTypes = {
  children: PropTypes.node,
}
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}
const HomepageLayout = (props) => (
  <ResponsiveContainer>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            {props.children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout
