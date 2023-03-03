import { InfoContact } from './InfoContact';
import { InfoImprint } from './InfoImprint';
import InfoPrivacy from './InfoPrivacy';
import { infoViews } from './infoViews';

export const InfoViewSwitch = ({ view }) => {
  switch (view) {
    case infoViews.IMPRINT:
      return <InfoImprint />;
    case infoViews.PRIVACY:
      return <InfoPrivacy />;
    default:
      return <InfoContact />;
  }
};
