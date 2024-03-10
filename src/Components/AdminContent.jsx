import { Fragment } from "react";
export default function AdminContent() {
  return (
    <Fragment>
      <div class="p-4 sm:ml-64">
        <div class="p-4 h-screen mb-4 rounded bg-[#3B4755]">
          <div className="flex items-bottom mb-8">
            <div className="flex w-1/2">
              {/* div for arranged buttons*/}

              <button
                type="button"
                class="space-x-2 text-gray-300 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center justify-center"
              >
                <svg
                  class="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
                <span>Add User</span>
              </button>
            </div>
            {/* end of div for two arranged buttons*/}
            <div className="flex justify-end items-center space-x-2 w-1/2">
              <span className="text-2xl font-bold text-gray-300">User</span>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Admin
              </span>
            </div>
          </div>
          <span className="text-gray-300 text-2xl">Users</span>

          <div class="relative overflow-x-auto mt-2">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Users name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-300"
                  >
                    User A
                  </th>
                  <td class="px-6 py-4">user@gmail.com</td>
                  <td class="px-6 py-4">Admin</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
