module.exports = {
  text: 'This is production env.',

  dbconfig: {
    host: 'localhost',
    port: 5984,
    dbName: 'prod_database',
  },

  heredoc: `
<html>
  <head>
  </head>
  <body>
    Hello world!
  </body>
</html>`,
};
