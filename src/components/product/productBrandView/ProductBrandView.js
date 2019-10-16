import React from 'react';


const ProductBrandView = ({logo, name, model}) => {
  return (
    <React.Fragment>
      <img className='product-brand-view-logo'
           src={logo}
           alt='logo'/>
      <div className='product-brand-view-name'>
        {name} {model}
      </div>
    </React.Fragment>
  )
};

export default ProductBrandView;
