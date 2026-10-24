import React from 'react';
import hands from '../img/wash-your-hands.png'
import distance from '../img/social-distancing.png'
import notouch from '../img/no-touch.png'
import hospital from '../img/hospital.png'
import newspaper from '../img/newspaper.png'

const ProtectiveMeasures = () => {
    return(
        <div className="pmeasures">
            <div className="pmeasures-wrapper">
                <div className="pmeasure">
                    <div className="p-icons">
                        <img src={hands} alt=""/>
                    </div>
                    <div className="p-text">
                        <h4>Wash your hands frequently</h4>
                        <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.</p>
                    </div>
                </div>
                <div className="pmeasure">
                    <div className="p-icons">
                        <img src={distance} alt=""/>
                    </div>
                    <div className="p-text">
                        <h4>Maintain social distancing</h4>
                        <p>Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.</p>
                    </div>
                </div>
                <div className="pmeasure">
                    <div className="p-icons">
                        <img src={notouch} alt=""/>
                    </div>
                    <div className="p-text">
                        <h4>Avoid touching eyes, nose and mouth</h4>
                        <p>Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.</p>
                    </div>
                </div>
                <div className="pmeasure">
                    <div className="p-icons">
                        <img src={hospital} alt=""/>
                    </div>
                    <div className="p-text">
                        <h4>If you have fever, cough and difficulty breathing, seek medical care early</h4>
                        <p>Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.</p>
                    </div>
                </div>
                <div className="pmeasure">
                    <div className="p-icons">
                        <img src={newspaper} alt=""/>
                    </div>
                    <div className="p-text">
                        <h4>Stay informed and follow advice given by your healthcare provider</h4>
                        <p>Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProtectiveMeasures;