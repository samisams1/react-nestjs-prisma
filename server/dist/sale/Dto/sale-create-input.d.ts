import { CreateSaleDetailInput } from 'src/sale-detail/Dto/sale-detail-create-input';
export declare class CreateSaleInput {
    vat: number;
    net: number;
    grossAmount: number;
    sellerId: number;
    status: string;
    saleDetail: CreateSaleDetailInput[];
}
