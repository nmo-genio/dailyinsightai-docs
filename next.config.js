/**
 * A function that configures Nextra for Next.js.
 *
 * @param {object} options - An object that configures Nextra.
 * @param {string} options.theme - The name of the theme to use.
 * @param {string} options.themeConfig - The path to the theme configuration file.
 * @param {object} options.markdown - Options for markdown rendering.
 * @param {boolean} options.markdown.headingIds - Whether to generate ids for headings.
 * @param {boolean} options.markdown.headingAnchors - Whether to generate anchors for headings.
 * @param {boolean} options.markdown.headingLinks - Whether to generate links for headings.
 * @returns {function} A function that configures Next.js to use Nextra.
 */
const withNextra = require('nextra')({
  /**
   * Specifies the theme for the Nextra documentation.
   * It uses 'nextra-theme-docs' which provides a customizable
   * and modern theme for documentation sites.
   */
  theme: 'nextra-theme-docs',
  /**
   * Specifies the path to the theme configuration file.
   * This file should export a valid theme configuration object.
   * For more information, see the Nextra documentation.
   */
  themeConfig: './theme.config.tsx',
  /**
   * Specifies options for markdown rendering.
   *
   * @property {boolean} headingIds - Whether to generate ids for headings.
   * @property {boolean} headingAnchors - Whether to generate anchors for headings.
   * @property {boolean} headingLinks - Whether to generate links for headings.
   */
  markdown: {
    headingIds: true,
    headingAnchors: false,
    headingLinks: false
  }
})

module.exports = withNextra()