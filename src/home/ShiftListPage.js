import React, { useState, useEffect } from 'react'

export default function ShiftListPage() {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">シフト種別登録</h3>
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                シフト種別名
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="シフト種別名"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                省略文字
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="省略文字"
              />
            </div>
          </form>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn bg-red-500 border-red-500 hover:border-red-500 hover:bg-red-500"
            >
              キャンセル
            </label>
            <label
              htmlFor="my-modal"
              className="btn bg-blue-500 border-blue-500 hover:border-blue-500 hover:bg-blue-500"
            >
              登録
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
