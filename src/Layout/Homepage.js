import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Grid, Icon, List, Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react';
import Episodes from '../Pages/Episodes';
import Features from '../Pages/Features';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Navigation from './Navigation';
class DesktopContainer extends Component {
  state = {}
  render() {
    const { children } = this.props
    return (
      <Responsive {...Responsive.onlyComputer}>
        {}
          <Menu
            size='large'
          >
            <Container>
              <Navigation />
            </Container>
          </Menu>
        {}
        {children}
      </Responsive>
    )
  }
}
DesktopContainer.propTypes = {
  children: PropTypes.node,
}
class MobileContainer extends Component {
  state = {}
  handlePusherClick = () => {
    const { sidebarOpened } = this.state
    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }
  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Navigation  />
          </Sidebar>
          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
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
  <Router>
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
  </Router>
)
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}
const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment vertical className='content main-area'>
      <Grid stackable>
        <Route exact  path="/" component={Home} />
        <Route exact  path="/features" component={Features} />
        <Route exact  path="/episodes" component={Episodes} />
        <Route exact  path="/about" component={About} />
      </Grid>
    </Segment>
    <Segment vertical style={{ padding: '1em 0em' }}>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={16}>
              <List link horizontal divided relaxed>
                <List.Item>
                  Source code on <a href='https:
                </List.Item>
                <List.Item>
                  Published on <a href='http:
                </List.Item>
                <List.Item>
                  Also on <a href='https:
                </List.Item>
                <List.Item>
                  Built with <a href='https:
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout
