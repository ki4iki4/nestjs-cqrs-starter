import { IEvent } from '@nestjs/cqrs';
import { Project } from '../../domain/project';

export class StoreProjectEvent implements IEvent {

    readonly _project: Project;

    /**
     * @param {Project} project
     */
    constructor(project: Project) {
        this._project = project;

    }

    /**
     * @returns {Project}
     */
    get project(): Project {
        return this._project
    }
}
