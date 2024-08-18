import React from 'react'
import gp from '/gp.jpg'
import bhim from '/bhim.jpg'
import paytm from '/Paytm.jpg'
import phonepay from '/phonepay.jpg'
import security from '/security.png'
import pay1 from '/pay1.png'
import pay2 from '/pay2.png'
import pay3 from '/pay3.png'
import pay4 from '/pay4.png'
import pay5 from '/pay5.png'

const Leftcontent = () => {
  return (
    <>
    <div className="left_content">
        <div className="head_content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            <h1>Select Payment methods</h1>
       </div>
       <div className="main_content">
    <div className="tabs left_main_content">
        <a href="#tab1 " className="left_text_btn1">
        <div className="img_content">
                            <img src={pay1} alt="" />
                        </div>
                        <div className="label_text">
                            <h3>UPI Options</h3>
                            <p>pay directly from your bank</p>
                        </div>
        </a>
        <a href="#tab2" className="left_text_btn1">
        <div className="img_content">
                            <img src={pay2} alt="" />
                        </div>
                        <div className="label_text">
                            <h3>Debit card /Credit card</h3>
                            <p>visa, mastercard, AMEX, Rupay and Dinnerclub</p>
                        </div>
        </a>
        <a href="#tab3" className="left_text_btn1">
        <div className="img_content">
                            <img src={pay3} alt="" />
                        </div>
                        <div className="label_text">
                            <h3>Net Banking</h3>
                            <p>All major banks Avaliable</p>
                        </div>
        </a>
    </div>
    <div className="right_main_content">
        <div id="tab1" className="tab-content right_text_btn1">
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

        <div id="tab2" className="tab-content">
            <h2>Content for Tab 2</h2>
            <p>This is the content for the second tab.</p>
        </div>

        <div id="tab3" className="tab-content">
            <h2>Content for Tab 3</h2>
            <p>This is the content for the third tab.</p>
        </div>
    </div>
       </div>
         <div className="main_content">
            <div className="left_main_content">
                <div className="left_text_btn1">
                    {/* <input type="radio" id="button1" name="payment" value="button1" /> */}
                    <a href="#one">
                    {/* <label htmlFor="button1"> */}
                        <div className="img_content">
                            <img src={pay1} alt="" />
                        </div>
                        <div className="label_text">
                            <h3>UPI Options</h3>
                            <p>pay directly from your bank</p>
                        </div>
                    {/* </label> */}
                    </a>
                </div>
                <div className="left_text_btn1">
                    {/* <input type="radio" id="button2" name="payment" value="button1" /> */}
                    <a href="#two">
                    {/* <label htmlFor="button2"> */}
                        <div className="img_content">
                            <img src={pay2} alt="" />
                        </div>
                        <div className="label_text">
                            <h3>Debit card /Credit card</h3>
                            <p>visa, mastercard, AMEX, Rupay and Dinnerclub</p>
                        </div>
                    {/* </label> */}
                    </a>
                </div>
                <div className="left_text_btn1">
                    {/* <input type="radio" id="button3" name="payment" value="button1" /> */}
                    <a href="#three">
                    {/* <label htmlFor="button3"> */}
                        <div className="img_content">
                            <img src={pay3} alt="" />
                        </div>
                        <div className="label_text">
                            <h3>Net Banking</h3>
                            <p>All major banks Avaliable</p>
                        </div>
                    {/* </label> */}
                    </a>
                </div>
            </div>
            <div className="right_main_content">
                <div className="right_text_btn1" id='one'>
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
                <div className="right_text_btn1" id='two'>
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
         </div>
    </div>
    </>
  )
}

export default Leftcontent