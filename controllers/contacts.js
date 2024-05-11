const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');
const contactId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new contactId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createContact = async (req, res, next) => {
  try {
    const newContact = req.body;
    // console.log('grant', newContact);
    const result = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .insertOne(newContact);
    res.status(201).json({ id: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateContact = async (req, res, next) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const newData = req.body;
    console.log('grant', newData);

    const result = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .findOneAndUpdate({ _id: contactId }, { $set: newData });
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(204).json({ message: 'Contact updated succesfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteContact = async (req, res, next) => {};
module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
};
