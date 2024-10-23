import React from 'react'
import FakeData from '../shared/FakeData.jsx'; 
import CarItem from './CarItem.jsx';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


function MostSearchedCar() {

    console.log(FakeData.carList);
  return (
    
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center mt-16 mb-7 '>
            Most Searched Cars
        </h2>
                    <Carousel>
            <CarouselContent>
                {FakeData.carList.map((car,index)=>
                ( 
                <CarouselItem className="basis-1/4">
                    <CarItem car={car} />
                </CarouselItem>
            
        )
        )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>



       
    </div>
  )
}

export default MostSearchedCar