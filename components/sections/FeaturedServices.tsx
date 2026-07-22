import React from "react";
import {
  Globe,
  Briefcase,
  Building2,
  Landmark,
  Users,
  Building,
  FileCheck,
  Lightbulb,
  MessageSquare,
  Ship,
  Map,
  Gavel,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export const FeaturedServices = () => {
  const services = [
    {
      icon: <Globe />,
      title: "Foreign Direct Investment",
      desc: "Our team has substantial expertise in establishing representative, branch, and liaison offices for foreign companies in Bangladesh. This includes securing all necessary regulatory permissions from the Board of Investment, Bangladesh and registering with relevant government authorities. We provide ongoing advice to these companies on various operational aspects in Bangladesh, including labor and employment issues, reviewing codes of conduct, and drafting agreements such as office leases.",
    },
    {
      icon: <Briefcase />,
      title: "Commercial Law",
      desc: "We frequently prepare and review contracts, advising clients on disputes arising during business operations, such as contractual rights issues and claims for compensation due to wrongful acts. We handle complex breach of contract cases, including cross-border disputes, and advise on practical remedies through negotiation, litigation, or arbitration. Our recent work includes structuring and reviewing distribution arrangements and financing. We proactively advise on pre-agreement contractual terms to highlight potential conflicts and provide legal advice for large infrastructure projects.",
    },
    {
      icon: <Building2 />,
      title: "Company Law",
      desc: "We regularly advise clients on shareholder rights (including minority shareholders), joint venture agreements, general company and corporate law, and SEC matters. We litigate numerous company cases in the Original Jurisdiction of the High Court Division of the Supreme Court. We offer due diligence and general advice to corporate clients and investors, both foreign and domestic, and assist in establishing companies and restructuring or corporatizing corporations.",
    },
    {
      icon: <Landmark />,
      title: "Tax",
      desc: "We are adept at managing and providing guidance on tax cases and disputes with the National Board of Revenue (NBR). Our experience includes participation in numerous significant tax cases. We handle legal tax issues within the constitutional jurisdiction of judicial review and the specialized statutory jurisdiction of the High Court Division, particularly under the Income Tax Ordinance, 1984. Additionally, we offer advice on double taxation agreements and incentive and exemption regimes for foreign investors.",
    },
    {
      icon: <Users />,
      title: "Employment & Labour Law",
      desc: "We counsel numerous organizations, including multinationals and supranational entities, on labor and employment matters. Our services range from drafting agreements and provident fund and gratuity fund rules to representing clients in court and tribunals.",
    },
    {
      icon: <Building />,
      title: "Banking and Financing",
      desc: "We handle banking-related matters and litigation, including supervision by Bangladesh Bank, government sanctions, international payment systems, and various payment instruments like documentary credits and performance bonds. We also deal with data protection security documents, foreign exchange transactions, and conduct legal audits of corporate lending and security documents for banks, including foreign branches.",
    },
    {
      icon: <FileCheck />,
      title: "Regulatory and Administrative Law",
      desc: "We advise clients on regulatory matters and potential government interventions affecting financial and commercial activities in Bangladesh. Our expertise includes dealings with regulators such as Bangladesh Bank, Securities and Exchange Commission, Board of Investment, and others.",
    },
    {
      icon: <Lightbulb />,
      title: "Intellectual Property Law",
      desc: "We assist our clients in registration of trademarks, designs, copyright domains and patents. Our other services include licensing, managing portfolio, conducting due diligence, negotiating and drafting agreements on intellectual property. We represent our clients in court and tribunals to resolve their intellectual property related disputes. We also advise on trade secrets and various issues related to information technology.",
    },
    {
      icon: <MessageSquare />,
      title: "Arbitration",
      desc: "We conduct Arbitration and International Commercial Arbitration both in Bangladesh and abroad. We advise our clients on arbitration proceedings and assist them in reviewing and preparing materials and legal opinions for submission to the arbitration tribunal.",
    },
    {
      icon: <Ship />,
      title: "Shipping",
      desc: "We manage all types of maritime disputes for shipowners, charterers, cargo interests, and their insurers, covering issues like collision, liability limitations, and contracts of affreightment. We practice in the Admiralty jurisdiction of the High Court Division of the Supreme Court.",
    },
    {
      icon: <Map />,
      title: "Overseas Law Firms",
      desc: "We frequently collaborate with international law firms, providing research and opinions on Bangladesh law for international and multinational clients.",
    },
    {
      icon: <Gavel />,
      title: "Litigations and Disputes",
      desc: "We provide advice and representation in general civil and criminal litigations and disputes. Our team has extensive experience in civil and criminal cases in various subordinate and labor courts, including actions under the Negotiable Instruments Act, 1881 and the Artha Rin Adalat Ain, 2003 for loan recovery.",
    },
  ];

  return (
    <section id="practices" className="py-20 bg-[#f4f5f7]">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="What We Do" title="Our Practice Areas" />

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          With a wide network of expert persons in the concerned fields, our
          firm provides a one-stop-service for all your corporate legal and
          taxation needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-start group"
            >
              <div className="text-[#c39b65] bg-yellow-50 p-4 rounded-lg mb-6 group-hover:bg-[#c39b65] group-hover:text-white transition-colors">
                {React.cloneElement(srv.icon, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-lg font-bold text-[#222429] uppercase mb-4">
                {srv.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
