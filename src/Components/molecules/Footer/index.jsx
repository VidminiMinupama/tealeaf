import React from 'react';
import './index.css'; 
import'./contact.css';

const Footer = () => {
  return (
    <section>
    <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">At Andaradiniya Group, we are more than just a tea factory we are a company with a heart.Our unwavering commitment to corporate social responsibility reflects our deep appreciation for the Deniyaya community's support over the years.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
      <br /><br />
       < h3 class="section-header">Contact</h3>
  <div class="contact-wrapper">
    <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
        </div>
      </div>
      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      <br /> 
        <div class="alt-send-button">
        <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </div>
    </form>
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place"><a href="https://maps.app.goo.gl/zya2zpKqt4RyDCf78" title="View Location">Niyagama,Galle,Sri Lanka</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(+94)076 1010 000 </a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">thetealeaf23@gmail.com</a></span></i></li>

          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text FB"><a href="https://www.facebook.com/profile.php?id=100067867170062&mibextid=ZbWKwL" title="Follow this page"> Andaradeniya Tea Factory</a></span></i></li>

          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text vlog"><a href="https://youtu.be/aKQquB9WI6M?si=cMTv42BKMbgNHDXe" title="Follow this page">Tea Plantation Vlog</a></span></i></li>
        </ul>
        <hr/>
        <div class="copyright">&copy; 2023 All Rights Reserved.</div>
      </div>
  </div>
      </div>
    </div>
    </footer>
    </section>

 );
};

export default Footer;