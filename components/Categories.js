import { useSelector, useDispatch} from "react-redux";
import Link from "next/link";
import {useEffect} from "react";
import { getAllCategories } from "@/data/local/productSlice";
import {colors} from "../lib/colors";

const Categories = () => {
    const {categoriesList} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    console.log("categoriesList", categoriesList);

    useEffect(()=> {
        dispatch(getAllCategories());
    }, [dispatch])

    return(
        <div className="flex flex-col px-12">
            <h2 className="my-8 text-3xl font-bold text-[#280274]">Browse by Categoriy</h2>
            <div className="flex flex-wrap items-center justify-center">
                {categoriesList?.map((category, index) => (
                    <Link href={`/products/${category}`} key={index} className="category-cart" style={{ backgroundColor: colors[index] }}>
                        <span className="text-sm font-medium text-[#280274] capitalize">{category}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories;