import React from 'react';
import './Home.css';
import footer from '../utils/img/Frame 11 (1).svg';
import features from '../utils/img/Frame 4.jpg';
import info from '../utils/img/Frame 3 (3).svg';
import product from '../utils/img/Frame 9 (2).svg';
import sliderImage1 from '../utils/img/Appliance v9 (2) 1.svg';
import sliderImage2 from '../utils/img/Appliance v9 1 (2) 1.svg';
import sliderImage3 from '../utils/img/Appliance v9 2 (2) 1.svg';
import sliderImage4 from '../utils/img/Frame 1.svg';
import about from'../utils/img/Frame 8 (1).svg';
import achievements from'../utils/img/Frame 10 (1).svg';
import explore from '../utils/img/Frame 12.svg';
import faq from '../utils/img/Frequently Asked Questions (1).svg'



function Home() {
    return (
        //hero section
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-8  d-sm-block flex-column align-items-center'>
                            <h1 className='mb-0 text-white fw-bold text-center text-sm-start'>CLAIR</h1>
                            <h1 className='mb-0 text-white fw-medium'>Breathing Sustainably</h1> 
                        </div>
                    </div>
                </div>
            </header>
            

            
            <div className='breakfast'>
                <div className='container-fluid'>
                <img src={info} className='img-fluid w-100' alt="info" />
                </div>
            </div>



            <div className='breakfast'>
                <div className='container-fluid'>
                <img src={product} className='img-fluid w-100' alt="product" />
                </div>
            </div>



            <div className='breakfast'>
                <div className='container-fluid'>
                <img src={features} className='img-fluid w-100' alt="features" />
                </div>

            </div>
            <div className='container-fluid my-class'>
                <img src={explore} className='w-100' alt="explore" />
                </div>
            <div>
                
            </div>
            <div className="carousel-container my-class d-flex justify-content-center">
            <div id="carouselExampleIndicators" class="carousel slide w-75">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src={sliderImage1} className='rounded mx-auto d-block w-50 mb-5 mt-5' alt="sliderImage1" />
    </div>
    <div class="carousel-item">
    <img src={sliderImage2} className='rounded mx-auto d-block w-50 mb-5 mt-5' alt="sliderImage2" />
    </div>
    <div class="carousel-item">
    <img src={sliderImage3} className='rounded mx-auto d-block w-50 mb-5 mt-5' alt="sliderImage3" />
    </div>
    <div class="carousel-item">
    <img src={sliderImage4} className='rounded mx-auto d-block w-50 mb-5 mt-5' alt="sliderImage4" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    
    
<div className='breakfast'>
                <div className='container-fluid my-class1'>
                <img src={about} className='img-fluid w-100' alt="features" />
                </div>
            </div>

            
            <div className='breakfast'>
                <div className='container-fluid mb-5 my-class2'>
                <img src={achievements} className='img-fluid w-100' alt="features" />
                </div>
            </div>
            
            <div className='container-fluid d-flex justify-content-center'>
                <img src={faq} className='img w-2' alt="faq" />
                </div>     
                       
<div class="accordion" id="accordionExample">
  <div class="accordion-item mb-3">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      <strong><h5>How much does VAAYU cost?</h5></strong> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong><h6>VAAYU offers cost-effective air purification at 5900 INR, prioritizing accessibility for less privileged families.</h6></strong>
      </div>
    </div>
  </div>
  <div class="accordion-item mb-3">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong><h5>What size of particles can VAAYU trap?</h5></strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong><h6>VAAYU utilizes a 2-stage HEPA and Pre-Filter system, capturing particles as small as 0.3 microns for unparalleled air purification.</h6></strong>
      </div>
    </div>
  </div>
  <div class="accordion-item mb-3">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <strong><h5>How does Project CLAIR empower women?</h5></strong>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong><h6>Project CLAIR involves unemployed women in the Bharat Vihar community in the manufacturing and supply chain of VAAYU.</h6></strong>
      </div>
    </div>
  </div>
  <div class="accordion-item mb-3">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong><h5>How does pre-filteration benefit air purification?</h5></strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong><h6>Emphasizing pre-filtration, VAAYU optimizes HEPA performance by capturing larger particles, enhancing longevity and efficacy</h6></strong>
      </div>
    </div>
  </div>
  <div class="accordion-item mb-3">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <strong><h5>What is the goal of Project CLAIR?</h5></strong>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong><h6>VAAYU pledges to eliminate 99.95% of indoor pollutants, recognizing the critical issue, demanding immediate and comprehensive solutions for cleaner air.</h6></strong>
      </div>
    </div>
  </div>
</div>


<div className='breakfast'>
                <div className='container-fluid mb-5 my-class2'>
                <img src={footer} className='img-fluid w-100' alt="footer" />
                </div>
            </div>
        </div>
    )
}
export default Home;