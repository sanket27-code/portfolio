import React, {useState, useEffect} from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useWindowScroll } from 'react-use';

const ScrollToTop = () => {
    const {y : pageYOffset} = useWindowScroll();
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        
        if (pageYOffset >= 600){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    }, [pageYOffset])


    if (!visible) {
        return false;
    }

    const ScrollTop = () => {
        window.scrollTo({top:0, behavior:'smooth'})
    }

    return (
        <>
            <div className="scrollToTop" onClick={ScrollTop}>
                <div className="scrollIcon">
                     <ExpandLessIcon />
                </div>
            </div>
        </>
    )
}

export default ScrollToTop
