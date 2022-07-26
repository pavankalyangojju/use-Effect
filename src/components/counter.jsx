import { useEffect, useState } from "react";

export function Counter(){
    const [count, setCount] = useState(10);

    useEffect(() => {
        // setInterval(() => {///////////1///////////////
            const id = setInterval(() =>{
                console.log("set")
                setCount((prev) => {
                    if(prev === 1){
                        clearInterval(id);
                        return 0;
                    }
                    return prev -1
                });
            },1000);

            return () => {
                console.log("unmouting");
                clearInterval(id);
            }
//////////////////////////////1////////////
            // setCount((prev) => {
            //     console.log("prev count:", prev)
            //     return prev +1;
            // })

            // setCount(count -1) (edit)   //(count+1)
        // }, 1000);
        /////////////////1////////////////
    }, [])





    return <h1>Count: {count}</h1>
}