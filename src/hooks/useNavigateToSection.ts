import { useEffect } from "react";
import { useLocation } from "react-router";
export default function useNavigateToSection(){
    const location  = useLocation();

    useEffect(() => {
        if(location.hash){
            // scroll to hash in location
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if(element){
                element.scrollIntoView({ behavior: 'instant' });
            }
        }
    },[location]) 


}