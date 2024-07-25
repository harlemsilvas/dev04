import { Router } from 'express';
import { BooksController } from '../../app/controllers/books.controller';
import { BooksRepositoryMongoose } from '../repository/books.repository';

export const BookRoutes = (router: Router)=>{
    const booksUseCase = new booksUseCase(new BooksRepositoryMongoose)
    const booksController = new BooksController(booksUseCase);
    router.post('/books', routerAdapter(booksController, 'create'));
};
