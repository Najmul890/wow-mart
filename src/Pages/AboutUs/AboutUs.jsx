/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="section-container py-5 mb-[60px] 2md:mb-0">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl sm:text-5xl text-secondary font-semibold">
          About Us
        </h2>

        <div className="p-2 2md:p-5 mt-1 w-[100%] 2md:w-[60%] ">
          <div>
            <p className="text-sm sm:text-base text-primary font-medium mt-5 ">
              Gopuff is a leading Instant Commerce platform that brings
              thousands of everyday products to customers in minutes. The
              company stores its own inventory of about 4,000 products in
              hundreds of local micro-fulfillment centers, so, when you order,
              your stuff comes directly from us to you for as little as $3.95
              per order. Whether customers need cold medicine at midnight, a
              wine restock mid-dinner party, or just an afternoon ice cream
              treat along with paper towels, Gopuff provides a unique, reliable
              and magical experience to customers across the U.S. and U.K. To
              learn more follow Gopuff on{" "}
              <a href="" className="text-secondary underline">
                Facebook
              </a>{" "}
              , you can follow on{" "}
              <a href="" className="text-secondary underline">
                Twitter
              </a>{" "}
              and also can follow on{" "}
              <a href="" className="text-secondary underline">
                Instagram
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-2xl mt-8 text-secondary font-semibold">How did it start?</h3>
            <p className="text-sm sm:text-base text-primary font-medium mt-2 ">
              In 2013, co-founders Rafael Ilishayev and Yakir Gola were
              sophomores at Drexel University in Philadelphia when they realized
              Yakir, the only friend with a car, was running far too many
              errands for their friends. So they spent all night drafting
              mock-ups of the app on the back of their class notes. Three months
              later, they started Gopuff. Today, the company has hundreds of
              locations, enabling customers across the U.S. and UK to access
              their everyday needs, fast!
            </p>
          </div>
          <div>
            <h3 className="text-2xl mt-8 text-secondary font-semibold">Why did it start?</h3>
            <p className="text-sm sm:text-base text-primary font-medium mt-2 ">
              In 2013, co-founders Rafael Ilishayev and Yakir Gola were
              sophomores at Drexel University in Philadelphia when they realized
              Yakir, the only friend with a car, was running far too many
              errands for their friends. So they spent all night drafting
              mock-ups of the app on the back of their class notes. Three months
              later, they started Gopuff. Today, the company has hundreds of
              locations, enabling customers across the U.S. and UK to access
              their everyday needs, fast!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
