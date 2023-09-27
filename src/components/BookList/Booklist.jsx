import { useGetBooksQuery } from "../../redux/features/api/apiSlice";
import Book from "./Book";

const Booklist = () => {
  const { data: books, isLoading, isError, isSuccess } = useGetBooksQuery();

  let content = null;
  if (isLoading) content = <div>loading....</div>;
  if (isSuccess && books?.length > 0) {
    content = books.map((book) => <Book key={book.id} book={book} />);
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
