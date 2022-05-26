import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemlListContainer() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);
  const db = getFirestore();

  const getData = async (category) => {
    try {
      setLoad(true);
      const document = category
        ? query(collection(db, "items"), where("categoryId", "==", category))
        : collection(db, "items");
      const col = await getDocs(document);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setItems(result);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  let cat;
  id ? (cat = id) : (cat = "Productos");

  return load ? (
    <>
      <div className="spinner">
        <h3>Cargando...</h3>
      </div>
    </>
  ) : (
    <>
      <h2 className="cat-title">{cat}</h2>
      <div className="contenedor__productos">
        <ItemList items={items} />
      </div>
    </>
  );
}

export default ItemlListContainer;
