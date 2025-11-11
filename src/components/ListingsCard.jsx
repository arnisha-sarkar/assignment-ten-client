import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const ListingsCard = ({ car }) => {
  const { name, category, rentPrice, _id } = car;
  console.log(car);
  console.log(_id);
  const navigate = useNavigate();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/cars/${car._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/addCar");
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        {/* <figure className="h-48 overflow-hidden">
          <img
            src=""
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure> */}
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="text-white text-secondary badge text-xs badge-xs badge-secondary rounded-full">
            {category}
          </div>
          {/* <div>
            <label className="label font-medium">{category}</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Vehicles">Sedan</option>
              <option value="Plants">SUV</option>
              <option value="Foods">Hatchback</option>
              <option value="Home & Living">Luxury</option>
              <option value="Characters">Electric</option>
            </select>
          </div> */}
          <p className="line-clamp-1">{rentPrice}</p>
          <p>Available</p>
          {/* <p className="text-sm text-base-content/70">by {author}</p> */}
          <div className="card-actions justify-between items-center mt-4">
            <div className="flex gap-4 text-sm text-base-content/60">
              {/* <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {views}
            </span> */}
              {/* <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {likes}
            </span> */}
            </div>
            <Link
              to={`/update/${car._id}`}
              //   to={`/model-details/${_id}`}
              className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
            >
              Upadate
            </Link>
            <Link
              onClick={handleDelete}
              className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm"
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsCard;
