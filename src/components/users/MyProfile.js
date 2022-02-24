import { Link } from 'react-router-dom';

function MyProfile() {
    return (
        <div className="row col-md-10 justify-content-center p-auto mt-3 border border-1 border-dark shadow-sm p-2 mb-5 bg-body rounded ">
            <div class="row justify-content-center">
                <h2 className="text-center">Profile</h2>
                <div class="row ">
                    <div className="col-6 text-center">
                        <label for="inputUsername" class="form-label">
                            Username :
                        </label>
                    </div>
                    <div className="col-6 text-center">John</div>
                </div>

                <div className="row">
                    <div className="col-6 text-center ">
                        <label for="inputFirstName" class="form-label">
                            First Name :
                        </label>
                    </div>
                    <div className="col-6 text-center">John</div>
                </div>
                <div className=" row">
                    <div className="col-6 text-center">
                        <label for="inputLastName" class="form-label">
                            Last Name :
                        </label>
                    </div>
                    <div className="col-6 text-center">Doe</div>
                </div>

                <div class="row">
                    <div className="col-6 text-center">
                        <label for="inputLastName" class="form-label">
                            Email :
                        </label>
                    </div>
                    <div className="col-6 text-center">john@gmail.com</div>
                </div>
                <div class="row">
                    <div className="col-6 text-center">
                        <label for="inputLastName" class="form-label">
                            Address :
                        </label>
                    </div>
                    <div className="col-6 text-center">Bangkok</div>
                </div>
                <div class="row">
                    <div className="col-6 text-center">
                        <label for="inputLastName" class="form-label">
                            Phone Number :
                        </label>
                    </div>
                    <div className="col-6 text-center">0831234567</div>
                </div>

                <Link class="btn btn-primary" to="/edit" role="button">
                    Edit Profile
                </Link>
            </div>
        </div>
    );
}
export default MyProfile;
