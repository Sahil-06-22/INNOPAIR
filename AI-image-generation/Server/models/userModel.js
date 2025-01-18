import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  creditBalance: {type: Number, default: 5},
  generatedImages: [{
    image: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    prompt: {type: String, required: true}
  }]
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel;