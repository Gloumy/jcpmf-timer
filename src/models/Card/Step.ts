import { JsonObject, JsonProperty } from "json2typescript";
@JsonObject("Step")
export class Step {
    @JsonProperty("type", String)
    type = '';
    @JsonProperty("duration", Number)
    duration = 0;

    displayType(): string {
        switch (this.type) {
            case "E/S":
                return "Echauffement";
            case "C":
                return "Course";
            case "M":
                return "Marche";
            case "RC":
                return "Récupération";
            case "M/T":
                return "Trottiner";
            default:
                return this.type;
        }
    }
    
    displayDuration(): number {
        return this.duration / 6000;
    }
}