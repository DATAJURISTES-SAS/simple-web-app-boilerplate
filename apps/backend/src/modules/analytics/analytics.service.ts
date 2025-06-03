import { Injectable } from '@nestjs/common';

export interface SalesData {
    category: string;
    sales: number;
}

@Injectable()
export class AnalyticsService {
    getSalesData(): SalesData[] {
        return [
            { category: 'Electronics', sales: 1200 },
            { category: 'Clothes', sales: 900 },
            { category: 'Home', sales: 600 }
        ];
    }
}
