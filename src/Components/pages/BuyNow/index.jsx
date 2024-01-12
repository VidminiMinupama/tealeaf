import react from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './BuyNow.css';


const BuyNow = () =>{ 

    return(
      
      <div className="background-BuyNowPic">"
              <div class="col-50-B">
                <div className="payment">
                <h3>Payment</h3>
                <label for="fname">Accepted Cards</label>
                <div class="icon-container-B">
                  <i class="fa fa-cc-visa-B" style={{color:"navy"}}></i>
                  <i class="fa fa-cc-amex-B" style={{color:"blue"}}></i>
                  <i class="fa fa-cc-mastercard-B" style={{color:"red"}}></i>
                  <i class="fa fa-cc-discover-B" style={{color:"orange"}}></i>
                </div>                            
                <label for="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                <label for="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                <label for="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
    
                <div class="row=B">
                  <div class="col-50-B">
                    <label for="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                  </div>
                  <div class="col-50-B">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352"/>
                  </div>
                </div>
            <div class= "btn-BB">
            <a class="btn-0" aria-current="page" href="/">Submit</a>
            </div>
            </div>
            </div>
    </div>

    )
}

export default BuyNow;