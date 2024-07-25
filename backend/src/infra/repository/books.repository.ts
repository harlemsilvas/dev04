import mongoose from "mongoose";
import { BookDto } from "../../app/dto/bookDto";

const booksSchema = new mongoose.Schema({
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: { $date: String },
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    authors: [String],
    categories: [String],
});
const Books = mongoose.model('books', booksSchema);

class BooksRepositoryMongoose implements BooksRepository {
    create(dto: BookDto) {
        const books = new Books(dto);
        return books.save();        
    }
}
export { BooksRepositoryMongoose };