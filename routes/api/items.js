const express = require('express')
const router = express.Router();

// Item Model
const Item = require('../../models/Item')

// Create some routes

// @route   GET api/items
// @desc    GET All Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
      .sort({ date: -1 })
      .then(items => res.json(items))

});



// @route   POST api/items
// @desc    Create an Item
// @access  Public
router.post('/', (req, res) => {
  // Item is the name of our model
  const newItem = new Item({
    // passing in an object to our model
    name: req.body.name
  });
  // This saves the object to the database
  newItem.save().then(item => res.json(item));
});


// @route   DELETE api/items:id  
// @desc    Delete an item with a specific id
// @access  Public
router.delete('/:id', (req, res) => {
  // this fetches the id from the url for us so the database knows what data to delete
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json ({success: true})))
    // If the item we want to delete cannot be found, we'll return a 404 error with the json message
    .catch(err => res.status(404).json({success: false}))
});




module.exports = router;