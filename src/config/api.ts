
import { environment } from "../environments/environment";


var baseUrl = '';

if (environment.production) {
    baseUrl = 'https://new-way-to-learn.onrender.com/v1/'
}else{
    baseUrl = 'http://localhost:8000/v1/';
}


export const studentUrl = baseUrl + 'student';
export const invoiceUrl = baseUrl + 'invoice';
export const loginUrl = baseUrl + 'auth/login';
