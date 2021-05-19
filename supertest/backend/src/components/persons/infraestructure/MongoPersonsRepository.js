import MongoLib from '../../../lib/mongo';

class MongoPersonsRepository { // implement an interface
  constructor () {
    // super()
    this.collection = 'persons'
    this.mongoDB = new MongoLib()
  }

  async add (person) {
    const id = await this.mongoDB.create(this.collection, person)
    return { id, ...person }
  }

  async get (id) {
    return this.mongoDB.get(this.collection,id)
  }

  async getAll () {
    return this.mongoDB.getAll(this.collection)
  }

  async update (id,person) {
    const id_person = await this.mongoDB.update(this.collection, id, person)
    return { id_person, ...person }
  }

  async delete (id) {
    const id_person = await this.mongoDB.delete(this.collection, id)
    return id_person
  }
}

export default MongoPersonsRepository