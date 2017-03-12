import { Location } from '../location';
import { Project } from '../project';
import { User } from '../../shared';
export class Organization {
    constructor(
        public id?: number,
        public name?: string,
        public url?: string,
        public logo?: string,
        public description?: string,
        public location?: Location,
        public project?: Project,
        public user?: User,
    ) {
    }
}
