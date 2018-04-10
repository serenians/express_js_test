var mongoose = require('mongoose')

//book schema
var bookSchema  = mongoose.Schema({
    title:{
        type: String, 
        required: true,
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    pages:{
        type: Number,
        required: true
    },
    image_url:{
        type: String,
        required: true
    },
    product_url:{
        type: String,
        required: true
    }
});

var Book = module.export = mongoose.model('Book', bookSchema)

//get books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback){
    Book.findById(id,callback);
}

module.exports.addBook = function(book, callback){
    Book.create(book, callback);
}

//update genre
module.exports.updateBook = function(id, book, options, callback){
    var query = {_id: id}
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url : book.image_url,
        product_url: book.product_url
    }
    Book.findOneAndUpdate(query, update, options, callback)
}

module.exports.deleteBook = function(id, callback){
    var query = {_id: id};
    Book.remove(query, callback)
}