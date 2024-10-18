export default {
  logo: <span>DigiMedic Dokumentace</span>,
  project: {
    link: 'https://github.com/yourusername/digimedic-docs',
  },
  docsRepositoryBase: 'https://github.com/yourusername/digimedic-docs/blob/main',
  footer: {
    text: '© 2023 DigiMedic. Všechna práva vyhrazena.',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – DigiMedic Dokumentace'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}
