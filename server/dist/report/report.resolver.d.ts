import { Sale } from '@prisma/client';
import { ReportService } from './report.service';
export declare class ReportResolver {
    private reportService;
    constructor(reportService: ReportService);
    dailyReport(): Promise<Sale[]>;
    monthReport(): Promise<Sale[]>;
    yearReport(): Promise<Sale[]>;
}
