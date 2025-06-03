import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BaseMessage } from '@full-stack-project/shared';
import { AnalyticsService, SalesData } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
    constructor(private readonly analyticsService: AnalyticsService) {}

    @Get('sales-data')
    @ApiOperation({ summary: 'Sales data for Power BI dashboard.' })
    @ApiResponse({
        status: BaseMessage.SwaggerMessage.Response.Ok.Status,
        description: BaseMessage.SwaggerMessage.Response.Ok.Description
    })
    getSalesData(): SalesData[] {
        return this.analyticsService.getSalesData();
    }
}
