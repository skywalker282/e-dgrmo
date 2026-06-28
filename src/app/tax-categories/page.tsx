"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import TaxCalculator from "@/components/TaxCalculator";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "@/contexts/TranslationContext";

export default function TaxCategoriesPage() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const selectedTax = searchParams.get("selected") ?? undefined;
  const searchTerm = searchParams.get("search") || "";
  const [currentSelectedTax, setCurrentSelectedTax] = useState<string>(
    selectedTax ?? "income",
  );
  const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentSelectedTax(selectedTax ?? "income");
  }, [selectedTax]);

  const taxCategories = [
    {
      id: "income",
      titleKey: "tax-income-title",
      descriptionKey: "tax-income-description",
      rateKey: "tax-income-rate",
      processingTimeKey: "tax-income-processing-time",
      documentsKeys: ["tax-income-doc-1", "tax-income-doc-2"],
      legalReferenceKey: "tax-income-legal-reference",
    },
    {
      id: "property",
      titleKey: "tax-property-title",
      descriptionKey: "tax-property-description",
      rateKey: "tax-property-rate",
      processingTimeKey: "tax-property-processing-time",
      documentsKeys: ["tax-property-doc-1", "tax-property-doc-2"],
      legalReferenceKey: "tax-property-legal-reference",
    },
    {
      id: "business",
      titleKey: "tax-business-title",
      descriptionKey: "tax-business-description",
      rateKey: "tax-business-rate",
      processingTimeKey: "tax-business-processing-time",
      documentsKeys: ["tax-business-doc-1", "tax-business-doc-2"],
      legalReferenceKey: "tax-business-legal-reference",
    },
    {
      id: "vat",
      titleKey: "tax-vat-title",
      descriptionKey: "tax-vat-description",
      rateKey: "tax-vat-rate",
      processingTimeKey: "tax-vat-processing-time",
      documentsKeys: ["tax-vat-doc-1", "tax-vat-doc-2"],
      legalReferenceKey: "tax-vat-legal-reference",
    },
    {
      id: "vehicle",
      titleKey: "tax-vehicle-title",
      descriptionKey: "tax-vehicle-description",
      rateKey: "tax-vehicle-rate",
      processingTimeKey: "tax-vehicle-processing-time",
      documentsKeys: ["tax-vehicle-doc-1", "tax-vehicle-doc-2"],
      legalReferenceKey: "tax-vehicle-legal-reference",
    },
    {
      id: "registration",
      titleKey: "tax-registration-title",
      descriptionKey: "tax-registration-description",
      rateKey: "tax-registration-rate",
      processingTimeKey: "tax-registration-processing-time",
      documentsKeys: ["tax-registration-doc-1", "tax-registration-doc-2"],
      legalReferenceKey: "tax-registration-legal-reference",
    },
  ];

  const filteredTaxCategories = useMemo(() => {
    if (!searchTerm.trim()) {
      return taxCategories;
    }

    const normalizedSearch = searchTerm.trim().toLowerCase();
    return taxCategories.filter((category) => {
      const title = t(category.titleKey).toLowerCase();
      const description = t(category.descriptionKey).toLowerCase();
      return (
        title.includes(normalizedSearch) ||
        description.includes(normalizedSearch)
      );
    });
  }, [searchTerm, taxCategories, t]);

  const handleTaxCardClick = (taxId: string) => {
    setCurrentSelectedTax(taxId);
    const calculator = calculatorRef.current;
    if (calculator) {
      calculator.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-dark-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("tax-categories-page-title")}
            </h1>
            <p className="text-xl text-gray-300">
              {t("tax-categories-page-description")}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {(searchTerm || selectedTax) && (
              <div className="mb-8 rounded-sm border border-blue-200 bg-blue-50 p-6 text-sm text-blue-900">
                {searchTerm ? (
                  <p>
                    <strong>{t("search-results-for")}:</strong> {searchTerm}
                  </p>
                ) : (
                  <p>
                    <strong>{t("selected-tax-title")}:</strong>{" "}
                    {t(
                      taxCategories.find(
                        (category) => category.id === selectedTax,
                      )?.titleKey || "tax-income-title",
                    )}
                  </p>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredTaxCategories.map((category) => {
                const isSelected = category.id === currentSelectedTax;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleTaxCardClick(category.id)}
                    className={`w-full text-left bg-white rounded-sm shadow-md overflow-hidden border transition duration-300 ${isSelected ? "border-primary-blue ring-2 ring-primary-blue/10" : "border-gray-100 hover:border-gray-300"}`}
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {t(category.titleKey)}
                      </h3>
                      <p className="text-gray mb-4">
                        {t(category.descriptionKey)}
                      </p>

                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between">
                          <span className="font-semibold">
                            {t("tax-rate")}:
                          </span>
                          <span>{t(category.rateKey)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">
                            {t("tax-processing-time")}:
                          </span>
                          <span>{t(category.processingTimeKey)}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">
                          {t("tax-required-documents")}:
                        </h4>
                        <ul className="text-sm text-gray list-disc pl-5 space-y-1">
                          {category.documentsKeys.map((docKey, idx) => (
                            <li key={idx}>{t(docKey)}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">
                          {t("tax-legal-reference")}:
                        </h4>
                        <p className="text-sm text-gray">
                          {t(category.legalReferenceKey)}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div ref={calculatorRef} className="bg-light-blue rounded-sm p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">
                {t("tax-calculator-title")}
              </h2>
              <TaxCalculator selectedTax={currentSelectedTax} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
