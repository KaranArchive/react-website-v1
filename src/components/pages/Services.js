import React from 'react';
import '../../App.css';

export default function Services({ title }) {
  return (
    <>
      <section className="page-cover wow fadeInDown" data-wow-delay="0.0s">
        <div className="container">
          <h1 className="section-title">{title}</h1>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <h4 className="mb-3 wow fadeInUp" data-wow-delay="0s"><strong>Our project team is equipped to provide following services</strong></h4>
          <ul className="pointers">
            <li className="wow fadeInUp" data-wow-delay="0.0s">Turnkey Projects : Electrical, Automation and Instrumentation supply, Software, Erection, Commissioning, Support, etc.</li>
            <li className="wow fadeInUp" data-wow-delay="0.01s">Consultancy in conceptualizing the project. Design and Engineering.</li>
            <li className="wow fadeInUp" data-wow-delay="0.02s">Application Software Code for PLC, HMI and Variable Frequency Drives. On Site Training for Operators and Maintenance staff.</li>
            <li className="wow fadeInUp" data-wow-delay="0.03s">Erecting of Equipment and Panels. Calibration of Field Instruments Commissioning and Handover.</li>
            <li className="wow fadeInUp" data-wow-delay="0.04s">Annual Maintenance Contracts, Field Service and Repair.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
