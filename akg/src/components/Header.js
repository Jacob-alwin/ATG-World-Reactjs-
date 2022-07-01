import React from 'react'
import logo from '../assets/whole.png';
import arc from '../assets/signup.png';



function Header() {
  return (
    <nav className="navbar sticky-top  navbar-expand-lg navbar-light bg-light  ">
            
    <div className="logo">
    <img src={logo} alt=""/>
    
    </div>     
    <div className="collapse navbar-collapse justify-content-center " id="navbarTogglerDemo02">
        <form className="ml-5  my-2 my-lg-0 align-items-center">

            
    <div class="input-group searchbar mb-3">
  <span class="input-group-text btn-light" ><i className=" mdi mdi-magnify "></i></span>            
  <input className="form-control search mr-sm-4 " type="search" placeholder="Search for your favorite groups in ATG"/>

</div>
            
          </form>
    </div>

      <button className="navbar-toggler hamberger " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
    
      <div className="collapse navbar-collapse  justify-content-right " id="navbarTogglerDemo02">

        <ul className="navbar-nav ml-5 mt-2 mt-lg-0">
          <li className="nav-item active">
          <a  className="nav-link phonesize font-weight-bold" >Create account. It’s free ! <span className="sronly">It’s free!</span></a>
            <a data-toggle="modal" data-target="#exampleModal" className="nav-link screensize font-weight-bold" >Create account. It’s free ! <span className="sronly">It’s free!</span></a>
           
              
              <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg " role="document">
                
                  <div className="modal-content m-4  " >
                  
                    <div className="modal-header" style={{background:"#EFFFF4"}}>
                      
                      <h6 className="modal-title" style={{color:"#008A45"}} id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h6>
                      <button type="button" style={{background:"white"}} className="close rounded-circle pb-1 pl-1 pr-1 mr-2" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="d-flex modal-body">
                    <div className="col-lg-7 mt-4">
                      
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                          </div>

                          <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
                          </div>

                          <button type="button" class="btn btn-primary mb-3 mr-4  rounded-pill ">Sign In</button>


                          <div className="inline justify-content-center">

                      <button type="button" class="btn btn-outline-info mt-2 mb-3 mr-4  rounded"><i class="bi bi-google m-3"></i>Sign In With Facebook</button>
                      <button type="button" class="btn btn-outline-primary  mb-3 mr-4   rounded"><i class="bi bi-facebook   m-3"></i>Sign In With Google</button>

                      <span className="dark bold mb-3 justify-content-center">Forgot Password</span>


                      </div>
                      
                      </div>
                      
                      <div className=" col-lg-6 ">
                      <div className="inline">
                      
                      Don’t have an account yet? <span className="sronly fw-bold mr-3"> Create new for free! </span>
                      
                      </div>
                          <img width="300" src={arc} alt=""/>
                      </div>
                      
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