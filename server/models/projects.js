const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    notifications: [{
        type: String,
    }],
    invited: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    privacy: {
        type: String
    },
    projectImg: {
        type: String
    },
    // chatrooms: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Chatroom'
    // }],
    // tasks: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Task'
    // }],
    issues: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue'
    }]
},  {
    timestamps: true
    }
);

// messageSchema.pre('remove', async function(next){
//     try {
//         //find a user
//         let user = await User.findById(this.user)
//         //remove the id of the message from their messages list
//         user.messages.remove(this.id);
//         //save that user
//         await user.save();
//         //return next
//         return next();
//     } catch (err) {
//         return next(err)
//     }
// });

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
