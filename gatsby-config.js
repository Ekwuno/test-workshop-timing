module.exports = {
  siteMetadata: {
    title: "My Super Cool Blog",
    description: "A place where I write about whatever I want!"
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
};
