const mongoose = require('mongoose');//mongoose is a library used to connect the node js with mongodb and impoting

const userSchema = new mongoose.Schema( //mongoose.schema means creating new structure how data need to be store
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true//no duplicate values allowed
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['admin', 'member'],
      default: 'member'
    }
  },
  {
    timestamps: true//when created and when updated
  }
);

module.exports = mongoose.model('User', userSchema);//mongoose.model() → Create a model ,'User' → Model name ,userSchema → Structure used
