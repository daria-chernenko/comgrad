import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
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
        <Responsive>
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
                  <Menu.Item as={Link} to="/">Home</Menu.Item>
                  <Menu.Item as={Link} to="/episodes">Episodes</Menu.Item>
                </Container>
              </Menu>
            </Segment>
            <Route exact  path="/" component={Home} />
            <Route exact  path="/episodes" component={Episodes} />
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
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
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
