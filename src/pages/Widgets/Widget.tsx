import { FunctionComponent, lazy, Suspense } from "react";
import Loader from "../../UI/loaders/Loader";
import News from "../News/News";
import SeachAddress from "../SeachAddress/SeachAddress";

function Widget() {
    const promise:Promise<FunctionComponent>  = new Promise((resolve, reject) => {
        setTimeout(()=>resolve(News), 2000)
    })

    const NNews = lazy(()=>promise.then(News => {return {default : News}}))
  return (
      <Suspense fallback={<Loader width="10rem" height='10rem' />}>
      <NNews />
    </Suspense>
  );
}

export default Widget;
