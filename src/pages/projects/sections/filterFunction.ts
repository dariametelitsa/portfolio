import { ProjectCardProps } from "../../../assets/Types";

export function filterWorks(works: Array<ProjectCardProps>, currentFilterStatus: string) {

    if (currentFilterStatus === 'All') {
        return works;
    }
    return works.filter((work) => work.tags.find(el => el === currentFilterStatus));
}
