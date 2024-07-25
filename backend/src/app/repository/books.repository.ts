import { BookDto } from "../dto/bookDto";

abstract class BooksRepository {
    abstract create(dto: BookDto): void;
}
export { BooksRepository };