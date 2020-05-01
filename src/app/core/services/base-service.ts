import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DataServiceError } from './error-data';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseDataService {

    protected handleError(errorResponse: HttpErrorResponse): Observable<DataServiceError> {
        const applicationError = errorResponse.headers.get('Application-Error');
        const serverErrors = errorResponse.error;
        let serverError: string;
        if (serverErrors && serverErrors.identifier) {
            serverError = serverErrors.identifier;
        } else if (serverErrors && serverErrors.errors && serverErrors.errors.length > 0) {
            serverError = serverErrors.errors[0].identifier;
        }
        return throwError({
            status: errorResponse.status,
            identifier: applicationError || serverError || 'ServerError',
            error: errorResponse.error
        });
    }
}
