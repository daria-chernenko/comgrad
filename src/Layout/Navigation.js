import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
const Navigation = () => (
  <React.Fragment>
    <Menu.Item exact as={NavLink} to="/">Home</Menu.Item>
    <Menu.Item exact as={NavLink} to="/features">Features</Menu.Item>
    <Menu.Item exact as={NavLink} to="/episodes">All episodes</Menu.Item>
    <Menu.Item exact as={NavLink} to="/about">About</Menu.Item>
  </React.Fragment>
)
export default Navigation
