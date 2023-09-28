import { Step } from "./Step";

export class Card {
    title = ''
    steps: Step[] = []

    mock(): Card {
        const card = new Card();
        card.title = "Mock card";
        card.steps.push(new Step(0, "Walk", 10))
        card.steps.push(new Step(1, "Run", 20))
        card.steps.push(new Step(2, "Rest", 30))

        return card;
    }
}

