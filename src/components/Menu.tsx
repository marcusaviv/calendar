import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, pizzaOutline, iceCreamOutline, receiptOutline, personOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'העמוד שלי',
    url: '/page/mypage',
    iosIcon: personOutline,
    mdIcon: personOutline
  },
  {
    title: 'מתכונים שהכנתי',
    url: '/page/revent',
    iosIcon: receiptOutline,
    mdIcon: receiptOutline
  },
  {
    title: 'בישול',
    url: '/page/cookingrecipe',
    iosIcon: pizzaOutline,
    mdIcon: pizzaOutline

  },
  {
    title: 'אפייה',
    url: '/page/bakingrecipe',
    iosIcon: iceCreamOutline,
    mdIcon: iceCreamOutline
  },
  {
    title: 'מתכונים אהובים',
    url: '/page/Favoritesrecipe',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
 
 
 
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
