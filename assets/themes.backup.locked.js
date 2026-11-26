/**
 * St. Thomas Church Chempu - 52 Curated Color Themes & Dynamic Theme Engine
 * Categories: Cathedral & Liturgical, Heritage & Royal, Kerala Nature, Modern, Dark/Midnight
 */

const CHURCH_THEMES = [
  // -------------------------------------------------------------
  // 1. CATHEDRAL & LITURGICAL TRADITIONS (10 Themes)
  // -------------------------------------------------------------
  {
    id: 'chempu-classic',
    name: 'Chempu Classic Navy & Gold',
    malayalam: 'ചെമ്പ് ക്ലാസിക് (നീല & സ്വർണ്ണം)',
    category: 'cathedral',
    isDark: false,
    colors: {
      primaryDeep: '#0f1c3f',
      primary: '#182e66',
      primaryLight: '#28448f',
      goldPrimary: '#d4a34b',
      goldGlow: '#eec578',
      goldDark: '#a27424',
      maroon: '#751a2b',
      bgMain: '#fcfbf7',
      bgCard: '#ffffff',
      bgCardSubtle: '#f7f5ee',
      textMain: '#1f2430',
      textMuted: '#5d6778',
      borderLight: '#e6e2d6',
      borderGold: 'rgba(212, 163, 75, 0.35)'
    }
  },
  {
    id: 'vatican-gold',
    name: 'Vatican Papal Gold & Ivory',
    malayalam: 'വത്തിക്കാൻ സുവർണ്ണ പ്രഭ',
    category: 'cathedral',
    isDark: false,
    colors: {
      primaryDeep: '#1c2430',
      primary: '#2e3a4e',
      primaryLight: '#435470',
      goldPrimary: '#c99a2c',
      goldGlow: '#f3cf7a',
      goldDark: '#99731a',
      maroon: '#9e2a2b',
      bgMain: '#faf9f5',
      bgCard: '#ffffff',
      bgCardSubtle: '#f3efe6',
      textMain: '#1f242e',
      textMuted: '#5e6878',
      borderLight: '#e4dfd3',
      borderGold: 'rgba(201, 154, 44, 0.35)'
    }
  },
  {
    id: 'marian-azure',
    name: 'Marian Grace Azure & Pearl',
    malayalam: 'മരിയൻ നീല & മുത്ത്',
    category: 'cathedral',
    isDark: false,
    colors: {
      primaryDeep: '#0c2744',
      primary: '#164372',
      primaryLight: '#2563a6',
      goldPrimary: '#c4973b',
      goldGlow: '#e8c57d',
      goldDark: '#946f22',
      maroon: '#1e3a8a',
      bgMain: '#f5f8fc',
      bgCard: '#ffffff',
      bgCardSubtle: '#ebf2fa',
      textMain: '#152438',
      textMuted: '#52667d',
      borderLight: '#d6e2ef',
      borderGold: 'rgba(196, 151, 59, 0.35)'
    }
  },
  {
    id: 'patriarchal-purple',
    name: 'Patriarchal Byzantine Violet',
    malayalam: 'പാത്രിയാർക്കൽ വയലറ്റ്',
    category: 'cathedral',
    isDark: false,
    colors: {
      primaryDeep: '#260c38',
      primary: '#441963',
      primaryLight: '#682a94',
      goldPrimary: '#cca039',
      goldGlow: '#eac97b',
      goldDark: '#967420',
      maroon: '#701a75',
      bgMain: '#faf6fd',
      bgCard: '#ffffff',
      bgCardSubtle: '#f2e8f8',
      textMain: '#241433',
      textMuted: '#675378',
      borderLight: '#e7d8f2',
      borderGold: 'rgba(204, 160, 57, 0.35)'
    }
  },
  {
    id: 'pentecost-scarlet',
    name: 'Pentecost Scarlet & Fire',
    malayalam: 'പെന്തക്കോസ്താ അഗ്നി ചുവപ്പ്',
    category: 'cathedral',
    isDark: false,
    colors: {
      primaryDeep: '#3b0d14',
      primary: '#6b1422',
      primaryLight: '#9e2236',
      goldPrimary: '#cf9834',
      goldGlow: '#f1c87a',
      goldDark: '#996d1c',
      maroon: '#991b1b',
      bgMain: '#fdf7f7',
      bgCard: '#ffffff',
      bgCardSubtle: '#f9ecec',
      textMain: '#2d1519',
      textMuted: '#735156',
      borderLight: '#edd6d8',
      borderGold: 'rgba(207, 152, 52, 0.35)'
    }
  },
  {
    id: 'gregorian-rose',
    name: 'Gaudete Rose & Silver',
    malayalam: 'ഗ്രിഗോറിയൻ റോസ് & വെള്ളി',
    category: 'cathedral',
    isDark: false,
    colors: {
      primaryDeep: '#331826',
      primary: '#572b43',
      primaryLight: '#7d4162',
      goldPrimary: '#b88358',
      goldGlow: '#deb48e',
      goldDark: '#8c5f3b',
      maroon: '#9f1239',
      bgMain: '#fdf7f9',
      bgCard: '#ffffff',
      bgCardSubtle: '#f7ebf0',
      textMain: '#2d1b24',
      textMuted: '#6e5663',
      borderLight: '#ecdbe2',
      borderGold: 'rgba(184, 131, 88, 0.35)'
    }
  },
  {
    id: 'advent-royal',
    name: 'Advent Royal Indigo',
    malayalam: 'ആഗമനകാല ഇൻഡിഗോ',
    category: 'cathedral',
    isDark: false,
    colors: {
      primaryDeep: '#181236',
      primary: '#2d235e',
      primaryLight: '#46388e',
      goldPrimary: '#cda243',
      goldGlow: '#eccd84',
      goldDark: '#967425',
      maroon: '#6d28d9',
      bgMain: '#f7f6fc',
      bgCard: '#ffffff',
      bgCardSubtle: '#edeaf8',
      textMain: '#1c1736',
      textMuted: '#5b5478',
      borderLight: '#ded9f2',
      borderGold: 'rgba(205, 162, 67, 0.35)'
    }
  },
  {
    id: 'trinity-bronze',
    name: 'Holy Trinity Sacred Bronze',
    malayalam: 'പരിശുദ്ധ ത്രിത്വ വെങ്കലം',
    category: 'cathedral',
    isDark: false,
    colors: {
      primaryDeep: '#1c1b18',
      primary: '#33312c',
      primaryLight: '#524e47',
      goldPrimary: '#c29236',
      goldGlow: '#e8c278',
      goldDark: '#8f6820',
      maroon: '#854d0e',
      bgMain: '#faf9f6',
      bgCard: '#ffffff',
      bgCardSubtle: '#f2efea',
      textMain: '#242320',
      textMuted: '#63615b',
      borderLight: '#e4e0d7',
      borderGold: 'rgba(194, 146, 54, 0.35)'
    }
  },
  {
    id: 'eucharistic-glory',
    name: 'Eucharistic Glory White & Gold',
    malayalam: 'വിശുദ്ധ കുർബാന സുവർണ്ണം',
    category: 'cathedral',
    isDark: false,
    colors: {
      primaryDeep: '#1e1c26',
      primary: '#363245',
      primaryLight: '#544e69',
      goldPrimary: '#d9a741',
      goldGlow: '#f7d383',
      goldDark: '#a37924',
      maroon: '#991b1b',
      bgMain: '#fffef9',
      bgCard: '#ffffff',
      bgCardSubtle: '#f7f4ea',
      textMain: '#22202b',
      textMuted: '#666373',
      borderLight: '#e8e5dc',
      borderGold: 'rgba(217, 167, 65, 0.35)'
    }
  },
  {
    id: 'epiphany-celestial',
    name: 'Epiphany Star Sapphire',
    malayalam: 'ദനഹാ നക്ഷത്ര നീല',
    category: 'cathedral',
    isDark: false,
    colors: {
      primaryDeep: '#0d1f3b',
      primary: '#173663',
      primaryLight: '#265191',
      goldPrimary: '#cda54b',
      goldGlow: '#eed086',
      goldDark: '#997629',
      maroon: '#831843',
      bgMain: '#f6f9fc',
      bgCard: '#ffffff',
      bgCardSubtle: '#ebf1f8',
      textMain: '#142136',
      textMuted: '#546682',
      borderLight: '#d6e1ee',
      borderGold: 'rgba(205, 165, 75, 0.35)'
    }
  },

  // -------------------------------------------------------------
  // 2. HERITAGE & ROYAL ARISTOCRACY (10 Themes)
  // -------------------------------------------------------------
  {
    id: 'imperial-crimson',
    name: 'Imperial Cardinal Crimson',
    malayalam: 'രാജകീയ ക്രിംസൺ',
    category: 'heritage',
    isDark: false,
    colors: {
      primaryDeep: '#360913',
      primary: '#5e1224',
      primaryLight: '#8c1f38',
      goldPrimary: '#d19e38',
      goldGlow: '#f1c97a',
      goldDark: '#9b711e',
      maroon: '#881337',
      bgMain: '#fdf7f8',
      bgCard: '#ffffff',
      bgCardSubtle: '#f9eaee',
      textMain: '#2b1016',
      textMuted: '#714e55',
      borderLight: '#ebd2d8',
      borderGold: 'rgba(209, 158, 56, 0.35)'
    }
  },
  {
    id: 'malabar-teak',
    name: 'Malabar Teakwood & Amber',
    malayalam: 'മലബാർ തേക്ക് & ആമ്പർ',
    category: 'heritage',
    isDark: false,
    colors: {
      primaryDeep: '#26150d',
      primary: '#452618',
      primaryLight: '#693c27',
      goldPrimary: '#c79138',
      goldGlow: '#eec075',
      goldDark: '#94671e',
      maroon: '#78350f',
      bgMain: '#fcf8f5',
      bgCard: '#ffffff',
      bgCardSubtle: '#f5ece4',
      textMain: '#241a15',
      textMuted: '#69584f',
      borderLight: '#e6ded7',
      borderGold: 'rgba(199, 145, 56, 0.35)'
    }
  },
  {
    id: 'syrian-terracotta',
    name: 'East-Syriac Ochre & Terracotta',
    malayalam: 'സുറിയാനി പൈതൃക ചെമ്പ്',
    category: 'heritage',
    isDark: false,
    colors: {
      primaryDeep: '#281710',
      primary: '#472b1e',
      primaryLight: '#6e4431',
      goldPrimary: '#c27d32',
      goldGlow: '#e8af74',
      goldDark: '#8f571b',
      maroon: '#9a3412',
      bgMain: '#faf6f3',
      bgCard: '#ffffff',
      bgCardSubtle: '#f3ece5',
      textMain: '#261b16',
      textMuted: '#6b574f',
      borderLight: '#e4ddd6',
      borderGold: 'rgba(194, 125, 50, 0.35)'
    }
  },
  {
    id: 'venetian-velvet',
    name: 'Venetian Velvet Maroon',
    malayalam: 'വെനീഷ്യൻ വെൽവെറ്റ്',
    category: 'heritage',
    isDark: false,
    colors: {
      primaryDeep: '#2d0916',
      primary: '#4f1329',
      primaryLight: '#782041',
      goldPrimary: '#cca245',
      goldGlow: '#eec97c',
      goldDark: '#997427',
      maroon: '#831843',
      bgMain: '#fdf7fa',
      bgCard: '#ffffff',
      bgCardSubtle: '#f8ebf2',
      textMain: '#2a111a',
      textMuted: '#6f505d',
      borderLight: '#ebd5df',
      borderGold: 'rgba(204, 162, 69, 0.35)'
    }
  },
  {
    id: 'crown-ruby',
    name: 'Crown Jewel Ruby',
    malayalam: 'കിരീട മാണിക്യം',
    category: 'heritage',
    isDark: false,
    colors: {
      primaryDeep: '#280814',
      primary: '#471225',
      primaryLight: '#6e203c',
      goldPrimary: '#cfa547',
      goldGlow: '#f0ce84',
      goldDark: '#9c7728',
      maroon: '#9f1239',
      bgMain: '#fef7f9',
      bgCard: '#ffffff',
      bgCardSubtle: '#faeaf0',
      textMain: '#291119',
      textMuted: '#704f5b',
      borderLight: '#ebd5df',
      borderGold: 'rgba(207, 165, 71, 0.35)'
    }
  },
  {
    id: 'regal-emerald',
    name: 'Regal Sceptre Emerald',
    malayalam: 'രാജകീയ മരതകം',
    category: 'heritage',
    isDark: false,
    colors: {
      primaryDeep: '#08261b',
      primary: '#114230',
      primaryLight: '#1d634a',
      goldPrimary: '#c49b38',
      goldGlow: '#eac574',
      goldDark: '#916f1f',
      maroon: '#065f46',
      bgMain: '#f4fbf7',
      bgCard: '#ffffff',
      bgCardSubtle: '#e7f5ee',
      textMain: '#13241d',
      textMuted: '#4f665b',
      borderLight: '#d2e6dc',
      borderGold: 'rgba(196, 155, 56, 0.35)'
    }
  },
  {
    id: 'florentine-antique',
    name: 'Florentine Antique Gilt',
    malayalam: 'ഫ്ലോറന്റൈൻ വെങ്കലം',
    category: 'heritage',
    isDark: false,
    colors: {
      primaryDeep: '#1f1912',
      primary: '#382e23',
      primaryLight: '#594a3a',
      goldPrimary: '#bfa043',
      goldGlow: '#e5cd82',
      goldDark: '#8c7227',
      maroon: '#78350f',
      bgMain: '#faf7f2',
      bgCard: '#ffffff',
      bgCardSubtle: '#f2ece2',
      textMain: '#241f19',
      textMuted: '#696054',
      borderLight: '#e4dcd0',
      borderGold: 'rgba(191, 160, 67, 0.35)'
    }
  },
  {
    id: 'versailles-court',
    name: 'Versailles Blue & Royal Gilt',
    malayalam: 'വെർസായ് രാജകൊട്ടാരം',
    category: 'heritage',
    isDark: false,
    colors: {
      primaryDeep: '#0d1c33',
      primary: '#173054',
      primaryLight: '#264a80',
      goldPrimary: '#d4aa48',
      goldGlow: '#f3ce83',
      goldDark: '#9e7927',
      maroon: '#991b1b',
      bgMain: '#f7f9fd',
      bgCard: '#ffffff',
      bgCardSubtle: '#ebf1fa',
      textMain: '#142033',
      textMuted: '#52637a',
      borderLight: '#d6e1ef',
      borderGold: 'rgba(212, 170, 72, 0.35)'
    }
  },
  {
    id: 'burgundy-grandeur',
    name: 'Burgundy Grandeur & Silk',
    malayalam: 'ബർഗണ്ടി പ്രൗഢി',
    category: 'heritage',
    isDark: false,
    colors: {
      primaryDeep: '#290615',
      primary: '#4a0f28',
      primaryLight: '#731a40',
      goldPrimary: '#cca348',
      goldGlow: '#eecb82',
      goldDark: '#967428',
      maroon: '#831843',
      bgMain: '#fdf7f9',
      bgCard: '#ffffff',
      bgCardSubtle: '#f9ebf1',
      textMain: '#290f1b',
      textMuted: '#6f505f',
      borderLight: '#ebd5df',
      borderGold: 'rgba(204, 163, 72, 0.35)'
    }
  },
  {
    id: 'monarch-onyx',
    name: 'Sovereign Monarch Onyx & Gold',
    malayalam: 'രാജകീയ ഒനിക്സ് & സ്വർണ്ണം',
    category: 'heritage',
    isDark: false,
    colors: {
      primaryDeep: '#141416',
      primary: '#242429',
      primaryLight: '#3d3d45',
      goldPrimary: '#d19e34',
      goldGlow: '#f5cb74',
      goldDark: '#9c711c',
      maroon: '#991b1b',
      bgMain: '#fafaf8',
      bgCard: '#ffffff',
      bgCardSubtle: '#f2f2ee',
      textMain: '#1c1c1f',
      textMuted: '#5e5e66',
      borderLight: '#e2e2dc',
      borderGold: 'rgba(209, 158, 52, 0.35)'
    }
  },

  // -------------------------------------------------------------
  // 3. KERALA LANDSCAPES & BACKWATERS (10 Themes)
  // -------------------------------------------------------------
  {
    id: 'vembanad-serenity',
    name: 'Vembanad Lake Serenity Teal',
    malayalam: 'വേമ്പനാട് കായൽ പ്രഭ',
    category: 'kerala',
    isDark: false,
    colors: {
      primaryDeep: '#06232b',
      primary: '#0d3d4a',
      primaryLight: '#185d70',
      goldPrimary: '#c79d46',
      goldGlow: '#ebc882',
      goldDark: '#947028',
      maroon: '#0e7490',
      bgMain: '#f3fbfb',
      bgCard: '#ffffff',
      bgCardSubtle: '#e6f5f6',
      textMain: '#102226',
      textMuted: '#4f6469',
      borderLight: '#d3e7ea',
      borderGold: 'rgba(199, 157, 70, 0.35)'
    }
  },
  {
    id: 'kumarakom-mist',
    name: 'Kumarakom Backwater Green',
    malayalam: 'കുമരകം പ്രകൃതി ഹരിതം',
    category: 'kerala',
    isDark: false,
    colors: {
      primaryDeep: '#0a2618',
      primary: '#15452d',
      primaryLight: '#216946',
      goldPrimary: '#c49b42',
      goldGlow: '#e8cb82',
      goldDark: '#916e25',
      maroon: '#15803d',
      bgMain: '#f4fbf6',
      bgCard: '#ffffff',
      bgCardSubtle: '#e7f5ec',
      textMain: '#12241a',
      textMuted: '#51665a',
      borderLight: '#d3e8dc',
      borderGold: 'rgba(196, 155, 66, 0.35)'
    }
  },
  {
    id: 'monsoon-clouds',
    name: 'Kerala Monsoon Clouds & Cyan',
    malayalam: 'കേരള വർഷമേഘം & സിയാൻ',
    category: 'kerala',
    isDark: false,
    colors: {
      primaryDeep: '#142030',
      primary: '#24374f',
      primaryLight: '#395375',
      goldPrimary: '#c79b47',
      goldGlow: '#ecc985',
      goldDark: '#947029',
      maroon: '#0284c7',
      bgMain: '#f5f8fb',
      bgCard: '#ffffff',
      bgCardSubtle: '#eaf0f7',
      textMain: '#192330',
      textMuted: '#566678',
      borderLight: '#d7e1ed',
      borderGold: 'rgba(199, 155, 71, 0.35)'
    }
  },
  {
    id: 'chemmanakary-dawn',
    name: 'Chemmanakary Dawn Amber',
    malayalam: 'ചെമ്മനാകരി പുലരി ആമ്പർ',
    category: 'kerala',
    isDark: false,
    colors: {
      primaryDeep: '#161d36',
      primary: '#26335c',
      primaryLight: '#3c4e8a',
      goldPrimary: '#cc8c37',
      goldGlow: '#f1ba76',
      goldDark: '#99631f',
      maroon: '#c2410c',
      bgMain: '#fdf9f5',
      bgCard: '#ffffff',
      bgCardSubtle: '#f7ede2',
      textMain: '#1e212f',
      textMuted: '#606478',
      borderLight: '#e6ded4',
      borderGold: 'rgba(204, 140, 55, 0.35)'
    }
  },
  {
    id: 'pamba-copper',
    name: 'Sacred River Blue & Copper',
    malayalam: 'പമ്പാ തീരം & ചെമ്പ്',
    category: 'kerala',
    isDark: false,
    colors: {
      primaryDeep: '#0c223b',
      primary: '#173c66',
      primaryLight: '#265994',
      goldPrimary: '#c27e36',
      goldGlow: '#e9b077',
      goldDark: '#8f571e',
      maroon: '#b45309',
      bgMain: '#f5f9fc',
      bgCard: '#ffffff',
      bgCardSubtle: '#eaf1f8',
      textMain: '#162333',
      textMuted: '#53657a',
      borderLight: '#d7e2ee',
      borderGold: 'rgba(194, 126, 54, 0.35)'
    }
  },
  {
    id: 'chempu-palms',
    name: 'Chempu Coconut Grove Green',
    malayalam: 'ചെമ്പ് തെങ്ങിൻതോപ്പുകൾ',
    category: 'kerala',
    isDark: false,
    colors: {
      primaryDeep: '#092416',
      primary: '#123f27',
      primaryLight: '#1d5e3c',
      goldPrimary: '#c79f38',
      goldGlow: '#edcf78',
      goldDark: '#947320',
      maroon: '#166534',
      bgMain: '#f3faf5',
      bgCard: '#ffffff',
      bgCardSubtle: '#e6f5ea',
      textMain: '#112419',
      textMuted: '#4f6657',
      borderLight: '#d2e7d8',
      borderGold: 'rgba(199, 159, 56, 0.35)'
    }
  },
  {
    id: 'malabar-cardamom',
    name: 'Malabar Cardamom & Clove',
    malayalam: 'സുഗന്ധവ്യഞ്ജന നാട്',
    category: 'kerala',
    isDark: false,
    colors: {
      primaryDeep: '#24140b',
      primary: '#402314',
      primaryLight: '#633821',
      goldPrimary: '#bd8b3a',
      goldGlow: '#e3b977',
      goldDark: '#8c6220',
      maroon: '#991b1b',
      bgMain: '#fbf7f4',
      bgCard: '#ffffff',
      bgCardSubtle: '#f4ece4',
      textMain: '#241a14',
      textMuted: '#6b594f',
      borderLight: '#e6ded5',
      borderGold: 'rgba(189, 139, 58, 0.35)'
    }
  },
  {
    id: 'alleppey-aquamarine',
    name: 'Alleppey Lagoon Aquamarine',
    malayalam: 'ആലപ്പുഴ കായൽ തീരം',
    category: 'kerala',
    isDark: false,
    colors: {
      primaryDeep: '#052627',
      primary: '#0c4244',
      primaryLight: '#166669',
      goldPrimary: '#cca145',
      goldGlow: '#f0ce84',
      goldDark: '#997427',
      maroon: '#0f766e',
      bgMain: '#f2fbfb',
      bgCard: '#ffffff',
      bgCardSubtle: '#e4f5f5',
      textMain: '#0f2425',
      textMuted: '#4f6667',
      borderLight: '#d0e9e9',
      borderGold: 'rgba(204, 161, 69, 0.35)'
    }
  },
  {
    id: 'sahya-mist',
    name: 'Sahyadri Mountain Forest',
    malayalam: 'സഹ്യാദ്രി മലനിരകൾ',
    category: 'kerala',
    isDark: false,
    colors: {
      primaryDeep: '#162118',
      primary: '#273b2c',
      primaryLight: '#3d5c44',
      goldPrimary: '#bfa047',
      goldGlow: '#e5cd86',
      goldDark: '#8c7329',
      maroon: '#4d7c0f',
      bgMain: '#f6faf7',
      bgCard: '#ffffff',
      bgCardSubtle: '#ebf4ed',
      textMain: '#1c261e',
      textMuted: '#57695a',
      borderLight: '#dbe8dd',
      borderGold: 'rgba(191, 160, 71, 0.35)'
    }
  },
  {
    id: 'maravanthuruthu-breeze',
    name: 'Maravanthuruthu Coastal Slate',
    malayalam: 'മറവൻതുരുത്ത് കായൽക്കാറ്റ്',
    category: 'kerala',
    isDark: false,
    colors: {
      primaryDeep: '#0e242c',
      primary: '#193f4c',
      primaryLight: '#276073',
      goldPrimary: '#c99b45',
      goldGlow: '#edcb82',
      goldDark: '#946f28',
      maroon: '#0891b2',
      bgMain: '#f3f9fb',
      bgCard: '#ffffff',
      bgCardSubtle: '#e6f2f6',
      textMain: '#132329',
      textMuted: '#51656d',
      borderLight: '#d3e4ea',
      borderGold: 'rgba(201, 155, 69, 0.35)'
    }
  },

  // -------------------------------------------------------------
  // 4. MODERN ELEGANT & CATHEDRAL CONTEMPORARY (11 Themes)
  // -------------------------------------------------------------
  {
    id: 'nordic-cathedral',
    name: 'Nordic Cathedral Slate & Ice',
    malayalam: 'നോർഡിക് കത്തീഡ്രൽ സ്ലേറ്റ്',
    category: 'modern',
    isDark: false,
    colors: {
      primaryDeep: '#0f172a',
      primary: '#1e293b',
      primaryLight: '#334155',
      goldPrimary: '#c49b45',
      goldGlow: '#eccb85',
      goldDark: '#917028',
      maroon: '#0284c7',
      bgMain: '#f8fafc',
      bgCard: '#ffffff',
      bgCardSubtle: '#f1f5f9',
      textMain: '#0f172a',
      textMuted: '#64748b',
      borderLight: '#e2e8f0',
      borderGold: 'rgba(196, 155, 69, 0.35)'
    }
  },
  {
    id: 'sapphire-grace',
    name: 'Sapphire Grace & Warm Sand',
    malayalam: 'നീലക്കല്ല് സഫയർ & മണൽ',
    category: 'modern',
    isDark: false,
    colors: {
      primaryDeep: '#091e42',
      primary: '#133973',
      primaryLight: '#2059ad',
      goldPrimary: '#d4a23d',
      goldGlow: '#f3cb7d',
      goldDark: '#9e7321',
      maroon: '#1d4ed8',
      bgMain: '#f6f9fd',
      bgCard: '#ffffff',
      bgCardSubtle: '#eaf1fa',
      textMain: '#14223b',
      textMuted: '#576785',
      borderLight: '#dbe4f2',
      borderGold: 'rgba(212, 162, 61, 0.35)'
    }
  },
  {
    id: 'coastal-sanctuary',
    name: 'Coastal Sanctuary Teal',
    malayalam: 'തീരദേശ സങ്കേതം ടീൽ',
    category: 'modern',
    isDark: false,
    colors: {
      primaryDeep: '#052b2b',
      primary: '#0d4a4a',
      primaryLight: '#187373',
      goldPrimary: '#c99f47',
      goldGlow: '#eccd86',
      goldDark: '#94722a',
      maroon: '#0d9488',
      bgMain: '#f2fbfb',
      bgCard: '#ffffff',
      bgCardSubtle: '#e4f6f6',
      textMain: '#112626',
      textMuted: '#536868',
      borderLight: '#d2ebeb',
      borderGold: 'rgba(201, 159, 71, 0.35)'
    }
  },
  {
    id: 'electric-indigo',
    name: 'Modern Cathedral Indigo',
    malayalam: 'മോഡേൺ ഇൻഡിഗോ കത്തീഡ്രൽ',
    category: 'modern',
    isDark: false,
    colors: {
      primaryDeep: '#17153b',
      primary: '#282463',
      primaryLight: '#3f3996',
      goldPrimary: '#cfa344',
      goldGlow: '#f1cb7e',
      goldDark: '#997325',
      maroon: '#6366f1',
      bgMain: '#f7f6fc',
      bgCard: '#ffffff',
      bgCardSubtle: '#edeaf8',
      textMain: '#1d1b38',
      textMuted: '#5f5b7d',
      borderLight: '#dedaf2',
      borderGold: 'rgba(207, 163, 68, 0.35)'
    }
  },
  {
    id: 'crimson-modern',
    name: 'Contemporary Crimson & Pearl',
    malayalam: 'ആധുനിക ക്രിംസൺ & പേൾ',
    category: 'modern',
    isDark: false,
    colors: {
      primaryDeep: '#330814',
      primary: '#571225',
      primaryLight: '#851f3b',
      goldPrimary: '#c9983e',
      goldGlow: '#edc47b',
      goldDark: '#946c22',
      maroon: '#e11d48',
      bgMain: '#fdf7f8',
      bgCard: '#ffffff',
      bgCardSubtle: '#faeaf0',
      textMain: '#291118',
      textMuted: '#6e5159',
      borderLight: '#ebd5dd',
      borderGold: 'rgba(201, 152, 62, 0.35)'
    }
  },
  {
    id: 'rosewood-sanctum',
    name: 'Polished Rosewood & Brass',
    malayalam: 'റോസ്‌വുഡ് & പിച്ചള',
    category: 'modern',
    isDark: false,
    colors: {
      primaryDeep: '#290f17',
      primary: '#471c2a',
      primaryLight: '#6e2e42',
      goldPrimary: '#c79743',
      goldGlow: '#edc581',
      goldDark: '#946d27',
      maroon: '#be185d',
      bgMain: '#fdf7f9',
      bgCard: '#ffffff',
      bgCardSubtle: '#f7ebf0',
      textMain: '#26141b',
      textMuted: '#6e545e',
      borderLight: '#ebd6df',
      borderGold: 'rgba(199, 151, 67, 0.35)'
    }
  },
  {
    id: 'tuscan-basilica',
    name: 'Tuscan Basilica Ochre',
    malayalam: 'ടസ്കൻ ബസിലിക്ക ഒക്രെ',
    category: 'modern',
    isDark: false,
    colors: {
      primaryDeep: '#29170a',
      primary: '#472a15',
      primaryLight: '#6e4324',
      goldPrimary: '#cf8e32',
      goldGlow: '#f3be73',
      goldDark: '#99631a',
      maroon: '#c2410c',
      bgMain: '#fdf8f4',
      bgCard: '#ffffff',
      bgCardSubtle: '#f7ece2',
      textMain: '#241a12',
      textMuted: '#6e594c',
      borderLight: '#e6ded4',
      borderGold: 'rgba(207, 142, 50, 0.35)'
    }
  },
  {
    id: 'emerald-isle',
    name: 'Deep Emerald & Mint Light',
    malayalam: 'ഡീപ് എമറാൾഡ് & മിന്റ്',
    category: 'modern',
    isDark: false,
    colors: {
      primaryDeep: '#04241c',
      primary: '#094233',
      primaryLight: '#12664f',
      goldPrimary: '#cfa645',
      goldGlow: '#f1cb81',
      goldDark: '#997628',
      maroon: '#059669',
      bgMain: '#f3faf7',
      bgCard: '#ffffff',
      bgCardSubtle: '#e5f5ee',
      textMain: '#10241e',
      textMuted: '#516960',
      borderLight: '#d1e8de',
      borderGold: 'rgba(207, 166, 69, 0.35)'
    }
  },
  {
    id: 'atlantic-depths',
    name: 'Atlantic Deep Blue & Coral',
    malayalam: 'അറ്റ്ലാന്റിക് ബ്ലൂ & കോറൽ',
    category: 'modern',
    isDark: false,
    colors: {
      primaryDeep: '#091c2e',
      primary: '#123352',
      primaryLight: '#1f4e7a',
      goldPrimary: '#cfa143',
      goldGlow: '#f3cb7f',
      goldDark: '#997226',
      maroon: '#f43f5e',
      bgMain: '#f5f8fb',
      bgCard: '#ffffff',
      bgCardSubtle: '#eaf0f7',
      textMain: '#132130',
      textMuted: '#566678',
      borderLight: '#d7e2ed',
      borderGold: 'rgba(207, 161, 67, 0.35)'
    }
  },
  {
    id: 'warm-terracotta',
    name: 'Warm Terracotta & Sun Gold',
    malayalam: 'ടെറാക്കോട്ട & സൂര്യസ്വർണ്ണം',
    category: 'modern',
    isDark: false,
    colors: {
      primaryDeep: '#2b130e',
      primary: '#47221a',
      primaryLight: '#6e382b',
      goldPrimary: '#c98a32',
      goldGlow: '#f0bb74',
      goldDark: '#94601c',
      maroon: '#ea580c',
      bgMain: '#fdf8f5',
      bgCard: '#ffffff',
      bgCardSubtle: '#f7ece5',
      textMain: '#261713',
      textMuted: '#6b544e',
      borderLight: '#e6ded8',
      borderGold: 'rgba(201, 138, 50, 0.35)'
    }
  },
  {
    id: 'celestial-starlight',
    name: 'Celestial Blue & Starlight Gold',
    malayalam: 'ആകാശ നീലിമ & നക്ഷത്ര സ്വർണ്ണം',
    category: 'modern',
    isDark: false,
    colors: {
      primaryDeep: '#0a1d36',
      primary: '#13355e',
      primaryLight: '#214f8a',
      goldPrimary: '#d4aa46',
      goldGlow: '#f3ce82',
      goldDark: '#9e7926',
      maroon: '#3b82f6',
      bgMain: '#f6f9fc',
      bgCard: '#ffffff',
      bgCardSubtle: '#eaf1f8',
      textMain: '#132236',
      textMuted: '#55667d',
      borderLight: '#d7e1ee',
      borderGold: 'rgba(212, 170, 70, 0.35)'
    }
  },

  // -------------------------------------------------------------
  // 5. DARK & MIDNIGHT BASILICA (11 Themes)
  // -------------------------------------------------------------
  {
    id: 'midnight-basilica',
    name: 'Midnight Basilica High Gothic',
    malayalam: 'മിഡ്‌നൈറ്റ് ബസിലിക്ക (ഡാർക്ക്)',
    category: 'dark',
    isDark: true,
    colors: {
      primaryDeep: '#0d1117',
      primary: '#161b22',
      primaryLight: '#21262d',
      goldPrimary: '#e5a93c',
      goldGlow: '#f7cf7f',
      goldDark: '#b88126',
      maroon: '#b91c1c',
      bgMain: '#090d13',
      bgCard: '#131820',
      bgCardSubtle: '#181f2a',
      textMain: '#f0f3f6',
      textMuted: '#8b949e',
      borderLight: 'rgba(255, 255, 255, 0.12)',
      borderGold: 'rgba(229, 169, 60, 0.4)'
    }
  },
  {
    id: 'obsidian-gold',
    name: 'Obsidian Black & 24k Gold',
    malayalam: 'ഒബ്സിഡിയൻ കറുപ്പ് & സ്വർണ്ണം',
    category: 'dark',
    isDark: true,
    colors: {
      primaryDeep: '#0f0f11',
      primary: '#18181c',
      primaryLight: '#27272e',
      goldPrimary: '#f59e0b',
      goldGlow: '#fbbf24',
      goldDark: '#b45309',
      maroon: '#dc2626',
      bgMain: '#08080a',
      bgCard: '#141418',
      bgCardSubtle: '#1d1d23',
      textMain: '#f5f5f7',
      textMuted: '#a1a1aa',
      borderLight: 'rgba(255, 255, 255, 0.1)',
      borderGold: 'rgba(245, 158, 11, 0.45)'
    }
  },
  {
    id: 'gothic-shadow',
    name: 'Gothic Slate & Blood Ruby',
    malayalam: 'ഗോഥിക് സ്ലേറ്റ് & റൂബി',
    category: 'dark',
    isDark: true,
    colors: {
      primaryDeep: '#111317',
      primary: '#1a1d24',
      primaryLight: '#282c37',
      goldPrimary: '#d99a38',
      goldGlow: '#f3c479',
      goldDark: '#a36e1f',
      maroon: '#ef4444',
      bgMain: '#0c0d10',
      bgCard: '#161920',
      bgCardSubtle: '#1e222b',
      textMain: '#f1f2f4',
      textMuted: '#8d94a0',
      borderLight: 'rgba(255, 255, 255, 0.12)',
      borderGold: 'rgba(217, 154, 56, 0.4)'
    }
  },
  {
    id: 'deep-velvet-night',
    name: 'Imperial Purple Velvet Night',
    malayalam: 'രാജകീയ പർപ്പിൾ രാവ്',
    category: 'dark',
    isDark: true,
    colors: {
      primaryDeep: '#140a1f',
      primary: '#201131',
      primaryLight: '#321b4d',
      goldPrimary: '#e0a943',
      goldGlow: '#f5cf84',
      goldDark: '#aa7824',
      maroon: '#c084fc',
      bgMain: '#0d0615',
      bgCard: '#1a0e28',
      bgCardSubtle: '#231436',
      textMain: '#f6f2fb',
      textMuted: '#a08eb3',
      borderLight: 'rgba(255, 255, 255, 0.12)',
      borderGold: 'rgba(224, 169, 67, 0.4)'
    }
  },
  {
    id: 'dark-emerald-forest',
    name: 'Nocturnal Emerald Forest',
    malayalam: 'രാത്രി മരതകം',
    category: 'dark',
    isDark: true,
    colors: {
      primaryDeep: '#061711',
      primary: '#0c261c',
      primaryLight: '#143d2d',
      goldPrimary: '#d9a741',
      goldGlow: '#f3cc7f',
      goldDark: '#a37522',
      maroon: '#10b981',
      bgMain: '#04100c',
      bgCard: '#0e2219',
      bgCardSubtle: '#142f23',
      textMain: '#f0fdf6',
      textMuted: '#84a696',
      borderLight: 'rgba(255, 255, 255, 0.12)',
      borderGold: 'rgba(217, 167, 65, 0.4)'
    }
  },
  {
    id: 'abyssal-navy-dark',
    name: 'Abyssal Oceanic Navy',
    malayalam: 'ആഴക്കടൽ നീല (ഡാർക്ക്)',
    category: 'dark',
    isDark: true,
    colors: {
      primaryDeep: '#08121f',
      primary: '#0f2036',
      primaryLight: '#1a3354',
      goldPrimary: '#dfa73f',
      goldGlow: '#f6cd82',
      goldDark: '#a67520',
      maroon: '#38bdf8',
      bgMain: '#050c15',
      bgCard: '#101d2e',
      bgCardSubtle: '#17273d',
      textMain: '#f0f6fd',
      textMuted: '#869cb7',
      borderLight: 'rgba(255, 255, 255, 0.12)',
      borderGold: 'rgba(223, 167, 63, 0.4)'
    }
  },
  {
    id: 'charcoal-amber-ember',
    name: 'Charcoal Cathedral & Glowing Ember',
    malayalam: 'കനൽക്കട്ട & ആമ്പർ',
    category: 'dark',
    isDark: true,
    colors: {
      primaryDeep: '#131316',
      primary: '#1f1f24',
      primaryLight: '#303038',
      goldPrimary: '#f97316',
      goldGlow: '#fb923c',
      goldDark: '#c2410c',
      maroon: '#eab308',
      bgMain: '#0d0d0f',
      bgCard: '#18181c',
      bgCardSubtle: '#222228',
      textMain: '#f6f6f7',
      textMuted: '#9e9ea6',
      borderLight: 'rgba(255, 255, 255, 0.1)',
      borderGold: 'rgba(249, 115, 22, 0.45)'
    }
  },
  {
    id: 'wine-noir-dark',
    name: 'Wine Noir & Rose Gold',
    malayalam: 'വൈൻ നോയിർ & റോസ് ഗോൾഡ്',
    category: 'dark',
    isDark: true,
    colors: {
      primaryDeep: '#17070e',
      primary: '#240d17',
      primaryLight: '#381625',
      goldPrimary: '#df9c53',
      goldGlow: '#f3c18b',
      goldDark: '#ab6e2c',
      maroon: '#f43f5e',
      bgMain: '#0f0409',
      bgCard: '#1e0c15',
      bgCardSubtle: '#29121d',
      textMain: '#fef1f4',
      textMuted: '#a98793',
      borderLight: 'rgba(255, 255, 255, 0.12)',
      borderGold: 'rgba(223, 156, 83, 0.4)'
    }
  },
  {
    id: 'sapphire-night-dark',
    name: 'Midnight St. Thomas Cross Blue',
    malayalam: 'തോമാശ്ലീഹാ കുരിശ് നീല (ഡാർക്ക്)',
    category: 'dark',
    isDark: true,
    colors: {
      primaryDeep: '#081024',
      primary: '#101e40',
      primaryLight: '#1b2f61',
      goldPrimary: '#e2ac42',
      goldGlow: '#f7d185',
      goldDark: '#aa7a21',
      maroon: '#60a5fa',
      bgMain: '#040916',
      bgCard: '#101a33',
      bgCardSubtle: '#162344',
      textMain: '#f1f5fd',
      textMuted: '#8ba0c4',
      borderLight: 'rgba(255, 255, 255, 0.12)',
      borderGold: 'rgba(226, 172, 66, 0.4)'
    }
  },
  {
    id: 'monastery-candlelight',
    name: 'Ancient Monastery Candlelight',
    malayalam: 'സന്യാസാശ്രമ ദീപം (ഡാർക്ക്)',
    category: 'dark',
    isDark: true,
    colors: {
      primaryDeep: '#17120d',
      primary: '#261f17',
      primaryLight: '#3d3227',
      goldPrimary: '#fbbf24',
      goldGlow: '#fde68a',
      goldDark: '#b45309',
      maroon: '#ea580c',
      bgMain: '#0f0b07',
      bgCard: '#1e1812',
      bgCardSubtle: '#292119',
      textMain: '#fefbf6',
      textMuted: '#a89d91',
      borderLight: 'rgba(255, 255, 255, 0.12)',
      borderGold: 'rgba(251, 191, 36, 0.45)'
    }
  },
  {
    id: 'byzantine-mosaic-dark',
    name: 'Byzantine Mosaic Midnight',
    malayalam: 'ബൈസന്റൈൻ മൊസൈക് (ഡാർക്ക്)',
    category: 'dark',
    isDark: true,
    colors: {
      primaryDeep: '#0d151c',
      primary: '#15222d',
      primaryLight: '#213342',
      goldPrimary: '#e0ab3f',
      goldGlow: '#f5d082',
      goldDark: '#a67721',
      maroon: '#0284c7',
      bgMain: '#080d12',
      bgCard: '#131e27',
      bgCardSubtle: '#1a2733',
      textMain: '#f1f6fa',
      textMuted: '#8b9ea9',
      borderLight: 'rgba(255, 255, 255, 0.12)',
      borderGold: 'rgba(224, 171, 63, 0.4)'
    }
  }
];

