// WebCraft Pro - Theme Configuration
// Easy customization for different clients

const themes = {
  // Default WebCraft Pro Theme
  default: {
    name: 'WebCraft Pro',
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        900: '#1e3a8a'
      },
      secondary: {
        50: '#faf5ff',
        100: '#f3e8ff',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7c3aed',
        900: '#581c87'
      },
      accent: {
        green: '#10b981',
        orange: '#f59e0b',
        red: '#ef4444',
        indigo: '#6366f1'
      }
    },
    gradients: {
      primary: 'from-blue-600 to-purple-600',
      secondary: 'from-purple-600 to-pink-600',
      hero: 'from-blue-50 via-white to-purple-50'
    },
    fonts: {
      primary: 'Inter',
      weights: [300, 400, 500, 600, 700, 800]
    }
  },

  // Modern Tech Theme
  tech: {
    name: 'TechFlow',
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        900: '#0c4a6e'
      },
      secondary: {
        50: '#fdf4ff',
        100: '#fae8ff',
        500: '#d946ef',
        600: '#c026d3',
        700: '#a21caf',
        900: '#701a75'
      },
      accent: {
        green: '#22c55e',
        orange: '#f97316',
        red: '#dc2626',
        indigo: '#4f46e5'
      }
    },
    gradients: {
      primary: 'from-cyan-600 to-purple-600',
      secondary: 'from-purple-600 to-pink-600',
      hero: 'from-cyan-50 via-white to-purple-50'
    },
    fonts: {
      primary: 'Inter',
      weights: [300, 400, 500, 600, 700, 800]
    }
  },

  // Creative Agency Theme
  creative: {
    name: 'Creative Studio',
    colors: {
      primary: {
        50: '#fef7ee',
        100: '#fdedd4',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        900: '#9a3412'
      },
      secondary: {
        50: '#fdf2f8',
        100: '#fce7f3',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        900: '#831843'
      },
      accent: {
        green: '#10b981',
        blue: '#3b82f6',
        purple: '#8b5cf6',
        yellow: '#eab308'
      }
    },
    gradients: {
      primary: 'from-orange-600 to-pink-600',
      secondary: 'from-pink-600 to-purple-600',
      hero: 'from-orange-50 via-white to-pink-50'
    },
    fonts: {
      primary: 'Inter',
      weights: [300, 400, 500, 600, 700, 800]
    }
  },

  // Corporate Theme
  corporate: {
    name: 'Corporate Pro',
    colors: {
      primary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        900: '#1e293b'
      },
      secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        900: '#1e293b'
      },
      accent: {
        green: '#059669',
        blue: '#2563eb',
        red: '#dc2626',
        yellow: '#d97706'
      }
    },
    gradients: {
      primary: 'from-slate-600 to-slate-800',
      secondary: 'from-slate-700 to-slate-900',
      hero: 'from-slate-50 via-white to-slate-100'
    },
    fonts: {
      primary: 'Inter',
      weights: [300, 400, 500, 600, 700, 800]
    }
  }
};

// Theme switcher functionality
class ThemeManager {
  constructor() {
    this.currentTheme = 'default';
    this.init();
  }

  init() {
    this.loadSavedTheme();
    this.applyTheme(this.currentTheme);
  }

  loadSavedTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    this.currentTheme = savedTheme;
  }

  applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    // Update CSS custom properties
    const root = document.documentElement;
    
    // Apply primary colors
    Object.entries(theme.colors.primary).forEach(([shade, color]) => {
      root.style.setProperty(`--color-primary-${shade}`, color);
    });

    // Apply secondary colors
    Object.entries(theme.colors.secondary).forEach(([shade, color]) => {
      root.style.setProperty(`--color-secondary-${shade}`, color);
    });

    // Apply accent colors
    Object.entries(theme.colors.accent).forEach(([name, color]) => {
      root.style.setProperty(`--color-accent-${name}`, color);
    });

    // Update theme name
    document.body.setAttribute('data-theme', themeName);
    
    // Save theme preference
    localStorage.setItem('selectedTheme', themeName);
    this.currentTheme = themeName;

    // Update theme name in UI if it exists
    const themeNameElement = document.getElementById('current-theme-name');
    if (themeNameElement) {
      themeNameElement.textContent = theme.name;
    }
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  getAvailableThemes() {
    return Object.keys(themes);
  }

  getThemeData(themeName) {
    return themes[themeName];
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { themes, ThemeManager };
} else {
  window.themes = themes;
  window.ThemeManager = ThemeManager;
}
