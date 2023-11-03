/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="section-container py-5 mb-[60px] 2md:mb-0">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl sm:text-5xl text-secondary font-semibold">
          FAQ
        </h2>

        <div className="p-2 2md:p-5 mt-6 w-[100%] 2md:w-[60%] ">
          <div>
            <h3 className="text-2xl text-secondary font-semibold ">
              Your Queries About Our Service
            </h3>
          </div>
          <div className="mt-2 pb-0 2md:pb-10 text-primary">
            <div className="collapse collapse-plus bg-tertiary shadow-lg rounded-lg mb-5">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                What types of support we provide
              </div>
              <div className="collapse-content">
                <p>
                  Gopuff is a leading Instant Commerce platform that brings
                  thousands of everyday products to customers in minutes. The
                  company stores its own inventory of about 4,000 products in
                  hundreds of local micro-fulfillment centers, so, when you
                  order, your stuff comes directly from us to you for as little
                  as $3.95 per order. Whether customers
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-tertiary shadow-lg rounded-lg mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What types of support we provide
              </div>
              <div className="collapse-content">
                <p>
                  Gopuff is a leading Instant Commerce platform that brings
                  thousands of everyday products to customers in minutes. The
                  company stores its own inventory of about 4,000 products in
                  hundreds of local micro-fulfillment centers, so, when you
                  order, your stuff comes directly from us to you for as little
                  as $3.95 per order. Whether customers need cold medicine at
                  midnight, a wine restock mid-dinner party, or just an
                  afternoon ice cream treat along with paper towels, Gopuff
                  provides a unique, reliable and magical experience to
                  customers across the U.S. and U.K. To learn more follow Gopuff
                  on{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-tertiary shadow-lg rounded-lg mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What types of support we provide
              </div>
              <div className="collapse-content">
                <p>
                  Gopuff is a leading Instant Commerce platform that brings
                  thousands of everyday products to customers in minutes. The
                  company stores its own inventory of about 4,000 products in
                  hundreds of local micro-fulfillment centers, so, when you
                  order, your stuff comes directly from us to you for as little
                  as $3.95 per order. Whether customers need cold medicine at
                  midnight, a wine restock mid-dinner party, or just an
                  afternoon ice cream treat along with paper towels, Gopuff
                  provides a unique, reliable and magical experience to
                  customers across the U.S. and U.K. To learn more follow Gopuff
                  on{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-tertiary shadow-lg rounded-lg mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What types of support we provide
              </div>
              <div className="collapse-content">
                <p>
                  Gopuff is a leading Instant Commerce platform that brings
                  thousands of everyday products to customers in minutes. The
                  company stores its own inventory of about 4,000 products in
                  hundreds of local micro-fulfillment centers, so, when you
                  order, your stuff comes directly from us to you for as little
                  as $3.95 per order. Whether customers need cold medicine at
                  midnight, a wine restock mid-dinner party, or just an
                  afternoon ice cream treat along with paper towels, Gopuff
                  provides a unique, reliable and magical experience to
                  customers across the U.S. and U.K. To learn more follow Gopuff
                  on{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-tertiary shadow-lg rounded-lg">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What types of support we provide
              </div>
              <div className="collapse-content">
                <p>
                  Gopuff is a leading Instant Commerce platform that brings
                  thousands of everyday products to customers in minutes. The
                  company stores its own inventory of about 4,000 products in
                  hundreds of local micro-fulfillment centers, so, when you
                  order, your stuff comes directly from us to you for as little
                  as $3.95 per order. Whether customers need cold medicine at
                  midnight, a wine restock mid-dinner party, or just an
                  afternoon ice cream treat along with paper towels, Gopuff
                  provides a unique, reliable and magical experience to
                  customers across the U.S. and U.K. To learn more follow Gopuff
                  on{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
