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

  if (!id) {
    return <h1>Identifiant du produit manquant dans l'URL</h1>;
  }

  if (!product) {
    return <h1>Chargement en cours...</h1>;
  }
}
