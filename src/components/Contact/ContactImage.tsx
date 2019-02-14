import { styled } from "@material-ui/styles";
import Img from "gatsby-image";

const ContactImage = styled(Img)({
  height: "100%",
  width: "100%",
  backgroundColor: "grey",
  "& > img": {
    objectFit: "cover",
    objectPosition: "50% 50%"
  }
});

export default ContactImage;
