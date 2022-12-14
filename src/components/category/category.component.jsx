import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import { CategoryContainer, CategoryItemsTitle } from "./category.style";

import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/categories.selector";
import Spinner from "../spinner/spinner.component";

const Category = () => {
    const { category } = useParams();
    const isLoading = useSelector(selectCategoriesIsLoading);
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryItemsTitle>
                {category.toUpperCase()}
            </CategoryItemsTitle>
            
            {isLoading ? <Spinner />:
                <CategoryContainer>
                    {products &&
                        products.map((product) => <ProductCard key={product.id} product={product} />)
                    }
                </CategoryContainer>
            }
        </Fragment >
    )
}

export default Category;