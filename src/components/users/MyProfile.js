import axios from '../../config/axios';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function MyProfile() {
    const { user } = useContext(AuthContext);

    // const [username, setUsername] = useState();
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    // const [email, setEmail] = useState();
    // const [address, setAddress] = useState();
    // const [phoneNumber, setPhoneNumber] = useState();

    return (
        <div className="row col-md-10 justify-content-center p-auto mt-3 border border-1 border-dark shadow-sm p-2 mb-5 bg-body rounded ">
            <div className="row justify-content-center">
                <h2 className="text-center">Profile</h2>
                <div className="row ">
                    <div className="col-6 text-center">
                        <label htmlFor="inputUsername" className="form-label">
                            Username :
                        </label>
                    </div>
                    <div className="col-6 text-center">{user.username}</div>
                </div>

                <div className="row">
                    <div className="col-6 text-center ">
                        <label htmlFor="inputFirstName" className="form-label">
                            First Name :
                        </label>
                    </div>
                    <div className="col-6 text-center">{user.firstName}</div>
                </div>
                <div className=" row">
                    <div className="col-6 text-center">
                        <label htmlFor="inputLastName" className="form-label">
                            Last Name :
                        </label>
                    </div>
                    <div className="col-6 text-center">{user.lastName}</div>
                </div>

                <div className="row">
                    <div className="col-6 text-center">
                        <label htmlFor="inputLastName" className="form-label">
                            Email :
                        </label>
                    </div>
                    <div className="col-6 text-center">{user.email}</div>
                </div>
                <div className="row">
                    <div className="col-6 text-center">
                        <label htmlFor="inputLastName" className="form-label">
                            Address :
                        </label>
                    </div>
                    <div className="col-6 text-center">{user.address}</div>
                </div>
                <div className="row">
                    <div className="col-6 text-center">
                        <label htmlFor="inputLastName" className="form-label">
                            Phone Number :
                        </label>
                    </div>
                    <div className="col-6 text-center">{user.phoneNumber}</div>
                </div>

                <Link
                    className="btn btn-primary"
                    to="/myuser/edit"
                    role="button"
                >
                    Edit Profile
                </Link>
            </div>
        </div>
    );
}
export default MyProfile;
