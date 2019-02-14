import { styled } from "@material-ui/styles";
import Img from "gatsby-image";

const HeroImage = styled(Img)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: -1,
  height: "350px",
  backgroundColor: "darkgray",
  "& > img": {
    objectFit: "cover",
    objectPosition: "50% 50%"
  }
});

export default HeroImage;
