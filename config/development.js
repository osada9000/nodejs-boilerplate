module.exports = {
  text: 'This is develepment env. If NODE_ENV is not set, a default value of development is used.',

  dbconfig: {
    host: 'localhost',
    port: 5984,
    dbName: 'dev_database',
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
