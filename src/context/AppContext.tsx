
import axios from "axios";
import  {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
  } from "react";
  
  // Create Context
  export const AppContext = createContext<any>(null);
  
  // Provider Props
  interface AppProviderProps {
    children: ReactNode;
  }
  
  // App Provider Component
  export function AppProvider({ children }: AppProviderProps) {

    const [formOpen,setFormOpen] = useState(false)
    const [events,setEvents]= useState([])
    const [loader,setLoader]=useState(false)
  



   useEffect(() => {
     // Replace with your endpoint; consider adding `id` in _fields for React keys
     axios
       .get('https://cms.smvhospital.com/wp-json/wp/v2/agrinewsevents?_fields=acf')
       .then((response) => {
         setEvents(response.data);
       })
       .catch(() => {
            
       })
       .finally(() => {
         setLoader(false);
       });
   }, []);
    return (
      <AppContext.Provider
        value={{
           formOpen,setFormOpen,events,setEvents,loader,setLoader
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
  
  // Optional helper hook
  export const useAppContext = () => useContext(AppContext);
  