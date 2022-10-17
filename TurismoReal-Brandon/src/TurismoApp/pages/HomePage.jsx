
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import Header from '../components/Header';
import Titulo from '../components/Titulo';
import Titulo2 from '../components/Titulo2';


export const HomePage = () => {
  return <div> 
     <ImageSlider slides={SliderData} />
     <Titulo />
     <Header />
     <Titulo2 />
      </div>
}