// Helper to convert hex to rgba
function hexToRgba(hex, alpha) {
  if (!hex || hex.startsWith('rgba')) return hex;
  let clean = hex.replace('#', '');
  if (clean.length === 3) {
    clean = clean.split('').map(c => c + c).join('');
  }
  const r = parseInt(clean.substring(0, 2), 16) || 0;
  const g = parseInt(clean.substring(2, 4), 16) || 0;
  const b = parseInt(clean.substring(4, 6), 16) || 0;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Apply a theme by its ID
 */
function applyChurchTheme(themeId, save = true) {
  const theme = CHURCH_THEMES.find(t => t.id === themeId) || CHURCH_THEMES[0];
  const root = document.documentElement;
  const c = theme.colors;

  root.style.setProperty('--primary-deep', c.primaryDeep);
  root.style.setProperty('--primary', c.primary);
  root.style.setProperty('--primary-light', c.primaryLight);
  root.style.setProperty('--gold-primary', c.goldPrimary);
  root.style.setProperty('--gold-glow', c.goldGlow);
  root.style.setProperty('--gold-dark', c.goldDark);
  root.style.setProperty('--gold-subtle', hexToRgba(c.goldPrimary, 0.14));
  root.style.setProperty('--maroon', c.maroon);
  root.style.setProperty('--maroon-light', c.maroon);
  root.style.setProperty('--bg-main', c.bgMain);
  root.style.setProperty('--bg-card', c.bgCard);
  root.style.setProperty('--bg-card-subtle', c.bgCardSubtle);
  root.style.setProperty('--text-main', c.textMain);
  root.style.setProperty('--text-muted', c.textMuted);
  root.style.setProperty('--border-light', c.borderLight);
  root.style.setProperty('--border-gold', c.borderGold);

  root.setAttribute('data-theme', theme.id);

  if (theme.isDark) {
    root.classList.add('dark-theme');
    if (document.body) document.body.classList.add('dark-theme');
  } else {
    root.classList.remove('dark-theme');
    if (document.body) document.body.classList.remove('dark-theme');
  }

  // Update theme preview badge/pill in launcher
  const badge = document.getElementById('currentThemeBadge');
  if (badge) badge.textContent = theme.name;

  // Highlight active card in drawer if rendered
  document.querySelectorAll('.theme-card').forEach(card => {
    if (card.getAttribute('data-theme-id') === theme.id) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  if (save) {
    try {
      localStorage.setItem('church_site_theme', theme.id);
    } catch (e) {}
  }

  window.dispatchEvent(new CustomEvent('churchThemeChanged', { detail: theme }));
  return theme;
}

/**
 * Initialize theme from localStorage or admin default config
 */
function initThemeEngine() {
  let initialTheme = 'chempu-classic';
  try {
    const saved = localStorage.getItem('church_site_theme');
    if (saved && CHURCH_THEMES.some(t => t.id === saved)) {
      initialTheme = saved;
    } else {
      const siteConfigStr = localStorage.getItem('st_thomas_chempu_site_config') || localStorage.getItem('st_thomas_site_config');
      if (siteConfigStr) {
        const parsed = JSON.parse(siteConfigStr);
        if (parsed.site_theme && CHURCH_THEMES.some(t => t.id === parsed.site_theme)) {
          initialTheme = parsed.site_theme;
        }
      }
    }
  } catch (e) {
    console.warn('Could not read saved theme:', e);
  }

  applyChurchTheme(initialTheme, false);

  // Theme drawer removed from live index page per request (managed via Admin Panel)
  // if (document.querySelector('.main-header')) {
  //   buildThemeDrawer();
  // }
}

/**
 * Build the interactive Floating Launcher and Theme Drawer in index.html
 */
function buildThemeDrawer() {
  if (document.getElementById('themeDrawerWrap')) return;

  const currentThemeId = document.documentElement.getAttribute('data-theme') || 'chempu-classic';
  const currentTheme = CHURCH_THEMES.find(t => t.id === currentThemeId) || CHURCH_THEMES[0];

  const html = `
    <!-- Floating Theme Switcher Button -->
    <div id="themeLauncherWrap" class="theme-launcher-wrap">
      <button id="themeLauncherBtn" class="theme-launcher-btn" aria-label="Open 50+ Themes" title="Customize Color Theme (50+ Palettes)">
        <i class="fas fa-palette"></i>
        <span class="theme-btn-text">50+ Themes</span>
        <span class="theme-active-dot" style="background:${currentTheme.colors.goldPrimary}"></span>
      </button>
    </div>

    <!-- Theme Drawer Modal Backdrop -->
    <div id="themeDrawerBackdrop" class="theme-drawer-backdrop"></div>

    <!-- Theme Drawer Panel -->
    <aside id="themeDrawer" class="theme-drawer" aria-label="Color Themes Palette">
      <div class="theme-drawer-header">
        <div class="theme-header-info">
          <div class="theme-header-title">
            <i class="fas fa-palette theme-icon"></i>
            <h3>Parish Theme Studio</h3>
            <span class="theme-count-badge">52 Palettes</span>
          </div>
          <p class="theme-header-desc">Instant live preview. Select your favorite liturgical, heritage, Kerala nature, or midnight theme.</p>
        </div>
        <button id="closeThemeDrawerBtn" class="theme-close-btn" aria-label="Close theme studio">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="theme-drawer-toolbar">
        <div class="theme-search-box">
          <i class="fas fa-search"></i>
          <input type="text" id="themeSearchInput" placeholder="Search 52 themes (e.g. Gold, Marian, Emerald, Dark)..." aria-label="Search themes">
        </div>

        <div class="theme-category-pills" id="themeCategoryPills">
          <button class="theme-cat-pill active" data-cat="all">All (52)</button>
          <button class="theme-cat-pill" data-cat="cathedral">Cathedral (10)</button>
          <button class="theme-cat-pill" data-cat="heritage">Heritage &amp; Royal (10)</button>
          <button class="theme-cat-pill" data-cat="kerala">Kerala Nature (10)</button>
          <button class="theme-cat-pill" data-cat="modern">Modern (11)</button>
          <button class="theme-cat-pill" data-cat="dark">Midnight &amp; Dark (11)</button>
        </div>

        <div class="theme-quick-actions">
          <button id="randomThemeBtn" class="theme-action-btn" title="Pick a random theme">
            <i class="fas fa-random"></i> Shuffle
          </button>
          <button id="resetThemeBtn" class="theme-action-btn" title="Reset to Chempu Classic Navy &amp; Gold">
            <i class="fas fa-undo"></i> Reset Default
          </button>
        </div>
      </div>

      <div class="theme-cards-container" id="themeCardsContainer">
        <!-- Injected via JS -->
      </div>

      <div class="theme-drawer-footer">
        <span><i class="fas fa-check-circle" style="color:#10b981;"></i> Theme preferences auto-save for your browser.</span>
        <a href="admin.html" class="theme-admin-link"><i class="fas fa-cog"></i> Set Site Default in CMS</a>
      </div>
    </aside>
  `;

  const container = document.createElement('div');
  container.id = 'themeDrawerWrap';
  container.innerHTML = html;
  document.body.appendChild(container);

  renderThemeCards('all', '');
  bindThemeDrawerEvents();
}

/**
 * Render Theme Cards into the drawer
 */
function renderThemeCards(category, query) {
  const container = document.getElementById('themeCardsContainer');
  if (!container) return;

  const currentThemeId = document.documentElement.getAttribute('data-theme') || 'chempu-classic';
  const q = (query || '').toLowerCase().trim();

  const filtered = CHURCH_THEMES.filter(t => {
    const matchesCat = category === 'all' || t.category === category;
    const matchesQ = !q ||
      t.name.toLowerCase().includes(q) ||
      t.malayalam.toLowerCase().includes(q) ||
      t.id.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="theme-empty-state">
        <i class="fas fa-search" style="font-size:2rem; opacity:0.4; margin-bottom:0.8rem;"></i>
        <p>No themes found matching "<strong>${query}</strong>"</p>
        <button class="theme-cat-pill" onclick="document.getElementById('themeSearchInput').value=''; renderThemeCards('all','');" style="margin-top:0.8rem;">Clear Search</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(t => {
    const isActive = t.id === currentThemeId;
    const c = t.colors;
    return `
      <div class="theme-card ${isActive ? 'active' : ''} ${t.isDark ? 'is-dark-theme' : ''}" data-theme-id="${t.id}" tabindex="0" role="button" aria-label="Select theme ${t.name}">
        <div class="theme-swatch-strip">
          <span class="swatch-dot" style="background:${c.primaryDeep};" title="Primary Deep: ${c.primaryDeep}"></span>
          <span class="swatch-dot" style="background:${c.primary};" title="Primary: ${c.primary}"></span>
          <span class="swatch-dot" style="background:${c.goldPrimary};" title="Gold Accent: ${c.goldPrimary}"></span>
          <span class="swatch-dot" style="background:${c.maroon};" title="Secondary Accent: ${c.maroon}"></span>
          <span class="swatch-bg-dot" style="background:${c.bgMain}; border: 1px solid rgba(0,0,0,0.15);" title="Background: ${c.bgMain}"></span>
        </div>

        <div class="theme-card-body">
          <div class="theme-card-title">${t.name}</div>
          <div class="theme-card-malayalam">${t.malayalam}</div>
        </div>

        <div class="theme-card-badge-row">
          <span class="theme-cat-tag ${t.category}">${t.category}</span>
          ${t.isDark ? '<span class="theme-dark-tag"><i class="fas fa-moon"></i> Dark</span>' : ''}
          <span class="theme-active-indicator"><i class="fas fa-check"></i> Active</span>
        </div>
      </div>
    `;
  }).join('');

  // Add click handlers on cards
  container.querySelectorAll('.theme-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-theme-id');
      applyChurchTheme(id, true);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = card.getAttribute('data-theme-id');
        applyChurchTheme(id, true);
      }
    });
  });
}

