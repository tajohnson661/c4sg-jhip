import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { C4SgSharedModule } from '../../shared';

import {
    CountryService,
    CountryPopupService,
    CountryComponent,
    CountryDetailComponent,
    CountryDialogComponent,
    CountryPopupComponent,
    CountryDeletePopupComponent,
    CountryDeleteDialogComponent,
    countryRoute,
    countryPopupRoute,
} from './';

let ENTITY_STATES = [
    ...countryRoute,
    ...countryPopupRoute,
];

@NgModule({
    imports: [
        C4SgSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        CountryComponent,
        CountryDetailComponent,
        CountryDialogComponent,
        CountryDeleteDialogComponent,
        CountryPopupComponent,
        CountryDeletePopupComponent,
    ],
    entryComponents: [
        CountryComponent,
        CountryDialogComponent,
        CountryPopupComponent,
        CountryDeleteDialogComponent,
        CountryDeletePopupComponent,
    ],
    providers: [
        CountryService,
        CountryPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class C4SgCountryModule {}
