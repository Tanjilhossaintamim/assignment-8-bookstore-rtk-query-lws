import { useParams } from "react-router-dom";
import { useGetSingelBookQuery } from "../redux/features/api/apiSlice";
import Form from "../components/Form/Form";
const EditBook = () => {
  const { id } = useParams();
  const {
    data: book,
    isLoading,
    isSuccess,
    isError,
  } = useGetSingelBookQuery(id);
  let content = null;
  if (isLoading) content = <div>loading...</div>;
  if (isSuccess && book?.id) content = <Form book={book} />;
  if (isError && !isLoading) content = <div>There Was an Error !</div>;
  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  );
};

export default EditBook;
