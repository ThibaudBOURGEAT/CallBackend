const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    friends: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        default: null,
    }],
    events: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Event',
        default: null,
    }],
    conversations: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Event',
        default: null,
    }],
    deleted: {
        type: Boolean,
        default: false,
    }
}, { usePushEach: true });

module.exports = mongoose.model('User', user_schema);
