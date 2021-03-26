const db = require('../models');

module.exports = (app) => {
  app.get('/api/products', (req, res) => {
    db.Product.findAll({
      include: [db.Item],
    }).then((dbProduct) => res.json(dbProduct));
  });
  
  app.get('/api/products/:id', (req, res) => {
    db.Product.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Item],
    }).then((dbProduct) => res.render('home', dbProduct));
  });  
  

  // work here

  app.post('/api/products', (req, res) => {
    db.Product.create(req.body).then((dbProduct) => res.render('home', dbProduct));
  });
  








  app.delete('/api/products/:id', (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbProduct) => res.json('home', dbProduct));
  });
};
