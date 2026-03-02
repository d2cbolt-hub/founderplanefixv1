import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  return (
    <div data-testid="refund-policy-page" className="min-h-screen bg-[#FFFFFF]">
      {/* Go Back Button */}
      <div className="w-full max-w-[800px] mx-auto px-6 pt-10">
        <Link to="/" data-testid="refund-go-back-button">
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
          Refund & Cancellation Policy
        </h1>
        <p className="text-[#86868B] text-base mb-12">Effective Date: February 20, 2026</p>

        <div className="space-y-10 text-[#424245] leading-[1.8] text-[15px]">
          {/* OVERVIEW */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">OVERVIEW</h2>
            <p>
              This Refund & Cancellation Policy governs the purchase of consulting services, ecosystem installations, and digital strategy products from REALMRISE GOLD ENTERPRISES PRIVATE LIMITED (operating as "FounderPlane"). By engaging our services, purchasing a system, or accessing our platform, you legally agree to the terms outlined below.
            </p>
          </section>

          {/* 1. STRICT NO-REFUND POLICY */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">1. STRICT NO-REFUND POLICY ON DELIVERED SYSTEMS</h2>
            <p>
              FounderPlane provides proprietary business infrastructure, strategic blueprints (including BoltGuider), and custom system installations (such as BrandToFly, D2CBolt, B2BBolt, ScaleRunway, and BoltRunway). Because our methodologies and intellectual property are transferred to you immediately upon delivery or consultation, all sales are final.
            </p>
            <p className="mt-3">
              We do not offer refunds, partial refunds, or credits for any services, strategy sessions, or ecosystem builds once the work has commenced or the intellectual property has been accessed by the client.
            </p>
          </section>

          {/* 2. CANCELLATION OF ONGOING ENGAGEMENTS */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">2. CANCELLATION OF ONGOING ENGAGEMENTS</h2>
            <p>
              If you are enrolled in an ongoing, multi-month system installation or advisory retainer:
            </p>
            <ul className="mt-4 space-y-3 list-disc pl-6">
              <li>You may request to cancel the engagement by providing a written notice of at least thirty (30) days to support@founderplane.com.</li>
              <li>You remain legally and financially responsible for all payments and installments due prior to the effective date of cancellation.</li>
              <li>No refunds will be issued for past months, completed deliverables, or partially completed phases of an installation.</li>
            </ul>
          </section>

          {/* 3. BOLTGUIDER 5,000 ECOSYSTEM CREDITS */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">3. BOLTGUIDER "5,000 ECOSYSTEM CREDITS" PROMOTIONAL CLAUSE</h2>
            <p>
              FounderPlane may offer a promotional grant of 5,000 FounderPlane Ecosystem Credits to clients who purchase and complete the BoltGuider system. The following strict conditions apply to these credits:
            </p>
            <ul className="mt-4 space-y-3 list-disc pl-6">
              <li><span className="font-semibold text-[#1D1D1F]">Ecosystem Use Only:</span> These credits act as a direct discount and may only be applied toward the purchase of subsequent FounderPlane service products (e.g., BrandToFly, D2CBolt, B2BBolt, ScaleRunway, BoltRunway).</li>
              <li><span className="font-semibold text-[#1D1D1F]">Restrictions:</span> These credits cannot be used to repurchase the BoltGuider system. They hold no independent cash value, cannot be withdrawn as cash, and are strictly non-transferable to other businesses or individuals.</li>
              <li><span className="font-semibold text-[#1D1D1F]">Right to Modify or Suspend:</span> FounderPlane reserves the absolute right to modify, suspend, revoke, or deny the issuance or usage of these promotional Ecosystem Credits at any time, for any reason, without prior notice. Failure to utilize these credits does not entitle you to a refund for the BoltGuider service.</li>
            </ul>
          </section>

          {/* 4. UNILATERAL TERMINATION */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">4. UNILATERAL TERMINATION BY FOUNDERPLANE</h2>
            <p>
              We reserve the right to terminate our engagement with any client immediately if they violate our Terms of Service, engage in illegal business practices, fail to make timely payments, or create a hostile working environment for our team. In the event of such termination, no refunds will be provided for completed work or delivered strategy.
            </p>
          </section>

          {/* 5. CONTACT & SUPPORT */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">5. CONTACT & SUPPORT</h2>
            <p>If you have questions regarding your billing or this policy, please contact us at:</p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li><span className="font-semibold text-[#1D1D1F]">Email:</span> support@founderplane.com</li>
              <li><span className="font-semibold text-[#1D1D1F]">Company:</span> REALMRISE GOLD ENTERPRISES PRIVATE LIMITED</li>
            </ul>
          </section>
        </div>

        {/* Support CTA Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://wa.me/917353913591"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="refund-support-button"
          >
            <motion.span
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1D1D1F] text-white text-sm font-semibold hover:bg-[#333336] transition-colors duration-200 shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-4 h-4" />
              Need Support? WhatsApp Us
            </motion.span>
          </a>
        </div>
      </article>
    </div>
  );
};

export default RefundPolicy;
