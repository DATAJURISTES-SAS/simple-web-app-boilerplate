import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';

describe('AnalyticsController', () => {
    let controller: AnalyticsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AnalyticsController],
            providers: [AnalyticsService]
        }).compile();

        controller = module.get<AnalyticsController>(AnalyticsController);
    });

    it('should return sample sales data', () => {
        const data = controller.getSalesData();
        expect(data.length).toBeGreaterThan(0);
        expect(data[0]).toHaveProperty('category');
        expect(data[0]).toHaveProperty('sales');
    });
});
