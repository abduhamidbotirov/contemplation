import { useNavigate } from 'react-router-dom';

const Backtomenu = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/'); // Use navigate instead of history.goBack()
    };
    return (
        <>
            <button onClick={handleGoBack} className='create-post back'>Orqaga</button>
        </>
    );
};

export default Backtomenu;