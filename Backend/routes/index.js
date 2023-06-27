var express = require('express');
var router = express.Router();
var monk=require('monk')

var db=monk('localhost:27017/AbsentTrack');
var logd=db.get('login_data');
if(db)
{
  console.log('db connected');
}


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user/rollno/:rollno', (req, res) => {
  const { rollno } = req.params;

  const collection = db.get('login_data');
  collection.findOne({ rollno })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Server error' });
    });
});




module.exports = router;
