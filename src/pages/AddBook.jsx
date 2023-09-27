import { useEffect, useState } from "react";
import { useAddBookMutation } from "../redux/features/api/apiSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [addBook, { isLoading, isSuccess }] = useAddBookMutation();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);
  const navigate = useNavigate();

  const handelAddBook = (e) => {
    e.preventDefault();
    addBook({ name, author, thumbnail, price, rating, featured });
  };
  useEffect(() => {
    isSuccess && navigate("/");
  }, [isSuccess, navigate]);
  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <form className="book-form" onSubmit={handelAddBook}>
            <div className="space-y-2">
              <label>Book Name</label>
              <input
                required
                className="text-input"
                type="text"
                id="lws-bookName"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label>Author</label>
              <input
                required
                className="text-input"
                type="text"
                id="lws-author"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label>Image Url</label>
              <input
                required
                className="text-input"
                type="text"
                id="lws-thumbnail"
                name="thumbnail"
                value={thumbnail}
                onChange={(e) => setThumnail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
              <div className="space-y-2">
                <label>Price</label>
                <input
                  required
                  className="text-input"
                  type="number"
                  id="lws-price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label>Rating</label>
                <input
                  required
                  className="text-input"
                  type="number"
                  id="lws-rating"
                  name="rating"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="lws-featured"
                type="checkbox"
                name="featured"
                className="w-4 h-4"
                value={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />
              <label className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button
              type="submit"
              className="submit"
              id="lws-submit"
              disabled={isLoading}
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddBook;
