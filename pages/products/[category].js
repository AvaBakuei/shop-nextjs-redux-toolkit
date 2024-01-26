import { useSelector, useDispatch} from "react-redux";
import { getProductsOfCategory } from "@/data/local/productSlice";
import {useRouter} from "next/router";
import {useEffect} from "react";

const Products = () => {
    const router = useRouter();
    const category = router.query.category;
    const {productsOfCategory} = useSelector((state) => state.products);
    const dispatch = useDispatch();


    console.log("productsOfCategory", productsOfCategory);

    useEffect(()=> {
        dispatch(getProductsOfCategory(category));
    }, [category])

    return(<div>products</div>)
}

export default Products;