"use client";

import React from "react";
import Image from "next/image";
import ServicesGrid from "@/components/ServicesGrid";
import PaymentProcedure from "@/components/PaymentProcedure";
import { useTranslation } from "@/contexts/TranslationContext";

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("services-page-title")}
            </h1>
            <p className="text-xl text-gray-300">
              {t("services-page-description")}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center mb-12">
            <div className="rounded-[2rem] border border-slate-200/80 dark:border-slate-700/70 bg-white/95 dark:bg-slate-950/90 p-8 shadow-xl">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                  {t("services-page-intro-title")}
                </h2>
                <div className="mt-6 grid gap-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-5">
                    <p>{t("services-page-intro-text-1")}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-5">
                    <p>{t("services-page-intro-text-2")}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-5">
                    <p>{t("services-page-intro-text-3")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/Paiement-Section.png"
                alt={t("payment-section-image-alt")}
                width={900}
                height={620}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="mt-20 mb-20 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                {t("services-list-title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
                {t("services-list-description")}
              </p>
            </div>
            <ServicesGrid />
            <PaymentProcedure />
          </div>
        </div>
      </div>
    </div>
  );
}
