import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div data-testid="privacy-policy-page" className="min-h-screen bg-[#FFFFFF]">
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
          Privacy Policy
        </h1>
        <p className="text-[#86868B] text-base mb-12">Effective Date: February 19, 2026</p>

        <div className="space-y-10 text-[#424245] leading-[1.8] text-[15px]">
          {/* OVERVIEW */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">OVERVIEW</h2>
            <p>
              This Privacy Policy (the "Policy") governs the manner in which REALMRISE GOLD ENTERPRISES PRIVATE LIMITED, operating as FounderPlane (the "Company", "We", "Us", "Our"), collects, uses, maintains, and discloses information from users of our website, diagnostic tools, and ecosystem systems (collectively, the "Platform").
            </p>
            <p className="mt-3">
              This Policy describes the practices we apply to user information, your privacy rights, and the choices regarding your data. This Policy applies to all visitors, founders, and clients of the Platform (referred to as "Client", "User", "You", "Your").
            </p>
            <p className="mt-3">
              By accessing and using the Platform, completing our Diagnostic Questionnaire, providing Your Personal Information, or otherwise signaling Your agreement, You consent to the collection, use, and disclosure of information described in this Policy and our Terms of Service. If You do not agree with any provisions of this Policy, You should not access or use the Platform. Capitalized terms used but not defined in this Privacy Policy can be found in our Terms of Service.
            </p>
          </section>

          {/* PERSONAL INFORMATION */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">PERSONAL INFORMATION</h2>
            <p>
              "Personal Information" shall mean the information which identifies a User, including but not limited to first and last name, email address, phone number, company name, revenue data, operational bottlenecks, and business data provided at the time of utilizing our diagnostic tools, booking a discovery session, or engaging in our systems (e.g., BoltGuider, BrandToFly, ScaleRunway).
            </p>
            <p className="mt-3">
              "Sensitive Personal Information" shall include passwords, financial data (except the truncated last four digits of credit/debit card), official identifiers, or other data categorized as 'sensitive personal data' under the Digital Personal Data Protection Act, 2023 (DPDPA), General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), or other equivalent legislations applicable to You. Usage of the term 'Personal Information' herein shall include 'Sensitive Personal Information' as applicable.
            </p>
          </section>

          {/* INFORMATION WE COLLECT */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">INFORMATION WE COLLECT</h2>
            <p>
              We may collect both personal and non-personal identifiable information from You in a variety of ways, including when You visit our Platform, fill out a diagnostic form, request a consultation, and in connection with other activities or systems we make available.
            </p>
            <ul className="mt-4 space-y-3 list-disc pl-6">
              <li><span className="font-semibold text-[#1D1D1F]">Data Minimization:</span> We do not ask You for Personal Information unless we truly need it to diagnose your business stage or deliver our services.</li>
              <li><span className="font-semibold text-[#1D1D1F]">No Data Selling:</span> We do not sell Your Personal Information to anyone. We only share it to comply with applicable laws, deliver our consulting systems, or protect our rights.</li>
              <li><span className="font-semibold text-[#1D1D1F]">Personal Identifiable Information:</span> We collect information such as Your name, email, phone number, and business metrics only if voluntarily submitted by You. Refusal to provide such information may prevent You from receiving accurate diagnostics or accessing certain consulting systems.</li>
              <li><span className="font-semibold text-[#1D1D1F]">Non-Personal Identifiable Information:</span> We may collect technical information such as browser name, referring site, date and time of request, operating system, and Internet service providers utilized when You interact with our Platform.</li>
              <li><span className="font-semibold text-[#1D1D1F]">Cookies:</span> Our Platform uses 'cookies' to enhance User experience. A cookie is a string of information that a website stores on a visitor's computer for record-keeping purposes. You may choose to set Your web browser to refuse cookies; however, some parts of the Platform may not function properly if You do so.</li>
            </ul>
          </section>

          {/* HOW WE USE AND SHARE */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">HOW WE USE AND SHARE THE INFORMATION COLLECTED</h2>
            <p>We use Your Personal Information strictly for the following purposes:</p>
            <ol className="mt-4 space-y-4 list-decimal pl-6">
              <li><span className="font-semibold text-[#1D1D1F]">To Provide Access to Our Ecosystem:</span> We use Your information to diagnose your business stage, map your operational architecture, deliver our systems (BoltGuider, D2CBolt, B2BBolt, BoltRunway, ScaleRunway), provide customer support, and fulfill service agreements. The legal basis for this is the performance of a contract and our legitimate business interests.</li>
              <li><span className="font-semibold text-[#1D1D1F]">To Improve Our Platform & Maintain Safety:</span> We use Your information to customize our consulting frameworks and improve the Platform. We also use it to prevent, detect, and investigate unauthorized use, fraud, or threats to our rights or the safety of our Users.</li>
              <li><span className="font-semibold text-[#1D1D1F]">To Communicate With You:</span> We may use Your phone number or email to communicate via text, WhatsApp, or email regarding Your discovery sessions, ecosystem updates, stage-specific recommendations, or responses to Your inquiries. You may opt-out of marketing emails at any time by contacting us.</li>
            </ol>
            <p className="mt-4">
              We do not use Personal Information for automated decision-making that produces legal effects concerning You. We may share generic aggregated demographic or business-stage information not linked to any personal identity with our trusted affiliates for business analysis.
            </p>
          </section>

          {/* YOUR CHOICES */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">YOUR CHOICES</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li><span className="font-semibold text-[#1D1D1F]">Limit the Information You Provide:</span> You always have the option to choose what information You provide. However, lack of certain business data may prevent us from accurately diagnosing your stage or delivering our services.</li>
              <li><span className="font-semibold text-[#1D1D1F]">Limit Communications:</span> You may choose what kind of marketing communication You receive from us. Essential communications related to legal updates or active consulting engagements cannot be opted out of.</li>
              <li><span className="font-semibold text-[#1D1D1F]">Reject Cookies:</span> You can change Your browser settings to reject cookies, though this may impact Platform functionality.</li>
            </ul>
          </section>

          {/* YOUR RIGHTS */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">YOUR RIGHTS</h2>
            <p>Depending on your jurisdiction, you have specific rights regarding your data:</p>
            <ul className="mt-4 space-y-3 list-disc pl-6">
              <li><span className="font-semibold text-[#1D1D1F]">Right to Confirmation and Access:</span> To know what Personal Information we hold about You.</li>
              <li><span className="font-semibold text-[#1D1D1F]">Right to Correction:</span> To request the rectification of inaccurate or outdated information.</li>
              <li><span className="font-semibold text-[#1D1D1F]">Right to be Forgotten/Erasure:</span> To request the deletion of Your Personal Information from our records, subject to legal and contractual retention requirements.</li>
            </ul>
            <p className="mt-4">You may exercise these rights by writing to us at the address noted in the 'Grievances' section below. We may require additional information to verify your identity before processing your request.</p>
          </section>

          {/* PROTECTION OF YOUR INFORMATION */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">PROTECTION OF YOUR INFORMATION</h2>
            <p>
              We take all measures reasonably necessary to protect against unauthorized access, use, alteration, or destruction of Personal Information. Due to the high-ticket B2B nature of our work, client business data is treated with strict confidentiality. Disclosure is limited to:
            </p>
            <ul className="mt-4 space-y-3 list-disc pl-6">
              <li>Our employees, contractors, and affiliated organizations who need to know the information to process it on our behalf or deliver FounderPlane systems, subject to strict non-disclosure agreements.</li>
              <li>Government or law enforcement agencies, if required by court order or applicable law, or to protect our legal rights and the safety of our Users.</li>
            </ul>
          </section>

          {/* THIRD-PARTY WEBSITES */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">THIRD-PARTY WEBSITES</h2>
            <p>
              You may find links or integrations to third-party operational tools (e.g., CRMs, automation software). The content or links that appear on these sites are not controlled by us, and we are not responsible for their privacy practices. Browsing and interaction on any other website is subject to that website's own terms and policies.
            </p>
          </section>

          {/* CROSS-BORDER DATA TRANSFER */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">CROSS-BORDER DATA TRANSFER</h2>
            <p>
              Your information is stored, processed, and transferred in secure servers (such as AWS) located in India. We may also process data in other countries depending on our service providers. By accessing our Platform from outside India (including the USA, EU, EEA, or UK), You consent to the transfer of Your information to India, which may have differing data protection laws than Your country of residence.
            </p>
          </section>

          {/* DURATION FOR WHICH YOUR INFORMATION IS STORED */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">DURATION FOR WHICH YOUR INFORMATION IS STORED</h2>
            <p>
              We retain Your Personal Information only for as long as is necessary to fulfill the purposes outlined in this Policy, deliver our consulting services, and comply with legal, tax, or business compliance obligations.
            </p>
          </section>

          {/* MODIFICATION TO PRIVACY POLICY */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">MODIFICATION TO PRIVACY POLICY</h2>
            <p>
              We may update this Policy from time to time to reflect changes in our practices or legal requirements. When we do, we will revise the 'Effective Date' at the top of this page. Your continued use of the Platform signifies Your acceptance of these changes.
            </p>
          </section>

          {/* GRIEVANCES & CONTACT INFORMATION */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">GRIEVANCES & CONTACT INFORMATION</h2>
            <p>If you have questions about this Policy, wish to exercise your rights, or have any grievances, please contact us at:</p>
            <ul className="mt-4 space-y-2 list-disc pl-6">
              <li><span className="font-semibold text-[#1D1D1F]">Email:</span> support@founderplane.com</li>
              <li><span className="font-semibold text-[#1D1D1F]">Company:</span> REALMRISE GOLD ENTERPRISES PRIVATE LIMITED (FounderPlane)</li>
              <li><span className="font-semibold text-[#1D1D1F]">Address:</span> No 08, Horamavu Agara, Rajanna Layout Horamavu Bangalore North Bangalore KA 560043 IN</li>
            </ul>
          </section>

          {/* COUNTRY SPECIFIC ADDITIONAL RIGHTS */}
          <section>
            <h2 className="text-xl font-bold text-[#1D1D1F] mb-3">COUNTRY SPECIFIC ADDITIONAL RIGHTS</h2>

            <h3 className="text-lg font-bold text-[#1D1D1F] mt-6 mb-2">TERMS APPLICABLE IF YOU ARE AN INDIAN RESIDENT</h3>
            <p>
              Under the Digital Personal Data Protection Act, 2023 (DPDPA), you have the right to confirmation and access, correction, data portability, and the right to erasure of your Personal Information. Requests can be directed to our Grievance contact above.
            </p>

            <h3 className="text-lg font-bold text-[#1D1D1F] mt-6 mb-2">TERMS APPLICABLE IF YOU ARE A RESIDENT OF THE UK, EU, OR EEA</h3>
            <p>
              Under the UK and EU General Data Protection Regulation (GDPR), you have the right to: access your data; request rectification or erasure; object to or restrict processing; request data portability; and not be subject to automated decision-making. You also have the right to lodge a complaint with a supervisory authority. We process your data solely on the legal bases of consent, contractual necessity, and legitimate business interests.
            </p>

            <h3 className="text-lg font-bold text-[#1D1D1F] mt-6 mb-2">TERMS APPLICABLE IF YOU ARE A CALIFORNIA STATE RESIDENT</h3>
            <p>Under the California Consumer Privacy Act (CCPA), California residents have the right to:</p>
            <ol className="mt-3 space-y-2 list-decimal pl-6">
              <li>Know what Personal Information we collect, use, and disclose.</li>
              <li>Request the deletion of their Personal Information.</li>
              <li>Opt-out of the sale of Personal Information (Note: We do not sell Personal Information).</li>
              <li>Receive equal services and pricing without discrimination for exercising privacy rights.</li>
            </ol>
            <p className="mt-4">
              Data Practices over the past 12 months: We have collected identifiers, commercial information, internet activity, and professional/business-related information directly from users to operate our Platform and deliver our consulting services. We have not sold any Personal Information. We disclose data only to our internal teams and trusted service providers for core business purposes. To exercise your CCPA rights, please contact us at support@founderplane.com.
            </p>
          </section>
        </div>

        {/* Support CTA Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://wa.me/917353913591"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="privacy-support-button"
          >
            <motion.span
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1D1D1F] text-white text-sm font-semibold hover:bg-[#333336] transition-colors duration-200 shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-4 h-4" />
              Need Support? Chat with us
            </motion.span>
          </a>
        </div>
      </article>
    </div>
  );
};

export default PrivacyPolicy;
