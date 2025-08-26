import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const path = require('path');

const config: Config = {
  title: 'Epiconsciousness',
  tagline: 'Philosophy of existence and Material Positivism.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://meta.purplehillsbooks.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Purple Hills Books', // Usually your GitHub org/user name.
  projectName: 'epiconsciousness', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/agiletribe50.png',
    navbar: {
      title: 'Epiconsciousness',
      logo: {
        alt: 'My Site Logo',
        src: 'img/epiconsciousness.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Knowledge Base',
          to: '/docs/intro',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Knowledge Base',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://meta.purplehillsbooks.com',
            },
            {
              label: 'Discord',
              href: 'https://meta.purplehillsbooks.com',
            },
            {
              label: 'Twitter',
              href: 'https://meta.purplehillsbooks.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://meta.purplehillsbooks.com',
            },
          ],
        },
      ],
      copyright: `Copyright ©2011-${new Date().getFullYear()} Chet Anderson.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'json'],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    path.resolve(__dirname, './node_modules/docusaurus-lunr-search/'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/2024/01/01/logical-errors-of-atheism/',
            to: '/docs/Atheism/logical-errors-of-atheism',
          },
          {
            from: '/2023/11/25/cs-lewis-on-brains/',
            to: '/docs/Self-Organization/cs-lewis-on-brains',
          },
          {
            from: '/2023/11/11/did-all-important-science-come-from-religion/',
            to: '/docs/Religion/all-science-from-religion',
          },
          {
            from: '/2023/10/07/self-organization-rayleigh-benard-convection/',
            to: '/docs/Self-Organization/Examples/rayleigh-benard-convection',
          },
          {
            from: '/2023/10/05/denial-of-continuous-creation/',
            to: '/docs/Self-Organization/denial-of-continuous-creation',
          },
          {
            from: '/2023/06/15/written-revealed-word-cant-possibly-be-true/',
            to: '/docs/Religion/written-revealed-word',
          },
          {
            from: '/2023/05/26/a-mustard-seed/',
            to: '/docs/Atheism/a-mustard-seed',
          },
          {
            from: '/2023/03/05/enlightenment-is-a-journey/',
            to: '/docs/Material-Positivism/enlightenment-is-a-journey',
          },
          {
            from: '/2022/12/10/on-god/',
            to: '/docs/Religion/on-god',
          },
          {
            from: '/2022/12/04/the-ape-wrote-i-am/',
            to: '/docs/Self-Organization/ape-wrote-i-am',
          },
          {
            from: '/2022/12/04/wei/',
            to: '/docs/Atheism/we-i',
          },
          {
            from: '/2022/12/04/is-atheism-a-purposeless-meaningless-existence/',
            to: '/docs/Atheism/purposeless-meaningless-existence',
          },
          {
            from: '/2022/09/29/structure-of-reality/',
            to: '/docs/Material-Positivism/structure-of-reality',
          },
          {
            from: '/2022/09/11/understanding-orgos/',
            to: '/docs/Material-Positivism/understanding-orgos',
          },
          {
            from: '/2022/09/07/question-about-sin/',
            to: '/docs/Religion/question-about-sin',
          },
          {
            from: '/2022/08/16/20-questions-on-consciousness/',
            to: '/docs/Self-Organization/questions-on-consciousness',
          },
          {
            from: '/2022/07/18/life-and-personhood/',
            to: '/docs/Philosophy/life-and-personhood',
          },
          {
            from: '/2022/07/17/an-imperfect-god/',
            to: '/docs/Religion/an-imperfect-god',
          },
          {
            from: '/2022/05/08/kants-categorical-imperative-is-arbitrary/',
            to: '/docs/Ethics/kants-categorical-imperative',
          },
          {
            from: '/2022/03/15/the-illusion-of-universals/',
            to: '/docs/Ontology/illusion-of-universals',
          },
          {
            from: '/2022/03/14/classes-and-perceptions/',
            to: '/docs/Consciousness/classes-and-perceptions',
          },
          {
            from: '/2022/03/14/where-is-the-novel/',
            to: '/docs/Ontology/where-is-the-novel',
          },
          {
            from: '/2022/03/13/what-is-nominalism/',
            to: '/docs/Ontology/what-is-nominalism',
          },
          {
            from: '/2022/02/27/what-are-universals/',
            to: '/docs/Ontology/what-are-universals',
          },
          {
            from: '/2022/01/29/numbers-arent-real/',
            to: '/docs/Ontology/numbers-arent-real',
          },
          {
            from: '/2022/01/28/pre-socratic-philosopher-timeline/',
            to: '/docs/Philosophy/pre-socratic-philosopher-timeline',
          },
          {
            from: '/2021/12/31/behe-and-creationist-dishonesty/',
            to: '/docs/Self-Organization/behe-dishonesty',
          },
          {
            from: '/2021/12/30/meaning-of-life/',
            to: '/docs/Material-Positivism/meaning-of-life',
          },
          {
            from: '/2021/12/13/holy-spirit/',
            to: '/docs/Material-Positivism/holy-spirit',
          },
          {
            from: '/2021/11/28/zombies-are-inconceivable/',
            to: '/docs/Consciousness/zombies-are-inconceivable',
          },
          {
            from: '/2021/10/11/putnam-and-meaning/',
            to: '/docs/Consciousness/putnam-and-meaning',
          },
          {
            from: '/2021/07/14/morality-like-beauty-lies-in-wholeness/',
            to: '/docs/Ethics/morality-lies-in-wholeness',
          },
          {
            from: '/2021/06/19/metaethics-1-rule-sets/',
            to: '/docs/Ethics/rule-sets',
          },
          {
            from: '/2021/06/12/fifty-years-is-enough/',
            to: '/docs/Philosophy/fifty-years-is-enough',
          },
          {
            from: '/2021/04/07/quite-evidently-scientism/',
            to: '/docs/Religion/quite-evidently-scientism',
          },
          {
            from: '/2021/02/08/three-elevators/',
            to: '/docs/Religion/three-elevators',
          },
          {
            from: '/2021/01/20/cults-and-conspiracy-theories/',
            to: '/docs/Religion/conspiracy-theories',
          },
          {
            from: '/2021/01/03/immanence/',
            to: '/docs/Material-Positivism/immanence',
          },
          {
            from: '/2020/12/28/mary-does-and-does-not-see-red/',
            to: '/docs/Consciousness/mary-see-red',
          },
          {
            from: '/2020/12/27/three-great-responsibilities/',
            to: 'three-great-responsibilities',
          },
          {
            from: '/2020/12/23/banishing-zombies/',
            to: '/docs/Consciousness/zombies-nonsense',
          },
          {
            from: '/2020/11/28/material-positivism/',
            to: '/docs/Material-Positivism/mp-definition',
          },
          {
            from: '/2020/11/02/you-cant-feel-your-brain/',
            to: '/docs/Consciousness/you-cant-feel-brain',
          },
          {
            from: '/2020/11/01/a-tale-of-two-riddles/',
            to: '/docs/Philosophy/tale-of-two-riddles',
          },
          {
            from: '/2020/10/14/take-a-breath/',
            to: '/docs/Philosophy/take-a-breath',
          },
          {
            from: '/2020/10/14/why-is-there-more-than-mist/',
            to: '/docs/Self-Organization/more-than-mist',
          },
          {
            from: '/2020/09/23/free-will-is-determined/',
            to: '/docs/Consciousness/self-determined',
          },
          {
            from: '/2020/09/23/ham-sandwich-universe/',
            to: '/docs/Ontology/ham-sandwich-universe',
          },
          {
            from: '/2020/09/19/love/',
            to: '/docs/Philosophy/love',
          },
          {
            from: '/2020/09/17/criticism-of-fom/',
            to: '/docs/Ethics/criticism-of-fom',
          },
          {
            from: '/2020/09/11/views-on-objective-morality/',
            to: '/docs/Ethics/views-on-objective-morality',
          },
          {
            from: '/2020/07/13/a-foundation-for-objective-morality/',
            to: '/docs/Ethics/foundation-objective-morality',
          },
          {
            from: '/2020/06/25/purpose-of-a-nation/',
            to: '/docs/Philosophy/purpose-of-a-nation',
          },
          {
            from: '/2020/05/14/what-does-atheism-mean/',
            to: '/docs/Atheism/definition-of-atheism',
          },
          {
            from: '/2020/05/11/justified-true-belief/',
            to: '/docs/Philosophy/justified-true-belief',
          },
          {
            from: '/2020/05/07/day-23664/',
            to: '/docs/Philosophy/day-23664',
          },
          {
            from: '/2020/04/25/omniscience-and-free-will-are-incompatible/',
            to: 'docs/Religion/omniscience-and-free-will',
          },
          {
            from: '/2020/04/23/only-particles-exist/',
            to: '/docs/Ontology/only-particles-exist',
          },
          {
            from: '/2020/04/21/the-scientific-consensus-is-that-virtual-particles-come-into-existence-with-any-efficient-cause/',
            to: '/docs/Ontology/particles-without-cause',
          },
          {
            from: '/2020/04/16/science-allows-humans-to-experience-the-transcendent/',
            to: '/docs/Philosophy/science-and-transcendence',
          },
          {
            from: '/2020/04/14/goals-for-a-liberal/',
            to: '/docs/Philosophy/goals-for-a-liberal',
          },
          {
            from: '/2020/04/14/what-is-epiconsciousness/',
            to: '/docs/Consciousness/what-is-epiconsciousness',
          },
          {
            from: '/2020/04/12/something-from-nothing/',
            to: '/docs/Ontology/something-from-nothing',
          },
          {
            from: '/2020/04/12/science-says/',
            to: '/docs/Philosophy/science-says',
          },
          {
            from: '/2020/03/28/hello-world/',
            to: '/docs/intro',
          },
        ],
      },
    ],
  ],
};

export default config;