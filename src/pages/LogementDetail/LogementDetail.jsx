// src/pages/LogementDetail/LogementDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Profil from '../../components/Profil/Profil';
import Tags from '../../components/Tags/Tags'; 
import Collapse from '../../components/Collapse/Collapse';
import logementsJson from '../../assets/logements.json';  
import './LogementDetail.scss';

const LogementDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = logementsJson.find(item => item.id === id);
    setLogement(foundLogement);

    if (!foundLogement) {
      navigate('*');
    }
  }, [id, navigate]);

  if (!logement) {
    return null; // parceque "logement" sera vide au premier tour de useeffect, avant la lecture complète du reste du code
  }

  return (
    <div>
      <div className="carousel">
        <Carousel images={logement.pictures} />
      </div>

      <div className='container'>
          <div className="titre-info">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <Profil  className="profil" imageUrl={logement.host.picture} name={logement.host.name} rating={parseInt(logement.rating, 10)} />
          <Tags  className="tags" tags={logement.tags} />
      </div>

      <div className="collapses">
        <Collapse label="Description" content={logement.description} />
        <Collapse label="Équipements" content={<ul>{logement.equipments.map((equip, index) => <li key={index}>{equip}</li>)}</ul>} />
      </div>
    </div>
  );
}

export default LogementDetail;
