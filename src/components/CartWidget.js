import img from "./color.png";
const CartWidget = ({num }) => {
    const producto=num;
    return (
        <>
            <img class="logo" src={img} alt="icono mastersupp" title="Icono"></img>
            <p class="logo">{producto}</p>
        </>

    )

};
export default CartWidget;