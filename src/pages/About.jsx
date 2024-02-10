import React from 'react';
import './About.css';
import AboutImg from '../utils/img/about-img.jpg';
import winImg from '../utils/img/about-chef2.jpg';


function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About Us</h1>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-80' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h5 className='mb-4'>Enactus NSUT is a non-profit organization empowering students to create and implement entrepreneurial projects that drive positive social impact and sustainable change in their communities.Our Teams identify challenges, develop innovative projects and sustainable solutions. </h5>
                        <h5>We provide training, mentorship, and a platform for students to showcase their initiatives in regional and international competitions.Enactus NSUT cultivates leadership skills, social responsibility, and a commitment to driving positive change in communities worldwide, fostering a generation of socially conscious and entrepreneurial leaders.
</h5>

                    </div>
                </div>
            </div>

            <div className='container my-5'>
                <div className='row'>
                    
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h5 className='mb-5'>The prominent success of Enactus NSUT in the early stage of "Enactus India National Exposition " at Indian Institute of Technology, Delhi and saw participation from 110+ teams from some of India's most prestigious colleges.</h5>

                        <h5>In the competition where teams pitched their most innovative and impactful ideas before the judges, ENACTUS - NSUT left a mark with their project - 'CLAIR', which aims to combat air pollution and make clean and fresh air accessible.</h5>

                    </div>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={winImg} className='img-fluid w-80' alt="about img" />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default About;