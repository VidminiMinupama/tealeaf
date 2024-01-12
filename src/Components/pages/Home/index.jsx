import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home1 from "./index1.jsx";
import './home.css';
import adara from './adara.jpg';
import batu from './batu.jpeg';
import neluwa from './neluwa.jpeg';
import halvitigala from './halvitigala.jpeg';
import hingalgoda from './hingalgoda.jpeg';
import kuru from './kuru.jpeg';
import board from './board.jpg';
import kara from './kara.jpeg';


const Home = () => {
  return (
    <section>
      
      <Home1 />
      
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            
            <p className="home-para1"><center>A Tea Factory with a Heart</center></p>
            <br /><br />
            <p className="home-para2"><center>Welcome to The Tea Leaf !</center></p>
            <br /><br />
            <p className="home-para">
              <br /><br />At Andaradeniya Group, we are more than just a tea factory <b>we are a company with a heart.</b>
              <br /> Our unwavering commitment to corporate social responsibility reflects our deep appreciation for the Deniyaya community's support over the years.
              <br /> We believe in the power of giving back, demonstrated through our diverse range of initiatives, from aiding those affected by natural disasters to supporting local schools, hospitals, and environmental projects.
              <br /> When you choose Andaradiniya Tea, you're not only savoring a premium product but also actively participating in our mission to make Deniyaya a better place for all. We are truly grateful for your support, which fuels our endeavors in creating positive change.
            </p>
            <br /> <br />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
      </div>

      <section className="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={halvitigala} alt="" />
            </figure>
            <div className="article-body">
              <h2>Halvitigala tea Factory</h2>
              <p>
              The Andaradeniya Tea Factory is one of the largest and most respected tea factories in Sri Lanka. It produces high-quality tea that is exported to all over the world. The factory is also involved in other aspects of the tea industry, such as owning and operating tea estates and providing financial assistance to tea farmers.
              </p>
             
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={kuru} alt="" />
            </figure>
            <div className="article-body">
              <h2>Kurupanawa tea factory</h2>
              <p>
              Kurupanawa Tea Factory is a medium-sized tea factory in Sri Lanka, known for its high-quality black and green teas. The factory is committed to producing high-quality tea and supporting the tea industry and the people who work in it. Kurupanawa Tea Factory is a valuable asset to the Sri Lankan tea industry.
              </p>
             
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={neluwa} alt="" />
            </figure>
            <div className="article-body">
              <h2>Neluwa madagama tea factory</h2>
              <p>
              Neluwa Madagama Tea Factory is a small tea factory in Sri Lanka, known for its high-quality black and green teas. The factory is committed to producing high-quality tea using traditional tea processing methods and equipment. Neluwa Madagama Tea Factory is a popular tourist destination and a valuable asset to the Sri Lankan tea industry.
              </p>
             
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={adara} alt="" />
            </figure>
            <div className="article-body">
              <h2>Andaradeniya tea factory</h2>
              <p>
              The Andaradeniya Tea Factory is one of the largest and most respected tea factories in Sri Lanka. It produces high-quality tea that is exported to all over the world. The factory is also involved in other aspects of the tea industry, such as owning and operating tea estates and providing financial assistance to tea farmers.
              </p>
             
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={batu} alt="" />
            </figure>
            <div className="article-body">
              <h2>Batuwangala tea factory</h2>
              <p>
              Batuwangala Tea Factory is a leading tea manufacturer in Sri Lanka, known for its high-quality black and green teas. It uses state-of-the-art equipment and processes to ensure the highest quality, and is committed to sustainable production and Fairtrade certification. Batuwangala Tea Factory is a valuable asset to the Sri Lankan tea industry.
              </p>
             
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={hingalgoda} alt="" />
            </figure>
            <div className="article-body">
              <h2>Hingalgoda tea factory</h2>
              <p>
              Hingalgoda Tea Factory, located in Hiniduma, Sri Lanka, is known for producing high-quality black and green teas. Managed by Tea Small Holder Factories PLC, the factory is open to visitors for tours and tastings.
              </p>
             
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={board} alt="" />
            </figure>
            <div className="article-body">
              <h2>BroadLand Tea Factory</h2>
              <p>
              BroadLand Tea Factory is a medium-sized tea factory in Sri Lanka, known for its high-quality black and green teas. The factory uses state-of-the-art equipment and processes to ensure the highest quality, and is committed to sustainable production and Fairtrade certification. BroadLand Tea Factory is a valuable asset to the Sri Lankan tea industry.
              </p>
             
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={kara} alt="" />
            </figure>
            <div className="article-body">
              <h2>Karawita Tea Factory</h2>
              <p>
                Karawita Tea Factory is a medium-sized tea factory in Sri Lanka, known for its high-quality black and green teas. The factory uses state-of-the-art equipment and processes to ensure the highest quality, and is committed to sustainable production and Fairtrade certification. Karawita Tea Factory is a valuable asset to the Sri Lankan tea industry.
              </p>
            </div>
          </div>
        </article>
        <br/>

      </section>
    </section>
  );
}

export default Home;
