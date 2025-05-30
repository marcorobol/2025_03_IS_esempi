const Book = require('../models/bookModel');
const mongoose = require('mongoose');

async function myFn() {

    // Constructing Documents
    const doc = new Book({title: 'The Mongoose Docs'});
    await doc.save();
    // Querying
    const q1 = await Book.find({}).where('date').gt(2023).exec();
    const q2 = await Book.find({ year: { $gt: 2023 } });
    // Deleting
    await Book.deleteOne({ size: 'large' });
    // Updating
    await Book.updateOne({ size: 'large' }, { name: 'T-90' });

}

myFn();
