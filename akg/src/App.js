import React from 'react';

import './App.css';
import Article from './components/Article';
import ArticleApply from './components/ArticleApply';
import ArticleVisit from './components/ArticleVisit';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Header from './components/Header';
import Location from './components/Location';
import RecommendedPeople from './components/RecommendedPeople';



function App() {
  return (
    <div className="App">
    <Header/>
        <Cover/>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    
                <Article/>
                <ArticleApply/>
                <ArticleVisit/>
                <ArticleApply/>
                <ArticleApply/>
                <Article/>
                <Article/>

                
                </div>
                <div className="col-lg-4">
             
               <Location/>
                    <div className="card mb-4"> 

                        <div className="card-header">Recommended People</div>

                      <RecommendedPeople/>
                      <RecommendedPeople/>
                      <RecommendedPeople/>
                      <RecommendedPeople/>
                      <RecommendedPeople/>
                      <RecommendedPeople/>
                      <RecommendedPeople/>
                      <RecommendedPeople/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
       
    </div>
  );
}

export default App;
