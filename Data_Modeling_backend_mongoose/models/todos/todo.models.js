import mongoose from 'mongoose';
import { SubTodo } from './sub_todo.models';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "User"
    },
    SubTodo : [
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : "SubTodo"
      }
    ]v // Array of Sub Todo

    },{ timestamps: ture }
);

export const Todo = mongoose.model('Todo', todoSchema);
