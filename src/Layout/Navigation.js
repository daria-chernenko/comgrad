import React from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
const Navigation = () => (
  <React.Fragment>
    <Menu.Item exact as={NavLink} to="/">Home</Menu.Item>
    <Menu.Item exact as={NavLink} to="/features">Features</Menu.Item>
    <Menu.Item exact as={NavLink} to="/episodes">All episodes</Menu.Item>
  </React.Fragment>
)
export default Navigation
