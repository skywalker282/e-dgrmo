"use client";

import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("about-page-title")}
            </h1>
            <p className="text-xl text-gray-300">{t("about-page-subtitle")}</p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                {t("about-our-mission")}
              </h2>
              <p className="text-gray mb-6">
                {t("about-our-mission-description-1")}
              </p>
              <p className="text-gray">
                {t("about-our-mission-description-2")}
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                {t("about-our-vision")}
              </h2>
              <p className="text-gray">{t("about-our-vision-description")}</p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                {t("about-our-values")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">
                    {t("about-value-integrity")}
                  </h3>
                  <p className="text-gray">
                    {t("about-value-integrity-description")}
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">
                    {t("about-value-service")}
                  </h3>
                  <p className="text-gray">
                    {t("about-value-service-description")}
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">
                    {t("about-value-equity")}
                  </h3>
                  <p className="text-gray">
                    {t("about-value-equity-description")}
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">
                    {t("about-value-innovation")}
                  </h3>
                  <p className="text-gray">
                    {t("about-value-innovation-description")}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t("about-director-message")}
              </h2>
              <div className="bg-light-blue p-8 rounded-sm">
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  </div>
                  <div>
                    <p className="text-gray italic mb-4">
                      {t("about-director-message-content")}
                    </p>
                    <p className="font-bold">{t("about-director-name")}</p>
                    <p className="text-gray">{t("about-director-title")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
