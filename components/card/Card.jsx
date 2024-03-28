import Cart from "/images/icon-cart.svg"



import './card.css'


export default function Card(){
    return(
            <div className="container">
                <div className="product-img"></div>

                <div className="product">
                    <p className="perfume">PERFUME</p>
            
                    <h1>Gabrielle Essence Eau De Parfum</h1>
                    <p className="description">A floral, solar and voluptuous interpretation 
                        composed by Olivier Polge, Perfumer-Creator
                        for the House of CHANEL.</p>
                    <div className="price">
                    <span id="price1">$149.99</span>
                    <span id="price2">$169.99</span>
                    </div>
                
                <button>
                    <img src={Cart} alt="icon-cart"/>
                    <p>Add to Cart</p>
                </button>
            
                </div>

            </div>
           

    )
}