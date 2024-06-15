// /* eslint-disable @typescript-eslint/no-this-alias */
// import { Schema, model } from "mongoose";
// import { TUser, UserModel } from "./user.interface";
// import config from "../../config";
// import bcrypt from "bcrypt";

// const userSchema: Schema = new Schema<TUser,  UserModel>(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     role: {
//       type: String,
//       enum: ["admin", "user"],
//       default: "user",
//     },
//     address: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// userSchema.pre("save", async function (next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this; // doc
//   // hashing password and save into DB

//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds)
//   );

//   next();
// });

// // set '' after saving password
// userSchema.post("save", function (doc, next) {
//   doc.password = "";
//   next();
// });

// userSchema.statics.isUserExistsByCustomId = async function (id: string) {
//   return await User.findOne({ id }).select("+password");
// };

// userSchema.statics.isPasswordMatched = async function (
//   plainTextPassword,
//   hashedPassword
// ) {
//   return await bcrypt.compare(plainTextPassword, hashedPassword);
// };

// export const User = model<TUser, UserModel>("User", userSchema);

/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import config from "../../config";
import { TUser, UserModel } from "./user.interface";
const userSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );

  next();
});

// set '' after saving password
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select("+password");
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = model<TUser, UserModel>("User", userSchema);
