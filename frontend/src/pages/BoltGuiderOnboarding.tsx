import { useState } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface FormData {
  fullName: string;
  startupName: string;
  websiteOrDeck: string;
  currentStage: string;
  monthlyRevenue: string;
  growthBottleneck: string;
  attemptedSolutions: string;
  coreOffer: string;
  idealCustomer: string;
  runningPaidAds: string;
  teamStructure: string;
}

const BoltGuiderOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    startupName: "",
    websiteOrDeck: "",
    currentStage: "",
    monthlyRevenue: "",
    growthBottleneck: "",
    attemptedSolutions: "",
    coreOffer: "",
    idealCustomer: "",
    runningPaidAds: "",
    teamStructure: "",
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Validation for each step
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName.trim() !== "" && formData.startupName.trim() !== "";
      case 2:
        return formData.currentStage !== "" && formData.monthlyRevenue !== "";
      case 3:
        return formData.growthBottleneck.trim() !== "" && formData.attemptedSolutions.trim() !== "";
      case 4:
        return (
          formData.coreOffer.trim() !== "" &&
          formData.idealCustomer.trim() !== "" &&
          formData.runningPaidAds !== "" &&
          formData.teamStructure !== ""
        );
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        {/* SECTION 1: The Confirmation (Static Header) */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display">
            You've Activated BoltGuider.
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            You've chosen structure over guesswork.
          </p>
          
          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm font-medium">Payment Received</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
              <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm font-medium">System Activation Confirmed</span>
            </div>
          </div>
        </div>

        {/* SECTION 2: What Happens Next (Static Block) */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            What Happens Next
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 border-2 border-indigo-500/50 flex items-center justify-center text-indigo-400 font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  You Submit Your Strategic Details
                </h3>
                <p className="text-sm text-gray-400">
                  We analyze your current stage and bottleneck.
                </p>
              </div>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent" />
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 border-2 border-indigo-500/50 flex items-center justify-center text-indigo-400 font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  We Prepare Your Diagnostic
                </h3>
                <p className="text-sm text-gray-400">
                  Your roadmap is structured before your session.
                </p>
              </div>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent" />
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 border-2 border-indigo-500/50 flex items-center justify-center text-indigo-400 font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Strategy Activation Call
                </h3>
                <p className="text-sm text-gray-400">
                  We connect and align execution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 & 4: Form or Success State */}
        {!isSubmitted ? (
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Step {currentStep} of {totalSteps}</span>
                <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500 ease-out"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Step Content */}
            <div className="min-h-[400px] flex flex-col justify-between">
              {/* Step 1: Identity */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-white mb-6">Let's start with the basics</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white text-sm font-medium">
                      Full Name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => updateFormData("fullName", e.target.value)}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startupName" className="text-white text-sm font-medium">
                      Startup / Brand Name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="startupName"
                      value={formData.startupName}
                      onChange={(e) => updateFormData("startupName", e.target.value)}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                      placeholder="Enter your startup or brand name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="websiteOrDeck" className="text-white text-sm font-medium">
                      Website or Pitch Deck Link <span className="text-gray-500 text-xs">(Optional)</span>
                    </Label>
                    <Input
                      id="websiteOrDeck"
                      value={formData.websiteOrDeck}
                      onChange={(e) => updateFormData("websiteOrDeck", e.target.value)}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Operational Stage */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-white mb-6">Where are you now?</h3>
                  
                  <div className="space-y-2">
                    <Label className="text-white text-sm font-medium">
                      Current Stage <span className="text-red-400">*</span>
                    </Label>
                    <Select value={formData.currentStage} onValueChange={(value) => updateFormData("currentStage", value)}>
                      <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white focus:border-indigo-500 focus:ring-indigo-500/20">
                        <SelectValue placeholder="Select your current stage" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700 text-white">
                        <SelectItem value="idea">Idea</SelectItem>
                        <SelectItem value="pre-revenue">Pre-Revenue</SelectItem>
                        <SelectItem value="early-revenue">Early Revenue</SelectItem>
                        <SelectItem value="scaling">Scaling</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white text-sm font-medium">
                      Monthly Revenue Range <span className="text-red-400">*</span>
                    </Label>
                    <Select value={formData.monthlyRevenue} onValueChange={(value) => updateFormData("monthlyRevenue", value)}>
                      <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white focus:border-indigo-500 focus:ring-indigo-500/20">
                        <SelectValue placeholder="Select your monthly revenue range" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700 text-white">
                        <SelectItem value="0">₹0</SelectItem>
                        <SelectItem value="0-1L">₹0 - 1L</SelectItem>
                        <SelectItem value="1L-5L">₹1L - 5L</SelectItem>
                        <SelectItem value="5L+">₹5L+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 3: The Bottleneck */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-white mb-6">Tell us about your challenge</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="growthBottleneck" className="text-white text-sm font-medium">
                      What is your #1 growth bottleneck right now? <span className="text-red-400">*</span>
                    </Label>
                    <Textarea
                      id="growthBottleneck"
                      value={formData.growthBottleneck}
                      onChange={(e) => updateFormData("growthBottleneck", e.target.value)}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20 min-h-[120px]"
                      placeholder="Describe your biggest growth challenge..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attemptedSolutions" className="text-white text-sm font-medium">
                      What have you already tried to solve this? <span className="text-red-400">*</span>
                    </Label>
                    <Textarea
                      id="attemptedSolutions"
                      value={formData.attemptedSolutions}
                      onChange={(e) => updateFormData("attemptedSolutions", e.target.value)}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20 min-h-[120px]"
                      placeholder="Tell us what solutions you've attempted..."
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Market Context */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-white mb-6">Help us understand your market</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="coreOffer" className="text-white text-sm font-medium">
                      What exactly do you sell? (Core Offer) <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="coreOffer"
                      value={formData.coreOffer}
                      onChange={(e) => updateFormData("coreOffer", e.target.value)}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                      placeholder="Describe your core offering"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="idealCustomer" className="text-white text-sm font-medium">
                      Who is your ideal customer? (Target Audience) <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="idealCustomer"
                      value={formData.idealCustomer}
                      onChange={(e) => updateFormData("idealCustomer", e.target.value)}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20"
                      placeholder="Describe your target audience"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white text-sm font-medium">
                      Are you currently running paid ads? <span className="text-red-400">*</span>
                    </Label>
                    <RadioGroup value={formData.runningPaidAds} onValueChange={(value) => updateFormData("runningPaidAds", value)}>
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="ads-yes" className="border-slate-600 text-indigo-500" />
                          <Label htmlFor="ads-yes" className="text-white cursor-pointer">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="ads-no" className="border-slate-600 text-indigo-500" />
                          <Label htmlFor="ads-no" className="text-white cursor-pointer">No</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white text-sm font-medium">
                      Current Team Structure <span className="text-red-400">*</span>
                    </Label>
                    <Select value={formData.teamStructure} onValueChange={(value) => updateFormData("teamStructure", value)}>
                      <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white focus:border-indigo-500 focus:ring-indigo-500/20">
                        <SelectValue placeholder="Select your team structure" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700 text-white">
                        <SelectItem value="solo">Solo Founder</SelectItem>
                        <SelectItem value="small-team">Small Internal Team</SelectItem>
                        <SelectItem value="agency-supported">Agency Supported</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-800">
                {currentStep > 1 ? (
                  <Button
                    onClick={handleBack}
                    variant="ghost"
                    className="text-gray-400 hover:text-white hover:bg-slate-800"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStepValid()}
                    className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/50"
                  >
                    Submit Diagnostic
                    <Check className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* SECTION 4: Success State & WhatsApp Handoff */
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl text-center animate-fadeIn">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-emerald-400" strokeWidth={2.5} />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Diagnostic Inputs Received.
              </h2>
              
              <p className="text-lg text-gray-400 mb-10">
                Our team is now preparing your custom discovery questionnaire. Click below to secure your channel.
              </p>
              
              <Button
                onClick={() => window.open('https://wa.me/917353913591?text=Hello%20FounderPlane%2C%20I%20have%20completed%20my%20BoltGuider%20onboarding%20diagnostic.', '_blank')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-all duration-300"
                size="lg"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Open Official WhatsApp Channel
              </Button>
              
              <p className="text-xs text-gray-500 mt-6">
                FounderPlane is not an agency. We are your operating system. Your data is 100% secure.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BoltGuiderOnboarding;
