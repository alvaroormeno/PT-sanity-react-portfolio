import React, {useState, useEffect} from 'react'

import './Testimonial.scss'
import {motion} from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import {AppWrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client'


const Testimonial = () => {

  const [brands, setBrands] = useState([])
  const [Testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
    .then((data) => {
      // console.log(data)
      setTestimonials(data);
    })

    client.fetch(brandsQuery)
    .then((data) => {
      setBrands(data);
    })
  }, [])


  return (
    <div>Testimonials</div>
  )
}

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonial', "app__primarybg")