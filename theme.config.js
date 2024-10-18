import Image from 'next/image'

export default {
  logo: <Image src="/logo.png" alt="DigiMedic Logo" width={200} height={50} />,
  project: {
    link: 'https://github.com/DigiMedic/digimedic-docs',
  },
  docsRepositoryBase: 'https://github.com/DigiMedic/digimedic-docs/blob/main',
  footer: {
    text: '© 2023 DigiMedic. Všechna práva vyhrazena.',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – DigiMedic Dokumentace'
    }
  },
  head: null,
  faviconGlyph: '🏥',
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  primaryHue: 203,
}
