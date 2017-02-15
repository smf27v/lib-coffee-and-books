var express = require('express');
var router = express.Router();
const Location = require("../models/place");

// const Location = require("../models/place");

/* GET home page. */
router.get('/', (req, res, next) => {

      res.render('index');
    });



router.post('/locations',(req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const place = new Place ({
      name:        req.body.name,
      description: req.body.description,
      location:    location
    }
  );

  // Save the restaurant to the Database
  place.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});

router.get('/api/locations', (req, res, next) => {
  Location.find({}, (err, locations) => {
    if (err) {
      next(err);
    } else {
      res.json(locations);
    }
  });
});




module.exports = router;
