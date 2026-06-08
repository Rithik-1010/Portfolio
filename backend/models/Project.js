const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  description: { type: String, required: true },
  tech: [{ type: String }],
  status: { type: String },
  statusLabel: { type: String },
  link: { type: String },
  type: { type: String },
  highlight: { type: Boolean, default: false },
  accentColor: { type: String },
  hasScreenshots: { type: Boolean, default: true },
  disclaimer: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
