import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { C4SgCountryModule } from './country/country.module';
import { C4SgLocationModule } from './location/location.module';
import { C4SgOrganizationModule } from './organization/organization.module';
import { C4SgProjectModule } from './project/project.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        C4SgCountryModule,
        C4SgLocationModule,
        C4SgOrganizationModule,
        C4SgProjectModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class C4SgEntityModule {}
