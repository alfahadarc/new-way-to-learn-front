export interface Invoice {
    id: number;
    created_at: Date;
    month: string;
    amount: number;
    student_id: number;
    student: {
        name: string;
        mobile: string;
    }
}
