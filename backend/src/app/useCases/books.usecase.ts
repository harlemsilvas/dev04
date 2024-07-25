import { BookDto } from "../dto/bookDto";
import { BooksRepository } from "../repository/books.repository";

class BookuseCases{
    private booksRepository: BooksRepository;
    constructor(booksRepository: BooksRepository){
        this.booksRepository = new BooksRepository();
    }
    async createBook(dto: BookDto){
        this.booksRepository.create(dto); //unico método é o Create
    }
}
export { BookuseCases };