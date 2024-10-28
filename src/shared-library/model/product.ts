export class Product{
    id!:number;
    categroy!:string;
    price!:number;
    description!:string;
    image!:string;
    title!:string;
    rating!:Rating;
}

export class Rating{
    count!:number;
    rate!:number;
}