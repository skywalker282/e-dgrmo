"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/contexts/TranslationContext";

const QuickTaxSearch = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const taxOptions = useMemo(
    () => [
      { id: "income", label: t("tax-income-title") },
      { id: "property", label: t("tax-property-title") },
      { id: "business", label: t("tax-business-title") },
      { id: "vat", label: t("tax-vat-title") },
      { id: "vehicle", label: t("tax-vehicle-title") },
      { id: "registration", label: t("tax-registration-title") },
    ],
    [t],
  );

  const filteredTaxes = useMemo(() => {
    if (!query.trim()) return taxOptions;

    const normalized = query.trim().toLowerCase();
    return taxOptions.filter((tax) =>
      tax.label.toLowerCase().includes(normalized),
    );
  }, [query, taxOptions]);

  const mapQueryToTaxId = (value: string) => {
    const normalized = value.trim().toLowerCase();
    if (
      normalized.includes("income") ||
      normalized.includes("revenu") ||
      normalized.includes("revenu")
    )
      return "income";
    if (
      normalized.includes("propriété") ||
      normalized.includes("property") ||
      normalized.includes("foncière")
    )
      return "property";
    if (
      normalized.includes("business") ||
      normalized.includes("professionnelle") ||
      normalized.includes("entreprise")
    )
      return "business";
    if (normalized.includes("tva") || normalized.includes("vat")) return "vat";
    if (normalized.includes("véhicule") || normalized.includes("vehicle"))
      return "vehicle";
    return "";
  };

  const handleSearch = () => {
    const selected = mapQueryToTaxId(query);
    if (selected) {
      router.push(`/tax-categories?selected=${selected}`);
      return;
    }

    const encodedQuery = encodeURIComponent(query.trim());
    router.push(`/tax-categories?search=${encodedQuery}`);
  };

  return (
    <section className="section-padding bg-light-gray">
      <div className="container-corporate">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-4">
            {t("quick-search-title")}
          </h2>
          <p className="section-subtitle text-center">
            {t("quick-search-description")}
          </p>

          <div className="card-corporate p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t("quick-search-placeholder")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
              <button
                type="button"
                onClick={handleSearch}
                className="btn-primary whitespace-nowrap"
              >
                {t("quick-search-button")}
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-dark-charcoal">
                {t("quick-search-popular")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {filteredTaxes.length > 0 ? (
                  filteredTaxes.map((tax) => (
                    <button
                      key={tax.id}
                      type="button"
                      onClick={() =>
                        router.push(`/tax-categories?selected=${tax.id}`)
                      }
                      className="text-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 corporate-border"
                    >
                      <h3 className="text-base font-semibold text-dark-charcoal leading-tight">
                        {tax.label}
                      </h3>
                    </button>
                  ))
                ) : (
                  <div className="col-span-full rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-500">
                    {t("quick-search-no-results")}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickTaxSearch;
