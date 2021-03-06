import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductTitle.module.css';

class ProductTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      brand,
      name,
      options,
      model,
      sku,
    } = this.props;
    return (
      <div className={styles.productTitle}>
        <div
          className={styles.brand}
        >
          {brand}
        </div>
        <h1 className={styles.product}>{`${brand} - ${name} - ${options[4]}`}</h1>
        <div>
          <span className={styles.modelSku}>
            <strong>Model: </strong>
            <span className={styles.modelSkuValue}>
              {model}
            </span>
          </span>
          <span className={styles.modelSku}>
            <strong>SKU: </strong>
            <span className={styles.modelSkuValue}>
              {sku[0]}
            </span>
          </span>
        </div>
      </div>
    );
  }
}
ProductTitle.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
  model: PropTypes.string.isRequired,
  sku: PropTypes.instanceOf(Array).isRequired,
};

export default ProductTitle;
