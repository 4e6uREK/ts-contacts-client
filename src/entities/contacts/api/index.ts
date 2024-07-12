import axios from "axios";

export const searchContacts = async (email: string, number: string | null) => {
  if (number === null) {
    return (
      await axios.get(
        `http://${process.env.REACT_APP_CONTACTS_SERVICE_ADDRESS}/?email=${email}`,
      )
    ).data;
  }

  return (
    await axios.get(
      `http://${process.env.REACT_APP_CONTACTS_SERVICE_ADDRESS}/?email=${email}&number=${number}`,
    )
  ).data;
};
