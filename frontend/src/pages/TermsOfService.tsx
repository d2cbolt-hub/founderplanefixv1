import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div data-testid="terms-of-service-page" className="min-h-screen bg-[#FFFFFF]">
      {/* Go Back Button */}
      <div className="w-full max-w-[800px] mx-auto px-6 pt-10">
        <Link to="/" data-testid="go-back-button">
          <motion.span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D1D1D6] bg-[#F5F5F7] text-[#1D1D1F] text-sm font-medium hover:bg-[#E8E8ED] transition-colors duration-200"
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </motion.span>
        </Link>
      </div>

      {/* Content */}
      <article className="w-full max-w-[800px] mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-3 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-[#86868B] text-base mb-12">Effective Date: February 19, 2026</p>

        <div className="space-y-10 text-[#424245] leading-[1.8] text-[15px]">
          {/* OVERVIEW */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">OVERVIEW</h2>
            <p>
              This website is operated by REALMRISE GOLD ENTERPRISES PRIVATE LIMITED (operating as "FounderPlane"). Throughout the site, the terms "we", "us" and "our" refer to FounderPlane. FounderPlane offers this website, including all information, tools, systems, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>
            <p className="mt-3">
              By visiting our site and/or purchasing consulting services or system installations from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein. These Terms of Service apply to all users of the site. Please read these Terms of Service carefully before accessing or using our website.
            </p>
          </section>

          {/* SECTION 1 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 1 - PLATFORM & SERVICE TERMS</h2>
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our proprietary systems for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of your Services.
            </p>
          </section>

          {/* SECTION 2 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 2 - GENERAL CONDITIONS</h2>
            <p>
              We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks. Credit card information is always encrypted during transfer. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service (including our proprietary frameworks like ScaleRunway or BoltGuider), use of the Service, or access to the Service without express written permission by us.
            </p>
          </section>

          {/* SECTION 3 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h2>
            <p>
              We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making business or financial decisions without consulting primary, more accurate, more complete or more timely sources of information.
            </p>
          </section>

          {/* SECTION 4 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</h2>
            <p>
              Prices for our consulting ecosystems and services are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
            </p>
          </section>

          {/* SECTION 5 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 5 - PRODUCTS OR SERVICES</h2>
            <p>
              Certain services and ecosystem installations (including BoltGuider, BrandToFly, D2CBolt, B2BBolt, BoltRunway, and ScaleRunway) are strictly stage-dependent and may be subject to qualification via our Diagnostic tools. We reserve the right, but are not obligated, to limit the sales of our Services to any person, geographic region, or jurisdiction, and we may exercise this right on a case-by-case basis. We do not warrant that the quality of any services, information, or other material purchased or obtained by you will completely meet your financial expectations, as business success is ultimately the responsibility of the client. All sales are subject to our Cancellation & Refund Policy.
            </p>
          </section>

          {/* SECTION 6 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</h2>
            <p>
              We reserve the right to refuse any engagement or order you place with us. We may, in our sole discretion, limit or cancel services purchased per business entity or individual. You agree to provide current, complete and accurate purchase and account information for all purchases made with us.
            </p>
          </section>

          {/* SECTION 7 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 7 - OPTIONAL TOOLS</h2>
            <p>
              We may provide you with access to third-party operational tools (such as CRMs, automation software, etc.) over which we neither monitor nor have any control. You acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.
            </p>
          </section>

          {/* SECTION 8 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 8 - THIRD-PARTY LINKS</h2>
            <p>
              Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites.
            </p>
          </section>

          {/* SECTION 9 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h2>
            <p>
              If you send specific submissions or creative ideas, suggestions, proposals, or plans, you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We take no responsibility and assume no liability for any comments posted by you or any third-party.
            </p>
          </section>

          {/* SECTION 10 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 10 - PERSONAL INFORMATION</h2>
            <p>
              Your submission of personal and business information through the diagnostic forms or website is governed by our Privacy Policy.
            </p>
          </section>

          {/* SECTION 11 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</h2>
            <p>
              Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to service descriptions, pricing, and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information at any time without prior notice.
            </p>
          </section>

          {/* SECTION 12 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 12 - PROHIBITED USES</h2>
            <p>
              In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content:
            </p>
            <ol className="mt-3 space-y-2 list-[lower-alpha] pl-6">
              <li>for any unlawful purpose;</li>
              <li>to solicit others to perform or participate in any unlawful acts;</li>
              <li>to violate any international, federal, provincial or state regulations;</li>
              <li>to infringe upon or violate our intellectual property rights (including our business frameworks);</li>
              <li>to harass, abuse, insult, or defame;</li>
              <li>to submit false or misleading business data;</li>
              <li>to upload viruses;</li>
              <li>to scrape or phish data; or</li>
              <li>to interfere with the security features of the Service.</li>
            </ol>
          </section>

          {/* SECTION 13 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
            <p>
              We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free. You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products delivered to you are provided 'as is'. In no case shall REALMRISE GOLD ENTERPRISES PRIVATE LIMITED, our directors, officers, employees, affiliates, agents, contractors, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, or loss of data arising from your use of any of the service or any products procured using the service.
            </p>
          </section>

          {/* SECTION 14 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 14 - INDEMNIFICATION</h2>
            <p>
              You agree to indemnify, defend and hold harmless REALMRISE GOLD ENTERPRISES PRIVATE LIMITED (FounderPlane) and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your breach of these Terms of Service.
            </p>
          </section>

          {/* SECTION 15 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 15 - SEVERABILITY</h2>
            <p>
              In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service.
            </p>
          </section>

          {/* SECTION 16 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 16 - TERMINATION</h2>
            <p>
              The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes. These Terms of Service are effective unless and until terminated by either you or us. If in our sole judgment you fail to comply with any term or provision of these Terms of Service, we may terminate this agreement at any time without notice.
            </p>
          </section>

          {/* SECTION 17 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 17 - ENTIRE AGREEMENT</h2>
            <p>
              The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision. These Terms of Service and any policies or operating rules posted by us on this site constitutes the entire agreement and understanding between you and us.
            </p>
          </section>

          {/* SECTION 18 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 18 - GOVERNING LAW</h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India, under the exclusive jurisdiction of the courts located in Bangalore, Karnataka, India.
            </p>
          </section>

          {/* SECTION 19 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 19 - CHANGES TO TERMS OF SERVICE</h2>
            <p>
              We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.
            </p>
          </section>

          {/* SECTION 20 */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">SECTION 20 - CONTACT INFORMATION</h2>
            <p>Questions about the Terms of Service should be sent to us at:</p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li><span className="font-semibold text-[#1D1D1F]">Company:</span> REALMRISE GOLD ENTERPRISES PRIVATE LIMITED</li>
              <li><span className="font-semibold text-[#1D1D1F]">CIN:</span> U73100KA2023PTC182893</li>
              <li><span className="font-semibold text-[#1D1D1F]">Address:</span> No 08, Horamavu Agara, Rajanna Layout Horamavu Bangalore North Bangalore KA 560043 IN</li>
              <li><span className="font-semibold text-[#1D1D1F]">Email:</span> support@founderplane.com</li>
            </ul>
          </section>
        </div>

        {/* Support CTA Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => {
              if (window.Intercom) {
                window.Intercom('show');
              }
            }}
            data-testid="terms-support-button"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1D1D1F] text-white text-sm font-semibold hover:bg-[#333336] transition-all duration-200 shadow-lg hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            Need Support? Chat with us
          </button>
        </div>
      </article>
    </div>
  );
};

export default TermsOfService;
