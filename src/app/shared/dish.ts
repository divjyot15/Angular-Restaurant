import { Comment } from "./Comment";
export class dish{
    id: number;
    name : string;
    description: string;
    price: string;
    image: string;
    active: boolean;
    comments: Comment[];
}