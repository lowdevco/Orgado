import React from "react";
import "../../css/contact-css/contact.css";

import useContactForm from "../../Hooks/useContactForm";

function Contact() {
  const { formData, handleDataChange, handleDataSubmit } = useContactForm();

  // function handleSubmit(o){
  //   o.preventDefault();

  //   const name = o.target.name.value
  //   const phone = o.target.phone.value
  //   const mail = o.target.mail.value
  //   const msg = o.target.message.value

  //   {
  //     console.log("Name: ",name);
  //     console.log("Ph: ",phone);
  //     console.log("Email: ",mail);
  //     console.log("Message: ",msg);
  //   }

  // }

  return (
    <section className="container">
      <div className="contact-bg">
        <div
          className=" row align-items-center container"
          id="container-wrap"
        >
          {/* Left tab */}
          <div className="col-xl-8 col-lg-12 col-12 container" id="contact-lt">
            <form className="contact-form" onSubmit={handleDataSubmit}>
              <div className="contact-lt-text mb-4">
                <h1 style={{ fontSize: 60, fontWeight: 700 }}>Get in Touch</h1>
              </div>
              {/* {name} */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <input
                    className="contact-input-name"
                    id="name"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleDataChange}
                  />
                </div>
                {/* {phone} */}
                <div className="col-md-6 ">
                  <input
                    className="contact-input-phone"
                    id="phone"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleDataChange}
                  />
                </div>
              </div>
              {/* {email} */}
              <div className="mb-4">
                <input
                  className="contact-input-mail"
                  id="mail"
                  placeholder="Email"
                  name="mail"
                  value={formData.mail}
                  onChange={handleDataChange}
                />
              </div>
              {/* {message} */}
              <div className="mb-4">
                <textarea
                  className="contact-input-msg"
                  id="message"
                  placeholder="Messages"
                  name="message"
                  value={formData.message}
                  onChange={handleDataChange}
                  type
                />
              </div>

              <button className="contact-button" type="submit">
                Submit Now
              </button>
            </form>
          </div>

          {/* Right tab */}
          <div className="col-xl-4 col-lg-6 col- container">
            <div className="contact-rt">
              <div className="support-card p-4 ">
                <h4 className="fw-500 mb-4">Support Contact</h4>

                {/* Phone */}
                <div className="contact-item mb-4 d-flex gap-4">
                  <div className="icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Phone</h6>
                    <p className="mb-0 large text-muted">
                      Mobile: (+88) 872-670-780
                    </p>
                    <p className="mb-0 large text-muted">
                      Mobile: (+88) 422-655-793
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-item mb-4 d-flex gap-4">
                  <div className="icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Email</h6>
                    <p className="mb-0 large text-muted">info@example.com</p>
                    <p className="mb-0 large text-muted">contact@example.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-item d-flex gap-4">
                  <div className="icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Location</h6>
                    <p className="mb-0 large text-muted">
                      Abbot Favicon Kinney, New York,
                      <br /> USA - 25423
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div>
        <div className="i-frame-section">
          <div className="map-container rounded-3 overflow-hidden">
            <iframe
              title="New York Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1647858966778!5m2!1sen!2sbd%22"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
