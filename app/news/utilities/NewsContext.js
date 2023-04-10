import React,{createContext} from "react";
import AxiosInstance from "../../axiosClient/AxiosInstance";

export const NewsContext = createContext();
export const NewsProvider = (props) => {
    const {children} = props;
    const getNews = async () => {
        try{
            const result = await AxiosInstance().get('/articles');
            return result.data;
        }catch(e){
            console.log('getNews error',e);
        }
        return [];
    };

    const getDetail = async (id) => {
        try{
            const result = await AxiosInstance().get(`/articles/${id}/detail`);
            return result.data[0];
        }catch(e){
            console.log('getNews error',e);
        }
        return null;
    };

    const upLoadImage = async (form) => {
        try{
            const result = await AxiosInstance('multipart/form-data').post('/media/upload',form);
            return result.data;
        }catch(e){
            console.log('upLoadImage error',e);
        }
        return null;
    }

    const addNews = async (title, content, image) => {
        try{
            const body={
                title,
                content,
                image
            }
            await AxiosInstance().post('/articles',body);
            return true;
        }catch(e){
            console.log('addNews error',e);
        }
        return false;
    }
    return(
        <NewsContext.Provider value={{getNews,getDetail,upLoadImage, addNews}}>
            {children}
        </NewsContext.Provider>
    )
}