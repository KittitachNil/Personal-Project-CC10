import axios from '../../config/axios';
import { useContext, useEffect, useState } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import { useNavigate } from 'react-router-dom';

function AddMainCategory() {
    const { setError } = useContext(ErrorContext);
    const { setLoading } = useContext(LoadingContext);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post('/suppliers/', {
                name,
                address,
                phoneNumber,
            });

            setLoading(false);
            navigate('/admin');
        } catch (err) {
            setError('Error');
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <div className="bg-light m-3 p-3">
            <h4 className="mb-3">Supplier Register</h4>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className=" mb-3">
                    <label for="name" class="form-label">
                        Supplier Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Supplier Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className=" mb-3">
                    <label for="address" class="form-label">
                        Address
                    </label>
                    <textarea
                        class="form-control"
                        id="address"
                        placeholder="Supplier Address"
                        rows="3"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className=" mb-3">
                    <label for="phoneNumer" class="form-label">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="phoneNumer"
                        placeholder="Supplier Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default AddMainCategory;
