import React from 'react'

const test = () => {
  return (
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
  )
}
