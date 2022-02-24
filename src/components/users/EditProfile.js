function EditProfile() {
    return (
        <div className="row col-lg-10 p-auto mt-3 p-5 border border-1 border-dark shadow-sm p-3 mb-5 bg-body rounded">
            <form class="row g-3">
                <h2>Edit Profile</h2>
                <div class="col-md-12">
                    <label for="inputUsername" class="form-label ">
                        Username
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputUsername"
                        value="John Doe"
                        disabled
                    />
                </div>
                <div class="col-md-6">
                    <label for="inputFirstName" class="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputFirstName"
                    />
                </div>
                <div class="col-md-6">
                    <label for="inputLastName" class="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputLastName"
                    />
                </div>
                <div class="col-md-12">
                    <label for="inputEmail" class="form-label">
                        Email
                    </label>
                    <input type="email" class="form-control" id="inputEmail" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                    />
                </div>
                <div class="col-12">
                    <label for="inputPhoneNumber" class="form-label">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputPhoneNumber"
                        placeholder="1234 Main St"
                    />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;
