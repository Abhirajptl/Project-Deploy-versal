import { Box, Container } from "@chakra-ui/react";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";
import Middle from "./Middle";
import Middle1 from "./Middle1";
import Middle2 from "./Middle2";
import Carousel4 from "./Carousel4";
import Carousel5 from "./Carousel5";
import Footer1 from "./Footer1";

const Header = () => {
  return (
    <>
      <Container
        maxW="2xl"
        width="80%"
        bg="blue.600"
        centerContent
        className="cde"
      >
        <img
          width="90%"
          height="900px"
          src="https://target.scene7.com/is/image/Target/GUEST_a1222e1c-440d-44c1-8710-a45f2085d7c5?wid=668&amp;qlt=80&amp;fmt=webp"
          alt="Spring getaway"
        ></img>
        <Box className="def">
          <a href="">
            Get into vacay mode with new <br /> sunny styles{" "}
            <span>from $10</span>
          </a>
        </Box>
        <button className="efg">Womens Clothing</button>
      </Container>
      <Box className="yyy">
        <Box className="yty">
          <img
            height="400px"
            src="data:image/jpeg;base64,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"
            alt="abc"
          />
          <a href="">Womens Swim</a>
        </Box>
        <Box className="yty">
          <img
            height="400px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-bvuxjRZNtMbFSrWPdnvuvRJK601JTyi3A&usqp=CAU"
            alt=""
          />
          <a href="">
            Luggage must-haves <br /> <span className="jjj">  </span>
          </a>
        </Box>
        <Box className="yty">
          <img
            height="400px"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <a href="">Sun Care</a>
        </Box>
      </Box>

      <Carousel1 />
      <Middle />
      <Carousel2 />

      <Box className="ab">
        <a href="https://www.target.com/c/hearth-hand-with-magnolia/-/N-4k98u"><img src="https://tpc.googlesyndication.com/simgad/8714667378866293923?" alt="" /></a>
      </Box>

      <Box className="nnn">
        <a href="https://www.target.com/c/celebrate-black-history-month/-/N-bw2fb"><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReFnMWK_K3Mm_52UlptGXmfT1LjbHe5VwXJgwa5ip9X8zCUG0y" alt="" /></a>
      </Box>


      <div className="jjj">
      <h1>Just-dropped styles</h1>
      </div>

      <Carousel3 />
      <Middle1 />
      <Middle2 />
      <Carousel4 />
      <Carousel5 />

      <Footer1 />
    </>
  );
};

export default Header;