/**
 * Bind Theme Drawer Events
 */
function bindThemeDrawerEvents() {
  const launcherBtn = document.getElementById('themeLauncherBtn');
  const drawer = document.getElementById('themeDrawer');
  const backdrop = document.getElementById('themeDrawerBackdrop');
  const closeBtn = document.getElementById('closeThemeDrawerBtn');
  const searchInput = document.getElementById('themeSearchInput');
  const categoryPills = document.querySelectorAll('.theme-cat-pill');
  const randomBtn = document.getElementById('randomThemeBtn');
  const resetBtn = document.getElementById('resetThemeBtn');

  let activeCategory = 'all';

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (searchInput) searchInput.focus();
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (launcherBtn) launcherBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Filter Categories
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-cat');
      renderThemeCards(activeCategory, searchInput ? searchInput.value : '');
    });
  });

  // Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderThemeCards(activeCategory, e.target.value);
    });
  }

  // Shuffle / Random Theme
  if (randomBtn) {
    randomBtn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * CHURCH_THEMES.length);
      const chosen = CHURCH_THEMES[randomIndex];
      applyChurchTheme(chosen.id, true);
    });
  }

  // Reset to default
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      applyChurchTheme('chempu-classic', true);
    });
  }
}

// Auto-run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeEngine);
} else {
  initThemeEngine();
}
