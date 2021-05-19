
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoPersonsRepository')} obj.PersonsRepository
 */
export default ({ PersonsRepository }) => {
    return async ({id}) => {
        return PersonsRepository.get(id)
    }
}
  