import React from 'react';

import { connect } from 'react-redux';


import './item-collection.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { id, name, price, imageUrl } = item;
    <div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage:`url(${imageUrl})` 
             }}
    />
    <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={() => addItem(item)} inverted >
        Add to Cart
        </CustomButton>
    </div>
};
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);