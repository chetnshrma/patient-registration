import React from "react";
import "./Step1.css";

const Step1 = () => {
  return (
    <div className="registration-container">
      {/* Steps */}
      <div className="steps-container">
        <div className="step active">1 Patient Details</div>
        <div className="step">2 Assign Resources</div>
        <div className="step">3 Doctor Test Report</div>
      </div>

      {/* Title */}
      <h2 className="form-title">Register a new patient</h2>

      {/* Tabs */}
      <div className="tabs-container">
        <span className="tab active">Basic Details</span>
        <span className="tab">Legal Documents</span>
        <span className="tab">Demographics</span>
      </div>

      {/* Form */}
      <form className="form-container">
        <div className="form-group">
          <label>First name*</label>
          <div className="input-group">
            <select>
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Ms.</option>
            </select>
            <input type="text" placeholder="Enter first name" />
          </div>
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" placeholder="Enter last name" />
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <div className="input-group">
            <select>
              <option>+91</option>
              <option>+1</option>
            </select>
            <input type="text" placeholder="Enter mobile number" />
          </div>
        </div>

        <div className="form-group">
          <label>Alternate mobile no.</label>
          <div className="input-group">
            <select>
              <option>+91</option>
              <option>+1</option>
            </select>
            <input type="text" placeholder="Enter alternate mobile" />
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Date of birth</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>Age*</label>
          <input type="number" placeholder="Enter age" />
        </div>

        <div className="form-group">
          <label>Birth Time</label>
          <input type="time" />
        </div>

        <div className="form-group">
          <label>Gender*</label>
          <select>
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Guardian Name</label>
          <input type="text" placeholder="Enter guardian name" />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input type="text" placeholder="Enter country" />
        </div>

        <div className="form-group">
          <label>State</label>
          <input type="text" placeholder="Enter state" />
        </div>

        {/* Additional Fields */}
        <div className="form-group">
          <label>District</label>
          <input type="text" placeholder="Enter district" />
        </div>

        <div className="form-group">
          <label>City / Town</label>
          <input type="text" placeholder="Enter city/town" />
        </div>

        <div className="form-group">
          <label>Full Address</label>
          <input type="text" placeholder="Enter full address" />
        </div>

        <div className="form-group">
          <label>How do you know about us</label>
          <select>
            <option>Select</option>
          </select>
        </div>

        <div className="form-group">
          <label>Refer From</label>
          <select>
            <option>Select</option>
          </select>
        </div>

        {/* Admission Type */}
        <div className="form-group admission-type">
          <label>Admission Type</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="admission" value="voluntary" /> Voluntary
            </label>
            <label>
              <input type="radio" name="admission" value="involuntary" /> Involuntary
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="form-actions">
          <button type="button" className="btn-save">
            Save
          </button>
          <button type="submit" className="btn-continue">
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
