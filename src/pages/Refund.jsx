import React from "react";

const Refund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-slate-100">

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <section className="rounded-xl bg-slate-900/60 p-6 md:p-10 shadow-2xl backdrop-blur ring-1 ring-cyan-300/10">
          <h1 className="mb-8 text-center text-3xl md:text-4xl font-bold text-cyan-300 drop-shadow">
            Refund &amp; Cancellation Policy
          </h1>

          <p className="mb-4 text-slate-300 text-sm md:text-base text-justify">
            This refund and cancellation policy outlines how you can cancel or
            seek a refund for a product/service that you have purchased through
            the Platform. Under this policy:
          </p>

          <h2 className="mt-6 mb-4 border-b-2 border-cyan-300/40 pb-3 text-xl md:text-2xl font-semibold text-cyan-300">
            Cancellation Policy
          </h2>

          <div className="mb-6 rounded-lg border-l-4 border-cyan-300 bg-cyan-300/5 p-5 md:p-6">
            <h3 className="mb-3 text-lg font-semibold text-cyan-300">
              General Cancellations
            </h3>
            <p className="mb-3 text-slate-300 text-sm md:text-base text-justify">
              <strong className="font-semibold text-cyan-200">
                Cancellations will only be considered if the request is made
                within 7 days of placing the order.
              </strong>
            </p>
            <p className="text-slate-300 text-sm md:text-base text-justify">
              However, cancellation requests may not be entertained if the
              orders have been communicated to such sellers/merchant(s) listed
              on the Platform.
            </p>
          </div>

          <h2 className="mt-6 mb-4 border-b-2 border-cyan-300/40 pb-3 text-xl md:text-2xl font-semibold text-cyan-300">
            Refund Policy
          </h2>

          <div className="mb-6 rounded-lg border-l-4 border-cyan-300 bg-cyan-300/5 p-5 md:p-6">
            <h3 className="mb-3 text-lg font-semibold text-cyan-300">
              Product/Service Not As Expected
            </h3>
            <p className="mb-3 text-slate-300 text-sm md:text-base text-justify">
              In case you feel that the product/service received is not as shown
              on the site or as per your expectations, you must bring it to the
              notice of our customer service within{" "}
              <strong className="font-semibold text-cyan-200">
                7 days of receiving the product/service access.
              </strong>
              .
            </p>
            <p className="text-slate-300 text-sm md:text-base text-justify">
              The customer service team after looking into your complaint will
              take an appropriate decision.
            </p>
          </div>

          <h2 className="mt-6 mb-4 border-b-2 border-cyan-300/40 pb-3 text-xl md:text-2xl font-semibold text-cyan-300">
            Refund Processing Time
          </h2>
          <p className="mb-4 text-slate-300 text-sm md:text-base text-justify">
            In case of any refunds approved by{" "}
            <span className="font-semibold text-cyan-300">
              Calebinfoziant OPC private limited
            </span>
            , it will take{" "}
            <strong className="font-semibold text-cyan-200">7 days</strong> for
            the refund to be processed to you.
          </p>

          <h2 className="mt-6 mb-4 border-b-2 border-cyan-300/40 pb-3 text-xl md:text-2xl font-semibold text-cyan-300">
            How to Request a Cancellation or Refund
          </h2>
          <ul className="mb-6 ml-6 list-disc space-y-3 text-slate-300 text-sm md:text-base">
            <li>
              Contact our customer service team through the contact information
              provided on our website
            </li>
            <li>
              Provide your order details and reason for cancellation/refund
            </li>
            <li>
              Our team will review your request and respond within 2-3 business
              days
            </li>
            <li>
              Follow any additional instructions provided by our customer
              service team
            </li>
          </ul>

          <h2 className="mt-6 mb-4 border-b-2 border-cyan-300/40 pb-3 text-xl md:text-2xl font-semibold text-cyan-300">
            Contact Customer Service
          </h2>
          <p className="mb-2 text-slate-300 text-sm md:text-base">
            <strong className="font-semibold text-cyan-200">Email:</strong>{" "}
            Support@icl.today
          </p>
          <p className="mb-2 text-slate-300 text-sm md:text-base">
            <strong className="font-semibold text-cyan-200">Phone:</strong>{" "}
            Monday - Friday (9:00 - 18:00)
          </p>
          <p className="mb-4 text-slate-300 text-sm md:text-base">
            <strong className="font-semibold text-cyan-200">Address:</strong> D401,
            Elcot Avenue, Saidapet Central Part West, Chennai, India
          </p>

          <h2 className="mt-6 mb-4 border-b-2 border-cyan-300/40 pb-3 text-xl md:text-2xl font-semibold text-cyan-300">
            Important Notes
          </h2>
          <ul className="mb-2 ml-6 list-disc space-y-3 text-slate-300 text-sm md:text-base">
            <li>
              All refund and cancellation requests must be made within the
              specified timeframes
            </li>
            <li>
              Refunds will be processed to the original payment method used for
              the purchase
            </li>
            <li>
              The decision of Calebinfoziant OPC private limited regarding
              refunds and cancellations is final
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Refund;
