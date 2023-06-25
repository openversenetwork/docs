// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

function defineSection(section, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars.js'),
      breadcrumbs: true,
      editUrl: 'https://github.com/openverse/docs/tree/main/',
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('use'),
  defineSection('develop'),
  defineSection('validate'),
  defineSection('protocol'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Openverse Docs',
  tagline: 'Develop on Openverse',
  url: 'https://docs.openverse.network',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'openverse', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    project: {
      name: "Openverse",
      denom: "Openverse",
      ticker: "EVMOS",
      binary: "versed",
      testnet_denom: "tOpenverse",
      testnet_ticker: "tEVMOS",
      rpc_url: "https://eth.bd.openverse.network:8545",
      rpc_url_testnet: "https://eth.bd.openverse.dev:8545",
      rpc_url_local: "http://localhost:8545/",
      chain_id: "9001",
      testnet_chain_id: "9000",
      latest_version: "v11.0.1",
      mainnet_version: "v11.0.1",
      testnet_version: "v11.0.1",
      version_number: "2",
      testnet_version_number: "4",
      testnet_evm_explorer_url: "https://evm.openverse.dev",
      evm_explorer_url: "https://escan.live",
      testnet_cosmos_explorer_url: "https://testnet.mintscan.io/openverse-testnet",
      cosmos_explorer_url: "https://www.mintscan.io/openverse",
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-3JSJBBPS3L',
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    ...SECTIONS,
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Openverse Docs',
        logo: {
          href: '/',
          alt: 'Openverse Logo',
          src: 'img/openverse.svg',
        },
        items: [
          {
            position: 'left',
            label: 'Use',
            to: '/use',
          },
          {
            position: 'left',
            label: 'Develop',
            to: '/develop',
          },
          {
            position: 'left',
            label: 'Validate',
            to: '/validate',
          },
          {
            position: 'left',
            label: 'Protocol',
            to: '/protocol',
          },
          {
            position: 'right',
            label: 'Tools',
            to: '/develop/tools',
          },
          {
            position: 'right',
            label: 'Networks',
            to: '/develop/api/networks',
          },
          {
            position: 'right',
            label: 'App',
            to: 'https://app.openverse.network',
          },
          {
            href: 'https://github.com/openverse/openverse',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Build a Dapp',
                to: '/develop/build-a-dApp/build-smart-contracts',
              },
              {
                label: 'Contribute to Openverse',
                to: '/use',
              },
              {
                label: 'Become a Validator',
                to: '/validate',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Press room',
                href: 'https://www.utopia.school/forum.php?mod=forumdisplay&fid=8',
              },
              {
                label: 'General discussion',
                href: 'https://www.utopia.school/forum.php?mod=forumdisplay&fid=13',
              },
              {
                label: 'Economy',
                href: 'https://www.utopia.school/forum.php?mod=forumdisplay&fid=14',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://www.utopia.school/home.php?mod=space&uid=9&do=blog',
              },
              // {
              //   label: 'Openverse GitHub',
              //   href: 'https://github.com/openversenetwork',
              // },
            ],
          },
        ],
        copyright: `Built with ❤️ by the Openverse Core Development Team. © ${new Date().getFullYear()} All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: "Openverse Docs", 
          content: "Official Openverse Docs. Come discover why we are the the home for native, cross-chain applications."
        },
        {
          name: "author",
          content: "The Openverse Core Team @openverseOrg"
        },
        {
          name: "keywords",
          content: "EMM, cross-chain, Cosmos SDK, IBC, fast-finality, native, cross-chain applications, EVM on Cosmos"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }
      ],
      algolia: {
        // The application ID provided by Algolia
        appId: 'DPTADG0ME1',
  
        // Public API key: it is safe to commit it
        apiKey: 'fbbcf85b58f500e5e4d301f9730f3526',
  
        indexName: 'versedocs',
  
        contextualSearch: true,
        searchParameters: {},
      },
    }),
};

module.exports = config;
