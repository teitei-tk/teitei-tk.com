const path = require("path");

module.exports = {
  siteMetadata: {
    name: "teitei-tk.com",
    repositoryURL: "https://github.com/teitei-tk/teitei-tk.com",
    user: {
      name: "teitei-tk",
      bio: "Software Enginner",
      avatarURL: "https://avatars3.githubusercontent.com/u/1324680?v=4",
      email: "teitei.tk@gmail.com",
      twitterURL: "https://twitter.com/teitei_tk"
    },
    accounts: {
      twitter: "https://twitter.com/teitei_tk",
      github: "https://github.com/teitei-tk",
      qiita: "https://qiita.com/teitei_tk",
      speakerDeck: "https://speakerdeck.com/teitei",
      linkedin: "https://www.linkedin.com/in/teitei-tk/",
      medium: "https://medium.com/@teitei_tk",
      note: "https://note.mu/teitei_tk",
      hatenaBlog: "http://teitei-tk.hatenablog.com/"
    },
    donate: {
      amazonWishList:
        "https://www.amazon.co.jp/gp/registry/wishlist/1KY1Q9M8EAIA5/ref=nav_wishlist_lists_1",
      bitcoin: "35Hcpn2RxXUftVuPppTWGYaNx3EhHfsWab",
      ethereum: "0x1BE2b1A385DD21025BCD9A4d6264b3d9093C78FE"
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-typescript"
  ]
};
