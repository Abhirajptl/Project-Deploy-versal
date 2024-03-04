import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel5 = () => {
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
      <h1>St. Patrick’s Day faves</h1>
      <Carousel responsive={responsive}>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_959086fa-003f-4c6c-aead-c3cdc7da15a3"
            alt="product image"
          />
          <p className="price">$2.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-39-s-gradient-shamrocks-st-patrick-39-s-day-low-cut-socks-black-4-10/-/A-89259638"
          >
            <p>
              Womens Gradient <br /> Shamrocks St...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_33538d63-4368-4b26-8f8f-1b208b503529"
            alt="product image"
          />
          <p className="price">$2.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-39-s-corgi-leprechaun-st-patrick-39-s-day-low-cut-socks-dark-green-4-10/-/A-89259644"
          >
            <p>
              Womens Corgi <br /> Leprechaun St...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_5358242c-e0cf-468d-b10c-68328028a6c5"
            alt="product image"
          />
          <p className="price">$2.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-39-s-outlined-shamrocks-st-patrick-39-s-day-low-cut-socks-green-4-10/-/A-89259640"
          >
            <p>
              Womens Outlined <br /> Shamrocks St...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_3701ce2f-d6f4-42e7-bbab-041e890f85ab"
            alt="product image"
          />
          <p className="price">$6.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/girls-39-st-patrick-39-s-day-short-sleeve-39-happy-go-lucky-39-graphic-t-shirt-cat-38-jack-8482-green-m/-/A-89382913"
          >
            <p>
            Girls St. Patricks Day <br/> Short Sleeve Happy
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_ca43082d-c915-4357-807d-855c386f3b57"
            alt="product image"
          />
          <p className="price">$6.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/girls-39-st-patrick-39-s-day-short-sleeve-39-ice-cream-sundae-39-graphic-t-shirt-cat-38-jack-8482-light-green-s/-/A-89382903"
          >
            <p>
            Girls St. Patricks Day <br/> Short Sleeve Ice...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_93e1c186-d522-4a38-90e2-3b3b063727e9"
            alt="product image"
          />
          <p className="price">$2.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-39-s-hedgehog-leprechaun-st-patrick-39-s-day-low-cut-socks-green-4-10/-/A-89259653"
          >
            <p>
            Womens Hedgehog <br/> Leprechaun St....
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_10856d63-9aa1-42a8-a413-33b50e353351"
            alt="product image"
          />
          <p className="price">$8.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/glitter-shamrock-drop-earrings-green/-/A-89700609"
          >
            <p>
            Glitter Shamrock Drop <br/> Earrings - Green....
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="data:image/jpeg;base64,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"
            alt="product image"
          />
          <p className="price">$8.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/mixed-st-patty-charm-post-drop-earrings-green-gold-rainbow/-/A-89700601"
          >
            <p>
            Mixed St. Patty Charm <br/> Post Drop Earrings -...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_94eec641-f016-4679-b412-682f6ffe8278"
            alt="product image"
          />
          <p className="price">$8.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/mixed-charm-and-leprechaun-hoop-earring-set-3pc-green-gold/-/A-89700608"
          >
            <p>
            Mixed Charm and <br/> Leprechaun Hoop...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_4942689d-70c5-4c73-9fca-77d1b9475ded"
            alt="product image"
          />
          <p className="price">$10.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/boys-39-minecraft-creeper-st-patrick-39-s-day-short-sleeve-graphic-t-shirt-green-s/-/A-89631442"
          >
            <p>
            Boys Minecraft <br/> Creeper St. Patricks...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_cf284ab2-d3fb-4d5b-8b23-a7a3888e57e5"
            alt="product image"
          />
          <p className="price">$10.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-39-s-striped-shamrocks-st-patrick-39-s-day-cozy-low-cut-socks-green-white-4-10/-/A-89259645"
          >
            <p>
            Womens Striped <br/> Shamrocks St....
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_19634bf1-e606-4767-8958-0981ca9afe22"
            alt="product image"
          />
          <p className="price">$8.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/leprechaun-drop-earrings-green-red/-/A-89700607"
          >
            <p>
            Leprechaun Drop <br/> Earrings - Green/Red....
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_5ca76496-a0da-4679-a8d5-0070c3d90547"
            alt="product image"
          />
          <p className="price">$10.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/leprechaun-drop-earrings-green-red/-/A-89700607"
          >
            <p>
            Boys Pokemon Lucky <br/> Charm St. Patricks T-....
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_faf9c8e2-c815-4821-a395-d21784b769bf"
            alt="product image"
          />     
          <p className="price">$4.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-39-s-striped-shamrocks-st-patrick-39-s-day-cozy-low-cut-socks-black-white-green-4-10/-/A-89259643"
          >
            <p>
            Womens Striped <br/> Shamrocks St. Patricks Day Cozy Low....
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_88f4bf9a-89ba-433c-8431-f79319a785a6"
            alt="product image"
          />     
          <p className="price">$10.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/boys-39-marvel-spider-man-clover-st-pats-short-sleeve-graphic-t-shirt-forest-green-s/-/A-89631448"
          >
            <p>
            Boys Marvel Spider-<br/>Man Clover St. Pats....
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_9203a896-df95-40d2-a3e1-6d20c0d5f0c4"
            alt="product image"
          />     
          <p className="price">$10.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/boys-39-super-mario-yoshi-st-patrick-39-s-day-short-sleeve-graphic-t-shirt-green-xs/-/A-89631429"
          >
            <p>
            Boys Super Mario <br/> Yoshi St. Patricks Day....
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_faf9c8e2-c815-4821-a395-d21784b769bf"
            alt="product image"
          />     
          <p className="price">$10.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/boys-39-super-mario-yoshi-st-patrick-39-s-day-short-sleeve-graphic-t-shirt-green-xs/-/A-89631429"
          >
            <p>
            Boys Super Mario <br/> Yoshi St. Patricks Day....
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_2837aafb-30cf-4231-a786-fe0026549876"
            alt="product image"
          />     
          <p className="price">$6.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/girls-39-st-patrick-39-s-day-short-sleeve-39-unicorn-39-graphic-t-shirt-cat-38-jack-8482-cream-xs/-/A-89382920"
          >
            <p>
            Girls St. Patricks Day <br/> Short Sleeve Unicorn....
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_3701ce2f-d6f4-42e7-bbab-041e890f85ab"
            alt="product image"
          />     
          <p className="price">$6.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/girls-39-st-patrick-39-s-day-short-sleeve-39-happy-go-lucky-39-graphic-t-shirt-cat-38-jack-8482-green-xl/-/A-89382915"
          >
            <p>
            Girls St. Patricks Day <br/> Short Sleeve Happy....
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

export default Carousel5;
