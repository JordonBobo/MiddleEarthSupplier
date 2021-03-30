// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require('../models');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { allowedNodeEnvironmentFlags } = require("process");


module.exports = function (app) {
  app.get("/", (req, res) => {
    db.Product.findAll().then(dbProduct => {
      console.log(dbProduct)
      res.render('home', { product: dbProduct })
    });
  });


  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/staff");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // app.get("/staff", (req, res) => {
  //   // If the user already has an account send them to the members page


  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/staff");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/staff", isAuthenticated, (req, res) => {

    db.Order.findAll().then(dbOrder => {
      res.render('staff', {
        order: dbOrder.map(order => ({
          ...order.get({ plain: true }),
          shippingItems: JSON.parse(order.shippingItems)
        })
        )
      })
    });
  });

  // const x = JSON.parse(localStorage.getItem("basket"))

  app.get("/cart", (req, res) => {
    res.render('cart', [{
      // items: x.title,
      // quantity: x.quantity
    }])
  });

};
