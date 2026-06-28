"use client";

import React from "react";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import { useTranslation } from "@/contexts/TranslationContext";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("contact-page-title")}
            </h1>
            <p className="text-xl text-gray-300">
              {t("contact-page-description")}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
