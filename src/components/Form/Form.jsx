import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditBookMutation } from "../../redux/features/api/apiSlice";
import PropTypes from "prop-types";

const Form = ({ book }) => {
  const [editBook, { isLoading, isSuccess }] = useEditBookMutation();
  const {
    id,
    name: bName,
    author: bAuthor,
    thumbnail: bThumbnail,
    rating: bRating,
    price: bPrice,
    featured: fFeatured,
  } = book;

  const [name, setName] = useState(bName);
  const [author, setAuthor] = useState(bAuthor);
  const [thumbnail, setThumnail] = useState(bThumbnail);
  const [price, setPrice] = useState(bPrice);
  const [rating, setRating] = useState(bRating);
  const [featured, setFeatured] = useState(fFeatured);
  const navigate = useNavigate();

  const handelEditBook = (e) => {
    e.preventDefault();
    editBook({
      id,
      data: { name, author, thumbnail, price, rating, featured },
    });
  };
  useEffect(() => {
    isSuccess && navigate("/");
  }, [isSuccess, navigate]);
  return (
    <form className="book-form" onSubmit={handelEditBook}>
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
          checked={featured}
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
        Update Book
      </button>
    </form>
  );
};
Form.propTypes = {
  book: PropTypes.object,
};
export default Form;
