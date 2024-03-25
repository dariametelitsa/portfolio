import styled from "styled-components";
import { motion } from "framer-motion";
import { mainTheme } from "../../../components/styles/Theme";

export const ProgressBar = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: ${mainTheme.colors.accent};
    transform-origin: 0;
    z-index: 99;
`