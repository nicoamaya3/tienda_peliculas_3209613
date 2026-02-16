
import "../stylesheets/User.css"

export const User = ({image , nombre , estado}) => {

    return (

        <>
            <div className="character-card">
                <div className="character-image">
                    <img src={image} alt="Reggie" />
                </div>
                <div className="character-info">
                    <h1 className="character-name">{nombre}</h1>
                    <div className="character-status">
                        <span className="status-indicator"></span>
                        <span className="status-text">{estado}</span>
                        <span className="character-type">- Mythological Creature</span>
                    </div>
                    <div className="info-section">
                        <div className="info-label">Last known location:</div>
                        <div className="info-value">Gaia</div>
                    </div>
                    <div className="info-section">
                        <div className="info-label">First seen in:</div>
                        <div className="info-value">Childrick of Mort</div>
                    </div>
                </div>
            </div>
        </>

    )
}
