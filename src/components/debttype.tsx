import {
  CreditCard,
  DollarSign,
  Wallet,
  Receipt,
  Building2,
  Phone,
} from "lucide-react";

const debtTypes = [
  {
    title: "Credit Cards",
    subtitle: "High-interest balances",
    icon: CreditCard,
    bg: "bg-pink-500",
    border: "border-b-pink-500",
  },
  {
    title: "Personal Loans",
    subtitle: "Unsecured loans",
    icon: DollarSign,
    bg: "bg-emerald-500",
    border: "border-b-emerald-500",
  },
  {
    title: "Payday Loans",
    subtitle: "Short-term loans",
    icon: Wallet,
    bg: "bg-amber-500",
    border: "border-b-amber-500",
  },
  {
    title: "Tax Debt",
    subtitle: "CRA Debt",
    icon: Receipt,
    bg: "bg-red-500",
    border: "border-b-red-500",
  },
  {
    title: "Government Debt",
    subtitle: "Provincial debts",
    icon: Building2,
    bg: "bg-indigo-500",
    border: "border-b-indigo-500",
  },
  {
    title: "Utility Bills",
    subtitle: "Unpaid utilities",
    icon: Phone,
    bg: "bg-teal-500",
    border: "border-b-teal-500",
  },
];

const DebtType = () => {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-red-600">
          Types of Debt We Can Help With
        </h2>

        <p className="text-center text-gray-500 mt-4 text-lg">
          Debt specialists can help with almost any unsecured debt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {debtTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg border-b-4 ${item.border}
                p-8 flex items-center gap-5
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div
                  className={`${item.bg}
                  w-16 h-16 rounded-xl
                  flex items-center justify-center
                  shadow-md`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-16">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white
            px-16 py-4 rounded-full text-xl font-semibold
            transition duration-300"
          >
            Find My Solution →
          </button>
        </div>

      </div>
    </section>
  );
};

export default DebtType;