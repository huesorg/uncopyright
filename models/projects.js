var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  url: String,
  description: String,
  createdAt: Date,
  categories: String
});

mongoose.model('Project', projectSchema, 'projects');
