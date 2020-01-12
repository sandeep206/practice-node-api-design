import { connect } from '../../utils/db'
import { Item } from './item.model'
import mongoose from 'mongoose'

// CRUD OPERATIONS

const run = async () => {
  await connect('mongodb://localhost:27017/api-test')

  // CREATE
  // const item = await Item.create({
  //   name: 'Clean up',
  //   createdBy: mongoose.Types.ObjectId(),
  //   list: mongoose.Types.ObjectId()
  // })

  // REEAD
  // console.log(await Item.findById(item._id).exec())
  // console.log(await Item.find({}).exec())

  // UPDATE
  // const updated = await Item.findByIdAndUpdate(
  //   item._id,
  //   { name: 'eat' },
  //   { new: true }
  // )
  // console.log(updated)

  // REMOVE
  // const removed = await Item.findByIdAndRemove(item._id).exec()
  // console.log(removed)
}

run()

export default {}
