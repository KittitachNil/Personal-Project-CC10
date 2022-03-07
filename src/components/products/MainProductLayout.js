import CatSearchMenu from './CatSearchMenu';
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import { useContext, useEffect, useState } from 'react';
import { LoadingContext } from '../../contexts/LoadingContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import { SearchContext } from '../../contexts/SearchContext';
import axios from '../../config/axios';

function MainProductLayout() {
    const [products, setProducts] = useState([]);
    const [mainCategories, setMainCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [filterMain, setFilterMain] = useState({});
    const [filterSub, setFilterSub] = useState({});

    const { loading, setLoading } = useContext(LoadingContext);
    const { setError } = useContext(ErrorContext);
    const { search, setSearch, initState } = useContext(SearchContext);

    const { min, max, mainCategoryId, subCategoryId } = search;

    const loadProduct = async () => {
        setLoading(true);
        const count = 12;
        const res = await axios.get('/products/' + count);
        setProducts(res.data);
        // console.log(res.data);
        setLoading(false);
    };

    const loadMainCategories = async () => {
        setLoading(true);
        const res = await axios.get('/categories');
        setMainCategories(res.data.mainCategories);
        // console.log(res.data.mainCategories);
        setLoading(false);
    };

    const loadSubCategories = async () => {
        setLoading(true);
        const res = await axios.get('/sub');
        setSubCategories(res.data);
        // console.log(res.data);
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        loadProduct();
        loadMainCategories();
        loadSubCategories();
        setLoading(false);
    }, []);

    const handleMainChange = (e) => {
        const mainCategoryId = e.target.value;
        setSearch((prev) => {
            return { ...prev, mainCategoryId };
        });
    };

    const handleSubChange = (e) => {
        const subCategoryId = e.target.value;
        console.log(e.target.value);
        console.log(subCategoryId);
        setSearch((prev) => {
            return { ...prev, subCategoryId };
        });
    };

    const handlePriceRange = (e) => {
        setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleClear = (e) => {
        setSearch(initState);
        setFilterMain({});
        setFilterSub({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (+min > +max) {
            return setError('Invalid Price Range.');
        }
        if (filterMain.length === 0) {
            return setError('Main Categories are required.');
        }
        axios
            .post('/products/filter', search)
            .then((res) => setProducts(res.data));
    };

    return (
        <>
            <div className="col-md-3 pe-1">
                <div className="">
                    <div className="product-filter">
                        <div>
                            <div className="container row m-0 p-0">
                                <div className="col-mb-12 border border-light bg-light rounded">
                                    <div className="m-3">
                                        <h5>Filter</h5>
                                    </div>
                                    <form
                                        className="form-group"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="mb-3">
                                            <label
                                                className="form-label mt-1"
                                                htmlFor="mainCategory"
                                            >
                                                Main-Category
                                            </label>
                                            <select
                                                name="mainCategory"
                                                className="form-select"
                                                onChange={handleMainChange}
                                            >
                                                <option value="">
                                                    Choose from the list
                                                </option>
                                                {mainCategories &&
                                                    mainCategories.map(
                                                        (item) => (
                                                            <option
                                                                value={item.id}
                                                                key={item.id}
                                                            >
                                                                {item.name}
                                                            </option>
                                                        )
                                                    )}
                                            </select>
                                        </div>
                                        {search.mainCategoryId && (
                                            <div className="mb-3">
                                                <label
                                                    className="form-label "
                                                    htmlFor="subCategory"
                                                >
                                                    Sub-Category
                                                </label>
                                                <select
                                                    name="subCategory"
                                                    className="form-select"
                                                    onChange={handleSubChange}
                                                >
                                                    <option value="">
                                                        Choose from the list
                                                    </option>
                                                    {subCategories &&
                                                        subCategories
                                                            .filter(
                                                                (item) =>
                                                                    item.mainCategoryId ==
                                                                    search.mainCategoryId
                                                            )
                                                            .map((item) => (
                                                                <option
                                                                    key={
                                                                        item.id
                                                                    }
                                                                    value={
                                                                        item.id
                                                                    }
                                                                >
                                                                    {item.name}
                                                                </option>
                                                            ))}
                                                </select>
                                            </div>
                                        )}
                                        <div className="mb-3">
                                            <label
                                                className="form-label"
                                                htmlFor="priceRange"
                                            >
                                                Price Range
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control py-2"
                                                placeholder="Min"
                                                name="min"
                                                value={min}
                                                onChange={handlePriceRange}
                                            />
                                            <input
                                                type="number"
                                                className="form-control py-2"
                                                placeholder="Max"
                                                name="max"
                                                value={max}
                                                onChange={handlePriceRange}
                                            />
                                        </div>
                                        <div className="row m-auto justify-content-center">
                                            <button
                                                type="submit"
                                                className="btn btn-primary "
                                            >
                                                APPLY
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-secondary my-2"
                                                onClick={handleClear}
                                            >
                                                Clear
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {JSON.stringify(search)} */}
            </div>

            <div className="col-md-9 d-md-flex">
                <div className="row">
                    {products &&
                        products.map((item) => (
                            <ProductCards key={item.id} products={item} />
                        ))}
                </div>
            </div>
            <Pagination />
        </>
    );
}

export default MainProductLayout;
