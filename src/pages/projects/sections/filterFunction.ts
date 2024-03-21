import { ProjectCardPropsType } from "../../../components/projectsGallery/projectCard/ProjectCard";

export function filterWorks(works: Array<ProjectCardPropsType>, currentFilterStatus: string) {

    if (currentFilterStatus === 'All') {
        return works;
    }
    return works.filter((work) => work.tags.find(el => el === currentFilterStatus));
}
