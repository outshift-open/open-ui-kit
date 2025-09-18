/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: [
    "main", 
    {
      name: "beta",
      prerelease: true
    }
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md"
      }
    ],
    // [
    //   "./plugins/release-plugin.js",
    //   {
    //     registries: {
    //       "github": {
    //         pkgRoot: "packages/open-ui-kit/dist"
    //       },
    //       "devhub": {
    //         pkgRoot: "packages/open-ui-kit/dist"
    //       }
    //     },
    //   }
    // ],
    [
      "@semantic-release/github",
      {
        addReleases: "top"
      }
    ]
  ]
};
