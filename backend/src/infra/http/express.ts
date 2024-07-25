import express, { Application } from 'express'; 
import cors from 'cors';
//import { errorMiddleware } from '../middlewares/error.middleware';
import { BookRoutes } from '../router/books.routes';
import { connect } from '../database/mongoose';
import dotenv from 'dotenv';
dotenv.config();
class Express {
    app: Application;
    constructor(){
        this.app = express();
        this.initMiddlewares();
    //    this.errorMiddleware();
        BookRoutes(this.app);
    }
    private initMiddlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true}));
        this.app.use(cors());
    }
    /** 
    private errorMiddleware(){
        this.app.use(errorMiddleware);
    }
    */
    
    listen(){
   //     this.app.listen(3333, () => console.log('Server is running on port 3333'));        
        this.app.listen(3333, () => {
            connect();
            console.log('Server is running on port 3333');        
        });
    }
}
export default Express;