import Chip from "@material-ui/core/Chip";
import { styled } from "@material-ui/styles";

const ExperienceChip = styled(Chip)({
  marginRight: "10px",
  "&:last-child": {
    marginRight: "0px"
  }
});

export default ExperienceChip;
