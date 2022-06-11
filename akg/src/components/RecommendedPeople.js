import React from 'react'
import rec from '../assets/WhatsApp Image 2022-06-07 at 8.44.55 PM - Copy.jpeg';


function RecommendedPeople() {
  return (
    <div className="d-flex align-items-center justify-content-between m-3">
                        <div className="left d-flex align-items-center">
                            <img className="rounded-circle mr-2" width="50" src={rec} alt="..." />
                            <div className="font-weight-bold">
                                Tom Ato
                            </div>
                        </div>

                       


                        <div className="fw-bold">
                            Follow
                        </div>
                    </div>
  )
}

export default RecommendedPeople