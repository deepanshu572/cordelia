import React from "react";
import gp from "/gp.jpg";
import bhim from "/bhim.jpg";
import paytm from "/Paytm.jpg";
import phonepay from "/phonepay.jpg";
import security from "/security.png";
import pay1 from "/pay1.png";
import pay2 from "/pay2.png";
import pay3 from "/pay3.png";
import pay4 from "/pay4.png";
import pay5 from "/pay5.png";
import pay6 from "/pay6.png";
import pay7 from "/pay7.png";
import pay8 from "/pay8.png";
import pay9 from "/pay9.png";
import pay10 from "/pay10.png";
import bank1 from "/bank1.png";
import bank2 from "/bank2.png";
import bank3 from "/bank3.png";
import bank4 from "/bank4.png";
import bank5 from "/bank5.png";
import card1 from "/Card1.png";
import card2 from "/card2.png";

const Leftcontent = () => {
  return (
    <>
      <div className="left_content">
        <div className="head_content">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          <h1>Select Payment methods</h1>
        </div>
        <div className="main_payment_box">
        <div className="main_content">
          <div className="left_main_content">
            <div className="left_box1">
              <input type="radio" id="button1" name="payment" value="button1" checked />
              <label htmlFor="button1">
              <div className="side" id="side1"></div>
                <div className="img_content">
                  <img src={pay1} alt="" />
                </div>
                <div className="label_text">
                  <h3>UPI Options</h3>
                  <p>pay directly from your bank</p>
                </div>
              </label>
              <div className="right_text_btn1" id="btn1">
                
                <h2>Pay Using UPI</h2>
                <div className="pay_btns">
                  <div className="btn_img">
                    <img src={gp} alt="payment" />
                  </div>
                  <div className="btn_img">
                    <img src={bhim} alt="payment" />
                  </div>
                  <div className="btn_img">
                    
                    <img src={paytm} alt="payment" />
                  </div>
                  <div className="btn_img">
                    
                    <img src={phonepay} alt="payment" />
                  </div>
                </div>
                <div className="pay_inp">
                  <input type="text" placeholder="Enter UPI ID" />
                </div>
                <div className="pay_points">
                  <div className="pay_points1">
                    <span>1</span>
                    <p>Enter your UPI ID and click on Pay Now.</p>
                  </div>
                  <div className="pay_points1">
                    <span>2</span>
                    <p>
                      You will receive a request from Payment Gateway in your UP
                      App.
                    </p>
                  </div>
                  <div className="pay_points1">
                    <span>3</span>
                    <p>
                      Login to LIPI app by entering your mpin & authorize
                      payment
                    </p>
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
            <div className="left_box1">
              <input type="radio" id="button2" name="payment" value="button2" />
              <label htmlFor="button2">
                          <div className="side"  id="side2"></div>
                <div className="img_content">
                  <img src={pay2} alt="" />
                </div>
                <div className="label_text">
                  <h3>Debit card /Credit card</h3>
                  <p>visa, mastercard, AMEX, Rupay and Dinnerclub</p>
                </div>
              </label>
              <div className="right_text_btn1" id="btn2">
            <h2>Enter your Card Details</h2>
                <div className="pay_btns">
                  <div className="btn_img">
                    
                    <img src={pay6} alt="payment" />
                  </div>
                  <div className="btn_img">
                    
                    <img src={pay7} alt="payment" />
                  </div>
                  <div className="btn_img">
                    
                    <img src={pay8} alt="payment" />
                  </div>
                  <div className="btn_img">
                    
                    <img src={pay9} alt="payment" />
                  </div>
                  <div className="btn_img">
                    
                    <img src={pay10} alt="payment" />
                  </div>
                </div>
                <div className="text_pay">
                    <span>!</span>
                    <p>Please ensure your card is enabled for online transactions. <b>Know More</b></p>
                </div>
                <div className="pay_inp">
                  <input type="text" placeholder="card number" />
                  <div className="pay_imp_btn">
                  <input type="date" placeholder="Expiry date" />
                  <input type="date" placeholder="CVV" />
                  </div>
                  <input type="text" placeholder="Expiry date" />
                  <input type="text" placeholder="Card Holder name" />
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
            <div className="left_box1">

              <input type="radio" id="button3" name="payment" value="button3" />
              <label htmlFor="button3">
                          <div className="side"  id="side3"></div>

                <div className="img_content">
                  <img src={pay3} alt="" />
                </div>
                <div className="label_text">
                  <h3>Net Banking</h3>
                  <p>All major banks Avaliable</p>
                </div>
              </label>
              <div className="right_text_btn1" id="btn3">
                <h2>Select Your Banks</h2>
                <div className="pay_btns">
                  <div className="btn_img">
                    
                    <img src={bank1} alt="payment" />
                    <p>ICICI Bank</p>
                  </div>
                  <div className="btn_img">
                    
                    <img src={bank2} alt="payment" />
                    <p>HDFC Bank</p>
                  </div>
                  <div className="btn_img">
                    
                    <img src={bank3} alt="payment" />
                    <p>Axis Bank</p>
                  </div>
                  <div className="btn_img">
                    
                    <img src={bank4} alt="payment" />
                    <p>State Bank Of India</p>
                  </div>
                  <div className="btn_img">
                    
                    <img src={bank5} alt="payment" />
                    <p>Bank Of Baroda</p>
                  </div>
                </div>
                <div className="pay_inp">
                    <select>
                        <option value="select">select your banks</option>
                        <option value="select">ICIC bank</option>
                        <option value="select">Bank Of Baroda</option>
                        <option value="select">State Bank Of India</option>
                    </select>
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
        <div className="right_content">
            <h2>Mumbai-Goa-lakshwadeep-Mumbai(5N/6D)</h2>
            <div className="right_content_box1">
                <div className="right_first">
                    <p>Feb 15, 2024</p>
                    <small>Saturday 06:30 PM</small>
                </div>
                <div className="right_second_img">
                    <img src={card1} alt="" />
                </div>
                <div className="right_first">
                    <p>Feb 18, 2024</p>
                    <small>Monday 10:00 PM</small>
                </div>
            </div>
            <div className="wrap_box">
         
            <input type="checkbox" id="view" name="hideview" value="view"/>
            <label htmlFor="view" className="dropdown_item">
               <p>View Details</p>
               {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> */}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
            </label>
            <div id="viewDiv">
            <hr className="hr"/>
            <div className="right_content_box2">
                <div className="right_main_wrap_1">
                <div className="right_box2_one">
                    <img src={card2} alt="" />
                    <p>Cabin 1</p>
                </div>
                <b>Ocean View Cabin</b>
                </div>
                <div className="right_box2_two">
                    <p>Guest No.</p>
                    <b>04</b>
                </div>
            </div>
            <hr className="hr"/>
            <div className="right_content_box2">
                <div className="right_main_wrap_1">
                <div className="right_box2_one">
                    <img src={card2} alt="" />
                    <p>Cabin 2</p>
                </div>
                <b>Mini Suit Cabin</b>
                </div>
                <div className="right_box2_two">
                    <p>Guest No.</p>
                    <b>04</b>
                </div>
            </div>
            <hr className="hr"/>
            </div>
            </div>
        </div>
        
        </div>
      </div>
    </>
  );
};

export default Leftcontent;
