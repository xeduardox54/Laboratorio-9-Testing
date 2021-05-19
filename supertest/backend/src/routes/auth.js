import express from 'express';
import {
    getOnePerson,
    getPersons,
    newPerson,
    updateOnePerson,
    delPerson
} from '../components/persons/controller';
import validationHandler from '../utils/middlewares/validationHandler';
import {getPersonSchema,createPersonSchema,updatePersonSchema} from '../components/persons/domain/person';

const router = express.Router();

router.get('/info',(req,res) => {
    res.send(`<h3>Phonebook has info for ${persons.length} people</h3><h3>`+now+"</h3>");
});
router.get('/api/persons',validationHandler(getPersonSchema),getPersons);
router.get('/api/persons/:id',validationHandler(getPersonSchema),getOnePerson);
router.delete('/api/persons/:id',validationHandler(getPersonSchema),delPerson);
router.put('/api/persons/:id',validationHandler(updatePersonSchema),updateOnePerson);
router.post('/api/persons',validationHandler(createPersonSchema),newPerson);

export default router;