const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
const jwt = require('jsonwebtoken');

// Get the book list available in the shop
public_users.get('/', function (req, res) {

    //Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
    let myPromise = new Promise((resolve, reject) => {
        resolve("Promise resolved")
    })
    //Console log before calling the promise
    console.log("Before calling promise");
    //Call the promise and wait for it to be resolved and then print a message.
    myPromise.then((successMessage) => {
        console.log("From Callback " + successMessage)
        return res.status(300).json(JSON.stringify(books));
    })
    //Console log after calling the promise
    console.log("After calling promise");

});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    let filtered_books = books.filter((book) => book.isbn === isbn);

    //Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
    let myPromise = new Promise((resolve, reject) => {
        resolve("Promise resolved")
    })
    //Console log before calling the promise
    console.log("Before calling promise");
    //Call the promise and wait for it to be resolved and then print a message.
    myPromise.then((successMessage) => {
        console.log("From Callback " + successMessage)
        return res.status(300).json(JSON.stringify(filtered_books));
    })

    //Console log after calling the promise
    console.log("After calling promise");

});


// Get book details based on author
public_users.get('/author/:author', function (req, res) {
    const author = req.params.author;
    let filtered_books = books.filter((book) => book.author === author);

    //Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
    let myPromise = new Promise((resolve, reject) => {
        resolve("Promise resolved")
    })
    //Console log before calling the promise
    console.log("Before calling promise");
    //Call the promise and wait for it to be resolved and then print a message.
    myPromise.then((successMessage) => {
        console.log("From Callback " + successMessage)
        return res.status(300).json(JSON.stringify(filtered_books));
    })

    //Console log after calling the promise
    console.log("After calling promise");
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
    const title = req.params.title;
    let filtered_books = books.filter((book) => book.title === title);

    //Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
    let myPromise = new Promise((resolve, reject) => {
        resolve("Promise resolved")
    })
    //Console log before calling the promise
    console.log("Before calling promise");
    //Call the promise and wait for it to be resolved and then print a message.
    myPromise.then((successMessage) => {
        console.log("From Callback " + successMessage)
        return res.status(300).json(JSON.stringify(filtered_books));
    })

    //Console log after calling the promise
    console.log("After calling promise");
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    let filtered_books = books.filter((book) => book.isbn === isbn);
    return res.status(300).json(JSON.stringify(filtered_books[0].reviews));
});


public_users.post("/register", (req, res) => {
    const { username, password } = req.body;
    if (!username) {
        return res.status(404).json({ message: "Username does not exist" });
    }
    if (!password) {
        return res.status(404).json({ message: "Password incorrect" });
    }
    return res.status(200).send("User successfully registered");
});

module.exports.general = public_users;
