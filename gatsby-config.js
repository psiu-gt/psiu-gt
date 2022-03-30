const config = require("./site-config.json");
const path = require("path");

require("dotenv").config({
  path: `.env`,
  // path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "/",
  siteMetadata: {
    title: config.title,
    description: config.description,
    footer: config.footer,
    siteUrl: config.siteUrl,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-172817882-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
    {
      resolve: "gatsby-source-google-spreadsheets",
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        worksheetTitle: "data",
        credentials: {
          type: "service_account",
          project_id: process.env.PROJECT_ID,
          private_key_id: process.env.PRIVATE_KEY_ID,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(
            /(\\r)|(\\n)/g,
            "\n"
          ),
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          client_id: "",
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.PROJECT_ID}%40appspot.gserviceaccount.com`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-drive-fileid",
      options: {
        folderId: process.env.GOOGLE_DRIVE_FOLDER_ID,
        key: {
          private_key: process.env.GOOGLE_PRIVATE_KEY,
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
        },
        destination: path.join(__dirname, "src/images/bros"),
        pageSize: 100,
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-json",
    "gatsby-plugin-sass",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-graphql-codegen",
    "gatsby-plugin-netlify",
  ],
};
