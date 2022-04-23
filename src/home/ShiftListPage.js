import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import moment from 'moment'
import { FaPlus } from 'react-icons/fa'
import DatePicker, { registerLocale } from 'react-datepicker'
import ja from 'date-fns/locale/ja'

const items = [
  { date: '1', weekDay: '火' },
  { date: '2', weekDay: '水' },
  { date: '3', weekDay: '木' },
  { date: '4', weekDay: '金' },
  { date: '5', weekDay: '土' },
  { date: '6', weekDay: '日' },
  { date: '7', weekDay: '月' },
  { date: '8', weekDay: '火' },
  { date: '9', weekDay: '水' },
  { date: '10', weekDay: '木' },
  { date: '11', weekDay: '金' },
  { date: '12', weekDay: '土' },
  { date: '13', weekDay: '日' },
  { date: '14', weekDay: '月' },
  { date: '15', weekDay: '火' },
  { date: '16', weekDay: '水' },
  { date: '17', weekDay: '木' },
  { date: '18', weekDay: '金' },
  { date: '19', weekDay: '土' },
  { date: '20', weekDay: '日' },
  { date: '21', weekDay: '月' },
  { date: '22', weekDay: '火' },
  { date: '23', weekDay: '水' },
  { date: '24', weekDay: '木' },
  { date: '25', weekDay: '金' },
  { date: '26', weekDay: '土' },
  { date: '27', weekDay: '日' },
  { date: '28', weekDay: '月' },
  { date: '29', weekDay: '火' },
  { date: '30', weekDay: '水' },
  { date: '31', weekDay: '木' },
]

const doctors = [
  { doctor: '中野' },
  { doctor: '遼太郎' },
  { doctor: '澤木' },
  { doctor: '藤田' },
  { doctor: '村田' },
  { doctor: '柳井' },
  { doctor: '秋元' },
  { doctor: '雨宮' },
  { doctor: '八城' },
  { doctor: '浅見' },
  { doctor: '関口' },
  { doctor: '和泉' },
  { doctor: '二階堂' },
  { doctor: '石井' },
  { doctor: '田中' },
  { doctor: '大塚' },
]

const trainingDoctor = [
  {
    doctor: '永井',
  },
]

const dentalHygienists = [
  { hygienist: '桐野' },
  { hygienist: '竹内' },
  { hygienist: '植木' },
  { hygienist: '瀬戸' },
  { hygienist: '大熊' },
  { hygienist: '湯澤' },
  { hygienist: '西尾' },
  { hygienist: '深谷' },
  { hygienist: '中尾' },
  { hygienist: '高山' },
  { hygienist: '高木' },
]

const dentalAssistants = [
  { assistant: '有吉' },
  { assistant: '尾形' },
  { assistant: '下元' },
  { assistant: '鈴木' },
  { assistant: '竹原' },
  { assistant: '西脇' },
  { assistant: '田中' },
  { assistant: '藤澤' },
  { assistant: '片岡' },
]

const cleans = [{ clean: '八田' }, { clean: '堀木' }]

