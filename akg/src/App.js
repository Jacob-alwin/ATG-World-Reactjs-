import React from 'react';

import './App.css';
import Article from './components/Article';
import ArticleApply from './components/ArticleApply';
import ArticleVisit from './components/ArticleVisit';
import Cover from './components/Cover';
import FloatingButton from './components/FloatingButton';
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
              <FloatingButton/>
              
              


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
                <div className='d-flex col-lg-12'>
                <button type="button " class="btn btn-light mr-2 dropdown-toggle"> Write a Post </button>
                <button type="button " class="btn btn-primary ml-2"><i className=" mdi mdi-account-multiple-plus"></i> Join Group </button>
                </div>  
                
             
               <Location/>
                    <div className="card mb-4"> 

                        <div className="card-header"><i className=" mdi mdi-thumb-up-outline"></i>
Recommended People</div>

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
