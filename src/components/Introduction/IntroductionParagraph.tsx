import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";

const IntroductionParagraph = styled(Typography)({
  marginBottom: "10px",
  "&:last-child": {
    marginBottom: "0px"
  }
});

export default IntroductionParagraph;
