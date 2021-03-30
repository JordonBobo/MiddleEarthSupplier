const db = require('../models');

module.exports = (app) => {

  app.get('/api/orders', (req, res) => {
    db.Order.findAll().then((dbOrder) => res.json(dbOrder));
  });
  
  app.get('/api/orders/:id', (req, res) => {
    db.Order.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbOrder) => res.render('staff', dbOrder));
  });  

  // *** MODIFY HERE ***
  app.put('/api/orders/:id', (req, res) => {
    db.Order.update(req.body, {
      where:{
        id: req.params.id
      },
      // if no rows were changed, return 404
      // if (result.changedRows === 0) {
      //   return res.status(404).end();
      // }
      // res.status(200).end();
    }).then((dbOrder) => res.render('staff', dbOrder));
  });
  


  app.post('/api/orders', (req, res) => {
    db.Order.create(req.body).then((dbOrder) => res.json(dbOrder));
    console.log(req.body)
  });
  



  app.delete('/api/orders/:id', (req, res) => {
    db.Order.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbOrder) => res.json('staff', dbOrder));
  });
};
