import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

const StudioProfileWrapper = styled.div`
  grid-column: 2/5;
  grid-row: 1;
  margin-top: 2rem;
`;

const StudioProfileTextWrapper = styled.div`
  z-index: 50;
  height: 100%;
  max-height: 80vh;
  overflow-y: scroll;
  background-image: ${(props) => `url('./${props.image}.jpg')`};
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: 80% 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: max-content max-content max-content;
  transition: background-image 0.3s ease-in;
`;

const StudioProfileText = styled.p`
  font-size: 1.4vw;
  font-size: 2.8rem;
  margin-bottom: 2rem;
  pointer-events: none;
  color: inherit;
  mix-blend-mode: difference;
  color: #fff;
  z-index: 50;
  grid-column: 1/3;
  height: max-content;
`;

const Fade = styled.p`
  font-size: 1.4vw;
  font-size: 2.8rem;
  margin-bottom: 2rem;
  pointer-events: none;
  color: inherit;
  mix-blend-mode: difference;
  color: #fff;
  z-index: 50;
  grid-column: 1/3;
  /* height: max-content; */
  /* animation: ${(props) => (props.out ? fadeIn : fadeOut)} 1s linear; */
  transition: all 0.5s linear;
  /* visibility: ${(props) => (props.out ? 'visible' : 'hidden')}; */
  max-height: ${(props) => (props.out ? '400px' : '0')};
  height: auto;
  overflow: hidden;
`;

const ReadMoreButton = styled.button`
  font-size: 1.4vw;
  font-size: 2.8rem;
  font-family: Suisse Works, serif;
  grid-column: 1;
  align-self: flex-start;
  justify-self: start;
  span {
    text-decoration: underline dotted;
  }
`;

const HoverSpan = styled.span`
  text-decoration: underline dotted;
  text-underline-offset: 2px;
  pointer-events: auto;
`;

const fadeIn = keyframes`
  from {
    /* transform: scale(.25);
    opacity: 0; */
    max-height: 0;
  }

  to {
    max-height: 2000px;
    /* transform: scale(1);
    opacity: 1; */
  }
`;

const fadeOut = keyframes`
  from {
    /* transform: scale(1); */
    /* opacity: 1; */
    max-height: 2000px;
  }

  to {
    /* transform: scale(.25); */
    /* opacity: 0; */
    max-height: 0;
  }
`;

export const ProfileAbout = () => {
  // const [readMore, setReadMore] = useState(false);
  const [fade, setFade] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const { t } = useTranslation();

  const toggleReadMore = () => {
    setFade(!fade);
    // setTimeout(() => setReadMore(!readMore), 1000);
  };
  return (
    <StudioProfileWrapper>
      <StudioProfileTextWrapper image={backgroundImage}>
        <StudioProfileText>
          {t('Established')}{' '}
          <HoverSpan
            onMouseEnter={() => setBackgroundImage('bjorn')}
            onMouseLeave={() => setBackgroundImage(null)}
          >
            Bjorn Verlinde??
          </HoverSpan>{' '}
          {t('Designer')}{' '}
          <HoverSpan
            onMouseEnter={() => setBackgroundImage('team')}
            onMouseLeave={() => setBackgroundImage(null)}
          >
            team??
          </HoverSpan>{' '}
        </StudioProfileText>
        {/* {readMore ? 
        <Fade out={fade}>{t('AboutMore')}</Fade> 
        : ''} */}
        <Fade out={fade}>{t('AboutMore')}</Fade>
        <ReadMoreButton onClick={() => toggleReadMore()}>
          {fade ? '-' : '+'}{' '}
          <span>{fade ? `${t('ReadLess')}` : `${t('ReadMore')}`}</span>
        </ReadMoreButton>
      </StudioProfileTextWrapper>
    </StudioProfileWrapper>
  );
};
