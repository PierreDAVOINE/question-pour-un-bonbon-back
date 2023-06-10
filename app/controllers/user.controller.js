const { User } = require('../models');
const bcrypt = require('bcryptjs');

const controller = {
  //* Créer un compte utilisateur
  signup: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      // On vérifie si l'utilisateur existe déjà en BDD
      const emailAlreadyUse = await User.findOne({ where: { email } });
      // Si l'email est déjà utilisé on prévient le client
      if (emailAlreadyUse) {
        console.log('Email déjà utilisé.');
        res.status(401).json({
          message: 'Un compte éxiste déjà avec cette adresse email.',
        });
      }
      // On hash le mot de passe
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      // On crée l'utilisateur en BDD
      const user = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
      });
      // Si l'utilisateur a été créee, on le renvoie
      if (user) {
        return res.status(201).json(user);
      } else {
        // Sinon on lève une erreur
        throw new Error();
      }
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: 'Le serveur à rencontré un problème.' });
    }
  },

  //* Se connecter
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      // On vérifie si l'utilisateur existe en BDD
      const user = await User.findOne({ where: { email } });
      console.log(email);
      console.log(user);
      // Si l'utilisateur n'existe pas, on prévient le client
      if (!user) {
        console.log('Utilisateur non trouvé.');
        return res.status(404).json({ message: 'Identifiants incorrect.' });
      }
      // On compare le mot de passe envoyé par le client avec celui en BDD
      const isMatch = await bcrypt.compare(password, user.password);
      // Si le mot de passe ne correspond pas, on prévient le client
      if (!isMatch) {
        console.log('Identifiants incorrect.');
        return res.status(401).json({ message: 'Identifiants incorrect.' });
      }
      // Sinon, on renvoie l'utilisateur
      // TODO: Gérer le JWT
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: 'Le serveur à rencontré un problème.' });
    }
  },

  //* Modifier les informations d'un utilisateur
  updateUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const { field, value } = req.body;
      // On vérifie si l'utilisateur existe en BDD
      const user = await User.findByPk(userId);
      // Si l'utilisateur n'existe pas, on prévient le client
      if (!user) {
        console.log('Utilisateur non trouvé.');
        return res.status(404).json({ message: 'Utilisateur non trouvé.' });
      }
      // Sinon on met à jour l'utilisateur
      const userUpdated = await user.update(
        { [field]: value },
        { where: { id: userId } }
      );
      // On prévient le client que l'utilisateur a bien été mis à jour
      if (!userUpdated) {
        console.log("Impossible de mettre à jour l'utilisateur.");
        return res
          .status(500)
          .json({ message: "Impossible de mettre à jour l'utilisateur." });
      }
      return res.json(userUpdated);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: 'Le serveur à rencontré un problème.' });
    }
  },

  // TODO: Vérifier suppression en cascade
  //* Supprimer un compte utilisateur
  deleteUser: async (req, res) => {
    try {
      const { userId } = req.params;
      // On vérifie si l'utilisateur existe en BDD
      const user = await User.findByPk(userId);
      // Si l'utilisateur n'existe pas, on prévient le client
      if (!user) {
        console.log('Utilisateur non trouvé.');
        return res.status(404).json({ message: 'Utilisateur non trouvé.' });
      }
      // On supprime l'utilisateur
      await user.destroy();
      // On prévient le client que l'utilisateur a bien été supprimé
      return res.json({ message: 'Utilisateur supprimé.' });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: 'Le serveur à rencontré un problème.' });
    }
  },
};

module.exports = controller;
