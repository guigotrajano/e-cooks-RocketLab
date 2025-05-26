import fimSrc from '../assets/fim.svg';
import { useNavigate } from 'react-router-dom';

function Fim() {
    const navigate = useNavigate();
    
    return (
<>
    <div className='flex flex-row'>
        <div className=''>
            <img
            src={fimSrc}
            alt='Fim'
            className='h-150 w-150'
            />
        </div>        
    </div>
    <div className='flex flex-col text-end'>
        <div className=''>
            <h1 className='absolute right-40 top-25 text-3xl font-coustard font-medium text-gray-800'>Compra concluída com sucesso!</h1>
            <h1 className='absolute right-40 top-45 text-2xl font-inter text-gray-800'>Te enviamos um e-mail com um link para download <br/> da sua compra. Obrigado pela confiança!</h1>
            <button 
                onClick={() => navigate('/app')}
                className='cursor-pointer absolute right-60 top-80 rounded-lg h-15 w-70 font-inter bg-[#ff5507] text-amber-50 hover:bg-green-600 transition duration-500'>Voltar para a página inicial</button>
        </div>
    </div> 
</>
    
    );
}

export default Fim;
