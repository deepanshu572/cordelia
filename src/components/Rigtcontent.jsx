import React from 'react'
import card1 from "/Card1.png";
import card2 from "/card2.png";
import discount1 from "/discount1.png";
const Rigtcontent = () => {
  return (
    <>
<h2 className="h2">Payment Options</h2>
        <div className="main_drop_setion">
            
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
        <div className="right_content update_section">
          <div className="update_bill_section">
            <input type="checkbox" id="view1" name="hideview2" value="view1"/>
            <label htmlFor="view1" className="dropdown_item">
            <h3>Price Details</h3>
            <p>Hide</p> </label>
            {/* <hr /> */}
            <div className="bill_wrap_item" id="hideviewDiv2">
            <div className="bill_items">
                <h3>Ocean view cabin</h3>
                <p>₹18,260</p>
            </div>
            <div className="bill_items">
                <h3>Mini Suit cabin</h3>
                <p>₹8,260</p>
            </div>
            <div className="bill_items">
                <h3>Service Charge & Levis</h3>
                <p>₹58,60</p>
            </div>
            <div className="bill_items">
                <h3>Fuel Surcharge</h3>
                <p>₹5,260</p>
            </div>
            <div className="bill_items green">
                <h3>Kids Sail Offer <img src={discount1} alt="" /></h3>
                <p>₹18,260</p>
            </div>
            <div className="bill_items">
                <h3>Sub Total</h3>
                <p>₹55,260</p>
            </div>
            <div className="bill_items_box">
                
                <div className="bill_items">
                <h3>Taxes</h3>
                <p>₹14,890</p>
            </div>
            <div className="bill_items">
                <h3>GST</h3>
                <p>₹55,260</p>
            </div>
            </div>
            </div>
          </div>
            <div className="wrap_box">
         
            <h3>Total Fare</h3>
            <b>₹67,620</b>
            </div>
        </div>
        </div>
    </>
  )
}

export default Rigtcontent