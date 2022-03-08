import axios from '../../config/axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import { LoadingContext } from '../../contexts/LoadingContext';

function EditProfile() {
    const { user, updateUser, fetchUser } = useContext(AuthContext);
    const { setLoading } = useContext(LoadingContext);
    const { setError } = useContext(ErrorContext);

    const [username, setUsername] = useState(user.username);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.patch('/users/edit', {
                firstName,
                lastName,
                email,
                address,
                phoneNumber,
            });
            updateUser(res.data);
            fetchUser();
            setLoading(false);
            navigate('/myuser');
        } catch (err) {
            setError('');
            setLoading(false);
        }
    };

    return (
        <div className="row col-lg-10 p-auto mt-3 p-5 border border-1 border-dark shadow-sm p-3 mb-5 bg-body rounded">
            <form className="row g-3" onSubmit={handleSubmit}>
                <h2>Edit Profile</h2>
                <div className="col-md-12">
                    <label htmlFor="inputUsername" className="form-label ">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputUsername"
                        value={username}
                        disabled
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputFirstName" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputFirstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputLastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputEmail" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPhoneNumber" className="form-label">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;
