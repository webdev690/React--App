import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./Cartreducer";
export const store=configureStore({
    reducer:{cart:Cartreducer}
})