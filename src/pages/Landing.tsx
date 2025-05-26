import chefSrc from '../assets/chef.svg'
import { useNavigate } from 'react-router-dom';

function Landing () {
    const navigate = useNavigate();
    
    return (
      <>
      
    
    <div className="bg-gradient-to-t from-[#ffd900] to-[#ffc400] h-screen w-screen flex flex-col text-left py-40 pl-20">
        <h1 className='font-coustard font-light text-3xl text-amber-50 pb-10'>e-cooks</h1>
        <h2 className='font-coustard font-light text-amber-50 text-5xl'>Quem ama, cozinha <br/>e quem cozinha, ama.</h2>
        <h3 className='font-inter text-amber-50 text-2xl font-light pt-4'>Aprenda as melhores receitas do mundo <br/> conosco. Bora começar?</h3>
        <button 
        onClick={() => navigate('/app')}
        className='cursor-pointer bg-amber-50 text-gray-700 rounded-lg font-inter hover:bg-[#ff5507] hover:text-amber-50 h-20 w-60 mt-10 transition duration-300'>Vamos lá!</button>
        
        <img
            src={chefSrc}
            alt='Chef Landing'
            className='absolute top-10 right-12 h-130 w-130'
        />
    </div>
        
    </>

        );
}
 export default Landing;
