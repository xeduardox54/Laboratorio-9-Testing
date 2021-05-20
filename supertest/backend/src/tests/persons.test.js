import supertest from 'supertest'
import {app,server} from '../index'

const api = supertest(app)

const initialPersons = [
    {
        name: "Eduardo",
        number: "983848610"
    },
    {
        name: "Justi",
        number: "914818470"
    }
]

beforeEach(async (done)=>{
    await api
        .delete('/api/persons')
    await api
        .post('/api/persons')
        .send(initialPersons[0])
    await api
        .post('/api/persons')
        .send(initialPersons[1])
    done();
})

test('Se está retornando JSON', async (done)=>{
    await api
        .get('/api/persons')
        .expect(200)
        .expect('Content-Type',/application\/json/)
    done();
})

test('Se están retornando 2 elementos', async (done)=>{
    const response = await api.get('/api/persons')
    expect(await response.body.data).toHaveLength(initialPersons.length)
    done();
})

test('El nombre de la primera persona es Eduardo', async (done) => {
    const response = await api.get('/api/persons')
    expect(await response.body.data[0].name).toBe('Eduardo')
    done();
})

afterAll(()=>{
    server.close()
})