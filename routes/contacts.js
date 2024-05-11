const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

// Create POST route here.
router.post('/', contactsController.createContact);

// Create PUT Contact route here
router.put('/:id', contactsController.updateContact);

// Create Delete Route
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
