import React from 'react'
import hands from '../img/wash-your-hands.png'
import distance from '../img/social-distancing.png'
import notouch from '../img/no-touch.png'
import hospital from '../img/hospital.png'
import newspaper from '../img/newspaper.png'

const measures = [
  {
    icon: hands,
    title: 'Wash your hands frequently',
    text: 'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.',
  },
  {
    icon: distance,
    title: 'Maintain social distancing',
    text: 'Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.',
  },
  {
    icon: notouch,
    title: 'Avoid touching eyes, nose and mouth',
    text: 'Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.',
  },
  {
    icon: hospital,
    title: 'If you have fever, cough and difficulty breathing, seek medical care early',
    text: 'Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.',
  },
  {
    icon: newspaper,
    title: 'Stay informed and follow advice given by your healthcare provider',
    text: 'Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19.',
  },
]

const ProtectiveMeasures = () => (
  <div className="pmeasures">
    {measures.map(({ icon, title, text }) => (
      <article className="pmeasure card" key={title}>
        <div className="p-icon">
          <img src={icon} alt="" width="40" height="40" />
        </div>
        <div className="p-text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </article>
    ))}
  </div>
)

export default ProtectiveMeasures
