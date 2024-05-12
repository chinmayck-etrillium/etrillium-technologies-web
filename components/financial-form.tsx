import React, { useState } from "react";

interface FinancialFormProps {
  handleCloseLearnMoreHero: () => void;
}

//FinancialForm component function using interface since there is a function call given as props
const FinancialForm: React.FC<FinancialFormProps> = ({
  handleCloseLearnMoreHero,
}) => {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [monthlyEmi, setMonthlyEmi] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //Using event.preventDefault as to stop javascript from overriding the html required fields from input tag
    event.preventDefault();

    const income = parseInt(monthlyIncome.toString());
    const expenses = parseInt(monthlyExpenses.toString());
    let emi = parseInt(monthlyEmi.toString());

    if (!emi) {
      emi = 0;
    }

    const totalExpenses = expenses + parseInt(1 + emi.toString());
    const percentage = (totalExpenses / income) * 100;
    console.log(income, expenses, emi);

    if (percentage > 80) {
      setResult("bad");
    } else if (percentage > 50) {
      setResult("needs improvement");
    } else {
      setResult("good");
    }
  };

  // Reset the form fields and result
  const handleCancel = () => {
    setMonthlyIncome("");
    setMonthlyExpenses("");
    setMonthlyEmi("");
    setResult(null);
  };

  const handleCloseLearnMore = () => {
    setShowForm(false);
    handleCloseLearnMoreHero();
  };

  return (
    <div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg">
              <p className="text-lg text-gray-800 mb-4 flex justify-center">
                Enter your monthly financial details
              </p>
              <div className="flex flex-col">
                <input
                  type="number"
                  placeholder="Monthly Income"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                  className="input text-black"
                  required
                />
                <input
                  type="number"
                  placeholder="Monthly Expenses"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(e.target.value)}
                  className="input text-black"
                  required
                />
                <input
                  type="number"
                  placeholder="Monthly EMI (if any)"
                  value={monthlyEmi}
                  onChange={(e) => setMonthlyEmi(e.target.value)}
                  className="input text-black"
                />
                <div className="flex justify-center">
                  <button
                    className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mt-4 mr-2"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="btn text-white bg-gray-700 hover:bg-gray-800 w-full mt-4 ml-2"
                    onClick={handleCancel}
                  >
                    Reset
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleCloseLearnMore}
                    className="btn text-white bg-red-400 hover:bg-red-700 w-full mt-4"
                  >
                    Close
                  </button>
                </div>
              </div>
              {result && (
                <p className="text-lg text-gray-800 mt-4 block">
                  Your financial health is {result}.
                </p>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default FinancialForm;
