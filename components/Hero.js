import Image from 'next/image';
import Link from "next/link";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"
import { getAllProducts } from "@/data/local/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Autoplay from "embla-carousel-autoplay";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button"



const Hero = () => {
    const {productList} = useSelector((state) => state.products);
    const limitProducts = productList?.slice(1, 3);
    const dispatch = useDispatch();


    console.log("limitProducts", limitProducts);
    
    useEffect(()=>{
        dispatch(getAllProducts());
    }, [])
    
    return(
        <div className="flex flex-col items-center justify-center px-12 pb-24">
            <h2 className="pb-12 font-bold text-xl text-[#280274]">Top The Products Of The Month</h2>
            <Carousel 
                // plugins={[
                //     Autoplay({
                //         delay: 2000,
                //     }),
                // ]}
            >
                <CarouselContent>
                    {limitProducts?.map((item)=>(
                        <CarouselItem key={item.id} className="flex items-center justify-center">
                            <div>
                                <h3 className="mb-6 text-4xl font-semibold text-[#280274]">{item.title}</h3>
                                <div className="w-96 text-lg text-[#848992]">{item.description}</div>
                                <Button className="mt-6 bg-[#3652AD]">
                                    <Link href="#"> Shop Now </Link>
                                    <ChevronRightIcon className="w-3.5 h-3.5" />
                                </Button>
                            </div>
                            <Image
                                src={item.images[0]}
                                width={500}
                                height={300}
                                alt="Picture of the author"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    )
}

export default Hero