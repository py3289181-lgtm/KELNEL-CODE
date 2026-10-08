// KernelCode IDE - All 50+ Themes
export const THEMES = {
  // ===== DARK THEMES =====
  'vs-dark': {
    name: 'VS Dark+', type: 'dark', monacoTheme: 'vs-dark',
    vars: {
      '--bg-primary': '#1e1e1e', '--bg-secondary': '#252526', '--bg-tertiary': '#2d2d2d',
      '--bg-sidebar': '#252526', '--bg-tab-active': '#1e1e1e', '--bg-tab-inactive': '#2d2d2d',
      '--bg-statusbar': '#007acc', '--bg-input': '#3c3c3c', '--bg-dropdown': '#252526',
      '--bg-hover': '#2a2d2e', '--bg-selected': '#094771', '--bg-highlight': '#264f78',
      '--border': '#454545', '--text-primary': '#d4d4d4', '--text-secondary': '#9d9d9d',
      '--text-muted': '#6b6b6b', '--text-accent': '#569cd6', '--text-bright': '#ffffff',
      '--text-statusbar': '#ffffff', '--icon-color': '#c5c5c5', '--accent': '#007acc',
      '--scrollbar-thumb': '#424242',
    }
  },
  'one-dark-pro': {
    name: 'One Dark Pro', type: 'dark', monacoTheme: 'one-dark-pro',
    vars: {
      '--bg-primary': '#282c34', '--bg-secondary': '#21252b', '--bg-tertiary': '#2c313a',
      '--bg-sidebar': '#21252b', '--bg-tab-active': '#282c34', '--bg-tab-inactive': '#21252b',
      '--bg-statusbar': '#21252b', '--bg-input': '#1d2026', '--bg-dropdown': '#21252b',
      '--bg-hover': '#2c313c', '--bg-selected': '#3e4451', '--bg-highlight': '#3e4451',
      '--border': '#181a1f', '--text-primary': '#abb2bf', '--text-secondary': '#636d83',
      '--text-muted': '#4b5263', '--text-accent': '#61afef', '--text-bright': '#ffffff',
      '--text-statusbar': '#abb2bf', '--icon-color': '#abb2bf', '--accent': '#61afef',
      '--scrollbar-thumb': '#3e4451',
    }
  },
  'dracula': {
    name: 'Dracula', type: 'dark', monacoTheme: 'dracula',
    vars: {
      '--bg-primary': '#282a36', '--bg-secondary': '#21222c', '--bg-tertiary': '#343746',
      '--bg-sidebar': '#21222c', '--bg-tab-active': '#282a36', '--bg-tab-inactive': '#21222c',
      '--bg-statusbar': '#6272a4', '--bg-input': '#44475a', '--bg-dropdown': '#21222c',
      '--bg-hover': '#44475a', '--bg-selected': '#44475a', '--bg-highlight': '#44475a',
      '--border': '#191a21', '--text-primary': '#f8f8f2', '--text-secondary': '#6272a4',
      '--text-muted': '#44475a', '--text-accent': '#bd93f9', '--text-bright': '#ffffff',
      '--text-statusbar': '#f8f8f2', '--icon-color': '#f8f8f2', '--accent': '#bd93f9',
      '--scrollbar-thumb': '#44475a',
    }
  },
  'tokyo-night': {
    name: 'Tokyo Night', type: 'dark', monacoTheme: 'tokyo-night',
    vars: {
      '--bg-primary': '#1a1b2e', '--bg-secondary': '#16213e', '--bg-tertiary': '#0f3460',
      '--bg-sidebar': '#16213e', '--bg-tab-active': '#1a1b2e', '--bg-tab-inactive': '#16213e',
      '--bg-statusbar': '#7aa2f7', '--bg-input': '#1a1b2e', '--bg-dropdown': '#16213e',
      '--bg-hover': '#1e2040', '--bg-selected': '#2a2f4a', '--bg-highlight': '#2a2f4a',
      '--border': '#1a1b2e', '--text-primary': '#c0caf5', '--text-secondary': '#565f89',
      '--text-muted': '#414868', '--text-accent': '#7aa2f7', '--text-bright': '#c0caf5',
      '--text-statusbar': '#1a1b2e', '--icon-color': '#c0caf5', '--accent': '#7aa2f7',
      '--scrollbar-thumb': '#2a2f4a',
    }
  },
  'monokai': {
    name: 'Monokai', type: 'dark', monacoTheme: 'monokai',
    vars: {
      '--bg-primary': '#272822', '--bg-secondary': '#1e1f1c', '--bg-tertiary': '#33342b',
      '--bg-sidebar': '#1e1f1c', '--bg-tab-active': '#272822', '--bg-tab-inactive': '#1e1f1c',
      '--bg-statusbar': '#75715e', '--bg-input': '#33342b', '--bg-dropdown': '#1e1f1c',
      '--bg-hover': '#3e3d32', '--bg-selected': '#49483e', '--bg-highlight': '#49483e',
      '--border': '#1a1a15', '--text-primary': '#f8f8f2', '--text-secondary': '#75715e',
      '--text-muted': '#49483e', '--text-accent': '#a6e22e', '--text-bright': '#ffffff',
      '--text-statusbar': '#f8f8f2', '--icon-color': '#f8f8f2', '--accent': '#a6e22e',
      '--scrollbar-thumb': '#49483e',
    }
  },
  'nord': {
    name: 'Nord', type: 'dark', monacoTheme: 'nord',
    vars: {
      '--bg-primary': '#2e3440', '--bg-secondary': '#252a33', '--bg-tertiary': '#3b4252',
      '--bg-sidebar': '#252a33', '--bg-tab-active': '#2e3440', '--bg-tab-inactive': '#252a33',
      '--bg-statusbar': '#4c566a', '--bg-input': '#3b4252', '--bg-dropdown': '#252a33',
      '--bg-hover': '#3b4252', '--bg-selected': '#434c5e', '--bg-highlight': '#434c5e',
      '--border': '#2e3440', '--text-primary': '#d8dee9', '--text-secondary': '#4c566a',
      '--text-muted': '#434c5e', '--text-accent': '#88c0d0', '--text-bright': '#eceff4',
      '--text-statusbar': '#eceff4', '--icon-color': '#d8dee9', '--accent': '#88c0d0',
      '--scrollbar-thumb': '#434c5e',
    }
  },
  'gruvbox-dark': {
    name: 'Gruvbox Dark', type: 'dark', monacoTheme: 'gruvbox-dark',
    vars: {
      '--bg-primary': '#282828', '--bg-secondary': '#1d2021', '--bg-tertiary': '#3c3836',
      '--bg-sidebar': '#1d2021', '--bg-tab-active': '#282828', '--bg-tab-inactive': '#1d2021',
      '--bg-statusbar': '#504945', '--bg-input': '#3c3836', '--bg-dropdown': '#1d2021',
      '--bg-hover': '#3c3836', '--bg-selected': '#504945', '--bg-highlight': '#504945',
      '--border': '#1d2021', '--text-primary': '#ebdbb2', '--text-secondary': '#928374',
      '--text-muted': '#504945', '--text-accent': '#b8bb26', '--text-bright': '#fbf1c7',
      '--text-statusbar': '#ebdbb2', '--icon-color': '#ebdbb2', '--accent': '#d79921',
      '--scrollbar-thumb': '#504945',
    }
  },
  'material-dark': {
    name: 'Material Dark', type: 'dark', monacoTheme: 'material-dark',
    vars: {
      '--bg-primary': '#263238', '--bg-secondary': '#1e272c', '--bg-tertiary': '#2e3c43',
      '--bg-sidebar': '#1e272c', '--bg-tab-active': '#263238', '--bg-tab-inactive': '#1e272c',
      '--bg-statusbar': '#00bcd4', '--bg-input': '#2e3c43', '--bg-dropdown': '#1e272c',
      '--bg-hover': '#2e3c43', '--bg-selected': '#3a4a51', '--bg-highlight': '#3a4a51',
      '--border': '#1a2228', '--text-primary': '#b0bec5', '--text-secondary': '#546e7a',
      '--text-muted': '#455a64', '--text-accent': '#80cbc4', '--text-bright': '#eceff1',
      '--text-statusbar': '#ffffff', '--icon-color': '#b0bec5', '--accent': '#00bcd4',
      '--scrollbar-thumb': '#3a4a51',
    }
  },
  'github-dark': {
    name: 'GitHub Dark', type: 'dark', monacoTheme: 'github-dark',
    vars: {
      '--bg-primary': '#0d1117', '--bg-secondary': '#010409', '--bg-tertiary': '#161b22',
      '--bg-sidebar': '#010409', '--bg-tab-active': '#0d1117', '--bg-tab-inactive': '#010409',
      '--bg-statusbar': '#21262d', '--bg-input': '#21262d', '--bg-dropdown': '#161b22',
      '--bg-hover': '#161b22', '--bg-selected': '#1f6feb', '--bg-highlight': '#264f78',
      '--border': '#30363d', '--text-primary': '#c9d1d9', '--text-secondary': '#8b949e',
      '--text-muted': '#484f58', '--text-accent': '#58a6ff', '--text-bright': '#ffffff',
      '--text-statusbar': '#8b949e', '--icon-color': '#8b949e', '--accent': '#1f6feb',
      '--scrollbar-thumb': '#30363d',
    }
  },
  'catppuccin-mocha': {
    name: 'Catppuccin Mocha', type: 'dark', monacoTheme: 'catppuccin-mocha',
    vars: {
      '--bg-primary': '#1e1e2e', '--bg-secondary': '#181825', '--bg-tertiary': '#313244',
      '--bg-sidebar': '#181825', '--bg-tab-active': '#1e1e2e', '--bg-tab-inactive': '#181825',
      '--bg-statusbar': '#cba6f7', '--bg-input': '#313244', '--bg-dropdown': '#181825',
      '--bg-hover': '#313244', '--bg-selected': '#45475a', '--bg-highlight': '#45475a',
      '--border': '#181825', '--text-primary': '#cdd6f4', '--text-secondary': '#6c7086',
      '--text-muted': '#585b70', '--text-accent': '#cba6f7', '--text-bright': '#cdd6f4',
      '--text-statusbar': '#1e1e2e', '--icon-color': '#cdd6f4', '--accent': '#cba6f7',
      '--scrollbar-thumb': '#45475a',
    }
  },
  'night-owl': {
    name: 'Night Owl', type: 'dark', monacoTheme: 'night-owl',
    vars: {
      '--bg-primary': '#011627', '--bg-secondary': '#01111d', '--bg-tertiary': '#0b2942',
      '--bg-sidebar': '#01111d', '--bg-tab-active': '#011627', '--bg-tab-inactive': '#01111d',
      '--bg-statusbar': '#084d81', '--bg-input': '#0b2942', '--bg-dropdown': '#01111d',
      '--bg-hover': '#0b2942', '--bg-selected': '#1d3b53', '--bg-highlight': '#1d3b53',
      '--border': '#01111d', '--text-primary': '#d6deeb', '--text-secondary': '#5f7e97',
      '--text-muted': '#1d3b53', '--text-accent': '#82aaff', '--text-bright': '#ffffff',
      '--text-statusbar': '#d6deeb', '--icon-color': '#d6deeb', '--accent': '#82aaff',
      '--scrollbar-thumb': '#1d3b53',
    }
  },
  'palenight': {
    name: 'Palenight', type: 'dark', monacoTheme: 'palenight',
    vars: {
      '--bg-primary': '#292d3e', '--bg-secondary': '#1b1e2b', '--bg-tertiary': '#32374d',
      '--bg-sidebar': '#1b1e2b', '--bg-tab-active': '#292d3e', '--bg-tab-inactive': '#1b1e2b',
      '--bg-statusbar': '#7c3aed', '--bg-input': '#32374d', '--bg-dropdown': '#1b1e2b',
      '--bg-hover': '#32374d', '--bg-selected': '#3c435e', '--bg-highlight': '#3c435e',
      '--border': '#1b1e2b', '--text-primary': '#a6accd', '--text-secondary': '#676e95',
      '--text-muted': '#3c435e', '--text-accent': '#c792ea', '--text-bright': '#ffffff',
      '--text-statusbar': '#ffffff', '--icon-color': '#a6accd', '--accent': '#c792ea',
      '--scrollbar-thumb': '#3c435e',
    }
  },
  'synthwave-84': {
    name: 'Synthwave 84', type: 'dark', monacoTheme: 'synthwave-84',
    vars: {
      '--bg-primary': '#262335', '--bg-secondary': '#1a1727', '--bg-tertiary': '#2d2b55',
      '--bg-sidebar': '#1a1727', '--bg-tab-active': '#262335', '--bg-tab-inactive': '#1a1727',
      '--bg-statusbar': '#f92aad', '--bg-input': '#2d2b55', '--bg-dropdown': '#1a1727',
      '--bg-hover': '#2d2b55', '--bg-selected': '#3a3761', '--bg-highlight': '#3a3761',
      '--border': '#1a1727', '--text-primary': '#f0eff1', '--text-secondary': '#848bbd',
      '--text-muted': '#3a3761', '--text-accent': '#36f9f6', '--text-bright': '#ffffff',
      '--text-statusbar': '#1a1727', '--icon-color': '#f0eff1', '--accent': '#f92aad',
      '--scrollbar-thumb': '#3a3761',
    }
  },
  'cobalt2': {
    name: 'Cobalt2', type: 'dark', monacoTheme: 'cobalt2',
    vars: {
      '--bg-primary': '#193549', '--bg-secondary': '#122738', '--bg-tertiary': '#1f4662',
      '--bg-sidebar': '#122738', '--bg-tab-active': '#193549', '--bg-tab-inactive': '#122738',
      '--bg-statusbar': '#fac863', '--bg-input': '#1f4662', '--bg-dropdown': '#122738',
      '--bg-hover': '#1f4662', '--bg-selected': '#1f4662', '--bg-highlight': '#1f4662',
      '--border': '#0d2535', '--text-primary': '#9effff', '--text-secondary': '#6c8894',
      '--text-muted': '#1f4662', '--text-accent': '#fac863', '--text-bright': '#ffffff',
      '--text-statusbar': '#193549', '--icon-color': '#9effff', '--accent': '#fac863',
      '--scrollbar-thumb': '#1f4662',
    }
  },
  'shades-of-purple': {
    name: 'Shades of Purple', type: 'dark', monacoTheme: 'shades-of-purple',
    vars: {
      '--bg-primary': '#2d2b55', '--bg-secondary': '#1e1e3f', '--bg-tertiary': '#36334e',
      '--bg-sidebar': '#1e1e3f', '--bg-tab-active': '#2d2b55', '--bg-tab-inactive': '#1e1e3f',
      '--bg-statusbar': '#fb94ff', '--bg-input': '#36334e', '--bg-dropdown': '#1e1e3f',
      '--bg-hover': '#36334e', '--bg-selected': '#3d3a61', '--bg-highlight': '#3d3a61',
      '--border': '#1e1e3f', '--text-primary': '#a599e9', '--text-secondary': '#7059c1',
      '--text-muted': '#3d3a61', '--text-accent': '#fb94ff', '--text-bright': '#ffffff',
      '--text-statusbar': '#1e1e3f', '--icon-color': '#a599e9', '--accent': '#fb94ff',
      '--scrollbar-thumb': '#3d3a61',
    }
  },
  'ayu-dark': {
    name: 'Ayu Dark', type: 'dark', monacoTheme: 'ayu-dark',
    vars: {
      '--bg-primary': '#0a0e14', '--bg-secondary': '#01060e', '--bg-tertiary': '#0d1421',
      '--bg-sidebar': '#01060e', '--bg-tab-active': '#0a0e14', '--bg-tab-inactive': '#01060e',
      '--bg-statusbar': '#e6b450', '--bg-input': '#0d1421', '--bg-dropdown': '#01060e',
      '--bg-hover': '#0d1421', '--bg-selected': '#1a2333', '--bg-highlight': '#1a2333',
      '--border': '#01060e', '--text-primary': '#b3b1ad', '--text-secondary': '#3d424d',
      '--text-muted': '#1a2333', '--text-accent': '#39bae6', '--text-bright': '#ffffff',
      '--text-statusbar': '#0a0e14', '--icon-color': '#b3b1ad', '--accent': '#e6b450',
      '--scrollbar-thumb': '#1a2333',
    }
  },
  'andromeda': {
    name: 'Andromeda', type: 'dark', monacoTheme: 'andromeda',
    vars: {
      '--bg-primary': '#23262e', '--bg-secondary': '#1c1e26', '--bg-tertiary': '#2b2e38',
      '--bg-sidebar': '#1c1e26', '--bg-tab-active': '#23262e', '--bg-tab-inactive': '#1c1e26',
      '--bg-statusbar': '#00e8c6', '--bg-input': '#2b2e38', '--bg-dropdown': '#1c1e26',
      '--bg-hover': '#2b2e38', '--bg-selected': '#3b3e4a', '--bg-highlight': '#3b3e4a',
      '--border': '#1c1e26', '--text-primary': '#d5ced9', '--text-secondary': '#65737e',
      '--text-muted': '#3b3e4a', '--text-accent': '#00e8c6', '--text-bright': '#ffffff',
      '--text-statusbar': '#1c1e26', '--icon-color': '#d5ced9', '--accent': '#00e8c6',
      '--scrollbar-thumb': '#3b3e4a',
    }
  },
  'panda': {
    name: 'Panda', type: 'dark', monacoTheme: 'panda',
    vars: {
      '--bg-primary': '#292a2b', '--bg-secondary': '#1c1e1f', '--bg-tertiary': '#333536',
      '--bg-sidebar': '#1c1e1f', '--bg-tab-active': '#292a2b', '--bg-tab-inactive': '#1c1e1f',
      '--bg-statusbar': '#ff4b82', '--bg-input': '#333536', '--bg-dropdown': '#1c1e1f',
      '--bg-hover': '#333536', '--bg-selected': '#444648', '--bg-highlight': '#444648',
      '--border': '#1c1e1f', '--text-primary': '#e6e6e6', '--text-secondary': '#676b79',
      '--text-muted': '#444648', '--text-accent': '#ff4b82', '--text-bright': '#ffffff',
      '--text-statusbar': '#ffffff', '--icon-color': '#e6e6e6', '--accent': '#ff4b82',
      '--scrollbar-thumb': '#444648',
    }
  },
  'radical': {
    name: 'Radical', type: 'dark', monacoTheme: 'radical',
    vars: {
      '--bg-primary': '#141126', '--bg-secondary': '#0d0c1d', '--bg-tertiary': '#1e1b37',
      '--bg-sidebar': '#0d0c1d', '--bg-tab-active': '#141126', '--bg-tab-inactive': '#0d0c1d',
      '--bg-statusbar': '#ff428e', '--bg-input': '#1e1b37', '--bg-dropdown': '#0d0c1d',
      '--bg-hover': '#1e1b37', '--bg-selected': '#2a2747', '--bg-highlight': '#2a2747',
      '--border': '#0d0c1d', '--text-primary': '#f2f2f5', '--text-secondary': '#7b78a7',
      '--text-muted': '#2a2747', '--text-accent': '#ff428e', '--text-bright': '#ffffff',
      '--text-statusbar': '#f2f2f5', '--icon-color': '#f2f2f5', '--accent': '#ff428e',
      '--scrollbar-thumb': '#2a2747',
    }
  },
  'forest': {
    name: 'Forest', type: 'dark', monacoTheme: 'forest',
    vars: {
      '--bg-primary': '#1e2a1e', '--bg-secondary': '#16201a', '--bg-tertiary': '#2a3a2a',
      '--bg-sidebar': '#16201a', '--bg-tab-active': '#1e2a1e', '--bg-tab-inactive': '#16201a',
      '--bg-statusbar': '#4caf50', '--bg-input': '#2a3a2a', '--bg-dropdown': '#16201a',
      '--bg-hover': '#2a3a2a', '--bg-selected': '#354535', '--bg-highlight': '#354535',
      '--border': '#16201a', '--text-primary': '#c8e6c9', '--text-secondary': '#558b2f',
      '--text-muted': '#354535', '--text-accent': '#a5d6a7', '--text-bright': '#e8f5e9',
      '--text-statusbar': '#ffffff', '--icon-color': '#c8e6c9', '--accent': '#4caf50',
      '--scrollbar-thumb': '#354535',
    }
  },
  'cyberpunk': {
    name: 'Cyberpunk', type: 'dark', monacoTheme: 'cyberpunk',
    vars: {
      '--bg-primary': '#0a0a0f', '--bg-secondary': '#050507', '--bg-tertiary': '#15151e',
      '--bg-sidebar': '#050507', '--bg-tab-active': '#0a0a0f', '--bg-tab-inactive': '#050507',
      '--bg-statusbar': '#00ffff', '--bg-input': '#15151e', '--bg-dropdown': '#050507',
      '--bg-hover': '#15151e', '--bg-selected': '#1f1f2e', '--bg-highlight': '#1f1f2e',
      '--border': '#050507', '--text-primary': '#e0e0ff', '--text-secondary': '#5555aa',
      '--text-muted': '#1f1f2e', '--text-accent': '#00ffff', '--text-bright': '#ffffff',
      '--text-statusbar': '#050507', '--icon-color': '#e0e0ff', '--accent': '#ff0055',
      '--scrollbar-thumb': '#1f1f2e',
    }
  },
  'darcula': {
    name: 'Darcula (JetBrains)', type: 'dark', monacoTheme: 'darcula',
    vars: {
      '--bg-primary': '#2b2b2b', '--bg-secondary': '#1e1e1e', '--bg-tertiary': '#3c3f41',
      '--bg-sidebar': '#1e1e1e', '--bg-tab-active': '#2b2b2b', '--bg-tab-inactive': '#1e1e1e',
      '--bg-statusbar': '#3c3f41', '--bg-input': '#3c3f41', '--bg-dropdown': '#1e1e1e',
      '--bg-hover': '#3c3f41', '--bg-selected': '#214283', '--bg-highlight': '#214283',
      '--border': '#1e1e1e', '--text-primary': '#a9b7c6', '--text-secondary': '#606060',
      '--text-muted': '#3c3f41', '--text-accent': '#6897bb', '--text-bright': '#ffffff',
      '--text-statusbar': '#a9b7c6', '--icon-color': '#a9b7c6', '--accent': '#6897bb',
      '--scrollbar-thumb': '#3c3f41',
    }
  },
  'atom-one-dark': {
    name: 'Atom One Dark', type: 'dark', monacoTheme: 'atom-one-dark',
    vars: {
      '--bg-primary': '#282c34', '--bg-secondary': '#21252b', '--bg-tertiary': '#2c313c',
      '--bg-sidebar': '#21252b', '--bg-tab-active': '#282c34', '--bg-tab-inactive': '#21252b',
      '--bg-statusbar': '#21252b', '--bg-input': '#2c313c', '--bg-dropdown': '#21252b',
      '--bg-hover': '#2c313c', '--bg-selected': '#3e4451', '--bg-highlight': '#3e4451',
      '--border': '#181a1f', '--text-primary': '#abb2bf', '--text-secondary': '#636d83',
      '--text-muted': '#4b5263', '--text-accent': '#61afef', '--text-bright': '#ffffff',
      '--text-statusbar': '#9da5b4', '--icon-color': '#9da5b4', '--accent': '#61afef',
      '--scrollbar-thumb': '#3e4451',
    }
  },
  'neon-dreams': {
    name: 'Neon Dreams', type: 'dark', monacoTheme: 'neon-dreams',
    vars: {
      '--bg-primary': '#0f0f23', '--bg-secondary': '#080817', '--bg-tertiary': '#1a1a3e',
      '--bg-sidebar': '#080817', '--bg-tab-active': '#0f0f23', '--bg-tab-inactive': '#080817',
      '--bg-statusbar': '#7c3aed', '--bg-input': '#1a1a3e', '--bg-dropdown': '#080817',
      '--bg-hover': '#1a1a3e', '--bg-selected': '#25254f', '--bg-highlight': '#25254f',
      '--border': '#080817', '--text-primary': '#e0d7ff', '--text-secondary': '#7c6fcd',
      '--text-muted': '#25254f', '--text-accent': '#a78bfa', '--text-bright': '#ffffff',
      '--text-statusbar': '#ffffff', '--icon-color': '#e0d7ff', '--accent': '#7c3aed',
      '--scrollbar-thumb': '#25254f',
    }
  },

  // ===== LIGHT THEMES =====
  'vs-light': {
    name: 'VS Light', type: 'light', monacoTheme: 'vs',
    vars: {
      '--bg-primary': '#ffffff', '--bg-secondary': '#f3f3f3', '--bg-tertiary': '#ebebeb',
      '--bg-sidebar': '#f3f3f3', '--bg-tab-active': '#ffffff', '--bg-tab-inactive': '#ececec',
      '--bg-statusbar': '#007acc', '--bg-input': '#ffffff', '--bg-dropdown': '#f3f3f3',
      '--bg-hover': '#e8e8e8', '--bg-selected': '#cce5ff', '--bg-highlight': '#add6ff',
      '--border': '#e0e0e0', '--text-primary': '#333333', '--text-secondary': '#717171',
      '--text-muted': '#aaaaaa', '--text-accent': '#0000ff', '--text-bright': '#000000',
      '--text-statusbar': '#ffffff', '--icon-color': '#424242', '--accent': '#007acc',
      '--scrollbar-thumb': '#c1c1c1',
    }
  },
  'github-light': {
    name: 'GitHub Light', type: 'light', monacoTheme: 'github-light',
    vars: {
      '--bg-primary': '#ffffff', '--bg-secondary': '#f6f8fa', '--bg-tertiary': '#eaeef2',
      '--bg-sidebar': '#f6f8fa', '--bg-tab-active': '#ffffff', '--bg-tab-inactive': '#f6f8fa',
      '--bg-statusbar': '#24292f', '--bg-input': '#f6f8fa', '--bg-dropdown': '#ffffff',
      '--bg-hover': '#eaeef2', '--bg-selected': '#ddf4ff', '--bg-highlight': '#bbdfff',
      '--border': '#d0d7de', '--text-primary': '#24292f', '--text-secondary': '#57606a',
      '--text-muted': '#8c959f', '--text-accent': '#0969da', '--text-bright': '#000000',
      '--text-statusbar': '#ffffff', '--icon-color': '#57606a', '--accent': '#0969da',
      '--scrollbar-thumb': '#d0d7de',
    }
  },
  'solarized-light': {
    name: 'Solarized Light', type: 'light', monacoTheme: 'solarized-light',
    vars: {
      '--bg-primary': '#fdf6e3', '--bg-secondary': '#eee8d5', '--bg-tertiary': '#e6dfca',
      '--bg-sidebar': '#eee8d5', '--bg-tab-active': '#fdf6e3', '--bg-tab-inactive': '#eee8d5',
      '--bg-statusbar': '#657b83', '--bg-input': '#eee8d5', '--bg-dropdown': '#eee8d5',
      '--bg-hover': '#e6dfca', '--bg-selected': '#d4d4d4', '--bg-highlight': '#d4d4d4',
      '--border': '#ddd6c1', '--text-primary': '#657b83', '--text-secondary': '#839496',
      '--text-muted': '#93a1a1', '--text-accent': '#268bd2', '--text-bright': '#002b36',
      '--text-statusbar': '#fdf6e3', '--icon-color': '#657b83', '--accent': '#268bd2',
      '--scrollbar-thumb': '#ddd6c1',
    }
  },
  'quiet-light': {
    name: 'Quiet Light', type: 'light', monacoTheme: 'quiet-light',
    vars: {
      '--bg-primary': '#f5f5f5', '--bg-secondary': '#ececec', '--bg-tertiary': '#e3e3e3',
      '--bg-sidebar': '#ececec', '--bg-tab-active': '#f5f5f5', '--bg-tab-inactive': '#ececec',
      '--bg-statusbar': '#007acc', '--bg-input': '#ffffff', '--bg-dropdown': '#f5f5f5',
      '--bg-hover': '#e3e3e3', '--bg-selected': '#c9d0d9', '--bg-highlight': '#c9d0d9',
      '--border': '#dddddd', '--text-primary': '#333333', '--text-secondary': '#767676',
      '--text-muted': '#aaaaaa', '--text-accent': '#4078f2', '--text-bright': '#000000',
      '--text-statusbar': '#ffffff', '--icon-color': '#424242', '--accent': '#4078f2',
      '--scrollbar-thumb': '#cccccc',
    }
  },
  'ayu-light': {
    name: 'Ayu Light', type: 'light', monacoTheme: 'ayu-light',
    vars: {
      '--bg-primary': '#fafafa', '--bg-secondary': '#f0f0f0', '--bg-tertiary': '#e8e8e8',
      '--bg-sidebar': '#f0f0f0', '--bg-tab-active': '#fafafa', '--bg-tab-inactive': '#f0f0f0',
      '--bg-statusbar': '#f29718', '--bg-input': '#f0f0f0', '--bg-dropdown': '#f0f0f0',
      '--bg-hover': '#e8e8e8', '--bg-selected': '#dde9ff', '--bg-highlight': '#dde9ff',
      '--border': '#e0e0e0', '--text-primary': '#5c6773', '--text-secondary': '#959da6',
      '--text-muted': '#c7ccd1', '--text-accent': '#399ee6', '--text-bright': '#1f2430',
      '--text-statusbar': '#ffffff', '--icon-color': '#5c6773', '--accent': '#f29718',
      '--scrollbar-thumb': '#d0d0d0',
    }
  },

  // ===== HIGH CONTRAST =====
  'hc-dark': {
    name: 'High Contrast Dark', type: 'dark', monacoTheme: 'hc-black',
    vars: {
      '--bg-primary': '#000000', '--bg-secondary': '#000000', '--bg-tertiary': '#1a1a1a',
      '--bg-sidebar': '#000000', '--bg-tab-active': '#000000', '--bg-tab-inactive': '#000000',
      '--bg-statusbar': '#000000', '--bg-input': '#1a1a1a', '--bg-dropdown': '#1a1a1a',
      '--bg-hover': '#1a1a1a', '--bg-selected': '#1a1a1a', '--bg-highlight': '#1a1a1a',
      '--border': '#6fc3df', '--text-primary': '#ffffff', '--text-secondary': '#cccccc',
      '--text-muted': '#888888', '--text-accent': '#6fc3df', '--text-bright': '#ffffff',
      '--text-statusbar': '#ffffff', '--icon-color': '#ffffff', '--accent': '#6fc3df',
      '--scrollbar-thumb': '#6fc3df',
    }
  },
};

