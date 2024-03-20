import { useRef, useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    name2: "",
    number: "",
    mail: "",
  });
  const checkboxRef = useRef(null);
  const [Fromdata, setFromdata] = useState({
    name: "",
    lastname: "",
    number: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    name2: "",
    number: "",
    mail: "",
  });
  const [formMail, setFormMail] = useState({
    name: "",
    name2: "",
    number: "",
    mail: "",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      name2: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      mail: /^[a-zA-Z\s]/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid.";
    }
    if (!regex.name2.test(formData.name2)) {
      errors.name2 = "Name is invalid.";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Number is invalid.";
    }
    if (!regex.mail.test(formData.mail)) {
      errors.mail = "Mail is invalid.";
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };

  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      name2: "",
      number: "",
      mail: "",
    });
    setFormErrors({
      name: "",
      name2: "",
      number: "",
      mail: "",
    });
  };

  return (
    <div>
      <div className="form_bg d-flex min-vh-100 mt_2">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="row flex-grow-md-1 align-items-center justify-content-center">
            <div className="col-lg-8 col-12">
              <form
                data-aos="zoom-in"
                className="registration-form form_border"
                onSubmit={handleSubmit}
              >
                <h1 className="text-center pb-2 mb-3 fs-52 lh_62 fw-bold text-white">
                  Get updated with us
                </h1>
                <div className="d-md-flex pb-2 gap-4 text-white justify-content-between">
                  <div className="form-group d-flex justify-content-between align-items-start flex-column">
                    <label
                      className="fw-medium text-white fs-15 lh_18"
                      htmlFor="name"
                    >
                      First Name:
                    </label>
                    <input
                      className="input-box"
                      placeholder="Park Seijun"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {formErrors.name && (
                      <p className="error-message">{formErrors.name}</p>
                    )}
                  </div>
                  <div className="form-group d-flex justify-content-between align-items-start flex-column">
                    <label
                      className="fw-medium text-white fs-15 lh_18"
                      htmlFor="name2"
                    >
                      Last Name:
                    </label>
                    <input
                      className="input-box"
                      placeholder="Sejiun"
                      type="text"
                      id="name2"
                      name="name2"
                      value={formData.name2}
                      onChange={handleChange}
                    />
                    {formErrors.name2 && (
                      <p className="error-message">{formErrors.name2}</p>
                    )}
                  </div>
                </div>
                <div className="d-md-flex pb-2 gap-4 justify-content-between">
                  <div className="form-group d-flex justify-content-between  align-items-start flex-column">
                    <label
                      className="fw-medium text-white fs-15 lh_18"
                      htmlFor="number"
                    >
                      Ph Number:
                    </label>
                    <input
                      placeholder="+12 5858526478"
                      type="text"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      className={`${formErrors.number ? "error" : ""}input-box`}
                    />
                    {formErrors.number && (
                      <p className="error-message">{formErrors.number}</p>
                    )}
                  </div>
                  <div className="form-group d-flex justify-content-between  align-items-start flex-column">
                    <label
                      className="fw-medium text-white fs-15 lh_18"
                      htmlFor="mail"
                    >
                      Email:
                    </label>
                    <input
                      className="input-box"
                      placeholder="Park@458@Gmail.com"
                      type="mail"
                      id="mail"
                      name="mail"
                      value={formData.mail}
                      onChange={handleChange}
                    />
                    {formErrors.mail && (
                      <p className="error-message">{formErrors.mail}</p>
                    )}
                  </div>
                </div>
                <div className="d-flex mb-5 gap-2 align-items-center">
                  <input
                    type="checkbox"
                    id="checkbox"
                    defaultChecked={false}
                    ref={checkboxRef}
                  />
                  <p className="fs-18 fw-normal lh_21 mw_547 mb-0 text-white">
                    By sending this form I confirm that I have read and accept
                    the <span className="fw-semibold">Privacy Policy </span>
                  </p>
                </div>
                <button
                  type="submit"
                  className="nav-btn fw-bold fs-16 fw-medium lh_18 text-white"
                >
                  Subscribe
                </button>
              </form>
              {showSuccessPopup && (
                <div className="success-popup">
                  <p className="fw-bold text-white fs-24">
                    Form submitted successfully!
                  </p>
                  <button className="nav-btn fw-bold" onClick={handlePopupClose}>
                    Close
                  </button>
                </div>
              )}
            </div>
            <div data-aos="zoom-in" className="col-lg-4 col-12">
              <p className="fs-24 lh_28 fw-normal text-white mb-2 mt-3 mt-lg-0 pb-1">
                Stay updated
              </p>
              <p className="fs-16 fw-normal lh_24 text-white op_70 mb-4">
                At 248 Labs, our constant pursuit is to build engaging games
                that spared joy. Don’t hesitate to reach out to us with your
                thoughts and messages - we are all ears!
              </p>
              <p className="fs-24 lh_28 fw-normal text-white mb-2 pb-1">
                Address
              </p>
              <p className="fs-16 fw-normal lh_24 text-white op_70">
                390 Orchard Road, 03-07, Palais Renaissance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
