const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const CatSchema = new mongoose.Schema({
  name: String
});
const Cat = mongoose.model('Cat', CatSchema);

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

Cat.find().exec().then(cats => {
  console.log(cats);
});