export const FONT_OPTIONS = [
  { id: 'jetbrains-mono', name: 'JetBrains Mono', value: "'JetBrains Mono', monospace" },
  { id: 'fira-code', name: 'Fira Code', value: "'Fira Code', monospace" },
  { id: 'cascadia-code', name: 'Cascadia Code', value: "'Cascadia Code', monospace" },
  { id: 'source-code-pro', name: 'Source Code Pro', value: "'Source Code Pro', monospace" },
  { id: 'consolas', name: 'Consolas', value: "Consolas, monospace" },
  { id: 'monaco', name: 'Monaco', value: "Monaco, monospace" },
  { id: 'courier-new', name: 'Courier New', value: "'Courier New', monospace" },
  { id: 'hack', name: 'Hack', value: "Hack, monospace" },
  { id: 'inconsolata', name: 'Inconsolata', value: "Inconsolata, monospace" },
  { id: 'roboto-mono', name: 'Roboto Mono', value: "'Roboto Mono', monospace" },
  { id: 'ubuntu-mono', name: 'Ubuntu Mono', value: "'Ubuntu Mono', monospace" },
  { id: 'anonymous-pro', name: 'Anonymous Pro', value: "'Anonymous Pro', monospace" },
];

export const THEME_CATEGORIES = {
  dark: 'Dark Themes',
  light: 'Light Themes',
};

export function applyTheme(themeId, customVars = null) {
  const theme = customVars ? null : THEMES[themeId];
  const vars = customVars || (theme && theme.vars) || THEMES['vs-dark'].vars;
  const root = document.documentElement;
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
