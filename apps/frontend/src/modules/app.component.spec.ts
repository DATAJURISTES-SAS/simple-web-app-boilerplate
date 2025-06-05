import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RestApiService } from './shared/services';
import { ApiRoute } from './shared/constants';
import { NGXLogger } from 'ngx-logger';
import { CONFIG } from '../config/config';
import { IBaseResponse } from '@full-stack-project/shared';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let restApiService: jasmine.SpyObj<RestApiService>;
    let loggerService: jasmine.SpyObj<NGXLogger>;

    beforeEach(async () => {
        const response: IBaseResponse<{ Information: string }> = {
            IsSuccess: true,
            Message: '',
            Data: { Information: 'test-information' },
            Errors: []
        };

        restApiService = jasmine.createSpyObj('RestApiService', ['get']);
        restApiService.get.and.resolveTo(response);
        loggerService = jasmine.createSpyObj('NGXLogger', ['info', 'error']);

        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [BrowserModule, RouterTestingModule],
            providers: [
                { provide: RestApiService, useValue: restApiService },
                { provide: NGXLogger, useValue: loggerService }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should call RestApiService.get and handle response', async () => {
        await component.ngOnInit();

        expect(restApiService.get).toHaveBeenCalledWith(ApiRoute.Base.RootRoute);
        expect(loggerService.info).toHaveBeenCalledWith(
            `Frontend application starts successfully for ${CONFIG.environment} environment`
        );
        expect(loggerService.info).toHaveBeenCalledWith('test-information');
        expect(loggerService.error).not.toHaveBeenCalled();
    });
});
