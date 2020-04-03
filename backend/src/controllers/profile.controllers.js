const profileCtrl = {}
const profileModels = require('../models/Profile');

profileCtrl.getProfilie = async (req, res) => {
  const profile = await profileModels.find();
  res.json(profile);
}
profileCtrl.postProfile = async (req, res) => {
  const { profile } = req.body;
  const newProfile = new profileModels({
    profile
  })
  await newProfile.save();
  res.json({message: 'tu perfil se guardo con exito'});
}
profileCtrl.deleteProfile = async (req, res) => {
  await profileModels.findByIdAndDelete(req.params.id);
  res.json({message: 'el usuario fue eliminado'})
}

module.exports = profileCtrl;