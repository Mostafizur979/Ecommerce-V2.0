'use client';
import Breadcrum from '@/components/common/BreadCrum';
import getCategories from '@/lib/getAllCategories';
import getProducts from '@/lib/getAllProducts';
import { useQueryParamValue } from '@/utils/useQueryParamValue';
import { useEffect } from 'react';
import { IoMdHome } from 'react-icons/io';


const ProductDetailsContainer = () => {
  const id = useQueryParamValue('id', '', true);
  const [products, setProducts] = useState(null)
    async function fetchData() {
        const data = await getCategories();
        const productData = await getProducts()
        setCategories(data);
        setProducts(productData);
    };

    useEffect(() => {
        fetchData();
    }, []);


  return (
    <>
      <div className='bg-white'>
        <div className='max-w-[1350px] mx-auto px-3 xl:px-0'>
          <div className="w-full h-full">
            <Breadcrum
              crums={[
                {
                  title: <IoMdHome size={16} />,
                  href: `/`,
                },
                {
                  title: productShaped?.category?.name,
                  href: `/category?cid=${productShaped?.category?.id}`,
                },
                {
                  title: productShaped?.title,
                  isCurrent: true,
                },
              ]}
            />
            <div className="w-full">

              <ProductViewSection item={productShaped} />

            </div>
            <AboutSection item={productShaped} />
           
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-[1350px] mx-auto px-3 xl:px-0'>
          <h2 className='text-[16px] lg:text-[18px] text-black font-semibold my-4'>Related Products</h2>
          <ProductSection
            products={productData}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsContainer;
