export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 font-sans">

      {/* Header */}
      <header className="border-b border-gray-300 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900">Mackenzie Prete</h1>
        <p className="text-sm text-gray-600 mt-2">
          mackenzie.c.prete@gmail.com | (845) 489-2142 | Parrish, FL |{" "}
          <a href="https://www.linkedin.com/in/mackenzie-prete/" className="text-blue-600 underline" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
          Qualification Summary
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Risk Management and Insurance student with a minor in Business Analytics and Information Systems, graduating Spring 2027. Google Data Analytics Certificate holder with hands-on experience in Excel, SQL, Python, and R applied to insurance risk modeling and claims analysis. Pursuing a carrier-side underwriting or risk analyst role in the Tampa Bay area.
        </p>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
          Education
        </h2>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-semibold text-gray-900">University of South Florida - Muma College of Business</p>
            <p className="text-sm text-gray-700">Bachelor of Science in Risk Management and Insurance</p>
            <p className="text-sm text-gray-600 italic">Minor in Business Analytics and Information Systems</p>
            <p className="text-sm text-gray-700">GPA: 3.80 / 4.00</p>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>Tampa, FL</p>
            <p>Anticipated: May 2027</p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
          Work Experience
        </h2>
        <div className="flex justify-between items-start mb-1">
          <div>
            <p className="font-semibold text-gray-900">Kohls</p>
            <p className="text-sm text-gray-700 italic">Sales Associate</p>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>Wappingers Falls, NY</p>
            <p>Aug 2022 - May 2023</p>
          </div>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-2">
          <li>Increased sales floor efficiency by organizing and restocking 200+ items per shift, reducing misplaced inventory by an estimated 15%.</li>
          <li>Supported customer decision-making by answering 5-10 inquiries per day in person and over the phone.</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
          Coursework Projects
        </h2>
        <div className="mb-4">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-900">Medical Insurance Charges</p>
            <p className="text-sm text-gray-600">February 2026</p>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
            <li>Analyzed a dataset of 1,300+ policyholders to identify key claim cost drivers; smokers filed claims 3.81x higher than non-smokers.</li>
            <li>Built a risk rating engine and KPI dashboard in Excel using VLOOKUP, XLOOKUP, SUMIFS, and Pivot Tables.</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-900">Car Insurance Risk Claims Analysis</p>
            <p className="text-sm text-gray-600">February 2026</p>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
            <li>Analyzed 10,000 auto insurance policy records using logistic regression in Python.</li>
            <li>Achieved 84.9% test accuracy (ROC-AUC = 0.917).</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-900">Excel Business Simulation</p>
            <p className="text-sm text-gray-600">April 2025</p>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
            <li>Ranked 2nd of 450 students by using Excel to analyze sales, costs, and marketing ROI.</li>
            <li>Grew revenue from $2.8K to $53.9K and improved net profit from -$4.9K to $28.7K in 16 weeks.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
          Skills
        </h2>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Technical Skills:</span> Excel (Pivot Tables, VLOOKUP/XLOOKUP, Data Analysis), Microsoft Office Suite, R, SQL, Python, Tableau
        </p>
        <p className="text-sm text-gray-700 mt-2">
          <span className="font-semibold">Certifications:</span> Google Data Analytics, QuickBooks ProAdvisor
        </p>
      </section>

      {/* Organizations */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
          Professional Organizations
        </h2>
        <p className="text-sm text-gray-700">
          Gamma Iota Sigma - Risk Management and Insurance Fraternity, USF Chapter | Professional Development Committee Member
        </p>
      </section>

    </main>
  );
}
