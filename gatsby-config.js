module.exports = {
  siteMetadata: {
    title: "My Pet Blog",
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `C:/Users/jmang/mypetblog/src/posts/mypetblog.mdx`,
      },
    },
  ],
}
