import '../index.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bagSrc from '../assets/bag.png';
import product1Src from '../assets/1.jpg';
import product2Src from '../assets/2.jpg';
import product3Src from '../assets/3.jpg';
import product4Src from '../assets/4.jpg';
import cooking1Src from '../assets/cooking1.svg';
import type { CartItem } from '../BagContext';

function App() {
  const navigate = useNavigate();  
  const [searchTerm, setSearchTerm] = useState('');
  const productsSectionRef = useRef<HTMLHeadingElement>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allProducts: Omit<CartItem, 'quantity'>[] = [
    {
      id: 'prod1',
      name: 'O Rei do Churrasco',
      price: 39.90,
      imageSrc: product1Src,
      maxQuantity: 10
    },
    {
      id: 'prod2',
      name: 'As 50 Melhores Massas das Cantinas Italianas',
      price: 49.90,
      imageSrc: product2Src,
      maxQuantity: 10
    },
    {
      id: 'prod3',
      name: 'O Segredo das Pâtisseries',
      price: 59.90,
      imageSrc: product3Src,
      maxQuantity: 10
    },
    {
      id: 'prod4',
      name: 'Além da Tequila: As Delícias da Culinária Mexicana',
      price: 69.90,
      imageSrc: product4Src,
      maxQuantity: 10
    }
  ];

  const [filteredProducts, setFilteredProducts] = useState<Omit<CartItem, 'quantity'>[]>(allProducts);

  const handleScrollToProducts = () => {
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts(allProducts);
      setShowSuggestions(false);
      return;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    const results = allProducts.filter(product =>
      product.name.toLowerCase().includes(lowercasedFilter)
    );
    setFilteredProducts(results);
    setShowSuggestions(results.length > 0 && results.length < allProducts.length);
  }, [searchTerm]);

  const handleSuggestionClick = (product: Omit<CartItem, 'quantity'>) => {
    setSearchTerm(product.name);
    setShowSuggestions(false);
    const productNumber = product.id.replace('prod', '');
    navigate(`/product${productNumber}`);
  };


  return (

    <>
    <div className='flex flex-col'>
      <header className='bg-[#ffc400] pl-4 text-3xl text-amber-50 font-bold py-2 flex flex-row'>
        <h1 className='font-coustard font-light'>e-cooks</h1>
        <div className="relative ml-75">
          <input 
            type="text"
            placeholder="Buscar produtos..."
            className="h-10 w-120 p-2 bg-amber-50 text-gray-800 text-sm font-normal border-2 rounded-4xl border-gray-300 focus:outline-none focus:border-orange-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => {
              if (searchTerm.trim() && filteredProducts.length > 0 && filteredProducts.length < allProducts.length) {
                setShowSuggestions(true);
              }
            }}
            onBlur={() => {
              setTimeout(() => {
                setShowSuggestions(false);
              }, 150); 
            }}
            />
            {showSuggestions && filteredProducts.length > 0 && (
              <div className="absolute top-full left-0 mt-1 w-120 bg-white border border-gray-300 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer text-gray-800 text-sm"
                    onMouseDown={() => handleSuggestionClick(product)}
                  >
                    {product.name}
                  </div>
                ))}
              </div>
            )}
        </div>

        <button 
        onClick={() => navigate('/bag')}
        className='ml-auto mr-3 h-13 w-13 hover:shadow-lg hover:bg-gray-200 cursor-pointer rounded-full p-1'>
          <img 
          src={bagSrc}
          alt='Bag'
          className='h-full w-full object-contain'
          />
        </button>
      </header>
    </div>
    
    <div className='bg-gradient-to-t from-[#ffd900] to-[#ffc400] h-100 w-screen flex flex-row justify-between'>
      <div  className='flex flex-col'>
        <h1 className='text-amber-50 text-6xl font-coustard px-40 pt-20 '>Ama cozinhar? </h1>
        <h2 className='pl-40 font-inter text-2xl text-amber-50 pt-2'>O melhor da culinária mundial na palma da sua mão.<br/> Clique no botão abaixo e escolha o seu favorito!</h2>
        <button 
          onClick={handleScrollToProducts}
          className='cursor-pointer text-gray-800 bg-white rounded-2xl font-semibold ml-40 mt-10 h-15 w-100 transition duration-200 hover:bg-[#ff5507] hover:text-amber-50'
        >Conhecer produtos</button>
      </div>   
      

      <img
        src={cooking1Src}
        alt='Cooking Guy'
        className='h-100 w-140 pr-40'    
      />
       
    </div>
    <h1 ref={productsSectionRef} className='text-center text-2xl pt-20 font-semibold scroll-mt-20 text-gray-800'>Conheça nossos produtos</h1>
    <main className='inset-0 py-10 pb-50 justify-items-center text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-40'>      
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => {
          const productNumber = product.id.replace('prod', '');
          return (
            <div key={product.id} className="group relative h-50 w-50 rounded-lg transition hover:z-10">
              <button
                onClick={() => navigate(`/product${productNumber}`)}
                className='cursor-pointer w-full h-full'>  
                <img src={product.imageSrc} alt={product.name} className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 rounded-2xl bg-gray-200 bg-opacity-80 flex flex-col items-center justify-center opacity-0 hover:h-100 w-80 group-hover:opacity-100 transition-opacity duration-700 hover:pb-40">
                  <img src={product.imageSrc} alt={product.name} className="w-fit h-fit object-cover rounded-t-2xl" />          
                  <p className="text-gray-800 text-sm mt-6 mb-2 px-2">{product.name}</p>
                  <span className="text-[#ff5507] font-semibold mb-2">R$ {product.price.toFixed(2).replace('.',',')}</span>           
                  <div
                    className="cursor-pointer bg-[#ff5507] text-white px-4 py-2 rounded-lg h-10 w-50 flex items-center justify-center hover:bg-green-700 transition duration-300">
                    Saiba mais
                  </div>
                </div>
              </button>
            </div>
          );
        })
      ) : (
        <p className="col-span-full text-center text-gray-600 text-lg">Nenhum produto encontrado com "{searchTerm}".</p>
      )}
    </main>
    
    </>


  );
}

export default App;