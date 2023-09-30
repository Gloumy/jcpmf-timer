import { JsonObject, JsonProperty } from "json2typescript";
import { Step } from "./Step";
@JsonObject("WeekDay")
export class WeekDay {
    @JsonProperty("day", Number)
    day = 0
    @JsonProperty("steps", [Step])
    steps: Step[] = []
}

