"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const taxes = [
  { id: "income", name: "Impôt sur le revenu", rate: "3-30%" },
  {
    id: "property",
    name: "Taxe foncière",
    rate: "0.5% de la valeur cadastrale",
  },
  { id: "business", name: "Taxe professionnelle", rate: "Variable" },
  { id: "vat", name: "TVA", rate: "16%" },
  { id: "registration", name: "Droits d'enregistrement", rate: "Variable" },
  { id: "vehicle", name: "Taxe sur les véhicules", rate: "Variable" },
];

const paymentMethods = [
  { id: "mobile-money", name: "Mobile Money", icon: "📱" },
  { id: "bank-transfer", name: "Virement bancaire", icon: "🏦" },
  { id: "credit-card", name: "Carte de crédit", icon: "💳" },
];

const PaymentForm = () => {
  const searchParams = useSearchParams();
  const [selectedTax, setSelectedTax] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const taxParam = searchParams.get("tax");
    if (taxParam) {
      const matchingTax = taxes.find((tax) => tax.id === taxParam);
      if (matchingTax) {
        setSelectedTax(matchingTax.id);
      }
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment attempt with:", {
      selectedTax,
      amount,
      paymentMethod,
    });
  };

  return (
    <div className="bg-white rounded-sm shadow-md p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sélectionnez la taxe
          </label>
          <select
            value={selectedTax}
            onChange={(e) => setSelectedTax(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          >
            <option value="">Choisissez une taxe</option>
            {taxes.map((tax) => (
              <option key={tax.id} value={tax.id}>
                {tax.name} ({tax.rate})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Montant à payer (FC)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Entrez le montant"
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          />
          <p className="mt-1 text-sm text-gray">
            Entrez le montant exact que vous souhaitez payer
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Méthode de paiement
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setPaymentMethod(method.id)}
                className={`p-4 border rounded-sm text-center ${
                  paymentMethod === method.id
                    ? "border-primary-blue bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <div className="text-2xl mb-2">{method.icon}</div>
                <div className="text-sm font-medium">{method.name}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-sm p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-yellow-500">⚠️</span>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Assurez-vous que les informations sont correctes avant de
                  procéder au paiement. Les paiements ne sont pas remboursables.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={!selectedTax || !amount || !paymentMethod}
            className="w-full bg-primary-blue hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Procéder au paiement
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
