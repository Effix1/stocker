import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import('../scss/components/_produit.scss');

export default function Produit() {
  const [product, setProduct] = useState(null);
  const history = useNavigate(); // Corrected import

  let url = new URL(window.location.href);
  const id = url.searchParams.get('id');

  useEffect(() => {
    // Vérifier si l'identifiant du produit est disponible
    if (id) {
      // Utilisation de useEffect pour effectuer la requête une fois que le composant est monté
      fetch('http://localhost:3000/api/stuff/' + id)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }

          throw new Error('Network response was not ok');
        })
        .then(function (produit) {
          setProduct(produit);
        })
        .catch((error) => {
          console.error('Error fetching data', error);
        });
    }
  }, [id]); // Ajout de l'identifiant du produit comme dépendance

  const handleDelete = () => {
    // Effectuer la requête DELETE pour supprimer le produit
    fetch(`http://localhost:3000/api/stuff/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          // Rediriger l'utilisateur après la suppression
          history('/catalogue'); // Vous pouvez ajuster l'URL de redirection
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch((error) => {
        console.error('Error deleting product', error);
      });
  };

  if (!id) {
    return <h1>Identifiant du produit manquant dans l'URL</h1>;
  }

  if (!product) {
    return <h1>Chargement en cours...</h1>;
  }

  // Vous pouvez utiliser les données du produit ici pour le rendu
  return (
    <div className='produit_card'>
      <div className='produit_img'>
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className='produit_content'>
        <h1 className='produit_title'>{product.title}</h1>
        <p>{product.description}</p>

        <p>{product.price} €</p>
        <div className='produit_content_button'>
          <button className='boutton modifier'>
            <NavLink
              to={`/modifierproduit?id=${product._id}`}
              key={product._id}
            >
              modifier
            </NavLink>
          </button>
          <button className='boutton supprimer' onClick={handleDelete}>
            supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
