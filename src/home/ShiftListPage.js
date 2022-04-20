import React, { useState, useEffect } from 'react'

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
  return (
    <>
      <div>
        <table className="table w-full">
          <thead>
            <tr className="overflow-auto">
              <th rowSpan="2" className="sticky top-0 left-0">
                日
              </th>
              <th rowSpan="2" className="sticky top-0 left-12">
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
            </tr>
            <tr className="overflow-auto">
              {doctors.map((doctor) => {
                return (
                  <th key="doctor" className="sticky top-12">
                    {doctor.doctor}
                  </th>
                )
              })}
              {trainingDoctor.map((trainingDoctor) => {
                return (
                  <th key="trainingDoctor" className="sticky top-12">
                    {trainingDoctor.doctor}
                  </th>
                )
              })}
              {dentalHygienists.map((dentalHygienist) => {
                return (
                  <th key="dentalHygienist" className="sticky top-12">
                    {dentalHygienist.hygienist}
                  </th>
                )
              })}
              {dentalAssistants.map((dentalAssistant) => {
                return (
                  <th key="dentalAssistant" className="sticky top-12">
                    {dentalAssistant.assistant}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key="item" className="overflow-auto">
                  <td className="sticky">{item.date}</td>
                  <td>{item.weekDay}</td>
                  {doctors.map((doctor) => {
                    return <td key="doctor"></td>
                  })}
                  {trainingDoctor.map((trainingDoctor) => {
                    return <td key="trainingDoctor"></td>
                  })}
                  {dentalHygienists.map((dentalHygienist) => {
                    return <td key="dentalHygienist"></td>
                  })}
                  {dentalAssistants.map((dentalAssistant) => {
                    return <td key="dentalAssistant"></td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
