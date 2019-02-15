import axios from "axios";

const FORMCARRY_URL = "https://formcarry.com/s/cpVei95MQ6-";
const FORMCARRY_HEADERS = { Accept: "application/json" };

export const submitToFormcarry = async <TValues extends {}>(
  formValues: TValues
) => {
  await axios.post(FORMCARRY_URL, formValues, {
    headers: FORMCARRY_HEADERS
  });
};
