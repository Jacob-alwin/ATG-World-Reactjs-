import React,{useState} from 'react';
import './App.css';
import AllArticle from './components/AllArticle';
import Article from './components/Article';
import ArticleApply from './components/ArticleApply';
import ArticleVisit from './components/ArticleVisit';
import Cover from './components/Cover';
import FloatingButton from './components/FloatingButton';
import Footer from './components/Footer';
import Header from './components/Header';
import Location from './components/Location';
import MultipleImage from './components/MultipleImage';
import RecommendedPeople from './components/RecommendedPeople';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';




function App() {

  
  
  return (
    <div className="App">
    <Header/>
        <Cover/>
        <div className="container">
          <AllArticle/>


       
              
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
                </div>  
                
             
               <Location/>
                    <div className="card mb-4"> 

                        <div className="card-header fw-bold"><i className=" bi bi-hand-thumbs-up mr-3 "></i>
Recommended Groups</div>

                      <RecommendedPeople name={"Alice"} img={img2}/>
                      <RecommendedPeople name={"Albin"} img={img1}/>
                      <RecommendedPeople name={"Sam"} img={img3}/>
                      <RecommendedPeople name={"Eliza"} img={img2}/>
                      <RecommendedPeople name={"Dinto"} img={img1}/>
                      <RecommendedPeople name={"Lenu"} img={img2}/>
                     
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
       
    </div>
  );
}

export default App;
