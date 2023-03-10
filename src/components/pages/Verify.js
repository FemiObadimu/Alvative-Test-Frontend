import React, { useState, useContext, useLayoutEffect } from "react";
import AuthContext from "../context/auth/authContext";
const Verify = () => {
  const authContext = useContext(AuthContext);
  const { loadVerification, trans, loadTransaction } = authContext;

  useLayoutEffect(() => {
    loadVerification();
    loadTransaction();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900 my-4">
              Alvative Paystack Payment Transactions
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the transactions performed on this paystack account
              returning their name, email etc.
            </p>
          </div>
        </div>
        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {trans !== null ? (
                <>
                  {trans.ans.map((person) => (
                    <tr key={person.customer.email}>
                      <td className="w-full font-bold max-w-0 py-4 pl-4 pr-3 text-sm  text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                        {person.metadata.custom_fields.map((e) => {
                          return e.display_name;
                        })}
                       
                      </td>
                      <td className="hidden px-3 py-4 text-sm font-bold text-gray-500 lg:table-cell">
                        N {person.amount / 100}
                      </td>
                      <td className="hidden px-3 py-4 text-sm font-bold text-gray-500 sm:table-cell">
                        {person.customer.email}
                      </td>
                      <td className={person.status === 'success'? "px-3 py-4 font-bold text-sm text-green-700 " : "px-3 py-4 font-bold text-sm text-red-800"}>
                        {person.status}
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <div className="text-center my-4">
                  <h2>No Transaction Found</h2>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Verify;
