import { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import upadateImg from "../assets/update.avif";
const UpdateCar = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData(); // car object from loader
  const car = data.result;
  const handleSubmit = (e) => {
    e.preventDefault();
    const fomrData = {
      name: e.target.name.value,
      // description: e.target.description.value,
      category: e.target.category.value,
      rentPrice: e.target.rentPrice.value,
      // location: e.target.location.value,
      // thumbnail: e.target.thumbnail.value,
      Provider_Name: user.displayName,
      Provider_Email: user.email,
    };
    fetch(`http://localhost:3000/cars/${car._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fomrData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Upadate Successfuly");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${upadateImg})`,
      }}
    >
      <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl mt-30 mb-30">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6">Update</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={car.name}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter name"
              />
            </div>
            {/* Description Textarea */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                required
                rows="3"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                placeholder="Enter description"
              ></textarea>
            </div>
            {/* Category Dropdown */}
            <div>
              <label className="label font-medium">Category</label>
              <select
                defaultValue={""}
                name="category"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Luxury">Luxury</option>
                <option value="Electric">Electric</option>
              </select>
            </div>
            <div>
              <label className="label font-medium">Rent Price</label>
              <input
                type="number"
                name="rentPrice"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label className="label font-medium">Location</label>
              <input
                type="text"
                name="location"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter name"
              />
            </div>
            {/* Thumbnail URL */}
            <div>
              <label className="label font-medium">Thumbnail URL</label>
              <input
                type="url"
                name="thumbnail"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full bg-[#007bff] hover:from-pink-600 hover:to-red-700"
            >
              Update Car
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCar;
