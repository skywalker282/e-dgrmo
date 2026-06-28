"use client";

import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("privacy-page-title")}
            </h1>
            <p className="text-xl text-gray-300">
              {t("privacy-page-description")}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-sm shadow-md p-8">
              <div className="prose max-w-none">
                <p className="text-gray mb-6">{t("privacy-intro")}</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  {t("privacy-collect-title")}
                </h2>
                <p className="text-gray mb-4">
                  {t("privacy-collect-description")}
                </p>
                <ul className="list-disc pl-6 text-gray mb-6 space-y-2">
                  <li>{t("privacy-collect-item-1")}</li>
                  <li>{t("privacy-collect-item-2")}</li>
                  <li>{t("privacy-collect-item-3")}</li>
                  <li>{t("privacy-collect-item-4")}</li>
                  <li>{t("privacy-collect-item-5")}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  {t("privacy-use-title")}
                </h2>
                <p className="text-gray mb-4">{t("privacy-use-description")}</p>
                <ul className="list-disc pl-6 text-gray mb-6 space-y-2">
                  <li>{t("privacy-use-item-1")}</li>
                  <li>{t("privacy-use-item-2")}</li>
                  <li>{t("privacy-use-item-3")}</li>
                  <li>{t("privacy-use-item-4")}</li>
                  <li>{t("privacy-use-item-5")}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  {t("privacy-protection-title")}
                </h2>
                <p className="text-gray mb-6">
                  {t("privacy-protection-description")}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  {t("privacy-sharing-title")}
                </h2>
                <p className="text-gray mb-6">
                  {t("privacy-sharing-description")}
                </p>
                <ul className="list-disc pl-6 text-gray mb-6 space-y-2">
                  <li>{t("privacy-sharing-item-1")}</li>
                  <li>{t("privacy-sharing-item-2")}</li>
                  <li>{t("privacy-sharing-item-3")}</li>
                  <li>{t("privacy-sharing-item-4")}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  {t("privacy-rights-title")}
                </h2>
                <p className="text-gray mb-4">
                  {t("privacy-rights-description")}
                </p>
                <ul className="list-disc pl-6 text-gray mb-6 space-y-2">
                  <li>{t("privacy-rights-item-1")}</li>
                  <li>{t("privacy-rights-item-2")}</li>
                  <li>{t("privacy-rights-item-3")}</li>
                  <li>{t("privacy-rights-item-4")}</li>
                  <li>{t("privacy-rights-item-5")}</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  {t("privacy-retention-title")}
                </h2>
                <p className="text-gray mb-6">
                  {t("privacy-retention-description")}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">
                  {t("privacy-updates-title")}
                </h2>
                <p className="text-gray mb-6">
                  {t("privacy-updates-description")}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray">
                    <strong>{t("privacy-last-updated")}:</strong>{" "}
                    {t("privacy-last-updated-date")}
                  </p>
                  <p className="text-gray mt-2">
                    {t("privacy-contact-intro")}{" "}
                    <a
                      href="mailto:privacy@dgrmo.cd"
                      className="text-primary-blue hover:underline"
                    >
                      privacy@dgrmo.cd
                    </a>
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
