
const env = 'prod'


var baseUrl = 'http://localhost:8000/v1/';

if (env === 'prod') {
    baseUrl = 'https://new-way-to-learn.onrender.com/v1/'
}


// http://localhost:8000/v1/student
// http://localhost:8000/v1/student
// http://localhost:8000/v1/invoice
// http://localhost:8000/v1/invoice/

export const studentUrl = baseUrl + 'student';
export const invoiceUrl = baseUrl + 'invoice';
