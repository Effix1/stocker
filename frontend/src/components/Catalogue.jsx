import React, { useState, useEffect } from 'react';




export default function Catalogue () {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    price: 0,
  });

  useEffect(() => {
    // Utilisation de useEffect pour effectuer la requête une fois que le composant est monté
    fetch('http://localhost:3000/api/stuff')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Network response was not ok');
      })
      .then((stuff) => {
        setProducts(stuff); // Mettre à jour le state avec les données reçues
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, []);




  return (
    <>
       
             {/* Liste des produits */}
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <img class="" src={product.imageUrl} alt="'objet"></img>
          {/* Ajoutez d'autres informations du produit au besoin */}
        </div>
      ))}
       
  </>
  )
  
}
  