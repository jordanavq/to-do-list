const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {
    title: { type: String, require: true },
    completed: { type: Boolean, default: false },
  },

  {
    timestamps: true,
  }
);

modeule.export = model("Todo", todoSchema);
