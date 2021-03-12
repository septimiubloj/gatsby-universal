import React from 'react';
import posed from 'react-pose';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const DraggableImage = posed.div({
  draggable: true,
});

const Item = ({ title, image }) => (
  <DraggableImage>
    <figure>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </figure>
  </DraggableImage>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
