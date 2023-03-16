import "./Product.css";

export function Product(props) {

    let image = props.image;
    let name = props.name;
    let description = props.description;
    let price = props.price;

    return (
        <div className="product">
            <img src={image} />
            <h3>{name}</h3>
            <span>{description}</span>
            <strong>R$ {price}</strong>
        </div>
    );
}