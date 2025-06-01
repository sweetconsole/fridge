import { db } from "../firebase.ts"
import { collection, getDoc, getDocs, doc, query } from "firebase/firestore";
import { type Product } from "../types/product.type.ts"

export const getProduct = async (id: string): Promise<Product | null> => {
	try {
		const taskDoc = await getDoc(doc(db, "products", id));
		if (taskDoc.exists()) {
			return { id: taskDoc.id, ...taskDoc.data() } as Product;
		} else {
			return null;
		}
	} catch (error) {
		console.error("Error getting task:", error);
		throw error;
	}
};

export const getProducts = async (): Promise<Product[]> => {
	try {
		const q = query(collection(db, "products"));
		const querySnapshot = await getDocs(q);
		return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Product);
	} catch (error) {
		console.error("Error getting user tasks:", error);
		throw error;
	}
};