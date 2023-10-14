import { Field, InputType, Int } from "@nestjs/graphql";
import { product } from "src/product/product.entity";

@InputType()
export class CreateStoreInput {
    @Field(()=>Int)
    quantity:number;
    
    @Field(()=>Int)
    productId:number;

    @Field()
    product:product
}
