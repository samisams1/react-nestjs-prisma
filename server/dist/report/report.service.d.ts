import { Sale, SaleDetail } from '@prisma/client';
export declare class ReportService {
    private prisma;
    constructor();
    saleReportByYear1(id: number): Promise<Sale[] | null>;
    saleReportByYear(): Promise<Sale[]>;
    saleReportByMonth(): Promise<Sale[]>;
    saleReportByDay(): Promise<Sale[]>;
    saleDetail(): Promise<({
        product: {
            id: number;
            name: string;
            price: number;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            image: string;
            code: string;
            categoryId: number;
        };
    } & {
        id: number;
        saleId: number;
        quantity: number;
        productId: number;
        price: number;
        amount: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    saleDetailBySellId(id: number): Promise<SaleDetail[]>;
    sumTheGross(): Promise<number>;
    saleTotalProduct(): Promise<number>;
}
