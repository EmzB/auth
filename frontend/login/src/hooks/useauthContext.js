import {useContext} from 'react';
import { authContext } from "../context/authContext";

export const useauthContext = () => {
    const context = useauthContext(authContext);
    
  if (!context){
    throw Error('cannot accces context outside the provider')
  }
  return context;
}