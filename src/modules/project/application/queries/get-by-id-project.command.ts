import { ICommand } from '@nestjs/cqrs';

export class GetByIdProjectCommand implements ICommand {

    readonly _id: number;

    constructor(id: number) {
        this._id = id;
    }

    /**
     * @returns {number}
     */
    get id(): number {
        return this._id;
    }
}
