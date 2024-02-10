import React from 'react';
import './Contact.css';
import './Home.css';

function Contact() {
    return (
        <div className='contact-page'>
        <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Frequently Asked Questions</h1>
                </div>
            </header>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item mb-3">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      <strong><h5>How much does VAAYU cost?</h5></strong> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong><h6>VAAYU offers cost-effective air purification at 6999 INR, prioritizing accessibility for less privileged families.</h6></strong>
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
</div>
    )
}

export default Contact;