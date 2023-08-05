import Navbar from "./components/Navbar";
import Cartcontainer from "./components/Cartcontainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { caclulateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./Modal";


const App = () => {
    const { cartItems, isLoading } = useSelector((store) => store.cart);
    const { isOpen } = useSelector((store) => store.modal);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(caclulateTotals());

    }, [cartItems]);

    useEffect(() => {
        dispatch(getCartItems('krishnam'));
    }, []);

    if (isLoading) {
        return (<div className="loading">
            <h4>wait ..Krishu's shopping cart is loading....</h4>

        </div>);
    }
    return <div className="App">
        {isOpen && <Modal />}

        <Navbar />
        <Cartcontainer />

    </div>
}
export default App;