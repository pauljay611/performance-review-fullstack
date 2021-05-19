export interface IUser {
  id: number;
  username: string;
  user_id: string;
  password: string;
  name: string;
  is_admin: boolean;
}

export interface IReview {
  id: number;
  reviewer_id: string;
  employee_id: string;
  feedback: string;
  is_reviewed: boolean;
}