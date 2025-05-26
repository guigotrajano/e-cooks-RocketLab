import product4Src from '../assets/4.jpg';
import bag2Src from '../assets/bag2.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart} from '../BagContext';
import type{ CartItem } from '../BagContext';


function Product4() {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const MAX_PRODUCT_QUANTITY = 10;
    const { addToCart } = useCart();

    const productDetails: Omit<CartItem, 'quantity'> = {
        id: 'prod4',
        name: 'Além da Tequila: As Delícias das Culinária Mexicana',
        price: 69.90, 
        imageSrc: product4Src,
        maxQuantity: MAX_PRODUCT_QUANTITY,
    };
    
    return (
<>
    <div className='absolute bg-gray-200 w-150 h-full flex flex-row'>
                
                <div className=''>
            <img
            src={product4Src}
            alt='Produto 4'
            className='absolute top-20 left-20 h-100 w-100'
            />
        <button 
            onClick={() => navigate('/app')}
            className='cursor-pointer absolute top-5 left-5 rounded-4xl h-10 w-30 font-inter bg-gray-300 text-gray-800 hover:bg-gray-400 hover:text-amber-50 transition duration-500'>Voltar</button>

        </div>
       
    </div>
    <div className='flex flex-col text-end'>
        <button 
            onClick={() => navigate('/bag')}
            className='absolute top-2 right-3 h-13 w-13 hover:shadow-lg hover:bg-gray-200 cursor-pointer rounded-full'>
            <img 
            src={bag2Src}
            alt='Bag 2'
            className='h-10 w-10 ml-1.5 mb-2'
            />
            </button>

        <div className=''>
            <h1 className='absolute right-40 top-15 text-3xl font-coustard font-medium text-gray-800'>Além da Tequila: As Delícias da <br/> Culinária Mexicana</h1>
            <h1 className='absolute right-91 top-35 text-md font-semibold font-inter text-gray-800'>Descrição:</h1>
            <p className='absolute text-left pl-230 pr-30 top-45 text-sm font-inter text-gray-800 leading-relaxed'>
                {productDetails.name}! Prepare-se para uma explosão de cores, aromas e sabores com Além da Tequila: As Delícias da Culinária Mexicana! Mais do que tacos e guacamole, este e-book mergulha na riqueza da cozinha mexicana com receitas autênticas de norte a sul do país. Enchiladas, pozole, moles complexos, doces tradicionais e claro, sugestões de bebidas para acompanhar. Cada receita é um convite para celebrar a vida com intensidade, tradição e muita pimenta!
            </p>
            <p className='absolute text-left pl-230 pr-30 top-115 text-md font-semibold font-inter text-gray-800'>R$ {productDetails.price.toFixed(2).replace('.', ',')}</p>

            <div className="absolute left-230 top-125 flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                    <label htmlFor="quantity" className="font-inter text-md text-gray-800 mr-2">Quantidade:</label>
                    <button 
                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                        className="px-3 py-1 h-8 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
                        aria-label="Diminuir quantidade"
                    >
                        -
                    </button>
                    <input 
                        type="number" 
                        id="quantity"
                        value={quantity} 
                        onChange={(e) => setQuantity(Math.min(MAX_PRODUCT_QUANTITY, Math.max(1, parseInt(e.target.value, 10) || 1)))}
                        min="1" 
                        max={MAX_PRODUCT_QUANTITY}
                        className="w-16 h-8 text-center border border-gray-300 rounded-md focus:ring-1 focus:ring-[#ff5507] focus:border-[#ff5507]"
                    />
                    <button 
                        onClick={() => setQuantity(prev => Math.min(MAX_PRODUCT_QUANTITY, prev + 1))}
                        className="px-3 py-1 h-8 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
                        aria-label="Aumentar quantidade"
                    >
                        +
                    </button>
                </div>
                <button 
                    onClick={() => {
                        addToCart(productDetails, quantity);
                        navigate('/bag');
                    }}
                    className='cursor-pointer bg-[#ff5507] text-amber-50 rounded-lg h-12 w-60 font-inter text-md hover:bg-green-600 transition duration-300'>
                    Adicionar à sacola
                </button>
            </div>

            

        </div>
    </div> 
</>
    
    );
}

export default Product4;
