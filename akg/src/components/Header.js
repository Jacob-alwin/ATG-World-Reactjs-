import React from 'react'
import logo from '../assets/whole.png';
import arc from '../assets/Group 61.png';



function Header() {
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light ">
            
    <div className="logo">
    <img src={logo} alt=""/>
    
    </div>     
    <div className="collapse navbar-collapse justify-content-center " id="navbarTogglerDemo02">
        <form className=" d-flex ml-5  my-2 my-lg-0">

            <i className=" mdi mdi-magnify"></i>
            
            <input className="form-control search mr-sm-4" type="search" placeholder="Search for your favorite groups in ATG"/>
          </form>
    </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse  justify-content-right " id="navbarTogglerDemo02">

        <ul className="navbar-nav ml-5 mt-2 mt-lg-0">
          <li className="nav-item active">
            <a data-toggle="modal" data-target="#exampleModal" className="nav-link font-weight-bold" href="#">Create account. It’s free! <span className="sronly">It’s free!</span></a>
           
              
              <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Demo Modal</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                     <img width="600" src={arc} alt=""/>
                    </div>
                 
                  </div>
                </div>
              </div>
              </li>
        </ul>
      </div>  
  </nav>
  )
}

export default Header