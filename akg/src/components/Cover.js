import React from 'react'

function Cover() {
  return (
    <header className="py-5   cover-photo border-bottom mb-4 ">

            
            <div className="container   pt-5 " >
              <div className='col-lg-4 smallsize'>
            <button type="button " class="btn  btn-outline-light joingroupcover  "><i className=" mdi mdi-account-multiple-plus"></i> Join Group </button>
                
                 </div>
              

                <div className="text-left my-5 pt-5 pl-2">
                    <h1 className="fw-bolder c text-light mt-5">Computer Engineering</h1>
                    <p className="lead mb-5">142,765 Computer Engineers follow this</p>
                </div>
            </div>
        </header>
  )
}

export default Cover