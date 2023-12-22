import React from 'react';
import { useEffect , useState } from 'react';
import { useLocation } from 'react-router-dom';

const MayBeShowFooter = ({ children }) => {
    const location = useLocation();
    
    const [showFooter , setShowFooter] = useState(false);

    useEffect(()=> {
        if(location.pathname === '/'){
            console.log(location)
            setShowFooter(false)
        }else{
            setShowFooter(true)
        }
    } ,
    [location])

  return (
    <div>
      {showFooter && children}
    </div>
  )
}

export default MayBeShowFooter
