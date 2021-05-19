
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoPersonsRepository')} obj.PersonsRepository
 */
 export default ({ PersonsRepository }) => {
    return async ({id},{name,number}) => {
        const Person = {
            name: name,
            number: number,
        };
        return PersonsRepository.update(id,Person)
    }
}
  