import React from 'react'
import arcpro from '../assets/Group 448.png';
import arcmain from '../assets/2.png';
import arcpic from '../assets/Rectangle 6.png';


function Article() {
  return (

    <div className="card mb-4">
    <a ><img className="card-img-top" src={arcpic} alt="..." /></a>
    <div className="card-body">
        <div className="small text-muted">Article</div>
    
        <div className="d-flex align-items-center justify-content-between m-2 ms-5">
        <h2 className="card-title me-5 ps-4">What if famous brands had regular fonts? Meet RegulaBrands!</h2>
        <div className="dropdown">
            <i className="mdi mdi-dots-horizontal mdi-24px me-2 "data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" >Edit</a>
              <a className="dropdown-item" >Report</a>
              <a className="dropdown-item" >Alert</a>
            </div>
          </div>
        </div>



        <p className="card-text">better part of a decade. I’ve worked in UX for the better part of a decade. </p>
     

        <div className="py-2 bg-light">
                            <div className="d-flex align-items-center justify-content-between m-3">
                                <div className="left">
                                    <img className="rounded-circle me-3" width="60" src={arcmain} alt="..." />
                                </div>

                                <div className="font-weight-bold">
                                    Alwin
                                </div>

                                <div className="font-weight-light">
                                    <i className="mdi mdi-eye-outline me-2"></i>
                                    1.1k Views
                                </div>

                                <div className="fw-bold">
                                    <img className=" me-3" src={arcpro} alt="..." />
                                </div>
                            </div>
            </div>
    </div>
</div>
  )
}

export default Article