export default function ShiftListPage() {
  const [startDate, setStartDate] = useState(new Date())
  const { current } = useState(new Date())

  // const date = dayjs(current).startOf('month')
  // const dateEnd = dayjs(date)
  const date = moment(current).startOf('month')
  const dateEnd = moment(date).endOf('month')
  const dates = []
  while (date < dateEnd) {
    const days = []
    const monthEnd = moment(date).endOf('month')
    while (date < monthEnd) {
      days.push(moment(date))
      date.add(1, 'day')
    }
    dates.push(days)
  }
  console.log(dates)
  // console.log(date)
  // console.log(dateEnd)

  return (
    <>
      <div>
        {/* <DatePicker
          datepicker
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
          placeholder="Select date"
          locale="ja"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy年MM月"
          showMonthYearPicker
        /> */}
        <table className="table w-full">
          <thead>
            <tr className="overflow-auto">
              <td rowSpan="2" className="sticky top-0 left-0 z-20">
                日
              </td>
              <th rowSpan="2" className="sticky top-0 left-12 z-20">
                曜日
              </th>
              <th colSpan={doctors.length} className="text-center sticky top-0">
                Dr
              </th>
              <th colSpan={trainingDoctor.length} className="text-center sticky top-0">
                研修
              </th>
              <th colSpan={dentalHygienists.length} className="text-center sticky top-0">
                DH
              </th>
              <th colSpan={dentalAssistants.length} className="text-center sticky top-0">
                DA
              </th>
              <th className="sticky top-0" rowSpan="2">
                その他
              </th>
              <th className="sticky top-0" rowSpan="2">
                日別集計
              </th>
            </tr>
            <tr className="overflow-auto">
              {doctors.map((doctor, idx) => {
                return (
                  <td key={idx} className="sticky top-12">
                    {doctor.doctor}
                  </td>
                )
              })}
              {trainingDoctor.map((trainingDoctor, idx) => {
                return (
                  <th key={idx} className="sticky top-12">
                    {trainingDoctor.doctor}
                  </th>
                )
              })}
              {dentalHygienists.map((dentalHygienist, idx) => {
                return (
                  <th key={idx} className="sticky top-12">
                    {dentalHygienist.hygienist}
                  </th>
                )
              })}
              {dentalAssistants.map((dentalAssistant, idx) => {
                return (
                  <th key={idx} className="sticky top-12">
                    {dentalAssistant.assistant}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => {
              return (
                <>
                  <tr key={idx} className="overflow-auto hover:border-y-blue-400 border-2">
                    <th className="sticky z-10 border-gray-400 border text-center">{item.date}</th>
                    <th className="sticky z-10 left-12 border-gray-400 border text-center">
                      {item.weekDay}
                    </th>
                    {doctors.map((doctor, idx) => {
                      return (
                        <td key={idx} className="p-0 h-20 border-gray-400 border">
                          <label
                            htmlFor="my-modal-1"
                            className="btn modal-open w-full h-full border-white mt-1.5 bg-white rounded-none hover:border-blue-400 hover:bg-blue-400 cursor-pointer"
                          ></label>
                        </td>
                      )
                    })}
                    {trainingDoctor.map((trainingDoctor, idx) => {
                      return (
                        <td key={idx} className="p-0 h-20 border-gray-400 border">
                          <label
                            htmlFor="my-modal-1"
                            className="btn modal-open w-full h-full border-white mt-1.5 bg-white rounded-none hover:border-blue-400 hover:bg-blue-400 cursor-pointer"
                          ></label>
                        </td>
                      )
                    })}
                    {dentalHygienists.map((dentalHygienist, idx) => {
                      return (
                        <td key={idx} className="p-0 h-20 border-gray-400 border">
                          <label
                            htmlFor="my-modal-1"
                            className="btn modal-open w-full h-full border-white mt-1.5 bg-white rounded-none hover:border-blue-400 hover:bg-blue-400 cursor-pointer"
                          ></label>
                        </td>
                      )
                    })}
                    {dentalAssistants.map((dentalAssistant, idx) => {
                      return (
                        <td key={idx} className="p-0 h-20 border-gray-400 border">
                          <label
                            htmlFor="my-modal-1"
                            className="btn modal-open w-full h-full border-white mt-1.5 bg-white rounded-none hover:border-blue-400 hover:bg-blue-400 cursor-pointer"
                          ></label>
                        </td>
                      )
                    })}
                    <td className="p-0 h-20 border-gray-400 border">
                      <label
                        htmlFor="my-modal-1"
                        className="btn modal-open w-full h-full border-white mt-1.5 bg-white rounded-none hover:border-blue-400 hover:bg-blue-400 cursor-pointer"
                      ></label>
                    </td>
                    <td className="p-0 h-20 border-gray-400 border">
                      <label
                        htmlFor="my-modal-1"
                        className="btn modal-open w-full h-full border-white mt-1.5 bg-white rounded-none hover:border-blue-400 hover:bg-blue-400 cursor-pointer"
                      ></label>
                    </td>
                  </tr>
                  <p></p>
                </>
              )
            })}
          </tbody>
        </table>
        <input type="checkbox" id="my-modal-1" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">シフト登録</h3>
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  シフト登録日付
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="シフト登録日付"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  シフト種別の選択
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="シフト種別の選択"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  置換文字の選択
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="置換文字の選択"
                />
              </div>
            </form>
            <div className="modal-action">
              <label
                htmlFor="my-modal-1"
                className="btn bg-red-500 border-red-500 hover:border-red-500 hover:bg-red-500"
              >
                キャンセル
              </label>
              <label
                htmlFor="my-modal-1"
                className="btn bg-blue-500 border-blue-500 hover:border-blue-500 hover:bg-blue-500"
              >
                登録
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
