import { Box, StackDivider, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
    <Box className="ttt">
    <p><a href="https://help.target.com/help/subcategoryarticle?childcat=Current+promotions&parentcat=Promotions+%26+Coupons&searchQuery=search+help"><span className="qqq">*See offer details.</span> Restrictions apply. Pricing, promotions and availability may vary by location and at Target.com</a></p>
    </Box>
    
    <Box className="eee">
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
    >
      <Box className="ggg">
        <p className="fff">About Us</p>
        <a href="https://corporate.target.com/about">About Target</a>
        <a href="https://corporate.target.com/careers/">Carrers</a>
        <a href="https://corporate.target.com/#?lnk=fnav_t_spc_1_7">News & Blog</a>
        <a href="https://corporate.target.com/about/products-services/Target-Brands">Target Brands</a>
        <a href="https://www.bullseyeshop.com/">Bullseye Shop</a>
        <a href="https://corporate.target.com/sustainability-esg">Sustainability & Governance</a>
        <a href="https://corporate.target.com/press">Press Center</a>
        <a href="https://roundel.com/?utm_source=Referral&utm_medium=Targetwebsite&utm_campaign=advertisewithus">Advertise With Us</a>
        <a href="https://investors.target.com/investors?c=65828&p=irol-IRHome">Investors</a>
        <a href="https://partners.target.com/">Affiliates & Partners</a>
        <a href="https://corporate.target.com/about/products-services/suppliers#?lnk=fnav_t_spc_1_16">Suppliers</a>
        <a href="https://plus.target.com/">TargetPlus</a>
      </Box>
      
    </VStack>
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
    >
      <Box className="ggg">
        <p className="fff">Help</p>
        <a href="https://help.target.com/help">Target Help</a>
        <a href="https://www.target.com/returns">Returns</a>
        <a href="https://www.target.com/orders">Track Orders</a>
        <a href="https://help.target.com/help/productrecallpage?childcat=Product+recalls&parentcat=news+%26+safety&searchQuery=search+help">Recalls</a>
        <a href="https://contactus.target.com/ContactUs?Con=ContactUs&searchQuery=search+help">Contact Us</a>
        <a href="">Feedback</a>
        <a href="https://help.target.com/help/subcategoryarticle?parentcat=Compliance&childcat=Accessibility&lnk=fnav_t_spc_1_21">Accessibility</a>
        <a href="https://security.target.com/">Security & Fraud</a>
        <a href="https://www.target.com/c/team-member-services/-/N-4srq9">Team Member Services</a>
      </Box>
      
    </VStack>
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
    >
      <Box className="ggg">
        <p className="fff">Stores</p>
        <a href="https://www.target.com/store-locator/find-stores">Find a Store</a>
        <a href="https://www.target.com/c/clinic/-/N-54x94">Clinic</a>
        <a href="https://www.target.com/c/pharmacy-health/-/N-54y52">Pharmacy</a>
        <a href="https://www.target.com/c/optical/-/N-4y8o9">Optical</a>
        <a href="https://www.target.com/c/services/-/N-oq1wk">More In-Store Services</a>
      </Box>
      
    </VStack>
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
    >
      <Box className="ggg">
        <p className="fff">Services</p>
        <a href="https://www.target.com/circle">Target Circle</a>
        <a href="https://www.target.com/redcard">RedCard</a>
        <a href="https://www.target.com/c/target-app/-/N-4th2r">Target App</a>
        <a href="https://www.target.com/gift-registry">Registry</a>
        <a href="https://www.target.com/c/same-day-delivery/-/N-bswkz">Same Day Delivery</a>
        <a href="https://www.target.com/c/order-pickup/-/N-ng0a0">Order Pickup</a>
        <a href="https://www.target.com/c/drive-up/-/N-9d42z">Drive Up</a>
        <a href="https://www.target.com/c/free-2-day-shipping/-/N-49cz6">Free 2-Day Shipping</a>
        <a href="https://www.target.com/c/free-2-day-shipping/-/N-49cz6">Shipping & Delivery</a>
        <a href="https://www.target.com/c/shipping-order-services/-/N-551st">More Services</a>
      </Box>
      
    </VStack>
    
    </Box>
    </>
  );
};

export default Footer;
