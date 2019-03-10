'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    identification: Number,
    names: String,
    role: { type: String, default: 'user' },
    profile: Object,
    email: { type: String, unique: true},
    password: String,
    isActive: { type: Boolean, default: false },
    phoneNumber: { type: String },
});

module.exports =  UserSchema;
