import { Document, Model, model, Schema } from 'mongoose'
import User from '../models/user'

interface UserDocument extends User, Document {}

const UserSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: String,
  userStatus: Number,
  username: String,
})

const UserModel: Model<UserDocument> = model<UserDocument>('User', UserSchema)

export default UserModel
