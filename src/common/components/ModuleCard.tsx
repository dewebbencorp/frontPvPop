import { useHistory } from 'react-router-dom';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';
import IModuleCard from '../interfaces/IModuleCard';

const ModuleCard: React.FC<IModuleCard> = ({ title, subtitle, description, path }) => {
    const history = useHistory();

    const handleHome = () => {
        history.push(path);
    };

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
                <IonCardSubtitle>{subtitle}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>{description}</IonCardContent>

            <IonButton onClick={handleHome} expand="block">
                Go to { title }
            </IonButton>
        </IonCard>
    );
};

export default ModuleCard;
