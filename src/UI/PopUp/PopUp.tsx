import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import PopUpLayout from "./PopUpLayout/PopUpLayout";

interface IProps{
    path: string;
    children: ReactNode;
}
function PopUp({path, children}:IProps) {
  return (
    <Routes>
      <Route
        path={path}
        element={
          <PopUpLayout>
            {children}
          </PopUpLayout>
        }
      />
    </Routes>
  );
}

export default PopUp;
