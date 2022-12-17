import "./product.css";

function Product() {
  return (
    <div className="product">
      <img
        className="product-img"
        src="/assets/images/human-made-cpfm-sweatshirt.png"
        alt="Human Made CPFM Sweatshirt"
      ></img>
      <span id="product-name">Human Made CPFM Sweatshirt</span>
      <span id="product-price">$400</span>
      <div className="product-types">
        <ul className="type-list">
          <li className="list-item">
            <button className="list-btn">Small</button>
          </li>
          <li className="list-item">
            <button className="list-btn">Medium</button>
          </li>
          <li className="list-item">
            <button className="list-btn">Large</button>
          </li>
          <li className="list-item">
            <button className="list-btn">XLarge</button>
          </li>
        </ul>
      </div>
      <button className="add-cart">Add to Cart</button>
    </div>
  );
}

export default Product;
