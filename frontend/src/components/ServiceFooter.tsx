import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import founderplaneLogo from "@/assets/founderplane-logo-new.png";

interface ServiceFooterProps {
  engineName: string;
  engineIcon: LucideIcon;
  engineIconBg?: string;
  engineIconColor?: string;
  engineBrandColor?: string;
  engineIconBgColor?: string;
}

const ServiceFooter = ({ engineName, engineIcon: EngineIcon, engineIconBg = "bg-slate-100", engineIconColor = "text-slate-800", engineBrandColor, engineIconBgColor }: ServiceFooterProps) => {
  return (
    <footer data-testid="service-footer" className="bg-[#FAFAFA]">
      {/* Layer 1: Main Row */}
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left — Dynamic System Branding */}
          <div data-testid="service-footer-branding" className="flex items-center gap-2 flex-wrap">
            <div 
              className={`w-7 h-7 rounded-lg flex items-center justify-center ${!engineIconBgColor ? engineIconBg : ''}`}
              style={engineIconBgColor ? { backgroundColor: engineIconBgColor } : undefined}
            >
              {engineIconBgColor ? (
                <EngineIcon className="w-4 h-4 text-white" />
              ) : engineBrandColor ? (
                <EngineIcon className="w-4 h-4" style={{ color: engineBrandColor }} />
              ) : (
                <EngineIcon className={`w-4 h-4 ${engineIconColor}`} />
              )}
            </div>
            <span className="text-[#1D1D1F] font-semibold text-sm">{engineName}</span>
            <span className="text-[#86868B] text-sm">by</span>
            <Link to="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <img src={founderplaneLogo} alt="FounderPlane" className="w-5 h-5" />
              <span className="text-[#1D1D1F] font-semibold text-sm">FounderPlane</span>
            </Link>
          </div>

          {/* Right — Support */}
          <div className="flex items-center gap-4 md:gap-5 flex-wrap">
            <a
              href="mailto:support@founderplane.com"
              data-testid="service-footer-email"
              className="flex items-center gap-1.5 text-[#86868B] hover:text-[#1D1D1F] transition-colors text-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              support@founderplane.com
            </a>
            <a
              href="https://wa.me/917353913591"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="service-footer-partner-support"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D1D1F] text-white text-sm font-medium hover:bg-[#333] transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Partner Support
            </a>
          </div>
        </div>
      </div>

      {/* Layer 2: Legal Bottom Bar */}
      <div className="border-t" style={{ borderColor: '#EAEAEA' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Left — Copyright */}
            <p data-testid="service-footer-copyright" className="text-xs text-[#86868B]">
              Built with <span className="text-cyan-500">&#x1FA75;</span> for the next generation of business. &copy; 2026 FounderPlane. All rights reserved.
            </p>

            {/* Right — Legal Links */}
            <div data-testid="service-footer-legal" className="flex items-center gap-1 text-xs text-[#86868B]">
              <Link to="/terms-of-service" className="hover:text-[#1D1D1F] transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link to="/privacy-policy" className="hover:text-[#1D1D1F] transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/refund-policy" className="hover:text-[#1D1D1F] transition-colors">Refund & Cancellation Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ServiceFooter;
