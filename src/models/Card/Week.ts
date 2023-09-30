import { JsonObject, JsonProperty } from "json2typescript";
import { WeekDay } from "./WeekDay";

@JsonObject("Week")
export class Week {
    @JsonProperty("weekNumber", Number)
    weekNumber = 0;
    @JsonProperty("days", [WeekDay])
    days: WeekDay[] = []

    displayTitle(): string {
        return "Semaine " + this.weekNumber;
    }
}