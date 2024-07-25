
import { BookDto } from '../dto/bookDto';
import { BookuseCases } from '../useCases/books.usecase';


class BooksController {
    constructor(private readonly booksUseCase: BookuseCases){
        //this.booksUsecase = new BookuseCases()  //como não é uma classe abstrata
    }

async create(httpRequest: HttpRequest): Promise<HttpResponse> {
    const body: BookDto = httpRequest.body;
    //console.log(' ~ BooksController ~ create ~ body:', body);
    try {
        const response = await this.booksUseCase.createBook(body);
        return {
            status: 201,
            message: 'Book Created',
            data: response,
        };
    } catch (error: any) {
        return {
            status: 400,
            message: error.message,
        };
    }
    }
}
export { BooksController };
/**     
    show(){
        //retornar todos os livros        
    }
    find(){
        //retornar um livro
    }
    create(HttpRequest: HttpRequest): Promise<HttpResponse>{
      //criar um livro  
      return new Promise((resolve) => {
        return resolve({ status: 200, message: 'Livro criado com sucesso'});
        });
    }
*/

