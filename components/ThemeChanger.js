import { useState, useEffect } from 'react';

// Currently there are only two theme default or dark
const themes = {
  default: {
    '--color-default': 'black',
    '--background-default': 'white',
    '--border-color-default': 'black',
  },
  dark: {
    '--color-default': 'white',
    '--background-default': 'black',
    '--border-color-default': 'white',
  },
};

const ThemeChanger = () => {
  const [theme, setTheme] = useState('');

  // Theme change handler on select an aption from the list
  const changeThemeHandler = (e) => {
    setTheme(e.target.value);
    localStorage.setItem('theme', e.target.value);
  };

  // If the theme is changed apply it.
  useEffect(() => {
    if (theme) {
      Object.entries(themes[theme]).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
  }, [theme]);

  // Check if the user has changed the theme previously and the theme is not the default theme.
  useEffect(() => {
    if (localStorage.getItem('theme') && localStorage.getItem('theme') !== 'white') {
      setTheme(localStorage.getItem('theme'));
    }
  }, []);

  return (
    <div className="text-2xl select-none ">
      <select
        name=""
        id=""
        onChange={changeThemeHandler}
        className="bg-background-default border p-2"
        value={theme || 'default'}
      >
        <option value="default">Default Theme</option>
        <option value="dark">Dark Theme</option>
      </select>
    </div>
  );
};

export default ThemeChanger;
