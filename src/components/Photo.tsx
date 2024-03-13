import styled from 'styled-components';

export const Photo = styled.img.attrs((props) => ({
  src: props.src,
  width: props.width || '100%',
  height: props.height,
  alt: props.alt,
}))`
  position: relative;
  display: block;
  width: ${props => props.width};
  height: ${props => props.height};
  object-fit: cover;
`