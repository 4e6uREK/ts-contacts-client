import ContactTable from "../../entities/contacts/ui/table";
import CenteredContainer from "../../widgets/centeredContainer";
import Search from "../../widgets/search";
import styles from "./styles.module.css";

function Home() {
  return (
    <CenteredContainer>
      <div className={styles.menu}>
        <h2 className={styles.menu_name}>Search</h2>
        <Search></Search>
      </div>
      <ContactTable></ContactTable>
    </CenteredContainer>
  );
}

export default Home;
