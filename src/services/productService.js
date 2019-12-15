// crud produit

import firebase from "firebase";
import { firebaseConfig } from "../config/Config";
// initialisation
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const productsRef = db.ref().child("products");

const ProductService = {
  getAll: () => productsRef,
  get: id => db.ref("products/" + id),
  add: product => productsRef.push().set(product),
  update: (product, id) => db.ref(`products/${id}`).set(product),
  remove: id => productsRef.child(id).remove()
};
export default ProductService;
