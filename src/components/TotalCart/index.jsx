import "./style.css";
import { Link } from 'react-router-dom';
import {useCart} from '../../hooks/Cart';
import { useEffect, useState, useMemo } from "react";
import formatPrice from "../../utils/formatPrice";


const TotalCart = ()=>{
    const {cart} = useCart();
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    useEffect(()=>{
        const newTotal = cart.reduce((antigo, item)=>{
            const qtd = item.quantity || 1;
            const preco = item.availability.price;

            console.log(antigo)
            console.log('qtd', qtd)
            console.log(preco)
        
            return qtd * preco + antigo;
        },0)
        const newQuantity = cart.reduce((antigo,item)=>{
            const qtd = item.quantity || 1;

            return qtd + antigo;
        },0)
        setTotal(newTotal);
        setQuantity(newQuantity);
    },[cart])

    const parsedTotal = useMemo(()=>{
        return formatPrice(total);
    },[total])

    return (
        <div className="totalcart">
            <div className="box-totalcart">
                <div className="desc-preco">
                    <p>Subtotal ({quantity} itens)</p>
                    <div>
                        <p>{parsedTotal} </p>
                    </div>
                </div>
                <Link className="continue" to="./purchased">Concluir a Compra</Link>
            </div>
        </div>
    )
}

export default TotalCart;