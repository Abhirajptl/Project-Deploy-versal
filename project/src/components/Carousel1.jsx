import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const Carousel1 = () => {
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
      <h1>Spring break essentials</h1>
      <Carousel responsive={responsive}>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_6592f778-7d07-4fd7-b96b-8a8792fd22b8"
            alt="product image"
          />
          <p className="price">$12.00</p>
          <p className="rrr">Buy 3 for $30 on select</p>
          <a className="ooo" href="https://www.target.com/p/women-s-bralette-bikini-top-wild-fable/-/A-89198117"><p>Womens Bralette <br/> Bikini Top - Wild Fable</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_1842e039-888c-4c02-bb7d-2f4a132309df"
            alt="product image"
          />
          <p className="price">$12.00</p>
          <p className="rrr">Buy 3 for $30 on select</p>
          <a className="ooo" href="https://www.target.com/p/zip-crochet-crossbody-bag-a-new-day/-/A-89398730"><p>Womens Scoope Front <br/> Low-Rise High leg...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_b8681329-dc3f-4d34-9586-d0cae257279a"
            alt="product image"
          />
          <p className="price">$4.50-9.29</p>
          <p className="rrr">Buy 3 get a $5 target</p>
          <a className="ooo" href="https://www.target.com/p/coppertone-sport-sunscreen-lotion-spf-50/-/A-89529093"><p>Coopertone Sport <br/> Sunscreen Lotion...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_6a7bfd05-cd7b-442e-b0af-c8a488f218b2"
            alt="product image"
          />
          <p className="price">$20</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/women-s-high-leg-cheeky-scoop-back-one-piece-swimsuit-wild-fable/-/A-89611521"><p >Womens High Leg Cheeky Scoop Back <br/>...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_871d7ead-b5c2-4801-8171-7724e4ea444c"
            alt="product image"
          />
          <p className="price">$20</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/zip-crochet-crossbody-bag-a-new-day/-/A-89398730"><p >Zip Crochet Crossbody <br/> Bag - A New Day</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_e8639e9f-4e10-4f4e-9809-c1b736587feb"
            alt="product image"
          />
          <p className="price">$15</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/packable-down-brim-straw-hat-a-new-day/-/A-89490207"><p >Packable Down Brim <br/> Straw Hat - A New ...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_05449b87-28a6-4dc3-a525-9bda48eb3ac7"
            alt="product image"
          />
          <p className="price">$15</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/wow-reversible-beach-towel-blue-white-navy-sun-squad-8482/-/A-86301566"><p >Wow Reversible <br/> Beach Towel...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_d05129eb-dd73-497a-bd8d-4b6b6a4bdc31"
            alt="product image"
          />
          <p className="price">$20</p>
          <p className="rrr">...</p>
          <a className="ooo" href="hhttps://www.target.com/p/women-s-heart-pattern-eyelet-halter-bikini-top-wild-fable/-/A-89611500"><p >Womens Heart Patterns<br/> Eyelet Halter Bikini T...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_dea0966d-ae35-4b17-a160-1811d6bc6d52"
            alt="product image"
          />
          <p className="price">$18</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/women-s-heart-pattern-eyelet-side-tie-high-leg-extra-cheeky-bikini-bottom-wild-fable/-/A-89611501"><p >Womens Heart Patterns<br/> Eyelet Side-Tie High...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_6bde0124-4f87-4035-aa94-0be8d4ee0921"
            alt="product image"
          />
          <p className="price">$19.99</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/30l-packable-duffel-bag-blue-open-story-8482/-/A-86391392"><p >30L Packable Duffel<br/> BagBlue Open...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_77db5432-656b-4e24-a59d-c5d8c366617f"
            alt="product image"
          />
          <p className="price">$20</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/women-s-slim-fit-tiny-tank-top-a-new-day/-/A-89798115"><p >Womens slim fit Tiny<br/> Tank Top A new Day...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_5dab7b61-ba1c-4a5b-be0a-bf3f30fa7bd8"
            alt="product image"
          />
          <p className="price">$179.99</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/skyline-3pc-hardside-checked-spinner-luggage-set/-/A-90927711"><p >Skyline 3pc Hardside <br/> Checked Spinner...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_4d7c829e-20ac-4d40-b7f3-d2b05ecd383a"
            alt="product image"
          />
          <p className="price">$30</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/straw-natural-tote-handbag-a-new-day/-/A-89398729"><p >Straw Natural Toast <br/> Handbag - A New Day...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_20fb10df-73eb-4efa-a18f-a93782fb2b12"
            alt="product image"
          />
          <p className="price">$34</p>
          <p className="rrr">sale</p>
          <a className="ooo" href="https://www.target.com/p/35l-travel-backpack-dark-ivy-open-story-8482/-/A-86391402"><p >35L Travel Backpack <br/> Dark Ivy - Open Story...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_52ce4edc-2b48-443f-8943-9da3110c9759"
            alt="product image"
          />
          <p className="price">$10.49</p>
          <p className="rrr">Buy 3 get a $5 target...</p>
          <a className="ooo" href="https://www.target.com/p/jergens-natural-glow-firming-daily-moisturizer-self-tanner-body-lotion/-/A-13667311"><p >Jergens Natural Glow <br/> Firming Daily...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_c4d382fb-5a00-4ba7-bced-128d4a2fd398"
            alt="product image"
          />
          <p className="price">$20</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/women-s-one-shoulder-slim-fit-tank-top-a-new-day/-/A-89798853"><p >Womens One <br/> Shoulder Slim Fit Tan...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_37ae94ea-2e31-4217-acf2-7a61dc7aa2c8"
            alt="product image"
          />
          <p className="price">$25</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/women-s-midi-a-line-skirt-a-new-day/-/A-89799036"><p >Womens Midi A-Line <br/> Skirt - A New Day...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_c65260f0-2749-427c-b817-201f161e133e"
            alt="product image"
          />
          <p className="price">$3.99</p>
          <p className="rrr">sale</p>
          <a className="ooo" href="https://www.target.com/p/2pk-jelly-luggage-tag-lime-green-open-story-8482/-/A-86391370"><p >2pk Jelly Luggage Tag <br/> Lime Green - Open...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_c556d6ba-1cdc-4193-8213-f2efc7a6370e"
            alt="product image"
          />
          <p className="price">$15</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/xl-jacquard-reef-beach-towel-sun-squad-8482/-/A-86301522"><p >XL Jacquard Reef <br/> Beach Towel - Sun...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_55a9e60c-ff7b-4566-8dae-8cae0faa960e"
            alt="product image"
          />
          <p className="price">$25</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/women-s-shirred-ribbed-bandeau-cheeky-one-piece-swimsuit-shade-shore/-/A-89102596"><p >Womens Shirred <br/> Ribbed Bandeau...</p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_abc25910-f4bc-4d56-8024-24c9a90d359f"
            alt="product image"
          />
          <p className="price">$29.99</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/apple-airtag-1-pack/-/A-79673470"><p >Apple AirTag(1 pack) <br/> ... </p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_edfa6cdc-8bbc-406c-8dcf-6196b41bb2b8"
            alt="product image"
          />
          <p className="price">$62.99</p>
          <p className="rrr">sale</p>
          <a className="ooo" href="https://www.target.com/p/hardside-carry-on-spinner-suitcase-open-story/-/A-88289923"><p >Hardside Carry On <br/> Spinner Switcase... </p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_76440a4c-d1c9-416d-876e-9b6b1aef3d70"
            alt="product image"
          />
          <p className="price">$15</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/women-39-s-bubble-round-cateye-sunglasses-a-new-day-8482-orange/-/A-89726840"><p >Womens Bubble <br/> Round Cateye... </p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
          <img
            className="product--image"
            src="https://target.scene7.com/is/image/Target/GUEST_b55554bc-0167-426f-be17-d6ea72d787b5"
            alt="product image"
          />
          <p className="price">$25</p>
          <p className="rrr">...</p>
          <a className="ooo" href="https://www.target.com/p/women-s-long-sleeve-button-down-shirt-a-new-day/-/A-89798097"><p >Womens Long Sleeve <br/> Button Down Shirt -... </p></a>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        
      </Carousel>
      ;
    </div>
  );
};

export default Carousel1;
