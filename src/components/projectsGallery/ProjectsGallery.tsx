import React from 'react';
import { ProjectCard } from "./projectCard/ProjectCard";
import { S } from "./ProjectsGalleryStyles";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCardProps, ProjectsGalleryProps } from "../../assets/Types";


export const ProjectsGallery: React.FC<ProjectsGalleryProps> = (props: ProjectsGalleryProps) => {
    return (
        <S.GridWrap role={'group'}>
            <AnimatePresence>
            {
                props.projects.slice(0, props.size || props.projects.length).map((el: ProjectCardProps) => {
                    return (
                        <motion.div
                            initial={{x: 300, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: -300, opacity: 0}}
                            transition={{duration: 0.5}}
                            key={el.id}
                            layout
                        >
                            <ProjectCard
                                src={el.src}
                                tags={el.tags}
                                title={el.title}
                                text={el.text}
                                buttonText={el.buttonText}
                                projectLink={el.projectLink}
                                id={el.id}
                            />

                        </motion.div>
                    );
                })
            }
            </AnimatePresence>
        </S.GridWrap>
    );
};



