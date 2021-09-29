import React from 'react';

function useWindows() {
    const [window, setWindow] = React.useState({widht: undefined, height: undefined})

    React.useEffect(() => {
        function handleResise(){ 
        setWindow({widht:window.innerWidht, height: window.innerHeigt})
        }
        window.addEventlistener ('resise', handleResise)
        handleResise()
        return () => {
           window.removeAddEventListener('resise', handleResise)
        }
    }, [])

}

export default useWindows
