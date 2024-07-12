import { useAppSelector } from "../../../../shared/hooks";
import styles from "./styles.module.css";

function ContactTable() {
  const contacts = useAppSelector((state) => state.contacts.contacts);

  if (contacts.length > 0) {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <tr key={index}>
                <th>{contact.email}</th>
                <th>{contact.number.match(/.{1,2}/g)!.join("-")}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return <div></div>;
}

export default ContactTable;
