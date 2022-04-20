import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { Modal, Card, ListGroup, Form, Button } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { BsPersonFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { BiEdit } from 'react-icons/bi'

// import { createStaff, updateStaff, removeStaff, loadStaffs } from '../../modules/staffSlice'

const schema = yup.object().shape({
  name: yup.string().required('氏名は必須です。'),
})

export default function JobCategoryPage() {
  // const dispatch = useDispatch()
  // const staffs = useSelector((state) => state.staff.list)
  const [open, setOpen] = useState(false)
  const [confirmDeletion, setConfirmDeletion] = useState(null)
  const [selected, setSelected] = useState(null)
  const [show, setShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const handleDeleteShow = () => setDeleteShow(true)
  const handleDeleteClose = () => setDeleteShow(false)

  const { handleSubmit, control, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  // useEffect(() => {
  //   dispatch(loadStaffs())
  // }, [])

  // const onSubmit = (data) => {
  //   if (selected) {
  //     dispatch(updateStaff({ ...selected, name: data.name })).then(() => setOpen(false))
  //   } else {
  //     dispatch(createStaff({ name: data.name })).then(() => setOpen(false))
  //   }
  // }

  const handleEdit = (e) => {
    reset({ name: e.name })
    setSelected(e)
    setOpen(true)
  }

  const handleNew = (e) => {
    reset({ name: '' })
    setSelected(null)
    setOpen(true)
  }

  const handleConfirmClose = () => {
    setConfirmDeletion(null)
  }

  // const handleClose = () => {
  //   setOpen(false)
  // }

  // const handleDelete = () => {
  //   dispatch(removeStaff(confirmDeletion)).then(() => setConfirmDeletion(null))
  // }

  const shiftCategorys = [
    { category: 'Dr' },
    { category: 'DH' },
    { category: 'CS' },
    { category: '早番' },
  ]

  return (
    <div maxWidth="lg" style={{ margin: 80 }}>
      <div className="card-body mt-8">
        {shiftCategorys.map((shiftCategory) => {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: 15,
                marginBottom: 10,
              }}
              key="staff"
            >
              <div className="avatar placeholder scale-100 ">
                {/* <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <BsPersonFill className="scale-150" />
                </div> */}
                <p className="ml-5 mt-2 text-2xl">{shiftCategory.category}</p>
              </div>
              <div>
                <p className="ml-5 mt-2 text-2xl">{shiftCategory.repCharacter}</p>
              </div>
              <div>
                <label
                  htmlFor="my-modal-2"
                  className="btn modal-button bg-white border-white text-black hover:text-black hover:bg-white hover:border-white"
                >
                  <BiEdit className="cursor-pointer text-2xl" />
                </label>
                <label
                  htmlFor="my-modal-3"
                  className="btn modal-button bg-white border-white text-black hover:text-black hover:bg-white hover:border-white"
                >
                  <AiFillDelete
                    // onClick={() => handleDeleteShow()}
                    className="cursor-pointer text-2xl"
                  />
                </label>
              </div>
            </div>
          )
        })}
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">職種登録</h3>
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                職種名
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="職種名"
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
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">職種更新</h3>
          <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                職種名
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="職種名"
              />
            </div>
          </form>
          <div className="modal-action">
            <label
              htmlFor="my-modal-2"
              className="btn bg-red-500 border-red-500 hover:border-red-500 hover:bg-red-500"
            >
              キャンセル
            </label>
            <label
              htmlFor="my-modal-2"
              className="btn bg-blue-500 border-blue-500 hover:border-blue-500 hover:bg-blue-500"
            >
              登録
            </label>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">本当に削除しますか？</h3>
          <div className="modal-action">
            <label
              htmlFor="my-modal-3"
              className="btn bg-blue-500 border-blue-500 hover:border-blue-500 hover:bg-blue-500"
            >
              キャンセル
            </label>
            <label
              htmlFor="my-modal-3"
              className="btn bg-red-500 border-red-500 hover:border-red-500 hover:bg-red-500"
            >
              削除
            </label>
          </div>
        </div>
      </div>
      <div className="text-blue-500 fixed right-10 bottom-10 scale-150">
        <label
          htmlFor="my-modal"
          className="btn modal-button rounded-full hover:bg-blue-500 bg-blue-500 border-blue-500 hover:border-blue-500"
        >
          <FaPlus className="scale-150" />
        </label>
      </div>
    </div>
  )
}
