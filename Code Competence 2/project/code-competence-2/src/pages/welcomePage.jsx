import React, { useState } from "react";
import Swal from "sweetalert2";
import "../styles/welcomePage.css";

import Layout from "../components/layout";
import { Input, TextArea } from "../components/input";

function WelcomePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();

    // Display the submitted data in SweetAlert
    Swal.fire({
      title: "Contact Us",
      html: `
        <p>First Name: ${formData.firstName}</p>
        <p>Last Name: ${formData.lastName}</p>
        <p>Email: ${formData.email}</p>
        <p>Message: ${formData.message}</p>
      `,
      icon: "success",
      confirmButtonText: "OK",
    });

    // Reset the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  }

  return (
    <Layout>
      <div>
        <div className="welcome-container">
          <div className="welcome-bg">
            <img
              src="src/assets/green-field.jpg"
              alt="Welcome Image"
              className="welcome-image"
            />
          </div>
          <div className="welcome-text">
            <h1 className="text-3xl font-bold">WELCOME TO OUR WEBSITE</h1>
            <p>
              Let's work together to preserve the beauty of nature for future
              generations.
            </p>
            <button className="bg-[#198754] hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Join Now
            </button>
          </div>
        </div>

        <h1 className="text-3xl font-semibold text-center my-5">About Us</h1>
        <div className="grid grid-cols-2">
          <div className="text-justify">
            <p className="mb-4 pr-9 ">
              Welcome to our website! We are a community that has grown out of a
              deep love for the wonders of nature, especially trees and forests.
              From the very beginning, we have been committed to preserving and
              promoting the beauty and importance of forest ecosystems
              worldwide. Through this website, we aim to share our joy and
              admiration for nature, as well as inspire people from various
              backgrounds to get involved in environmental conservation.
            </p>
            <p className=" pr-9">
              We believe that we all have a role in preserving the universe.
              Therefore, we invite you to join us on this journey. Together, we
              can celebrate biodiversity, take action to protect precious
              forests, and keep our planet green for future generations. Thank
              you for your support in our mission to preserve the beauty of
              trees and forests, which form the foundation of life on this
              planet. Let's together care for and nurture them with love and
              care.
            </p>
          </div>
          <div className="">
            <img
              src="src/assets/water-fall.jpg"
              alt="About Us"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 w-3/4">
            <div className="text-justify">
              <p className="mb-4 pr-9 ">
                <h2 className="text-2xl font-semibold my-5">Contact us</h2>
                Need to get in touch with us? Either fill out the form with your
                inquiry or find the department email you'd like to contact
                below.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5 pr-5 ">
              <form className="relative" onSubmit={handleSubmit}>
                <div className="mb-2 grid-cols-2">
                  <Input
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-2">
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="you@email.example"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-2">
                  <TextArea
                    label="What can we help you with?"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></TextArea>
                </div>
                <div className="py-2">
                  <button
                    className="bg-[#198754] hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="">
                <div className="mb-2">
                  <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center text-lg-start bg-gray-800 text-white py-4">
          <section className="border-t">
            <div className="container mx-auto px-4 py-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="mb-4">
                  <h6 className="text-uppercase font-bold mb-4">
                    <img
                      src="src/assets/logo.jpg"
                      alt="Logo"
                      width="20"
                      height="20"
                      className="inline-block align-text-top"
                    />
                    GreenLeaf
                  </h6>
                  <p className="text-sm">
                    Thank you for visiting our website. We are committed to
                    providing high quality service to our customers. If you have
                    any questions or feedback, please feel free to contact us
                    via email address, phone number, or our social media.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="text-uppercase font-bold mb-4">Contact</h6>
                  <p className="text-sm">
                    <i className="fas fa-home me-3"></i> Indonesia, Jawa Tengah
                  </p>
                  <p className="text-sm">
                    <i className="fas fa-envelope me-3"></i> info@example.com
                  </p>
                  <p className="text-sm">
                    <i className="fas fa-phone me-3"></i> +6285 9248 1234
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto flex flex-col-reverse sm:flex-row justify-between items-center py-4 my-4 border-t">
            <p className="text-sm">
              &copy; 2023 Company, Inc. All rights reserved.
            </p>
            <ul className="list-none sm:list-inline mt-3 sm:mt-0">
              <li className="mx-3">
                <a href="https://twitter.com/RafiFikri11">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="mx-3">
                <a href="https://instagram.com/rafimff_">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="mx-3">
                <a href="https://www.facebook.com/rafi.mfikri.3">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </Layout>
  );
}

export default WelcomePage;
