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
  staticDirectories: ["static"],
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

          sidebarItemsGenerator: async function customSidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);

            function filterHiddenCategories(items) {
              return items
                .map((item) => {
                  if (item.type === "category" && item.className === "hidden") {
                    return null;
                  }

                  if (item.type === "category" && item.items) {
                    return {
                      ...item,
                      items: filterHiddenCategories(item.items),
                    };
                  }

                  return item;
                })
                .filter(Boolean);
            }

            return filterHiddenCategories(sidebarItems);
          },
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
  headTags: [
    // Для стандартных браузеров
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/img/favicon-16x16.png",
        sizes: "16x16",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/img/favicon-32x32.png",
        sizes: "32x32",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/img/favicon-96x96.png",
        sizes: "96x96",
      },
    },

    // Для iOS
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "/img/apple-icon-57x57.png",
        sizes: "57x57",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "/img/apple-icon-60x60.png",
        sizes: "60x60",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "/img/apple-icon-72x72.png",
        sizes: "72x72",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "/img/apple-icon-76x76.png",
        sizes: "76x76",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "/img/apple-icon-114x114.png",
        sizes: "114x114",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "/img/apple-icon-120x120.png",
        sizes: "120x120",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "/img/apple-icon-144x144.png",
        sizes: "144x144",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "/img/apple-icon-152x152.png",
        sizes: "152x152",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "/img/apple-icon-180x180.png",
        sizes: "180x180",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "/img/apple-icon.png",
        sizes: "180x180",
      },
    }, // стандартный

    // Для Android
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/img/android-icon-36x36.png",
        sizes: "36x36",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/img/android-icon-48x48.png",
        sizes: "48x48",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/img/android-icon-72x72.png",
        sizes: "72x72",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/img/android-icon-96x96.png",
        sizes: "96x96",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/img/android-icon-144x144.png",
        sizes: "144x144",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        href: "/img/android-icon-192x192.png",
        sizes: "192x192",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/assets/fonts/Whyte-Medium.ttf",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/assets/fonts/Whyte-Medium.woff2",
        as: "font",
        type: "font/ttf",
        crossorigin: "anonymous",
      },
    },
    // Иконка для Windows (мета-данные)
    {
      tagName: "meta",
      attributes: {
        name: "msapplication-TileImage",
        content: "/img/ms-icon-70x70.png",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "msapplication-TileImage",
        content: "/img/ms-icon-144x144.png",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "msapplication-TileImage",
        content: "/img/ms-icon-150x150.png",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "msapplication-TileImage",
        content: "/img/ms-icon-310x310.png",
      },
    },
    // Цвет фона браузера
    {
      tagName: "meta",
      attributes: { name: "theme-color", content: "#ffffff" },
    },
    {
      tagName: "meta",
      attributes: {
        name: "description",
        content:
          "Silvana docs — your guide to building apps with confidential data using Silvana zk prover platform.",
      },
    },
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
    image: "img/preview.png",
    metadata: [
      { name: "og:title", content: "Silvana Documentation" },
      {
        name: "og:description",
        content:
          "Silvana docs — your guide to building apps with confidential data using Silvana zk prover platform.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Silvana Documentation" },
      {
        name: "twitter:description",
        content: "Proof of everything engine to scale your business",
      },
    ],
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
        // {
        //   type: "docSidebar",
        //   sidebarId: "apiSidebar",
        //   position: "left",
        //   label: "Core",
        // },
        // {
        //   to: "api",
        //   label: "Modules",
        //   position: "left",
        // },
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
