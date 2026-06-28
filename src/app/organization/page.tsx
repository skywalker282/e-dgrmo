"use client";

import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";

export default function OrganizationPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("organization-page-title")}
            </h1>
            <p className="text-xl text-gray-300">
              {t("organization-page-subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                {t("organization-structure-title")}
              </h2>
              <p className="text-gray mb-6">
                {t("organization-structure-description")}
              </p>

              <div className="bg-white rounded-sm shadow-md p-8 mb-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {t("organization-general-director")}
                  </h3>
                  <div className="w-24 h-24 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl">DG</span>
                  </div>
                  <p className="font-bold">
                    {t("organization-director-title")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-4">
                      {t("organization-tax-department")}
                    </h4>
                    <div className="w-16 h-16 bg-dark-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white">DI</span>
                    </div>
                    <ul className="text-left space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>{t("organization-income-tax-service")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>{t("organization-corporate-tax-service")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>{t("organization-audit-service")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-4">
                      {t("organization-fee-department")}
                    </h4>
                    <div className="w-16 h-16 bg-dark-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white">DT</span>
                    </div>
                    <ul className="text-left space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>{t("organization-property-tax-service")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>{t("organization-business-tax-service")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>{t("organization-vehicle-tax-service")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-4">
                      {t("organization-administration-department")}
                    </h4>
                    <div className="w-16 h-16 bg-dark-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white">DA</span>
                    </div>
                    <ul className="text-left space-y-2 mt-4">
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>{t("organization-human-resources-service")}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>
                          {t("organization-finance-accounting-service")}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-blue mr-2">•</span>
                        <span>{t("organization-it-service")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">
                {t("organization-provincial-responsibilities")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">
                    {t("organization-revenue-collection")}
                  </h3>
                  <p className="text-gray">
                    {t("organization-revenue-collection-description")}
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">
                    {t("organization-control-verification")}
                  </h3>
                  <p className="text-gray">
                    {t("organization-control-verification-description")}
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">
                    {t("organization-taxpayer-service")}
                  </h3>
                  <p className="text-gray">
                    {t("organization-taxpayer-service-description")}
                  </p>
                </div>
                <div className="bg-light-blue p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-3">
                    {t("organization-reports-statistics")}
                  </h3>
                  <p className="text-gray">
                    {t("organization-reports-statistics-description")}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t("organization-inter-institutional-coordination")}
              </h2>
              <p className="text-gray mb-6">
                {t("organization-inter-institutional-coordination-description")}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-blue text-xl mr-3">•</span>
                  <div>
                    <h3 className="font-bold">
                      {t("organization-provincial-government")}
                    </h3>
                    <p className="text-gray">
                      {t("organization-provincial-government-description")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue text-xl mr-3">•</span>
                  <div>
                    <h3 className="font-bold">
                      {t("organization-general-finance-directorate")}
                    </h3>
                    <p className="text-gray">
                      {t(
                        "organization-general-finance-directorate-description",
                      )}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue text-xl mr-3">•</span>
                  <div>
                    <h3 className="font-bold">
                      {t("organization-customs-services")}
                    </h3>
                    <p className="text-gray">
                      {t("organization-customs-services-description")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue text-xl mr-3">•</span>
                  <div>
                    <h3 className="font-bold">
                      {t("organization-financial-institutions")}
                    </h3>
                    <p className="text-gray">
                      {t("organization-financial-institutions-description")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
