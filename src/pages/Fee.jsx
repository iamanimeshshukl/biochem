import React from 'react'

const Fee = () => {
  return (
    <div className='h-full'>
<div className="shadow-lg rounded-lg overflow-hidden m-4 md:mx-10">
<center><h1 className="text-3xl font-bold text-gray-800">Fee Details</h1></center>
<br></br>
  <center><table className="w-full table-fixed">
    <thead>
      <tr className="bg-gray-100">
        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
        Category
        </th>
        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
        Before 30 January 2025
        </th>
        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
        After 30 January 2025
        </th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <tr>
        <td className="py-4 px-6 border-b border-gray-200">Foreign Researcher/
Scientist/ Industry
Delegates</td>
        <td className="py-4 px-6 border-b border-gray-200 truncate">
        200/- USD
        </td>
        <td className="py-4 px-6 border-b border-gray-200">225/- USD</td>
      </tr>
      <tr>
        <td className="py-4 px-6 border-b border-gray-200">Foreign Students
        (Diploma, UG, PG)</td>
        <td className="py-4 px-6 border-b border-gray-200 truncate">
        100/- USD
        </td>
        <td className="py-4 px-6 border-b border-gray-200">125/- USD</td>
      </tr>
      <tr>
        <td className="py-4 px-6 border-b border-gray-200">Delegate from
        Industries/ Scientist</td>
        <td className="py-4 px-6 border-b border-gray-200 truncate">
        INR 4000/-
        </td>
        <td className="py-4 px-6 border-b border-gray-200">INR 4500/-</td>
      </tr>
      <tr>
        <td className="py-4 px-6 border-b border-gray-200">Faculty from
Academic Institutions/
PDF/ RA</td>
        <td className="py-4 px-6 border-b border-gray-200 truncate">
        INR 3000/-
        </td>
        <td className="py-4 px-6 border-b border-gray-200">INR 3500/-</td>

      </tr>
      <tr>
        <td className="py-4 px-6 border-b border-gray-200">Post Graduate /
        Research Scholar</td>
        <td className="py-4 px-6 border-b border-gray-200 truncate">
        INR 2000/-
        </td>
        <td className="py-4 px-6 border-b border-gray-200">INR 2500/-</td>

      </tr>
      <tr>
        <td className="py-4 px-6 border-b border-gray-200">UG / Diploma</td>
        <td className="py-4 px-6 border-b border-gray-200 truncate">
        INR 1000/-
        </td>
        <td className="py-4 px-6 border-b border-gray-200">INR 1500/-</td>

      </tr>
      {/* Add more rows here */}
    </tbody>
  </table></center>
</div>

    </div>
  )
}

export default Fee
