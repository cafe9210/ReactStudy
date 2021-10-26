import { useEffect, useState } from "react";

const Info = ()=>{
    const [visible, setVisible] = useState(false);

    return(
        <div>
            <label>이름</label>
            <button onClick={()=>{
                setVisible(!visible);
            }}/>
            <hr/>
            {visible && <Info/>}
        </div>
    )
}

export default Info;