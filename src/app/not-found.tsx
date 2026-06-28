"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/TranslationContext";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-light-blue flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl font-bold text-primary-blue mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t("not-found-title")}
        </h1>
        <p className="text-gray mb-8">{t("not-found-description")}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-primary-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-sm transition"
          >
            {t("not-found-back-to-home")}
          </Link>
          <Link
            href="/contact"
            className="border border-primary-blue text-primary-blue hover:bg-blue-50 font-semibold py-3 px-6 rounded-sm transition"
          >
            {t("not-found-contact-us")}
          </Link>
        </div>
      </div>
    </div>
  );
}
