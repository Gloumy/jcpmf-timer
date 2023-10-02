import { JsonObject, JsonProperty } from "json2typescript";
import { Step } from "./Step";
@JsonObject("Card")
export class Card {
    @JsonProperty("week", Number)
    week = 0;
    @JsonProperty("day", Number)
    day = 0
    @JsonProperty("steps", [Step])
    steps: Step[] = []

    displayTitle(): string {
        return "Semaine " + this.week;
    }
}

