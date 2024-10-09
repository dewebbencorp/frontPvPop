import { useHistory } from 'react-router-dom';
import { IonCard } from '@ionic/react';
import IModuleCard from '../interfaces/IModuleCard';
import '../../theme/ModuleCard.css';

const ModuleCard: React.FC<IModuleCard> = ({ title, subtitle, description, path }) => {
    const history = useHistory();

    const handleHome = () => {
        history.push(path);
    };

    return (
        <IonCard className="custom-card" onClick={handleHome}>
            <div className="card-content">
                <div className="card-info">
                    <strong className="card-title">{title}</strong>
                    <span className="card-subtitle">{subtitle}</span>
                    <p className="card-description">{description}</p>
                </div>
                <i className="fa-solid fa-chevron-right arrow-icon"></i>
            </div>
        </IonCard>
    );
};

export default ModuleCard;
