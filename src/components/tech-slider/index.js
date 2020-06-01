import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './index.scss';

const TechSlider = () => {
    const techs = ['JavaScript', 'NodeJs', 'ReactJs', 'GatsbyJs', 'EmberJs']

    return (
        <Carousel autoplay={true} dots={false} autoplaySpeed={2000} effect="fade">
            {
                techs.map(tech => <span key={tech}>{tech}</span>)
            }
        </Carousel>
    )
}
export default TechSlider;