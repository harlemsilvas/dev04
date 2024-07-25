import { errorMiddleware } from "../middlewares/error.middleware";

export const routeAdapter = ( controler: any, method: string)=> {
    return assync (req: Request, res: Response, next: NextFunction) => {
        const httpRequest: HttpRequest = {
            body: req?.body,
            headers: req?.headers,
            params: req?.params,
            query: req?.query,
        };
        const httpResponse = await controler.[method](httpRequest);
        if(httpResponse.status >= 200) && httpResponse.status <= 299){
            return res.status(httpResponse.status).json(httpResponse);
        } else {
            return errorMiddleware(httpResponse, req, res, next);    
        }
    };
};