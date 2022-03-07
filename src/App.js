// import { Outlet } from 'react-router-dom';
import { ErrorContext } from './contexts/ErrorContext';
import { LoadingContext } from './contexts/LoadingContext';
import { ToastContext } from './contexts/ToastContext';
import { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import RouteConfig from './routes/RouteConfig';
import Spinner from './components/utils/Spinner';

function App() {
    const { error, setError } = useContext(ErrorContext);
    const { message, setMessage } = useContext(ToastContext);
    const { loading } = useContext(LoadingContext);

    useEffect(() => {
        if (error && error !== '') {
            toast.error(error);
            return setError('');
        }
    }, [error]);

    useEffect(() => {
        if (message && message !== '') {
            toast.success(message);
            return setMessage('');
        }
    }, [message]);

    return (
        <section id="main">
            <div className="main-container ">
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <Header />
                        <ToastContainer />
                        <RouteConfig />
                        <Footer />
                    </>
                )}
            </div>
        </section>
    );
}

export default App;
