import React, { useState } from 'react';
import { PageId, ContactFormData, FormErrors } from '../types';
import { COMPANY_INFO } from '../data/ebcData';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Globe2, 
  User, 
  Building, 
  Mail, 
  Briefcase, 
  FileText,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

const SERVICE_OPTIONS = [
  'Business Consultancy',
  'Digital Marketing',
  'Website Design and Development',
  'AI-Powered Business Solutions',
  'Business Analytics and Reporting',
  'Other'
];

const COUNTRY_OPTIONS = [
  'India',
  'United Arab Emirates',
  'Saudi Arabia',
  'Other'
];

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    country: 'India',
    serviceInterestedIn: 'Business Consultancy',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company Name is required.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!/^[0-9+()-\s]{7,20}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    if (!formData.country) {
      newErrors.country = 'Please select your country.';
    }

    if (!formData.serviceInterestedIn) {
      newErrors.serviceInterestedIn = 'Please select a service.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a brief message describing your requirement.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = (): string => {
    return [
      `*New Business Enquiry — Elite Business Consultancy (EBC)*`,
      `---------------------------------------`,
      `*Name:* ${formData.fullName.trim()}`,
      `*Company:* ${formData.companyName.trim()}`,
      `*Country:* ${formData.country}`,
      `*Phone:* ${formData.phoneNumber.trim()}`,
      `*Email:* ${formData.emailAddress.trim()}`,
      `*Service Interested In:* ${formData.serviceInterestedIn}`,
      `---------------------------------------`,
      `*Message:*`,
      `${formData.message.trim()}`
    ].join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const targetUrl = `https://wa.me/919100389060?text=${encodedMessage}`;

    setSubmittedWhatsAppUrl(targetUrl);

    // Open WhatsApp in a new tab using the official click-to-chat URL
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#EFF6FF] to-white py-16 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-800 bg-blue-100/80 px-3 py-1 rounded-md border border-blue-200/60">
            <span>Direct Advisory Inquiry</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#142B4A] tracking-tight max-w-4xl mx-auto leading-tight">
            Let's Start a Conversation.
          </h1>

          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed pt-1">
            Tell us about your business and requirements. Our team will get in touch to discuss suitable solutions.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Verified Company & Consultant Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Verified Contact
                </span>
                <h2 className="text-2xl font-bold text-[#142B4A] mt-1">
                  Elite Business Consultancy
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  Headquartered in Telangana, India. Supporting commercial enterprises, startups, and SMEs across India and the GCC corridor.
                </p>
              </div>

              {/* Verified Details Card */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-6">
                {/* Consultant Contact Person */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">
                      Lead Consultant & Contact Person
                    </span>
                    <span className="text-base font-bold text-[#142B4A] block">
                      {COMPANY_INFO.consultant.name}
                    </span>
                    <span className="text-xs text-blue-600 font-medium">
                      {COMPANY_INFO.consultant.title}
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                    >
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                    <span className="text-xs text-slate-500">
                      Available during standard business hours
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">
                      Direct WhatsApp Channel
                    </span>
                    <span className="text-base font-bold text-slate-900 block">
                      {COMPANY_INFO.phoneFormatted}
                    </span>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 mt-1"
                    >
                      <span>Open WhatsApp Chat</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">
                      Registered Location
                    </span>
                    <span className="text-sm font-semibold text-slate-800 leading-relaxed block">
                      {COMPANY_INFO.location.display}
                    </span>
                    <span className="text-xs text-slate-500">
                      Mahbubnagar, Telangana, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Prefer Quick Direct Messaging?</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  You can bypass the form and reach out directly to Senior Consultant M. Maqsood Husain on WhatsApp for fast advisory answers.
                </p>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start Direct WhatsApp Chat (+91 91003 89060)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Validated Contact Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-9 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#142B4A]">
                    Business Consultation Enquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    All fields are validated. Submitting will prepare your verified inquiry details and launch WhatsApp for instant delivery.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-[#142B4A] mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Rajesh Sharma"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.fullName
                              ? 'border-rose-300 focus:ring-rose-500 bg-rose-50/30'
                              : 'border-slate-300 focus:ring-blue-600 focus:border-blue-600'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold text-[#142B4A] mb-1.5">
                        Company Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Apex Trading Enterprises"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.companyName
                            ? 'border-rose-300 focus:ring-rose-500 bg-rose-50/30'
                            : 'border-slate-300 focus:ring-blue-600 focus:border-blue-600'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-bold text-[#142B4A] mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.phoneNumber
                            ? 'border-rose-300 focus:ring-rose-500 bg-rose-50/30'
                            : 'border-slate-300 focus:ring-blue-600 focus:border-blue-600'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="emailAddress" className="block text-xs font-bold text-[#142B4A] mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.emailAddress
                            ? 'border-rose-300 focus:ring-rose-500 bg-rose-50/30'
                            : 'border-slate-300 focus:ring-blue-600 focus:border-blue-600'
                        }`}
                      />
                      {errors.emailAddress && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.emailAddress}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Country & Service Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-xs font-bold text-[#142B4A] mb-1.5">
                        Country <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                      >
                        {COUNTRY_OPTIONS.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="serviceInterestedIn" className="block text-xs font-bold text-[#142B4A] mb-1.5">
                        Service Interested In <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="serviceInterestedIn"
                        name="serviceInterestedIn"
                        value={formData.serviceInterestedIn}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                      >
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#142B4A] mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your current business situation, operational challenges, or specific services needed..."
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-rose-300 focus:ring-rose-500 bg-rose-50/30'
                          : 'border-slate-300 focus:ring-blue-600 focus:border-blue-600'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission Notice & Button */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Send Enquiry via WhatsApp (+91 91003 89060)</span>
                    </button>

                    <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                      Your inquiry will open in WhatsApp with all details pre-filled for immediate review by Senior Consultant M. Maqsood Husain.
                    </p>
                  </div>
                </form>

                {/* Submission Confirmation Banner when triggered */}
                {submittedWhatsAppUrl && (
                  <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>WhatsApp Click-to-Chat Launched!</span>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      If WhatsApp did not automatically open on your device, click below to open your pre-filled inquiry directly:
                    </p>
                    <a
                      href={submittedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 underline"
                    >
                      <span>Click here to open WhatsApp message</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS DISCLOSURE / ETHICAL STANDARDS */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2 text-xs text-slate-500">
          <div className="flex items-center justify-center gap-1.5 font-semibold text-slate-700">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Advisory Integrity & Client Privacy Policy</span>
          </div>
          <p className="leading-relaxed">
            Elite Business Consultancy treats all corporate inquiries, financial data, and operational discussions with strict professional confidentiality. We do not sell or share business contact details with external third-party agencies.
          </p>
        </div>
      </section>
    </div>
  );
};
