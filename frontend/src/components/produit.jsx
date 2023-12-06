import React, { useState, useEffect } from 'react';
let url = new URL(window.location.href);
const id = url.searchParams.get('id');

export default function Produit() {
  useEffect(() => {
    // Utilisation de useEffect pour effectuer la requête une fois que le composant est monté
    fetch('http://localhost:3000/api/stuff/' + id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Network response was not ok');
      })
      .then(function (produit) {
        console.log(produit);
      })

      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, []);

  return <h1>produit à l'unité</h1>;
}
