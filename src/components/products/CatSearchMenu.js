function CatSearchMenu({ mainCategories }) {
    const { name } = mainCategories;
    console.log(name);
    return (
        <div className="container row m-0 p-0">
            <div className="col-mb-12 border border-light bg-light rounded">
                <div className="m-3">
                    <h5>Filter</h5>
                </div>
                <form className="form-group">
                    <div className="mb-3">
                        <label
                            className="form-label mt-1"
                            htmlFor="mainCategory"
                        >
                            Main-Category
                        </label>
                        <select name="mainCategory" className="form-select">
                            <option>CPU</option>
                            <option>Ram</option>
                            <option>Gaming Gear</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label " htmlFor="subCategory">
                            Sub-Category
                        </label>
                        <select name="subCategory" className="form-select">
                            <option>AMD AM4</option>
                            <option>INTEL LGA1200 GEN 10th</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="priceRange">
                            Price Range
                        </label>
                        <input
                            type="number"
                            className="form-control py-2"
                            placeholder="Min"
                            name="min"
                            // value={min}
                            // onChange={handlePriceRange}
                        />
                        <input
                            type="number"
                            className="form-control py-2"
                            placeholder="Max"
                            name="max"
                            // value={max}
                            // onChange={handlePriceRange}
                        />
                    </div>
                    <div className="row m-auto justify-content-center">
                        <button type="submit" className="btn btn-primary ">
                            APPLY
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary my-2"
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CatSearchMenu;
