import React from 'react'

import arcpro from '../assets/Group 448.png';
import arcmain from '../assets/WhatsApp Image 2022-06-07 at 8.40.54 PM - Copy.jpeg';
import arcpic from '../assets/Rectangle 5.png';


function ArticleVisit() {
  return (
    
    <div className="card mb-4">
    <a href="#!"><img className="card-img-top" src={arcpic} alt="..." /></a>
    <div className="card-body">
        <div className="small text-muted">Article</div>
    
        <div className="d-flex align-items-center justify-content-between m-2 ms-5">
        <h2 className="card-title me-5 ps-4">What if famous brands had regular fonts? Meet RegulaBrands!</h2>
        <div className="dropdown">
            <i className="mdi mdi-dots-horizontal mdi-24px me-2"data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Edit</a>
              <a className="dropdown-item" href="#">Report</a>
              <a className="dropdown-item" href="#">Alert</a>
            </div>
          </div>
        </div>



        <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
     
        <div className="small text-bold  mb-2 "><span className="mr-5 "><i className=" mdi mdi-calendar-today"></i> Fri, 12 Oct, 2018 </span><span><i className=" mdi mdi-map-marker"></i> Noida, India</span></div>

        <a className="btn content btn-outline-danger" href="#!">Visit Website</a>
        <div className="py-2 bg-light">
                            <div className="d-flex align-items-center justify-content-between m-3">
                                <div className="left">
                                    <img className="rounded-circle me-3" width="60" src={arcmain} alt="..." />
                                </div>

                                <div className="font-weight-bold">
                                    Yakob
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

export default ArticleVisit