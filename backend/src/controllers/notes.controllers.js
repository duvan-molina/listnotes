const noteCtrl = {}
const noteModels = require('../models/Notes');

noteCtrl.getNote = async (req, res) => {
  const notes = await noteModels.find();
  res.json(notes);
}
noteCtrl.postNote = async (req, res) => {
  const { title, content, author, date} = req.body;
  const newNote = noteModels({
    title,
    content,
    author,
    date
  });
  await newNote.save();
  res.json({message: 'tu nota fue guardada con exito'});
}
noteCtrl.getViewNote = async (req, res) => {
  const note = await noteModels.findById(req.params.id)
  res.json(note)
}
noteCtrl.putNote = async (req, res) => {
  const {title, content, author, date} = req.body;
  await noteModels.findOneAndUpdate({_id: req.params.id},  {
    title,
    content,
    author,
    date
  });
  res.json({message: 'se actualizo con exito'});
}
noteCtrl.deleteNote = async (req, res) =>  {
  await noteModels.findByIdAndDelete(req.params.id);
  res.json({message: 'nota eliminada'});
}

module.exports = noteCtrl;