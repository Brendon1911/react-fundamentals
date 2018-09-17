import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Hero () {
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>AuthorQuiz</h1>
      <p>Select the book written by the author shown</p>
    </div>
  </div>);
}

function Book ({title}) {
  return (<div className="answer">
    <h4>{title}</h4>
  </div>);
}

function Turn ({author, books}) {
  return (<div className="row turn" style={{ backgroundColor: "white"}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorImage" alt="Author"/>
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title}></Book>)}
    </div>
  </div>);
}

function Continue () {
  return (<div/>);
}

function Footer () {
  return (<div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">
        All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a> and are in the public domain.
      </p>
    </div>
  </div>);
}

function AuthorQuiz ({turnData}) {
  return (
    <div className="container-fluid">
      <Hero/>
      <Turn {...turnData}/>
      <Continue />
      <Footer/>
    </div>
  );
}

export default AuthorQuiz;
