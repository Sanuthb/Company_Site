import React from "react";
import "./OurService.css";

const OurServices = () => {
  return (
    <div className="design-service-grid">
      {/* Top Left: Bold Heading Block */}
      <div className="top-left">
        <h1>Transform Your Brand</h1>
        <p>Street2Site's premium design services</p>
      </div>

      {/* Top Center: Social Media Design Kits */}
      <div className="top-center">
        <h2>Social Media Design Kits</h2>
        <p>Instagram posts, stories, and carousel templates</p>
        <div className="design-kits">
          <div className="kit-item yellow-light"></div>
          <div className="kit-item yellow-medium"></div>
          <div className="kit-item yellow-dark"></div>
        </div>
      </div>

      {/* Top Right: Call-to-Action Block */}
      <div className="top-right">
        <h2>Ready to Start?</h2>
        <button>Get Started</button>
      </div>

      {/* Middle Left: Visual Portfolio Block */}
      <div className="middle-left">
        <h2>Event Branding Showcase</h2>
        <div className="portfolio-showcase">
          <div className="portfolio-item green-light"></div>
          <div className="portfolio-item green-dark"></div>
          <div className="portfolio-item green-light"></div>
          <div className="portfolio-item green-dark"></div>
        </div>
      </div>

      {/* Middle Center: Dashboard Design */}
      <div className="middle-center">
        <h2>Dashboard Design</h2>
        <p>Showcase your data with custom dashboards</p>
        <div className="dashboard-preview">
          <div className="dashboard-item purple-large"></div>
          <div className="dashboard-item purple-small"></div>
        </div>
      </div>

      {/* Middle Right: Infographic Design */}
      <div className="middle-right">
        <h2>Custom Infographics</h2>
        <p>Engage your audience with visuals</p>
        <div className="infographic-item"></div>
      </div>

      {/* Bottom Left: Services Overview */}
      <div className="bottom-left">
        <h2>Complete Branding Packages</h2>
        <ul>
          <li>Logo Design</li>
          <li>Stationery</li>
          <li>Website Hero Banners</li>
        </ul>
      </div>

      {/* Bottom Center: Showcase Block */}
      <div className="bottom-center">
        <h2>Before-and-After Designs</h2>
        <div className="showcase-grid">
          <div className="showcase-item orange-before">Before</div>
          <div className="showcase-item orange-after">After</div>
        </div>
      </div>

      {/* Bottom Right: Testimonial Block */}
      <div className="bottom-right">
        <h2>Client Testimonials</h2>
        <p>"Street2Site transformed our business branding!"</p>
        <p>- Happy Client</p>
      </div>
    </div>
  );
};



export default OurServices
