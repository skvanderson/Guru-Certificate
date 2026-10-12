import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const RevealBlock = styled.div`
  opacity: ${props => (props.$visible ? 1 : 0)};
  transform: translateY(${props => (props.$visible ? '0' : '28px')});
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: ${props => props.$delay || '0s'};
`;

const Reveal = ({ children, delay }) => {
  const [ref, visible] = useReveal();
  return (
    <RevealBlock ref={ref} $visible={visible} $delay={delay}>
      {children}
    </RevealBlock>
  );
};

export default Reveal;
export { useReveal };
