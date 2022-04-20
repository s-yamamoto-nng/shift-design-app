import React, { useState } from 'react'
// import Modal from './modal'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import DatePicker, { registerLocale } from 'react-datepicker'
import ja from 'date-fns/locale/ja'

registerLocale('ja', ja)

export default function App() {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <>
      <div className="text-blue-500 fixed right-10 bottom-10 scale-150">
        <label
          htmlFor="my-modal"
          className="btn modal-button rounded-full hover:bg-blue-500 bg-blue-500 border-blue-500 hover:border-blue-500"
        >
          <FaPlus className="scale-150" />
        </label>
      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">デフォルト設定</h3>
          <h5 className="font-bold mt-5 mb-5">シフト履歴</h5>
          <DatePicker
            datepicker
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
            locale="ja"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy年MM月"
            showMonthYearPicker
          />
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
