const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  type: String,
  sequences: Array
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
