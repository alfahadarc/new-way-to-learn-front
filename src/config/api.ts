
import { environment } from "../environments/environment";


var baseUrl = '';

if (environment.production) {
    baseUrl = 'https://new-way-to-learn.onrender.com/v1/';
}else{
    baseUrl = 'https://new-way-to-learn.onrender.com/v1/';
}


export const studentUrl = baseUrl + 'student';
export const invoiceUrl = baseUrl + 'invoice';
export const loginUrl = baseUrl + 'auth/login';

export const moduleUrl = baseUrl + 'module';

// http://localhost:8000/v1/student/addOngoing/97a2d57f-bb8e-4004-851c-c4efb50b4a/4
