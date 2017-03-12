import { Location } from '../location';
import { User } from '../../shared';
import { Organization } from '../organization';
export class Project {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public image?: string,
        public remote?: string,
        public contactName?: string,
        public contactPhone?: string,
        public contactEmail?: string,
        public status?: string,
        public location?: Location,
        public user?: User,
        public organization?: Organization,
    ) {
    }
}
