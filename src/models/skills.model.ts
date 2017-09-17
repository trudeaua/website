export class Skill {
    description: string;
    icon: string;
    id: number;
    label: string;
    link: string;

    constructor(id: number, icon: string, label: string, description: string, link?: string) {
        this.id = id;
        this.description = description;
        this.icon = icon;
        this.label = label;
        this.link = link;
    }
}