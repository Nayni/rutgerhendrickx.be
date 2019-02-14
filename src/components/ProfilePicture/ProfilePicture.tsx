import Img, { FluidObject } from "gatsby-image";

import { styled } from "@material-ui/styles";

export interface ProfileImageFragmentProps {
  profileImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

const ProfilePicture = styled(Img)({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  backgroundColor: "grey"
});

export default ProfilePicture;
