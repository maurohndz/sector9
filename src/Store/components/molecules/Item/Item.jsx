import React from 'react'

import Image from '../../atoms/Image'
import Heading from '../../atoms/Heading'

import './Item.scss'

const Item = ({ type, image, name }) => {
  return (
    <li className={`item ${type}`}>
        <a href="#" className={`link`}>
            <Image src={image} alt={``} maxWidth="101px"/>

            <Heading type="primary" className="item_list">{name}</Heading>
        </a>
    </li>
  )
}

Item.defaultProps = {
    type: 'list'
}

export default Item