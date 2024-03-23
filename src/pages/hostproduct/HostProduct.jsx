import React, { useState } from "react";
import { useFormik } from "formik";
import { combinedSchema } from "../schemas";
import { useNavigate } from "react-router-dom";

const initialValues = {
  productName: "",
  productRegistrationNumber: "",
  productBrand: "",
  productCategory: "",
  productModelNumber: "",
  city: "",
  productFuelType: "",
  productLocation: "",
  productPrice: "",
  productDescription: "",
  productGuideline: "", 
  availableDate: "",
  productImage: "",
  productBluebookImage: "",
  productInsuranceImage: ""
};

const Hostvechicle = () => {
  const navigate = useNavigate()
  const [selectedVechicle, setSelectedVechicle] = useState(null);
  const [selectedElectronics, setSelectedElectronics] = useState(null);

  const selectedOption = selectedVechicle || selectedElectronics;


  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: combinedSchema(selectedOption),
    
     productImage: [],
     productBluebookImage: [],
    productInsuranceImage: [],
    onSubmit: async(values, action) => {
      try{
        const token = localStorage.getItem("token")
        const response = await fetch('http://localhost:3000/api/renter/host', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
            Accept : 'application/json',
            //'Content-Type': 'multipart/form-data',
            'Authorization' : `${token}`
          },
          body: JSON.stringify(values)
        });
  
        if (!response.ok) {
          throw new Error('Failed to submit form data');
        }
  
        console.log('Form data submitted successfully');
        navigate('/')
        action.resetForm();
        console.log(response)
      } catch (error) {
        console.error('Error submitting form data:', error.message);
     }
      console.log("🚀 ~ Hostvechicle ~ values:", values);
      action.resetForm();
    },
  })
 console.log("🚀 ~ Hostvechicle ~ errors:", errors);

  const handleFileChange = (event, fieldName) => {
    const files = event.currentTarget.files;
    setFieldValue(fieldName, files);
  };

  return (
    <>
      <div className="max-w-full h-full w-full m-auto py-20 px-4 relative group ">
        <p className=" flex justify-center items-center font-bold text-2xl text-black-500 py-7">
          Host My Product{" "}
        </p>

        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[550px]">
            <form action="" method="POST" onSubmit={handleSubmit}>
              <div class="-mx-3 flex flex-wrap">
                {/* firstname */}
                <div class="w-full px-3 ">
                  <div class="mb-5">
                    <label
                      for="productName"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      id="productName"
                      placeholder="Enter your full name"
                      value={values.productName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.productName && touched.productName ? (
                      <p className="text-red-700 p-3">{errors.productName}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* city */}
              <div class="mb-5">
                <label
                  for="city"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={values.city}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Butwal"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />{" "}
                {errors.city && touched.city ? (
                  <p className="text-red-700 p-3">{errors.city}</p>
                ) : null}
              </div>

              {/* place */}
              <div class="mb-5">
                <label
                  for="productLocation"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Place
                </label>
                <input
                  type="text"
                  name="productLocation"
                  id="productLocation"
                  value={values.productLocation}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Golpark-04,  sangam path"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />{" "}
                {errors.productLocation && touched.productLocation ? (
                  <p className="text-red-700 p-3">{errors.productLocation}</p>
                ) : null}
              </div>

              {/* price */}
              <div class="mb-5">
                <label
                  for="productPrice"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Price per day
                </label>
                <input
                  type="number"
                  name="productPrice"
                  id="productPrice"
                  value={values.productPrice}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="1000"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />{" "}
                {errors.productPrice && touched.productPrice ? (
                  <p className="text-red-700 p-3">{errors.productPrice}</p>
                ) : null}
              </div>

              {/* instruc */}
              <div class="mb-5">
                <label
                  for="productDescription"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="productDescription"
                  id="productDescription"
                  value={values.productDescription}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Your instruction before renting"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />{" "}
                {errors.productDescription && touched.productDescription ? (
                  <p className="text-red-700 p-3">{errors.productDescription}</p>
                ) : null}
              </div>

              {/* guideliness */}
              <div class="mb-5">
                <label
                  for="productGuideline"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Guidelines
                </label>
                <input
                  type="text"
                  name="productGuideline"
                  id="productGuideline"
                  value={values.productGuideline}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Guideline"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />{" "}
                {errors.productGuideline && touched.productGuideline ? (
                  <p className="text-red-700 p-3">{errors.productGuideline}</p>
                ) : null}
              </div>

              {/* What to host */}
              <div class="mb-5">
                <label class="mb-3 block text-base font-medium text-[#07074D]">
                  I am renting ..?
                </label>
                <div class="flex items-center space-x-6">
                  <div class="flex items-center">
                    <input
                      type="radio"
                      name="rentType"
                      id="vechicleOption"
                      value="vechicle"
                      checked={selectedVechicle === "vechicle"}
                      onChange={() => setSelectedVechicle("vechicle")}
                      class="h-5 w-5"
                    />
                    <label
                      for="radioButton1"
                      class="pl-3 text-base font-medium text-[#07074D]"
                    >
                      Vechicle
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="radio"
                      name="rentType"
                      id="electronicsOption"
                      value="electronics"
                      checked={selectedElectronics === "electronics"}
                      onChange={() => setSelectedElectronics("electronics")}
                      class="h-5 w-5"
                    />
                    <label
                      for="radioButton2"
                      class="pl-3 text-base font-medium text-[#07074D]"
                    >
                      Electronics
                    </label>
                  </div>
                </div>
              </div>

              {/* onclick == vechicle */}
              {selectedVechicle === "vechicle" && selectedVechicle !== null && (
                <div>
                  {/*registration*/}
                  <div class="mb-5">
                    <label
                      for="productRegistrationNumber"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Registration Number
                    </label>
                    <input
                      type="text"
                      name="productRegistrationNumber"
                      id="productRegistrationNumber"
                      value={values.productRegistrationNumber}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter registration number of vechicle"
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.productRegistrationNumber && touched.productRegistrationNumber ? (
                      <p className="text-red-700 p-3">
                        {errors.productRegistrationNumber}
                      </p>
                    ) : null}
                  </div>

                  {/* manufacturer */}
                  <div class="mb-5">
                    <label
                      for="productBrand"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Manufacturer
                    </label>
                    <select
                      name="productBrand"
                      id="productBrand"
                      value={values.productBrand}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="BMW">BMW</option>
                      <option value="BYD">BYD</option>
                      <option value="Ford">Ford</option>
                      <option value="Honda">Honda</option>
                      <option value="Yamaha">Yamaha</option>
                      <option value="Hyundai">Hyundai</option>
                      <option value="Suzuki">Suzuki</option>
                      <option value="Tata">Tata</option>
                      <option value="Tyota">Tyota</option>
                    </select>{" "}
                    {errors.productBrand && touched.productBrand ? (
                      <p className="text-red-700 p-3">{errors.productBrand}</p>
                    ) : null}
                  </div>

                  {/* category */}
                          <div class="mb-5">
                    <label
                      for="productCategory"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Category
                    </label>
                    <select
                      name="productCategory"
                      id="productCategory"
                      value={values.productCategory}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="Cars">Cars</option>
                      <option value="Bike">Bike</option>
                    </select>{" "}
                    {errors.productCategory && touched.productCategory ? (
                      <p className="text-red-700 p-3">{errors.productCategory}</p>
                    ) : null}
                  </div>


                  {/* fuel type */}
                  <div class="mb-5">
                    <label
                      for="productFuelType"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Fuel Type
                    </label>
                    <select
                      name="productFuelType"
                      id="productFuelType"
                      value={values.productFuelType}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="petrol">Petrol</option>
                      <option value="disel">Disel</option>
                      <option value="electric">Electric</option>
                      <option value="hybrid">Hybrid</option>
                    </select>{" "}
                    {errors.productFuelType && touched.productFuelType ? (
                      <p className="text-red-700 p-3">{errors.productFuelType}</p>
                    ) : null}
                  </div>

                  {/* vechicle image */}
                  <div className="mb-5">
                    <label
                      htmlFor="productImage"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Vehicle Image{" "}
                      <span className="text-gray-600"></span>
                    </label>
                    <input
                      type="file"
                      name="productImage"
                      id="productImage"
                      multiple
                      accept="image/*"
                      onChange={(event) => handleFileChange(event, "productImage")}
                      className="w-full appearance-none rounded-md border mb-3 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    {errors.productImage && touched.productImage ? (
                      <p className="text-red-700 p-3">{errors.productImage}</p>
                    ) : null}
                  </div>

                  {/* bluebook img */}
                  <div class="mb-5">
                    <label
                      for="productBluebookImage"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Bluebook Image{" "}
                      <span className="text-gray-600"></span>
                    </label>
                    <input
                      type="file"
                      name="productBluebookImage"
                      id="productBluebookImage"
                      accept="image/*"
                      multiple
                      onChange={(event) => handleFileChange(event, "productBluebookImage")}
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.productBluebookImage && touched.productBluebookImage ? (
                      <p className="text-red-700 p-3">{errors.productBluebookImage}</p>
                    ) : null}
                    <input
                      type="file"
                      name="productBluebookImage"
                      id="productBluebookImage"
                      accept="image/*"
                      multiple
                      onChange={(event) => handleFileChange(event, "productBluebookImage")}
                      class="w-full mt-2 appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.productBluebookImage && touched.productBluebookImage ? (
                      <p className="text-red-700 p-3">{errors.productBluebookImage}</p>
                    ) : null}
                  </div>

                  {/* insurance image */}
                  <div class="mb-5">
                    <label
                      for="productInsuranceImage"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Insurance Image{" "}
                      <span className="text-gray-600"></span>
                    </label>
                    <input
                      type="file"
                      name="productInsuranceImage"
                      id="productInsuranceImage"
                      accept="image/*"
                      multiple
                      onChange={(event) => handleFileChange(event, "productInsuranceImage")}
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.productInsuranceImage && touched.productInsuranceImage ? (
                      <p className="text-red-700 p-3">{errors.productInsuranceImage}</p>
                    ) : null}
                  </div>

                </div>
              )}

              {/* onclick == vechicle */}
              {selectedElectronics === "electronics" &&
                selectedElectronics !== null && (
                  <div>
                    {/* model number */}
                    <div class="mb-5">
                      <label
                        for="productModelNumber"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Model Number
                      </label>
                      <input
                        type="text"
                        name="productModelNumber"
                        id="productModelNumber"
                        value={values.productModelNumber}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter model number of gadget"
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />{" "}
                      {errors.productModelNumber && touched.productModelNumber ? (
                        <p className="text-red-700 p-3">{errors.productModelNumber}</p>
                      ) : null}
                    </div>

                    {/* manufacturer */}
                    <div class="mb-5">
                      <label
                        for="productBrand"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Manufacturer
                      </label>
                      <select
                        name="productBrand"
                        id="productBrand"
                        value={values.productBrand}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      >
                        <option value="Apple">Apple</option>
                        <option value="Xiaomi">Xiaomi</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Vivo">Vivo</option>
                        <option value="Dell">Dell</option>
                        <option value="HP">HP</option>
                        <option value="Lenovo">Lenovo</option>
                        <option value="Asus">Asus</option>
                        <option value="Canon">Canon</option>
                        <option value="Nikon">Nikon</option>
                        <option value="L.G.">L.G.</option>
                        <option value="Sony">Sony</option>
                      </select>{" "}
                      {errors.productBrand && touched.productBrand ? (
                        <p className="text-red-700 p-3">
                          {errors.productBrand}
                        </p>
                      ) : null}
                    </div>
                     {/* category */}
                     <div class="mb-5">
                    <label
                      for="productCategory"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Category
                    </label>
                    <select
                      name="productCategory"
                      id="productCategory"
                      value={values.productCategory}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="Mobile">Mobile</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Camera">Camera</option>
                      <option value="Tv">TV</option>
                    </select>{" "}
                    {errors.productCategory && touched.productCategory ? (
                      <p className="text-red-700 p-3">{errors.productCategory}</p>
                    ) : null}
                  </div>

                    {/* Gadget image */}
                    <div class="mb-5">
                      <label
                        for="productImage"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Gadget Image <span className="text-gray-600"></span>
                      </label>
                      <input
                        type="file"
                        name="productImage"
                        multiple
                        id="productImage"
                        accept="image/*"
                        onChange={(event) =>
                          handleFileChange(event, "productImage")
                        }
                        class="w-full appearance-none rounded-md mb-3 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />{" "}
                      {errors.productImage && touched.productImage ? (
                        <p className="text-red-700 p-3">{errors.productImage}</p>
                      ) : null}
                    </div>
                  </div>
                )}

              {/* available date and time */}
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="availableDate"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Available Date
                    </label>
                    <input
                      type="date"
                      name="availableDate"
                      id="availableDate"
                      value={values.date}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.availableDate && touched.availableDate ? (
                      <p className="text-red-700 p-3">{errors.availableDate}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* ques */}
              <div class="mb-5">
                <label class="mb-3 block text-base font-medium text-[#07074D]">
                  Are you sure for the renting decision?
                </label>
                <div class="flex items-center space-x-6">
                  <div class="flex items-center">
                    <input
                      type="radio"
                      name="radio1"
                      id="radio1"
                      class="h-5 w-5"
                    />
                    <label
                      for="radioButton1"
                      class="pl-3 text-base font-medium text-[#07074D]"
                    >
                      Yes
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="radio"
                      name="radio1"
                      id="radioButton2"
                      class="h-5 w-5"
                    />
                    <label
                      for="radioButton2"
                      class="pl-3 text-base font-medium text-[#07074D]"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <button type = "submit" class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hostvechicle;


