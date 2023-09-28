export class Step {
    constructor(index: number, type: string, duration: number) {
        this.index = index;
        this.type = type;
        this.duration = duration;
    }

    index = 0;
    type = '';
    duration = 0;
}