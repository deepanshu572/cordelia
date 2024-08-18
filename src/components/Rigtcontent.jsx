import React from 'react'
import gp from '/gp.jpg'
import bhim from '/bhim.jpg'
import paytm from '/Paytm.jpg'
import phonepay from '/phonepay.jpg'
import security from '/security.png'
const Rigtcontent = () => {
  return (
    <>
 <div className="right_main_content">
                <div className="right_text_btn1" id='btn1'>
                    <h2>Pay Using UPI</h2>
                    <div className="pay_btns">
                        <div className="btn_img"> <img src={gp} alt="payment" /></div>
                        <div className="btn_img"> <img src={bhim} alt="payment" /></div>
                        <div className="btn_img"> <img src={paytm} alt="payment" /></div>
                        <div className="btn_img"> <img src={phonepay} alt="payment" /></div>
                    </div>
                    <div className="pay_inp">
                        <input type="text" placeholder='Enter UPI ID' />
                    </div>
                    <div className="pay_points">
                        <div className="pay_points1">
                            <span>1</span>
                            <p>Enter your UPI ID and click on Pay Now.</p>
                        </div>
                        <div className="pay_points1">
                            <span>2</span>
                            <p>You will receive a request from Payment Gateway in your UP App.</p>
                        </div>
                        <div className="pay_points1">
                            <span>3</span>
                            <p>Login to LIPI app by entering your mpin & authorize payment</p>
                        </div>
                    </div>
                    <div className="pay_proceed_btn">
                        <div className="proceed_text">
                            <img src={security} alt="" />
                            <p>Safe & Secure Payment</p>
                        </div>
                        <button>Proceed To Payment</button>
                    </div>
                </div>
               
            </div>
    </>
  )
}

export default Rigtcontent