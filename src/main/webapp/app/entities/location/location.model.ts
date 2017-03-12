import { Country } from '../country';
export class Location {
    constructor(
        public id?: number,
        public streetAddress1?: string,
        public streetAddress2?: string,
        public city?: string,
        public stateProvince?: string,
        public postalCode?: string,
        public country?: Country,
    ) {
    }
}
