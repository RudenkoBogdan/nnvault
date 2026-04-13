import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Neural Garden",
    pageTitleSuffix: ": Neural Networks Knowledge Base",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "EB Garamond",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fdfdfd",
          lightgray: "#f7f7f7",
          gray: "#9e9e9e",
          darkgray: "#424242",
          dark: "#212121",
          secondary: "#1976d2",
          tertiary: "#0d47a1",
          highlight: "rgba(25, 118, 210, 0.08)",
          textHighlight: "rgba(255, 193, 7, 0.3)",
        },
        darkMode: {
          light: "#121212",
          lightgray: "#2d2d2d",
          gray: "#757575",
          darkgray: "#b0b0b0",
          dark: "#eeeeee",
          secondary: "#42a5f5",
          tertiary: "#2196f3",
          highlight: "rgba(66, 165, 245, 0.15)",
          textHighlight: "rgba(255, 193, 7, 0.4)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
