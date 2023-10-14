"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let ReportService = class ReportService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async saleReportByYear1(id) {
        const sale = await this.prisma.sale.findMany({
            include: {
                saleDetail: {
                    include: {
                        product: true,
                    }
                }
            }
        });
        return sale;
    }
    async saleReportByYear() {
        const sales = await this.prisma.sale.findMany({
            include: {
                seller: true,
                saleDetail: {
                    include: {
                        product: true,
                    },
                }
            }
        });
        return sales;
    }
    async saleReportByMonth() {
        const sales = await this.prisma.sale.findMany({
            include: {
                seller: true,
                saleDetail: {
                    include: {
                        product: true,
                    },
                }
            }
        });
        return sales;
    }
    async saleReportByDay() {
        const sales = await this.prisma.sale.findMany({
            include: {
                seller: true,
                saleDetail: {
                    include: {
                        product: true,
                    },
                }
            }
        });
        return sales;
    }
    async saleDetail() {
        const sales = await this.prisma.saleDetail.findMany({
            include: {
                product: true
            }
        });
        return sales;
    }
    async saleDetailBySellId(id) {
        const sales = await this.prisma.saleDetail.findMany({
            where: { saleId: id },
            include: {
                product: true,
            }
        });
        return sales;
    }
    async sumTheGross() {
        const sumGross = async () => {
            try {
                const orders = await this.prisma.sale.findMany();
                let sum = 0;
                for (const order of orders) {
                    sum += order.grossAmount;
                }
                return sum;
            }
            catch (error) {
                throw new Error('An error occurred while calculating total sales.');
            }
        };
        return sumGross();
    }
    async saleTotalProduct() {
        const calculateTotalSales = async () => {
            try {
                const orders = await this.prisma.shopeProduct.findMany();
                const sum = orders.reduce((acc, order) => acc + order.quantity, 0);
                return sum;
            }
            catch (error) {
                throw new Error('An error occurred while calculating total sales.');
            }
        };
        return calculateTotalSales();
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ReportService);
//# sourceMappingURL=report.service.js.map