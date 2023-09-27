import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../redux/features/api/apiSlice";
import Book from "./Book";

const Booklist = () => {
  const { data: books, isLoading, isError, isSuccess } = useGetBooksQuery();
  const { isFeatured, searchValue } = useSelector((state) => state.books);

  let content = null;
  if (isLoading) content = <div>loading....</div>;
  if (isSuccess && books?.length > 0) {
    content = books.filter((book) => {
      if (isFeatured) {
        return book.featured;
      }
      return true;
    });
    content = content.filter((book) => {
      if (searchValue)
        return book.name.toLowerCase().startsWith(searchValue.toLowerCase());
      return true;
    });
    content =
      content.length > 0 ? (
        content.map((book) => <Book key={book.id} book={book} />)
      ) : (
        <div>{searchValue} : no result found !</div>
      );
  }
  if (isError) content = <div>There was an error !</div>;
  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* <!-- Card 1 --> */}
      {content}
    </div>
  );
};

export default Booklist;
