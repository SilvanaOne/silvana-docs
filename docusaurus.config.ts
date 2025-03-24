import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "node:path";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Silvana",
  tagline: "Proof of everything engine to scale your business",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.silvana.one",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SilvanaOne", // Usually your GitHub org/user name.
  projectName: "silvana-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: ["docusaurus-theme-openapi-docs"],
  plugins: [
    [
      "docusaurus-plugin-typedoc-api",
      {
        projectRoot: path.join(__dirname, "silvana-lib"),
        packages: [
          "packages/api",
          "packages/abi",
          "packages/token",
          "packages/nft",
          "packages/storage",
          "packages/upgradable",
        ],
        banner: "Proof of everything engine",
        typedocOptions: {
          excludeExternals: true,
        },
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi", // plugin id
        docsPluginId: "@docusaurus/preset-classic", // configured for preset-classic
        config: {
          silvana: {
            specPath: "silvana-lib/packages/api/open-api.yaml",
            outputDir: "docs/OpenAPI",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
            showSchemas: true,
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          docItemComponent: "@theme/ApiItem",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/SilvanaOne/silvana-docs/tree/main/",
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/SilvanaOne/silvana-docs/tree/main/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-05SXMZDYQC",
          anonymizeIP: false,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: "46H8LPLD8M",

      // Public API key: it is safe to commit it
      apiKey: "6d859da9ebf362293a15cea622bad837",

      indexName: "silvana",

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      //... other Algolia params
    },
    languageTabs: [
      {
        highlight: "bash",
        language: "curl",
        logoClass: "curl",
      },
      {
        highlight: "javascript",
        language: "javascript",
        logoClass: "javascript",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
      },
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "rust",
        language: "rust",
        logoClass: "rust",
      },
      {
        highlight: "ocaml",
        language: "ocaml",
        logoClass: "ocaml",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },

      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      {
        highlight: "powershell",
        language: "powershell",
        logoClass: "powershell",
      },
    ],
    // Replace with your project's social card
    image: "img/silvana-social-card.png",
    navbar: {
      logo: {
        alt: "Silvana Logo",
        src: "img/silvana-logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "docSidebar",
          sidebarId: "apiSidebar",
          position: "left",
          label: "Core",
        },
        {
          to: "api",
          label: "Modules",
          position: "left",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/SilvanaOne",
        //   label: "GitHub",
        //   position: "right",
        // },
        // {
        //   href: "https://www.npmjs.com/org/silvana-one",
        //   label: "NPM",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/SilvanaOne",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Silvana`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
