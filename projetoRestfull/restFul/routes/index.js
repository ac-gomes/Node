module.exports = (app) => {

  app.get('/', (req, res) =>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<meta charset="utf-8"></meta> <H1>Olá</H1>');

  });
}