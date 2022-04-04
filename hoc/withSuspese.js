import React, {Suspense} from "react";
import Preloader from "../components/common/preloader/preloader";

export const withSuspense = (Component) => {
    return (props) => {

        return <Suspense fallback={<div>Загрузка...</div>}>
        <Component {...props}/>
        </Suspense>
    }
}