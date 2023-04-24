import Carousel from 'react-elastic-carousel';
import Card from './Card';
import "./Carousel.css";
function CarouselSatelite() {
    const breackPoint = [
        {width: 1, itemsToShow: 1},
        {width: 768, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
        {width: 1500, itemsToShow: 4}
    ];
    
    return(
    <div className='carousel'>
        <Carousel>
            <Card number="1"/>
            <Card number="2"/>
            <Card number="3"/>
            <Card number="4"/>
            <Card number="5"/>
        </Carousel>
    </div>
    );
}
export default CarouselSatelite;