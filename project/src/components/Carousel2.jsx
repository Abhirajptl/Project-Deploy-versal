import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel2 = () => {
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
            src="https://target.scene7.com/is/image/Target/GUEST_2f9df157-e689-4d95-b01b-001707ed6a97"
            alt="product image"
          />
          <p className="price">$19.99</p>
          <p className="rrr">Buy 3 get a $5 target...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/vamigas-rosa-mosqueta-chilean-rosehip-facial-oil-1-35-fl-oz/-/A-86742533"
          >
            <p>
              Vamigas Rosa <br /> Mosqueta chilean...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_5c5d92bb-aab1-4466-a08c-aee4ae1cb26f"
            alt="product image"
          />
          <p className="price">$12.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/be-rooted-240pg-ruled-journal-8-5-34-x5-5-34-green/-/A-88579128"
          >
            <p>
              Be Rooted 240pg <br /> Ruled Journal...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_175b8216-99dd-43ee-82d3-376034b293eb"
            alt="product image"
          />
          <p className="price">$34.95</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/nerdbugs-gallbladder-organ-plush-toy/-/A-90490140"
          >
            <p>
              Nerdbugs Gallbladder <br /> Organ Plush Toy...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_fea94fd9-e8eb-4e09-b7f8-2d66762f65a3"
            alt="product image"
          />
          <p className="price">$34.00</p>
          <p className="rrr">Buy 3 get a $5 Target...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/nodpod-weighted-blanket-for-your-eyes-sleep-mask-elephant-gray/-/A-89264981"
          >
            <p>
              nodpod Weighted <br /> Blanket for your eye...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_213d6d48-53e1-4a7c-bbec-acaf89e1d596"
            alt="product image"
          />
          <p className="price">$14.89</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/leadher-climb-like-amanda-empowerment-journal-craft-kit-kids-crafts/-/A-86508026"
          >
            <p>
              LeadHER Climb like <br /> Amanda Empowerment...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_d1cd5cd8-43a8-4065-90df-564cc00915eb"
            alt="product image"
          />
          <p className="price">$15.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/chillhouse-chill-tips-nail-art-press-ons-checked-out/-/A-83705672"
          >
            <p>
              Chillhouse Chill Tips <br /> Nail Art Press Ons -...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_ec37ca1d-7ae9-4dc2-9e0a-2e676d9c8766"
            alt="product image"
          />
          <p className="price">$11.99</p>
          <p className="rrr">Buy 4 get a $5 Target</p>
          <a
            className="ooo"
            href="https://www.target.com/p/sadieb-athlete-clarifying-vanilla-mint-shampoo-10-fl-oz/-/A-89235165"
          >
            <p>
              SadieB Athlete <br /> Clarifying Vanilla Mint...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_7135b9b0-1dde-4f1f-b08d-f4c2dcb478d0"
            alt="product image"
          />
          <p className="price">$17.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/fresh-beats-doll-beigne-au-lei/-/A-88375607"
          >
            <p>
              Fresh Beats Doll <br /> Beigne Au Lei...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_d8d06e8f-17e8-4717-adf6-054b1110e853"
            alt="product image"
          />
          <p className="price">$9.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/v-225-monos-oaxaca-lil-39-libros-by-patty-rodriguez-38-ariana-stein-board-book/-/A-80924313"
          >
            <p>
              Vamonos: Oaxaca - <br /> (Lil libros) by Patty...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_634d7338-96df-4a32-87ce-6594c45add4d"
            alt="product image"
          />
          <p className="price">$25.00</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/little-words-project-keep-going-keychain/-/A-89694978"
          >
            <p>
              Little Words Project - <br /> Keep Going Keychain
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_c94bf4b5-9d65-4e62-a3c2-5bf40fb8c7c2"
            alt="product image"
          />
          <p className="price">$6.49</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/bocce-39-s-bakery-beef-bone-broth-and-carrot-dog-treats-5oz/-/A-80173815"
          >
            <p>
              Bocces Bakery Beef - <br /> Bone Broth & Carr...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_06f09a4a-f032-417c-9eef-1edb13b6c200"
            alt="product image"
          />
          <p className="price">$11.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/awoo-dog-walking-safety-strap-olive/-/A-88566627"
          >
            <p>
            Awoo Dog Walking <br /> Safety Strap - Olive...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_8f3dfc95-19c3-47f0-aa66-7b5a45149180"
            alt="product image"
          />
          <p className="price">$12.79</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/brilliant-or-bs-game/-/A-82006415"
          >
            <p>
            Brilliant & BS ? Game <br /> ...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_ece6fad9-0919-470f-94e1-86b72850a9e8"
            alt="product image"
          />
          <p className="price">$16.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/luna-magic-happy-ex-lashes-4pc/-/A-89421660"
          >
            <p>
            LUNA MAGIC Happy <br /> Ex Lashes - 4pc
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_a8a82b84-91c2-40a6-a5b9-5275edbc6c70"
            alt="product image"
          />
          <p className="price">$7.19</p>
          <p className="rrr">clearance</p>
          <a
            className="ooo"
            href="https://www.target.com/p/l-erickson-snake-tige-boule-hair-clip-set-gold-2ct/-/A-85768918"
          >
            <p>
            L. Erickson Snake Tige <br /> Boule Hair Cut Set -...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_0e73404d-e752-4f9e-9589-65ff1f2e3d87"
            alt="product image"
          />
          <p className="price">$21.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/blogilates-beginner-lightweight-yoga-mat-rust-4mm/-/A-85585578"
          >
            <p>
            Blogilates Begginer <br /> Lightweight Yoga Ma...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_81e87226-6d32-4920-a5fa-f2631e977913"
            alt="product image"
          />
          <p className="price">$16.69</p>
          <p className="rrr">Buy 4 get a $5 Target...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/camille-rose-curl-maker-12oz/-/A-14441332"
          >
            <p>
            Camille Rose Curl <br /> Maker - 12oz
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_05919245-34d3-4b5f-b1ca-7aa7a9534f14"
            alt="product image"
          />
          <p className="price">$9.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/upbounders-by-little-likes-kids-mommy-39-s-shadow-inspiring-careers-flash-cards-game/-/A-88223723"
          >
            <p>
            Upbounders by Little <br /> Likes Kids Mommys...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_b31a96c2-f7b3-4b31-92bb-bbeba6cb1a91"
            alt="product image"
          />
          <p className="price">$49.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/surprise-powerz-vera-the-vet-educational-75-phrases-talking-16-34-stem-plush-doll/-/A-83959317"
          >
            <p>
            Surprise Powerz Vera <br /> The Vet Educational...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_05770993-7c61-44e9-afbf-9f4c7bb660ea"
            alt="product image"
          />
          <p className="price">$7.99</p>
          <p className="rrr">save 30% on GoNan...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/gonanas-chocolate-chip-banana-bread-mix-12-3oz/-/A-88446819"
          >
            <p>
            GoNanas chocolate <br /> Chip Banana Bread...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_c8c02ef9-47b4-4f39-9c27-98c1407192b5"
            alt="product image"
          />
          <p className="price">$18.99</p>
          <p className="rrr">...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/milky-mama-milky-melon-dietary-supplement-0-6oz/-/A-86714509"
          >
            <p>
            Milky Mama Milky <br /> Melon Dietary...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_ef9bf1cc-b443-4c9e-9d5d-8da86daf3085"
            alt="product image"
          />
          <p className="price">$8.99</p>
          <p className="rrr">save 15% off here W...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/flo-here-we-flo-organic-cotton-eco-applicator-biodegradable-tampons-14ct/-/A-84863038"
          >
            <p>
            Flo Here we Flo <br /> Organic Cotton Eco-...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_fb8cb498-534b-476b-ad6e-6d7d8f52a644"
            alt="product image"
          />
          <p className="price">$18</p>
          <p className="rrr">save 15% off here W...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/toddler-girls-39-elle-olivia-flower-sunglasses-pajama-set-orange-3t/-/A-89101138"
          >
            <p>
            Toddler Girls Elle Olivia <br /> Flower Sunglasses...
            </p>
          </a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_853b3840-e6f5-44d5-9cf1-49169592b1ff"
            alt="product image"
          />
          <p className="price">$56.99</p>
          <p className="rrr">save 15% off here W...</p>
          <a
            className="ooo"
            href="https://www.target.com/p/powerhandz-pure-grip-weighted-softball-batting-gloves-black-s/-/A-54670898"
          >
            <p>
            POWERHANDZ Pure <br /> Grip Weighted Softb...
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

export default Carousel2;
