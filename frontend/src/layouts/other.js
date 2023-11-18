import React, { useState, useEffect } from 'react';

export default function Layout() {
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
  }, []); // Les crochets vides indiquent que cet effet s'exécute une seule fois après le montage du composant

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données au serveur ici, par exemple, à l'API
    fetch('http://localhost:3000/api/stuff', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Objet ajouté avec succès:', data);
        // Réactualiser la liste des produits après l'ajout
        fetch('http://localhost:3000/api/stuff')
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error('Network response was not ok');
          })
          .then((stuff) => {
            setProducts(stuff); // Mettre à jour le state avec les données récentes
          })
          .catch((error) => {
            console.error('Error fetching data', error);
          });

        // Réinitialiser le formulaire
        setFormData({
          title: '',
          description: '',
          imageUrl: '',
          price: 0,
        });
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout de l'objet:", error);
      });
  };

  return (
    <>
      <h1>Salut à tous</h1>

      {/* Formulaire d'ajout d'objet */}
      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Prix:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Ajouter un objet</button>
      </form>

      {/* Liste des produits */}
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          {/* Ajoutez d'autres informations du produit au besoin */}
        </div>
      ))}
    </>
  );
}
