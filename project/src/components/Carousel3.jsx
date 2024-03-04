import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel3 = () => {
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
      <Carousel responsive={responsive}>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_d0a129d1-e6f1-4e22-86df-fae9ee702c94"
            alt="product image"
          />
          <p className="price">$48.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-geo-print-oversized-quilted-jacket-future-collective-with-jenny-k-lopez-black-cream/-/A-89549166"
          >
            <p>
              Womens Geo Print <br /> Oversized Quilted...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_e78dcde8-3d90-4e7f-9563-3bc462532e46"
            alt="product image"
          />
          <p className="price">$12.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-90-s-ribbed-tank-top-future-collective-with-jenny-k-lopez/-/A-89542688"
          >
            <p>
              Womens 90s Ribbed <br /> Tank Top - Future...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_95eb2109-e4d7-4a79-abd0-5ab8221d29f8"
            alt="product image"
          />
          <p className="price">$32.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-geo-print-high-waisted-tie-front-trousers-future-collective-with-jenny-k-lopez-black-cream/-/A-89547879"
          >
            <p>
              Womens Geo Print <br /> High-Waisted Tie-Fr...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_085b9a60-267c-4940-9d87-1706fa10fa55"
            alt="product image"
          />
          <p className="price">$36.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-sleeveless-low-back-maxi-dress-future-collective-with-jenny-k-lopez/-/A-89554300"
          >
            <p>
              Womens Sleeveless <br /> Low Back Maxi Dres...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_743daba0-8c94-4b31-b19d-9ea6ea8ad921"
            alt="product image"
          />
          <p className="price">$60.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-boucle-frayed-edge-trench-coat-future-collective-with-jenny-k-lopez-cream/-/A-89549106"
          >
            <p>
              Womens Bouncle <br /> Frayed Edge Trench...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_5ffa40d5-1103-4f9b-a972-8781e56140ee"
            alt="product image"
          />
          <p className="price">$28.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-long-sleeve-v-neck-back-tie-top-future-collective-with-jenny-k-lopez-pink/-/A-89545233"
          >
            <p>
              Womens Long Sleeve <br /> V-Neck Back Tie Top...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_cb4e6d17-e2df-40a0-b4f2-6fe3891ccc82"
            alt="product image"
          />
          <p className="price">$36.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-sleeveless-tie-back-ecru-denim-midi-dress-future-collective-with-jenny-k-lopez-cream/-/A-90657140"
          >
            <p>
              Womens Sleeveless <br /> Tie-Back Ecru Deni...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_b3eefb4e-08ba-41db-878c-23bf7a24850d"
            alt="product image"
          />
          <p className="price">$24.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-short-sleeve-cinched-crop-top-future-collective-with-jenny-k-lopez-cream-black-polka-dots/-/A-89547763"
          >
            <p>
              Womens Short Sleeve <br /> Cinched Crop Top-...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_d884e1a8-6eb4-47aa-8eab-41a329d59a1f"
            alt="product image"
          />
          <p className="price">$32.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-straight-leg-pants-future-collective-with-jenny-k-lopez-cream-black-polka-dots/-/A-89547884"
          >
            <p>
              Womens Straight Leg <br /> Pants - Future...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_547de194-65b3-4a91-8d38-276128bbd210"
            alt="product image"
          />
          <p className="price">$24.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-short-sleeve-cinched-crop-top-future-collective-with-jenny-k-lopez-teal/-/A-90656869"
          >
            <p>
              Womens Short Sleeve <br /> Clinched Crop Top-...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_03200b63-9322-4143-aa9a-68330ddee251"
            alt="product image"
          />
          <p className="price">$34.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-side-tie-sarong-midi-skirt-future-collective-with-jenny-k-lopez/-/A-89547855"
          >
            <p>
              Womens Slide-Tie <br /> Sarong Midi Skirt-...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_96f5f664-9aae-42e6-95bc-e8a981332bd2"
            alt="product image"
          />
          <p className="price">$28.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-striped-scallop-edge-tank-sweater-future-collective-with-jenny-k-lopez-black-cream/-/A-89547721"
          >
            <p>
              Womens Striped<br /> Scallop Edge Tank...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_60ed52c4-4847-4bf3-87fe-f6fe11ee2f83"
            alt="product image"
          />
          <p className="price">$38.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-striped-scallop-edge-ankle-pants-future-collective-with-jenny-k-lopez-black-cream/-/A-89549253"
          >
            <p>
              Womens Striped<br /> Scallop Edge Ankle...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_0d65edc9-cba2-4630-9b91-c1c59bb421a2"
            alt="product image"
          />
          <p className="price">$28.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-balloon-sleeve-asymmetrical-one-shoulder-top-future-collective-with-jenny-k-lopez/-/A-89544990"
          >
            <p>
              Womens Balloon<br /> Sleeve Asymmetrical...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_b62a1ca3-e584-4ad5-9c60-d613eca45223"
            alt="product image"
          />
          <p className="price">$40.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-mid-rise-fold-over-jeans-future-collective-with-jenny-k-lopez-light-wash/-/A-89549055"
          >
            <p>
              Womens Mid-Rise<br /> Fold Over Jeans-...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_9eed351c-ccd6-4c1a-bc69-629efb56501d"
            alt="product image"
          />
          <p className="price">$28.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-long-sleeve-utility-button-down-top-future-collective-with-jenny-k-lopez-beige/-/A-90656319"
          >
            <p>
              Womens Long Sleeve<br /> Utility Button-Down...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_3e90f5d6-c465-45ba-9cb3-32620ab5cd03"
            alt="product image"
          />
          <p className="price">$32.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-column-slip-maxi-skirt-future-collective-with-jenny-k-lopez/-/A-89547872"
          >
            <p>
              Womens Column Slip<br /> Maxi Skirt - Future...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_e3d8da24-3ac9-4749-a4d0-e6b89e365426"
            alt="product image"
          />
          <p className="price">$48.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-boucle-frayed-edge-blazer-future-collective-with-jenny-k-lopez/-/A-89549085"
          >
            <p>
              Womens Bouncle Slip<br /> Frayed Edge - Blazer-...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_728ee0df-c1cc-4a65-bf57-8c74d4115ae5"
            alt="product image"
          />
          <p className="price">$30.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-jacquard-oversized-crewneck-sweater-future-collective-with-jenny-k-lopez-black-cream/-/A-89549199"
          >
            <p>
              Womens Jacquard <br /> Oversized Crewneck...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_d0fe4d0f-fb24-4264-997d-909d01cc4d56"
            alt="product image"
          />
          <p className="price">$38.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-high-waisted-fold-over-cargo-pants-future-collective-with-jenny-k-lopez-black/-/A-89549057"
          >
            <p>
              Womens High - <br /> Waisted Fold Over...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_8ea41f48-5223-4f63-929a-baf25cce4174"
            alt="product image"
          />
          <p className="price">$26.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-crewneck-sheer-sweater-future-collective-with-jenny-k-lopez/-/A-89547655"
          >
            <p>
              Womens Crewneck - <br /> Sheer Sweater - Fut...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_febf1218-036c-4444-ae5a-57daf552d44a"
            alt="product image"
          />
          <p className="price">$40.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-high-rise-raw-edge-ecru-jeans-future-collective-with-jenny-k-lopez-cream/-/A-89549023"
          >
            <p>
              Womens High-Rise <br /> Raw Edge Ecru Jeans...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_904c2223-4fb4-4cbd-8fcc-e8d68743cc1c"
            alt="product image"
          />
          <p className="price">$34.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-strapless-tube-midi-dress-future-collective-with-jenny-k-lopez/-/A-89549214"
          >
            <p>
              Womens Strapless <br /> Tube Midi Dress-...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_87a3fc73-33d6-451e-a65c-5e18dab879f8"
            alt="product image"
          />
          <p className="price">$28.00</p>
          <a
            className="ooo"
            href="https://www.target.com/p/women-s-cropped-crewneck-sweater-future-collective-with-jenny-k-lopez-beige/-/A-89525444"
          >
            <p>
              Womens Crooped <br /> Crewneck Sweater-...
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

export default Carousel3;
