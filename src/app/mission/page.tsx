"use client";

import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";

export default function MissionPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("mission-page-title")}
            </h1>
            <p className="text-xl text-gray-300">
              {t("mission-page-subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                {t("mission-our-mission")}
              </h2>
              <p className="text-gray mb-6">
                {t("mission-our-mission-description-1")}
              </p>
              <p className="text-gray">
                {t("mission-our-mission-description-2")}
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                {t("mission-our-vision")}
              </h2>
              <p className="text-gray">{t("mission-our-vision-description")}</p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                {t("mission-our-values")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">
                    {t("mission-value-integrity")}
                  </h3>
                  <p className="text-gray">
                    {t("mission-value-integrity-description")}
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">
                    {t("mission-value-service")}
                  </h3>
                  <p className="text-gray">
                    {t("mission-value-service-description")}
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">
                    {t("mission-value-equity")}
                  </h3>
                  <p className="text-gray">
                    {t("mission-value-equity-description")}
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">
                    {t("mission-value-innovation")}
                  </h3>
                  <p className="text-gray">
                    {t("mission-value-innovation-description")}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t("mission-strategic-objectives")}
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-blue pl-4 py-1">
                  <h3 className="text-xl font-bold mb-2">
                    {t("mission-objective-modernization")}
                  </h3>
                  <p className="text-gray">
                    {t("mission-objective-modernization-description")}
                  </p>
                </div>
                <div className="border-l-4 border-primary-blue pl-4 py-1">
                  <h3 className="text-xl font-bold mb-2">
                    {t("mission-objective-transparency")}
                  </h3>
                  <p className="text-gray">
                    {t("mission-objective-transparency-description")}
                  </p>
                </div>
                <div className="border-l-4 border-primary-blue pl-4 py-1">
                  <h3 className="text-xl font-bold mb-2">
                    {t("mission-objective-compliance")}
                  </h3>
                  <p className="text-gray">
                    {t("mission-objective-compliance-description")}
                  </p>
                </div>
                <div className="border-l-4 border-primary-blue pl-4 py-1">
                  <h3 className="text-xl font-bold mb-2">
                    {t("mission-objective-hr-development")}
                  </h3>
                  <p className="text-gray">
                    {t("mission-objective-hr-development-description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
