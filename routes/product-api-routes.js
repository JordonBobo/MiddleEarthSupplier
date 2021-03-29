const db = require('../models');

module.exports = (app) => {
  app.get('/api/products', (req, res) => {
    db.Product.findAll().then((dbProduct) => res.json(dbProduct));
  });
  
  app.get('/api/products/:id', (req, res) => {
    db.Product.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbProduct) => res.json(dbProduct));
  });  
  

  // work here

  app.post('/api/products', (req, res) => {
    db.Product.create(req.body).then((dbProduct) => {
      console.log(dbProduct);
      res.json(dbProduct)
    });
  });
  








  app.delete('/api/products/:id', (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbProduct) => res.json(dbProduct));
  });
};
