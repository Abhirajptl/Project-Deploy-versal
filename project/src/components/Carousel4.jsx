import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel4 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="App">
      <h1>Popular on social</h1>
      <Carousel responsive={responsive}>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_c4f92eaa-b43b-4ce1-a83f-036f3e278018"
            alt="product image"
          />
          <p className="price">$10.99</p>
          <p className="rrr">Buy 3 get a $5 target...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/e-l-f-power-grip-primer-4-niacinamide-0-811-fl-oz/-/A-86754560"
          >
            <p>
              e.i.f Power Grip Primer <br /> +4% Niyacinamide-...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_b13f9282-80dd-4fe8-8cd2-ece382cc6491"
            alt="product image"
          />
          <p className="price">$19.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/target-toy-shopping-cart/-/A-84828748"
          >
            <p>
              Target Top Shopping Cart <br /> ...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_d767c91b-50e0-4673-8653-3c9ba3d4e1fb"
            alt="product image"
          />
          <p className="price">$16.00</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/kids-39-bluey-mini-backpack/-/A-89618485"
          >
            <p>
              Kids Bluey Miny <br /> Backpack...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_f757beb3-0b93-4d6f-8bdf-6df5afc4baac"
            alt="product image"
          />
          <p className="price">$9.00</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/e-l-f-halo-glow-highlighter-beauty-wand-liquid-gold-0-33-fl-oz/-/A-88301536"
          >
            <p>
              e.i.f Halo Glow <br /> Highlighter Beauty...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_81be99c5-9da7-487c-b749-8c232fdbbdc5"
            alt="product image"
          />
          <p className="price">$12.00</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/grayson-mini-toddler-girls-39-oversized-french-terry-graphic-crewneck-sweatshirt-green-3t/-/A-89555908"
          >
            <p>
              Grayson Mini Toddler <br /> Girls Oversized Fren...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_b7cde17a-f199-4ff4-aad3-e5654b7f5a59"
            alt="product image"
          />
          <p className="price">$16.00</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/grayson-mini-toddler-girls-39-oversized-french-terry-graphic-crewneck-sweatshirt-green-3t/-/A-89555908"
          >
            <p>
              Womens Long Sleeve <br /> Seamless Shirt - Wil...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_a589a5d1-75d1-42ee-aa91-e685ca410c69"
            alt="product image"
          />
          <p className="price">$40.00</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/single-handle-ceramic-vase-threshold-8482-designed-with-studio-mcgee/-/A-88676268"
          >
            <p>
              Single Handle Ceramic <br /> Vase - Threshold...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_fe59f25f-9d7f-4d08-be01-8da69827656f"
            alt="product image"
          />
          <p className="price">$30.00</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-39-s-high-rise-cargo-utility-pants-wild-fable-8482-light-yellow-s/-/A-89585741"
          >
            <p>
              Womens High-Rise <br /> Cargo Utility Pants-...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_ef2c1546-0427-4d9b-b4a8-73aff9c90cc1"
            alt="product image"
          />
          <p className="price">$30.00</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/destination-tote-handbag-a-new-day-8482-tan/-/A-89571927"
          >
            <p>
              Destination Tote <br /> Handbag - A New Da...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_4d0c503a-1cf8-487a-a2d9-a43b19be33e1"
            alt="product image"
          />
          <p className="price">$10.00</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/black-history-month-toddler-short-sleeve-hbcu-icon-t-shirt-black-5t/-/A-89174909"
          >
            <p>
              Black History Month <br /> Toddler Short Sleeve...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_0875dfd5-3fa9-4f92-a22b-6ad8ef9ab907"
            alt="product image"
          />
          <p className="price">$24.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/kids-39-cece-rain-boots-cat-38-jack-8482-pink-1/-/A-89467516"
          >
            <p>
              Kids Cece Rain Boots <br /> - Cat & Jack Pink 1...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_4e1b2945-480e-4f32-9cdb-a15bad50948b"
            alt="product image"
          />
          <p className="price">$35.00</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-39-s-crepe-puff-short-sleeve-midi-dress-a-new-day-8482-blue-floral-m/-/A-89408824"
          >
            <p>
              Womens Crepe Puff <br /> Short Sleeve Midi...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_34ea5386-1fb2-45d8-a4a0-8d4ba5053dc5"
            alt="product image"
          />
          <p className="price">$44.00</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-39-s-denim-cargo-jumpsuit-universal-thread-8482-medium-wash-16/-/A-89430759"
          >
            <p>
              Womens Denim Cargo <br /> Jumpsuit - Universal...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_132fe3c3-8112-4873-ab09-593d467b3930"
            alt="product image"
          />
          <p className="price">$25.00</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-39-s-high-rise-denim-cargo-shorts-universal-thread-8482-medium-wash-24/-/A-89430971"
          >
            <p>
              Womens High Rise <br /> Denim Cargo Shorts...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_bf936dd6-f5cd-4481-96ff-9f1f5a1b002c"
            alt="product image"
          />
          <p className="price">$34.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/ariana-grande-eternal-sunshine-target-exclusive-vinyl/-/A-90953437"
          >
            <p>
              Ariana Grande - eternal <br /> Sunshine Target...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      
      </Carousel>
      ;
    </div>
  );
};

export default Carousel4;
