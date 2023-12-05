import { observer } from "mobx-react-lite";
import { Outlet } from 'react-router-dom';
import { NavBar } from 'cfx/apps/mpMenu/parts/NavBar/NavBar';
import { AuthFlyout } from 'cfx/apps/mpMenu/parts/AuthFlyout/AuthFlyout';
import { SettingsFlyout } from 'cfx/apps/mpMenu/parts/SettingsFlyout/SettingsFlyout';
import { ThemeManager } from 'cfx/apps/mpMenu/parts/ThemeManager/ThemeManager';
import { LegacyConnectingModal } from 'cfx/apps/mpMenu/parts/LegacyConnectingModal/LegacyConnectingModal';
import { LegacyUiMessageModal } from 'cfx/apps/mpMenu/parts/LegacyUiMessageModal/LegacyUiMessageModal';
import { ServerBoostModal } from 'cfx/apps/mpMenu/parts/ServerBoostModal/ServerBoostModal';
import { AcitivityItemMediaViewerProvider } from '../AcitivityItemMediaViewer/AcitivityItemMediaViewer.context';
import { LegalAccepter } from "cfx/apps/mpMenu/parts/LegalAccepter/LegalAccepter";
import { useLegalService } from "cfx/apps/mpMenu/services/legal/legal.service";
import { NavigationTracker } from './PageViewTracker';
import s from './MpMenuApp.module.scss';

function MpMenuUI() {
  return (
    <>
      <NavigationTracker />

      <AuthFlyout />
      <SettingsFlyout />

      <LegacyConnectingModal />
      <LegacyUiMessageModal />

      <ServerBoostModal />

      <div className={s.root}>
        <NavBar />

        <div className={s.outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export const MpMenuApp = observer(function MpMenuApp() {
  const legalService = useLegalService();

  const mainUI = legalService.hasUserAccepted
    ? <MpMenuUI />
    : <LegalAccepter />;

  return (
    <AcitivityItemMediaViewerProvider>
      <ThemeManager />

      {mainUI}
    </AcitivityItemMediaViewerProvider>
  );
});
