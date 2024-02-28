import request from 'supertest'
import { app, server } from '../app.js'
import db from '../database/db.js'
import BookModel from '../models/BookModel.js'


describe('Test Api books', () => {
   
    describe('GET /api/books', ()=>{
        let response;
        beforeEach( async() => {
        response = await request(app).get('/api/books').send()
        })

        test('should return a response with status 200 and type json', async() => {
			expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })

        test('should return all books', async() => {
            expect(response.body).toBeInstanceOf(Array);
        })
    
    })

    describe('POST /api/books',() =>{ 

        const newBook = {
            title: "test",
            writer: "test",
            book_description: "test",
        }

        const wrongBook = {
            wrong_field:'test'
        }

        test('should return a response with status 201 and type json', async () =>{
            const response = await request(app).post('/api/books').send(newBook)
            expect(response.status).toBe(201)
            expect(response.headers['content-type']).toContain('json')

        });

        test('should return a message book created successfully', async () =>{
            const response = await request(app).post('/api/books').send(newBook)
            expect(response.body.message).toContain("successfully")
        })

        test('should return a message insertion error If post wrong book ', async () =>{
            const response = await request(app).post('/api/books').send(wrongBook)
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("este campo no puede estar vacío")
        })

        afterAll(async() =>{
            await BookModel.destroy({where:{ title: 'test'}})
        })

    })

    describe('PUT /api/books', () =>{
        let createdBook = {};
        beforeEach(async () => {
            createdBook = await BookModel.create({ 
                title: "test",
                writer: "test",
                book_description: "test",
            });
        });

        afterAll(async() =>{
            await BookModel.destroy({where:{ id: createdBook.id}})
        })

        test('should return a response with status 201 and update successfully', async () => {
            const response = await request(app).put(`/api/books/${createdBook.id}`).send({title: "update test"});
            expect(response.status).toBe(201);
            expect(response.body.message).toContain("successfully!")
        })
    })

    describe('DELETE /Books', () =>{
        let createdBook = {};
        let response;
        beforeEach(async () => {
            createdBook = await BookModel.create({ 
                title: "test",
                writer: "test",
                book_description: "test",
            });

            response = await request(app).delete(`/api/books/${createdBook.id}`).send();
        });

        test('should return a response with status 200 and type json', () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        test('should return a message book deleted successfully', async () => {
            expect(response.body.message).toContain("has been delete successfully!");
            const foundBook = await BookModel.findOne({where:{ id: createdBook.id}});
            expect(foundBook).toBeNull();
        })


    })
    
    afterAll( () => { 
        db.close();
       server.close(); 
   }); 

})