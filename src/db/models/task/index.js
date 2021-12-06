const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema ({
    text: String,
    isCheck: Boolean
}, {versionKey: false});

taskSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
taskSchema.set('toJSON', {
    virtuals: true
});

module.exports = Task = new mongoose.model('tasks', taskSchema);