import MongoPersonsRepository from './infraestructure/MongoPersonsRepository'
import getPerson from './application/getPerson'
import getAllPersons from './application/getAllPersons'
import createPerson from './application/createPerson'
import updatePerson from './application/updatePerson'
import deletePerson from './application/deletePerson'
const PersonsRepository = new MongoPersonsRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

export const getOnePerson = async (req, res, next) => {
  try {
    const query = getPerson({ PersonsRepository })
    const person = await query(req.params)
    res.status(200).json({
      data: person,
      message: 'Person listed',
    })
  } catch (e) {
    next(e)
  }
}

export const getPersons = async (_, res, next) => {
  try {
    const query = getAllPersons({ PersonsRepository })
    const persons = await query()
    res.status(200).json({
      data: persons,
      message: 'Persons listed',
    })
  } catch (e) {
    next(e)
  }
}

export const newPerson = async (req, res, next) => {
  try {
    const query = createPerson({ PersonsRepository })
    const person = await query(req.body)
    res.status(201).json({
      data: person,
      message: 'Persons created',
    })
  } catch (e) {
    next(e)
  }
}

export const updateOnePerson = async (req, res, next) => {
  try {
    const query = updatePerson({ PersonsRepository })
    const person = await query(req.params,req.body)
    res.status(201).json({
      data: person,
      message: 'Person updated',
    })
  } catch (e) {
    next(e)
  }
}

export const delPerson = async (req, res, next) => {
  try {
    const query = deletePerson({ PersonsRepository })
    const id = await query(req.params)
    res.status(201).json({
      id: id,
      message: 'Person deleted',
    })
  } catch (e) {
    next(e)
  }
}