import styled from 'styled-components';
import { motion } from 'framer-motion';
import { InfoContact } from './InfoContact';
import { useState } from 'react';

const InfoImprintWrapper = styled.div`
  padding-top: 2rem;
  background: #e3e3e3;
  min-height: 80vh;
`;

const MotionContainer = motion(InfoImprintWrapper);

const InfoImprintText = styled.p`
  font-size: 1.25vw;
  font-size: 1.8rem;
  margin-bottom: 4rem;
`;

const ImprintTitle = styled.span`
  text-transform: uppercase;
`;

const CreditsList = styled.ul`
  font-family: Base Grotesk, sans-serif;
  font-size: 1vw;
  font-size: 1.5rem;
  padding: 0;
  list-style: none;
`;

const CreditListItem = styled.li``;

const CreditItemTitle = styled.span`
  font-family: Suisse Works, serif;
  font-size: 1.5vw;
  font-size: 2rem;
`;

export const InfoImprint = ({ isPrivacy: isPrivacyView }) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <>
      {!isPrivacyView && (
        <InfoContact
          styles={{
            position: 'absolute',
            maxWidth: '75vw',
            display: isDone ? 'none' : 'block',
          }}
        />
      )}
      <MotionContainer
        initial={!isPrivacyView ? { translateY: '100vh' } : false}
        animate={{ translateY: '0' }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={(e) => {
          setIsDone(true);
        }}
        style={{ margin: '0 -2rem' }}
      >
        <InfoImprintText>
          Responsible for the content of this website: <br /> Studio Bjorn
          Verlinde, Hugo Verriestlaan 5 B - 8800 Roeselare, (Belgium),+32 (0)499
          737 487 Ondernemingsnr. BE 0659 715 014, Arrondissement Kortrijk
        </InfoImprintText>
        <CreditsList>
          <ImprintTitle>CREDITS</ImprintTitle> <br />
          <CreditListItem>
            <CreditItemTitle>Brando,</CreditItemTitle> Design & development
          </CreditListItem>
          <CreditListItem>
            <CreditItemTitle>Typefaces,</CreditItemTitle> Suisse Works & Muoto{' '}
          </CreditListItem>
          <CreditListItem>
            <CreditItemTitle>
              Frederik Vercruysse, Nathan Van Haver, Lies Willaert,
            </CreditItemTitle>{' '}
            Photographers
          </CreditListItem>
          <CreditListItem>
            <CreditItemTitle>Bliksem&Donder,</CreditItemTitle> Texts
          </CreditListItem>
        </CreditsList>
      </MotionContainer>
    </>
  );
};
