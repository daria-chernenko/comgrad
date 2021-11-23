import React from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const Navigation = () => (
  <React.Fragment>
    <Menu.Item as={Link} to="/">Home</Menu.Item>
    <Menu.Item as={Link} to="/features">Features</Menu.Item>
    <Menu.Item as={Link} to="/episodes">All episodes</Menu.Item>
  </React.Fragment>
)
export default Navigation
