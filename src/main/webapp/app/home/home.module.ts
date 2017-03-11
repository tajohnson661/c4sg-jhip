import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { C4SgSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';


@NgModule({
    imports: [
        C4SgSharedModule,
        RouterModule.forRoot([ HOME_ROUTE ], { useHash: true })
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class C4SgHomeModule {}
