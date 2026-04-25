import { useContext } from "react";
import { BookContext } from "../../Context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../Components/ListedList/ListedReadList";
import ListedWishList from "../../Components/ListedList/ListedWishList";

const Books = () => {
  const { storedBook, storedWishlist } = useContext(BookContext);
  console.log(storedBook, storedWishlist);
  return (
    <div className="container mx-auto my-5">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList></ListedReadList>
        </TabPanel>
        <TabPanel>
          <ListedWishList></ListedWishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
