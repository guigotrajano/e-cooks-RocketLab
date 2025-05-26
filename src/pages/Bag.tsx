import finalizeSrc from '../assets/finalize.svg';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../BagContext';

function Bag() {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, decreaseItemQuantity, increaseItemQuantity, clearCart } = useCart(); 
    
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
<>
    <div className='flex flex-row justify-end'>
        <h1 className='font-coustard font-medium text-3xl py-10 text-gray-800'>Finalize sua compra</h1>
        <div className=''>
            <img
            src={finalizeSrc}
            alt='Finalize'
            className='h-150 w-150'
            />
        </div>        
    </div>
    <div className='flex flex-col'>
        <div className=''>
            <button 
                onClick={() => navigate('/app')}
                className='absolute left-10 top-25 cursor-pointer rounded-3xl text-lg font-inter font-normal h-10 w-24 text-gray-700 bg-gray-100 hover:bg-gray-300 transition duration-700'>Voltar</button>
            <h1 className='absolute left-40 top-25 text-3xl font-inter text-gray-800'>Sacola</h1>
            <div className="absolute left-40 top-32 w-1/2 h-px bg-gray-300 my-4"></div>
            
            <div className="absolute left-40 top-38 w-1/2 pr-4 overflow-y-auto max-h-[calc(100vh-250px)]">
                {cartItems.length === 0 ? (
                    <p className="text-gray-600">Sua sacola está vazia.</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between border-b py-3">
                            <img src={item.imageSrc} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                            <div className="flex-grow">
                                <h3 className="font-semibold text-gray-800">{item.name}</h3>

                                <div className="flex items-center mt-1">
                                    <button 
                                        onClick={() => decreaseItemQuantity(item.id)}
                                        className="px-2 py-0.5 border rounded-md text-gray-700 hover:bg-gray-200"
                                    >
                                        -
                                    </button>
                                    <span className="px-3 text-sm text-gray-700">{item.quantity}</span>
                                    <button 
                                        onClick={() => increaseItemQuantity(item.id)}
                                        disabled={item.maxQuantity ? item.quantity >= item.maxQuantity : false}
                                        className="px-2 py-0.5 border rounded-md text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-gray-800">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-xs text-red-500 hover:text-red-700 mt-1">Remover</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <h2 className='absolute left-40 bottom-25 text-xl font-inter font-semibold text-gray-800'>Total: R$ {totalPrice.toFixed(2).replace('.', ',')}</h2>
            <button 
                onClick={() => {
                    // Aqui, em um cenário real, você também enviaria o pedido para um backend.
                    // Após a confirmação (ou antes de navegar para a página de sucesso), limpe o carrinho.
                    if (cartItems.length > 0) {
                        clearCart(); // Limpa o carrinho
                    }
                    navigate('/fim'); // Navega para a página de confirmação
                }}
                className='cursor-pointer absolute left-40 bottom-10 rounded-lg h-12 w-60 font-inter bg-[#ff5507] text-amber-50 hover:bg-green-600 transition duration-700 disabled:opacity-50'
                disabled={cartItems.length === 0}>Finalizar compra</button>
        </div>
    </div> 
</>
    
    );
}

export default Bag;
