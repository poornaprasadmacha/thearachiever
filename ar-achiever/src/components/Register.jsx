import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    mobileNumber: '',
    address: '',
    countryType: 'India', 
    customCountry: '',    
    stateOrTerritory: '',
    customTerritory: '',  
    collegeName: '',
    agreeTerms: false
  });

  const indianStatesAndUTs = [
    "Other Region / Territory",
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Delhi (NCT)", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'mobileNumber') {
      const numericCleanValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: numericCleanValue }));
      return;
    }

    setFormData(prev => {
      const updatedState = { ...prev, [name]: type === 'checkbox' ? checked : value };
      
      if (name === 'countryType') {
        updatedState.stateOrTerritory = '';
        updatedState.customTerritory = '';
        updatedState.customCountry = '';
      }
      if (name === 'stateOrTerritory' && value !== 'Other Region / Territory') {
        updatedState.customTerritory = '';
      }
      return updatedState;
    });
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("Please review and accept the Terms and Conditions to proceed with registration.");
      return;
    }
    console.log("Verified Competition Enrollment Data Payload:", formData);
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#FAEAD9', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 16px',
      boxSizing: 'border-box',
      fontFamily: '"DM Sans", system-ui, sans-serif',
      color: '#2B221A'
    }}>
      
      <style>{`
        .form-card-container {
          width: 40%; /* Locks the form structure container exactly to 40% of page width */
          minWidth: 450px; /* Safety fallback block so the layout remains crisp on medium screens */
          background: rgba(255, 255, 255, 0.5); /* 50% opacity translucent surface foundation */
          backdrop-filter: blur(12px); /* Premium hardware accelerated frosted glass blurring */
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(43, 34, 26, 0.15);
          border-radius: 16px;
          padding: 40px 32px;
          box-shadow: 0 15px 35px rgba(43, 34, 26, 0.08);
        }
        .form-vertical-stack {
          display: flex;
          flex-direction: column;
          gap: 18px; 
        }
        .input-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          color: #4A3E34;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .input-field {
          width: 100%;
          padding: 12px 14px;
          background: #FFFFFF; /* High-contrast solid white backgrounds for readability inside the frosted glass */
          border: 1px solid #D6C9BE;
          border-radius: 6px;
          color: #2B221A;
          font-size: 0.95rem;
          box-sizing: border-box;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .input-field:focus {
          outline: none;
          border-color: #C28247; 
          box-shadow: 0 0 0 3px rgba(194, 130, 71, 0.15);
        }
        .input-field::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .input-field::-webkit-calendar-picker-indicator:hover {
          opacity: 1;
        }
        .signup-submit-btn {
          width: 100%;
          padding: 14px;
          background: #2B221A;
          color: #FAEAD9;
          border: none;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          cursor: pointer;
          margin-top: 10px;
          transition: background 0.2s, transform 0.1s;
        }
        .signup-submit-btn:hover {
          background: #4A3E34;
        }
        .signup-submit-btn:active {
          transform: scale(0.992);
        }
        
        /* Responsive fallback layout switch override rule matrix */
        @media (max-width: 500px) {
          .form-card-container { 
            width: 100%;
            minWidth: 100%;
            padding: 24px 18px; 
          }
        }
      `}</style>

      <div className="form-card-container">
        
        {/* Heading Section */}
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ 
            fontSize: '1.6rem', 
            fontWeight: '800', 
            color: '#2B221A',
            margin: '0 0 6px 0',
            lineHeight: '1.25'
          }}>
            Participation for the Architectural Competitions
          </h1>
          <div style={{ width: '40px', height: '3px', backgroundColor: '#C28247', borderRadius: '2px' }}></div>
        </div>

        {/* Input Form Module */}
        <form onSubmit={handleFormSubmission} className="form-vertical-stack">
          
          {/* First Name */}
          <div>
            <label className="input-label">First Name *</label>
            <input 
              type="text" required name="firstName"
              value={formData.firstName} onChange={handleInputChange}
              className="input-field" placeholder="Enter first name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="input-label">Last Name *</label>
            <input 
              type="text" required name="lastName"
              value={formData.lastName} onChange={handleInputChange}
              className="input-field" placeholder="Enter last name"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="input-label">Date of Birth *</label>
            <input 
              type="date" required name="dob"
              value={formData.dob} onChange={handleInputChange}
              className="input-field"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="input-label">Email Address *</label>
            <input 
              type="email" required name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={formData.email} onChange={handleInputChange}
              className="input-field" placeholder="name@domain.com"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="input-label">Mobile Number (10 Digits) *</label>
            <input 
              type="tel" required name="mobileNumber"
              pattern="[0-9]{10}" maxLength="10"
              value={formData.mobileNumber} onChange={handleInputChange}
              className="input-field" placeholder="9876543210"
            />
          </div>

          {/* Mailing Address */}
          <div>
            <label className="input-label">Mailing Address *</label>
            <input 
              type="text" required name="address"
              value={formData.address} onChange={handleInputChange}
              className="input-field" placeholder="Full address details"
            />
          </div>

          {/* Country Categories Selector */}
          <div>
            <label className="input-label">Country *</label>
            <select 
              name="countryType" value={formData.countryType} onChange={handleInputChange}
              className="input-field"
            >
              <option value="India">India</option>
              <option value="International">International</option>
            </select>
          </div>

          {/* Custom Country Display Module */}
          {formData.countryType === 'International' && (
            <div>
              <label className="input-label">Specify Country Name *</label>
              <input 
                type="text" required name="customCountry"
                value={formData.customCountry} onChange={handleInputChange}
                className="input-field" placeholder="Enter country location"
              />
            </div>
          )}

          {/* State Selection Module */}
          {formData.countryType === 'India' && (
            <div>
              <label className="input-label">State / Territory *</label>
              <select 
                name="stateOrTerritory" required value={formData.stateOrTerritory} onChange={handleInputChange}
                className="input-field"
              >
                <option value="" disabled>-- Select Option --</option>
                {indianStatesAndUTs.map((state, idx) => (
                  <option key={idx} value={state}>{state}</option>
                ))}
              </select>
            </div>
          )}

          {/* Custom Territory Display Module */}
          {formData.countryType === 'India' && formData.stateOrTerritory === 'Other Region / Territory' && (
            <div>
              <label className="input-label">Specify Region / Place Name *</label>
              <input 
                type="text" required name="customTerritory"
                value={formData.customTerritory} onChange={handleInputChange}
                className="input-field" placeholder="Enter specific region designation"
              />
            </div>
          )}

          {/* Institution / College Name */}
          <div>
            <label className="input-label">College / University Name *</label>
            <input 
              type="text" required name="collegeName"
              value={formData.collegeName} onChange={handleInputChange}
              className="input-field" placeholder="Full institute name"
            />
          </div>

          {/* Terms Agreement Component Section */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '6px' }}>
            <input 
              type="checkbox" id="agreeTerms" name="agreeTerms"
              checked={formData.agreeTerms} onChange={handleInputChange}
              style={{ width: '18px', height: '18px', marginTop: '2px', cursor: 'pointer', accentColor: '#2B221A' }}
            />
            <label htmlFor="agreeTerms" style={{ fontSize: '0.88rem', color: '#4A3E34', lineHeight: '1.4', cursor: 'pointer' }}>
              I agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" style={{ color: '#C28247', textDecoration: 'underline', fontWeight: '600' }}>Terms and Conditions</a>
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="signup-submit-btn">
              Sign Up
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;