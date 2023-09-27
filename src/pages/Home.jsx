import { useDispatch, useSelector } from "react-redux";
import Booklist from "../components/BookList/Booklist";
import {
  showAllBooks,
  showFeaturedBooks,
} from "../redux/features/book/bookSlice";

const Home = () => {
  const { isFeatured } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch(showAllBooks())}
              className={`lws-filter-btn ${
                isFeatured == false && "active-filter"
              } `}
            >
              All
            </button>
            <button
              onClick={() => dispatch(showFeaturedBooks())}
              className={`lws-filter-btn ${isFeatured && "active-filter"} `}
            >
              Featured
            </button>
          </div>
        </div>
        <Booklist />
      </div>
    </main>
  );
};

export default Home;
