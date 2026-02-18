import {create} from "zustand";
import {supabase} from "../index";

export const useAuthStore = create((set) =>({
    isAuth:false,
    datauserGoogle:[],
    signInWithGoogle:async() =>{
        try{
            const {data,erorr} = await supabase.auth.signInWithOAuth({provider:"google"});
            if(erorr)
                throw new Error('A ocurrido un error durante la autenticacion')
            set({isAuth:true});
            return data;
        // eslint-disable-next-line no-unused-vars
        } catch (error) { /* empty */ }
    },
    signout: async() =>{
        const{error} = await supabase.auth.signOut();
        set({isAuth:false})
        if(error) throw new Error('A ocurrido un error durante el cierre sesion')
    }
}));
