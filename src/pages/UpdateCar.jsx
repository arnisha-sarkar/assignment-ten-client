import { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

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
    // <div>
    //   <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl ">
    //     <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg relative">
    //       <h2 className="text-2xl font-semibold text-center mb-5 text-gray-800">
    //         Update Car
    //       </h2>

    //       <form onSubmit={handleSubmit} className="space-y-4">
    //         {/* Car Name */}
    //         <div>
    //           <label className="block font-medium text-gray-700 mb-1">
    //             Car Name
    //           </label>
    //           <input
    //             type="text"
    //             name="name"
    //             defaultValue={car.name}
    //             className="w-full border border-gray-300 rounded-lg p-2"
    //             required
    //             placeholder="Enter car name"
    //           />
    //         </div>

    //         {/* Category */}
    //         <div>
    //           <label className="block font-medium text-gray-700 mb-1">
    //             Category
    //           </label>
    //           <select
    //             defaultValue={car.category}
    //             name="category"
    //             className="w-full border border-gray-300 rounded-lg p-2"
    //           >
    //             <option value="Sedan">Sedan</option>
    //             <option value="SUV">SUV</option>
    //             <option value="Hatchback">Hatchback</option>
    //             <option value="Luxury">Luxury</option>
    //             <option value="Electric">Electric</option>
    //           </select>
    //         </div>

    //         {/* Rent Price */}
    //         <div>
    //           <label className="block font-medium text-gray-700 mb-1">
    //             Rent Price
    //           </label>
    //           <input
    //             type="number"
    //             name="rentPrice"
    //             defaultValue={car.rentPrice}
    //             className="w-full border border-gray-300 rounded-lg p-2"
    //             required
    //             placeholder="Enter Rent Price"
    //           />
    //         </div>

    //         {/* Status */}
    //         <div>
    //           <label className="block font-medium text-gray-700 mb-1">
    //             Status
    //           </label>
    //           <select
    //             name="status"
    //             className="w-full border border-gray-300 rounded-lg p-2"
    //           >
    //             <option value="Available">Available</option>
    //             <option value="Booked">Booked</option>
    //           </select>
    //         </div>

    //         {/* Image Re-upload (optional) */}

    //         {/* Provider Name */}
    //         <div>
    //           <label className="block font-medium text-gray-700 mb-1">
    //             Provider Name
    //           </label>
    //           <input
    //             type="text"
    //             name="providerName"
    //             defaultValue={user.displayName}
    //             readOnly
    //             className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2"
    //             placeholder="Enter Provider Name"
    //           />
    //         </div>

    //         {/* Provider Email */}
    //         <div>
    //           <label className="block font-medium text-gray-700 mb-1">
    //             Provider Email
    //           </label>
    //           <input
    //             type="email"
    //             name="providerEmail"
    //             defaultValue={user.email}
    //             readOnly
    //             className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2"
    //             placeholder="Enter Provider Email"
    //           />
    //         </div>

    //         {/* Submit Button */}
    //         <div className="text-center">
    //           <button
    //             type="submit"
    //             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg"
    //           >
    //             Update Car
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
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
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Update Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCar;
