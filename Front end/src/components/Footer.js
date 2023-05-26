import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Contact Us</h4>
                <p className="card-text">Have a question or want to work with us? Contact us at <a href="mailto:info@cashmerestore.com">info@cashmerestore.com</a>.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text-center">Copyright &copy; Cashmere Store</p>
            <p className="text-center">Developed by Mohammad Hasnain Mirza</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
