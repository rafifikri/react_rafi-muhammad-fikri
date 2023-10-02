import { Link } from "react-router-dom";
import React from "react";
import "../styles/landingPage.css";

import Layout from "../components/layout";

function LandingPage() {
  return (
    <Layout>
      <div className="bg-[#37517e] py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
          <div className="lg:w-1/2 mb-8">
            <p className="text-white text-5xl font-bold mb-4">
              Better Solutions For Your Business
            </p>
            <p className="text-white text-lg">
              We are a team of talented designers making websites with Bootstrap
            </p>
            <div className="mt-6 gap-5 flex">
              <Link to="/createProduct">
                <button
                  className="bg-[#47b2e4] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full"
                  id="button-started"
                >
                  Get Started
                </button>
              </Link>
              <button
                className="text-white font-normal"
                id="button-watch-video"
              >
                Watch Video
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="src/assets/hero-img.png"
              alt="landing image"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="py-16 bg-[#F3F5FA] dark:bg-neutral-700 text-neutral-800 dark:text-white overflow-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold color dark:text-white">
            Join Our Newsletter
          </h2>
          <p className="text-gray-600 dark:text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, rem.
          </p>
          <div className="mt-8 flex justify-center">
            <input className="rounded-full px-12 py-3 w-full sm:w-auto" />
            <button
              className="bg-[#47b2e4] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
              aria-label="button-subscribe"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <footer>
        <div>
          <section className="py-8 md:py-16">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="mb-4 md:mb-8">
                <h1 className="text-xl md:text-2xl font-bold mb-2 color dark:text-white">
                  ARSHA
                </h1>
                <p>A 108 Adam Street</p>
                <p>New York, NT 535022</p>
                <p>
                  <b>Phone: </b>+1 5589 55488 55
                </p>
                <p>
                  <b>Email: </b>info@example.com
                </p>
              </div>
              <div className="mb-4 md:mb-8">
                <h4 className="text-xl md:text-2xl font-bold mb-2 color dark:text-white">
                  Useful links
                </h4>
                <p>Home</p>
                <p>About US</p>
                <p>Services</p>
                <p>Terms of service</p>
                <p>Privacy policy</p>
              </div>
              <div className="mb-4 md:mb-8">
                <h4 className="text-xl md:text-2xl font-bold mb-2 color dark:text-white">
                  Our Services
                </h4>
                <p>Web Design</p>
                <p>Web Development</p>
                <p>Product Management</p>
                <p>Marketing</p>
                <p>Graphic Design</p>
              </div>
              <div className="mb-4 md:mb-8">
                <h4 className="text-xl md:text-2xl font-bold mb-2 color dark:text-white">
                  Our Social Networks
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  doloribus?
                </p>
                <div>
                  <ul className="list-none flex space-x-2">
                    <li className="circle-frame w-8 h-8"></li>
                    <li className="circle-frame w-8 h-8"></li>
                    <li className="circle-frame w-8 h-8"></li>
                    <li className="circle-frame w-8 h-8"></li>
                    <li className="circle-frame w-8 h-8"></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-[#37517e] py-4">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
              <p className="text-white text-center sm:text-left">
                &copy; Copyright <b>ARSHA.</b> All Rights Reserved
              </p>
              <p className="text-white text-center sm:text-right mt-2 sm:mt-0">
                Designed by<a className="text-[#47b2e4]"> BootstrapMade</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}

export default LandingPage;
