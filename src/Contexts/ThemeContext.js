import React from 'react';
import web from '../Themes/Web.module.css';
export const ThemeContext = React.createContext({
  theme: web,
  changeTheme: () => {}
});
