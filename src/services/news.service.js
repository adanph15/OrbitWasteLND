import { ref, get, remove, push } from "firebase/database";
import database from "../firebase";

const newsRef = ref(database, "/news");
       
const getAllnews = () => {
    return get(newsRef);
}

const removeNews = (key) => {
    const newsToDeleteRef = ref(database, `/news/${key}`);
    return remove(newsToDeleteRef)
}
const addNews = (title, content, source) => {
    return push(newsRef, {
        title: title,
        content: content,
        source: source
    });
}

export default {getAllnews,removeNews,addNews};