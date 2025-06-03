import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { environment } from '../config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnalyticsModule } from './analytics';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            ignoreEnvFile: true,
            load: [environment]
        }),
        TerminusModule,
        AnalyticsModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
