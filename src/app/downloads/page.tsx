"use client";

import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";

export default function DownloadsPage() {
  const { t } = useTranslation();

  const downloadCategories = [
    {
      titleKey: "downloads-forms-category",
      items: [
        {
          nameKey: "downloads-individual-registration-form",
          type: "PDF",
          size: "245 KB",
        },
        {
          nameKey: "downloads-business-registration-form",
          type: "PDF",
          size: "312 KB",
        },
        {
          nameKey: "downloads-income-tax-declaration",
          type: "PDF",
          size: "187 KB",
        },
        {
          nameKey: "downloads-property-tax-declaration",
          type: "PDF",
          size: "156 KB",
        },
        { nameKey: "downloads-vat-declaration", type: "PDF", size: "201 KB" },
      ],
    },
    {
      titleKey: "downloads-official-documents-category",
      items: [
        { nameKey: "downloads-general-tax-code", type: "PDF", size: "2.1 MB" },
        {
          nameKey: "downloads-business-tax-regulation",
          type: "PDF",
          size: "845 KB",
        },
        {
          nameKey: "downloads-payment-procedures-guide",
          type: "PDF",
          size: "1.3 MB",
        },
        {
          nameKey: "downloads-tax-information-brochure",
          type: "PDF",
          size: "956 KB",
        },
      ],
    },
    {
      titleKey: "downloads-guides-manuals-category",
      items: [
        { nameKey: "downloads-portal-user-guide", type: "PDF", size: "1.1 MB" },
        {
          nameKey: "downloads-administrator-manual",
          type: "PDF",
          size: "1.8 MB",
        },
        {
          nameKey: "downloads-online-payment-troubleshooting-guide",
          type: "PDF",
          size: "723 KB",
        },
      ],
    },
    {
      titleKey: "downloads-reports-statistics-category",
      items: [
        {
          nameKey: "downloads-annual-recovery-report-2025",
          type: "PDF",
          size: "3.2 MB",
        },
        {
          nameKey: "downloads-recovery-statistics-q1-2026",
          type: "PDF",
          size: "1.5 MB",
        },
        {
          nameKey: "downloads-tax-trends-analysis-2025",
          type: "PDF",
          size: "2.7 MB",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("downloads-page-title")}
            </h1>
            <p className="text-xl text-gray-300">
              {t("downloads-page-description")}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("downloads-search-placeholder")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-blue pl-10"
                />
                <span className="absolute left-3 top-3.5 text-gray-400">
                  🔍
                </span>
              </div>
            </div>

            <div className="space-y-12">
              {downloadCategories.map((category, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
                    {t(category.titleKey)}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-white rounded-sm shadow-md p-6 border border-gray-100 flex justify-between items-center"
                      >
                        <div>
                          <h3 className="font-semibold mb-1">
                            {t(item.nameKey)}
                          </h3>
                          <div className="flex text-sm text-gray space-x-3">
                            <span>{item.type}</span>
                            <span>•</span>
                            <span>{item.size}</span>
                          </div>
                        </div>
                        <button className="bg-primary-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm flex items-center">
                          <span className="mr-2">⬇️</span>
                          {t("downloads-download-button")}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-light-blue rounded-sm p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                {t("downloads-help-title")}
              </h2>
              <p className="text-gray mb-6">
                {t("downloads-help-description")}
              </p>
              <button className="bg-primary-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-sm">
                {t("downloads-contact-support")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
