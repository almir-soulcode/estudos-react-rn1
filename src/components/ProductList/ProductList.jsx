import { Product } from "../Product/Product";

export function ProductList() {
    return (
        <>
            {/* Comunicação Direta de Componentes */}
            <Product 
                image="https://m.media-amazon.com/images/I/81+xlh0eUIL._AC_UL320_.jpg"
                name="Floresta"
                description="Floresta Lego Modelo XPTO 500 peças"
                price="200"
            />
            <Product
                image="https://m.media-amazon.com/images/I/81OqSTy+A1L._AC_UL320_.jpg"
                name="Bonsai"
                description="Bonsai Lego 450 peças"
                price="420"
            />
            <Product
                image="https://m.media-amazon.com/images/I/81qkKtQ49GL._AC_UL320_.jpg"
                name="Policia"
                description="Carro de Policia + Pocial Lego 94 peças"
                price="420"
            />
        </>
    );
}