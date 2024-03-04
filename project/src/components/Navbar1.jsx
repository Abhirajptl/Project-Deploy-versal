import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Input } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import LoginButton from "./LoginButton ";

const Navbar1 = () => {

  return (
    <Box className="shadow">
      <HStack
        spacing="24px"
        marginLeft="200px"
        marginTop="20px"
        marginRight="200px"
      >
        <Box>
          <img
            width="55px"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSh_Yo2_3WZm0M-tReDPHQ1msyiht6iQZR3cQzM-0jxwvYUab9m"
          />
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="border size"
            >
              <b>Categories</b>
            </MenuButton>
            <MenuList>
              <MenuItem className="border">
                <b>All Categories</b>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Easter</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Grocery</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Clothing, Shoes & Accessories</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Home</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Furniture</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Kitchen & Dining</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Outdoor Living & Garden</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Electronics</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Video Games</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Toys</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Movies, Music & Books</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Sports & Outdoors</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Baby</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Beauty</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Personal Care</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Health</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Pets</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Household Essentials</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">School & Office Sewing</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Party Supplies</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Luggage</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Target Optical</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Clearance</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Gift Ideas</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Character Shop</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Gift Cards</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Black-Owned or Founded Brands at Target</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="border size"
            >
              Deals
            </MenuButton>
            <MenuList>
              <MenuItem className="border">
                <a href="">Top Deals</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Target Circle Offers</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Weekly Ad</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Clearance</a>
              </MenuItem>
              <hr />
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="border size"
            >
              New & Featured
            </MenuButton>
            <MenuList>
              <MenuItem className="border">
                <a href="">Target New Arrivals</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Target Finds</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">#Target Style</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Celebrate Black History Month</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Black Beyond Measures</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Mas Que</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Pride 365</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Women-Owned Brands at Target</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Asian-Owned Brands at Target</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="border size"
            >
              Pickup & Delivery
            </MenuButton>
            <MenuList>
              <MenuItem className="border">
                <a href="">Shop Order Pickup</a>
              </MenuItem>
              <hr />
              <MenuItem className="border">
                <a href="">Shop Same Day Delivery</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box className="input">
          <Box>
            <Input
              placeholder="What can we help you find?"
              size="md"
              type="text"
            />
          </Box>
          <Box className="abc">
            <FaMicrophone /> 
            <FaSearch />
          </Box>
        </Box>
        <Box>
          {/* <Button className="bcd">
            <span><IoIosContact />{"  "} <a href="">Sign in</a> </span>
          </Button> */}
          <LoginButton />
        </Box>
        <Box>
        <i className="fa-solid fa-cart-shopping"></i>
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar1;
