import { useHistory } from 'react-router-dom';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';
import IModuleCard from '../interfaces/IModuleCard';

const ModuleCard: React.FC<IModuleCard> = ({ title, subtitle, description, path }) => {
    const history = useHistory();

    // Usar el path dinámico que recibimos de los props
    const handleNavigation = () => {
        history.push(path); // Ahora usamos el path dinámico
    };

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
                <IonCardSubtitle>{subtitle}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>{description}</IonCardContent>

            <IonButton onClick={handleNavigation} expand="block">
                Go to { title }
            </IonButton>
        </IonCard>
    );
};

export default ModuleCard;
