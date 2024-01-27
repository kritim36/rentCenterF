import React, { useState } from "react";
import { useFormik } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  registrationNumber: "",
  manufacturer: "",
  modelNumber: "",
  emanufacturer: "",
  color: "",
  city: "",
  seat: "",
  fuel: "",
  place: "",
  price: "",
  instruction: "",
  guideline: "",
  date: "",
  time: "",
  vimage: "",
  gadgetimage: "",
  billimage: "",
  bimage: "",
  inimage: "",
  insurancedate: "",
};

const Hostvechicle = () => {
  const [selectedVechicle, setSelectedVechicle] = useState(null);
  const [selectedElectronics, setSelectedElectronics] = useState(null);

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
    // validationSchema: vechicleSchema,
    // validationSchema: electronicSchema,
    vimage: [],
    bimage: [],
    inimage: [],
    gadgetimage: [],
    billimage: [],
    onSubmit: (values, action) => {
      console.log("🚀 ~ Hostvechicle ~ values:", values);
      action.resetForm();
    },
  });
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
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="fName"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      value={values.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.firstName && touched.firstName ? (
                      <p className="text-red-700 p-3">{errors.firstName}</p>
                    ) : null}
                  </div>
                </div>

                {/* lastname */}
                {/* <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="lName"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      value={values.lastName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.lastName && touched.lastName ? (
                      <p className="text-red-700 p-3">{errors.lastName}</p>
                    ) : null}
                  </div>
                </div> */}
              </div>

              {/* city */}
              <div class="mb-5">
                <label
                  for="registrationNumber"
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
                  for="registrationNumber"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Place
                </label>
                <input
                  type="text"
                  name="place"
                  id="place"
                  value={values.place}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Golpark-04,  sangam path"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />{" "}
                {errors.place && touched.place ? (
                  <p className="text-red-700 p-3">{errors.place}</p>
                ) : null}
              </div>

              {/* price */}
              <div class="mb-5">
                <label
                  for="registrationNumber"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Price per day
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={values.price}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="1000"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />{" "}
                {errors.price && touched.price ? (
                  <p className="text-red-700 p-3">{errors.price}</p>
                ) : null}
              </div>

              {/* instruc */}
              <div class="mb-5">
                <label
                  for="registrationNumber"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Instructions
                </label>
                <input
                  type="text"
                  name="instruction"
                  id="instruction"
                  value={values.instruction}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Your instruction before renting"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />{" "}
                {errors.instruction && touched.instruction ? (
                  <p className="text-red-700 p-3">{errors.instruction}</p>
                ) : null}
              </div>

              {/* guideliness */}
              <div class="mb-5">
                <label
                  for="registrationNumber"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Guidelines
                </label>
                <input
                  type="text"
                  name="guideline"
                  id="guideline"
                  value={values.guideline}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Guideline"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />{" "}
                {errors.guideline && touched.guideline ? (
                  <p className="text-red-700 p-3">{errors.guideline}</p>
                ) : null}
              </div>

              {/* color */}
              {/* <div class="mb-5">
                <label
                  for="registrationNumber"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  id="color"
                  value={values.color}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Color of vechicle"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />{" "}
                {errors.color && touched.color ? (
                  <p className="text-red-700 p-3">{errors.color}</p>
                ) : null}
              </div> */}

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
                      for="registrationNumber"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Registration Number
                    </label>
                    <input
                      type="text"
                      name="registrationNumber"
                      id="registrationNumber"
                      value={values.registrationNumber}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter registration number of vechicle"
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.registrationNumber && touched.registrationNumber ? (
                      <p className="text-red-700 p-3">
                        {errors.registrationNumber}
                      </p>
                    ) : null}
                  </div>

                  {/* manufacturer */}
                  <div class="mb-5">
                    <label
                      for="guest"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Manufacturer
                    </label>
                    <select
                      name="manufacturer"
                      id="manufacturer"
                      value={values.manufacturer}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="0">BMW</option>
                      <option value="1">BYD</option>
                      <option value="2">Ford</option>
                      <option value="3">Honda</option>
                      <option value="4">Yamaha</option>
                      <option value="5">Hyundai</option>
                      <option value="6">Suzuki</option>
                      <option value="7">Tata</option>
                      <option value="8">Tyota</option>
                    </select>{" "}
                    {errors.manufacturer && touched.manufacturer ? (
                      <p className="text-red-700 p-3">{errors.manufacturer}</p>
                    ) : null}
                  </div>

                  {/* seats */}
                  {/* <div class="mb-5">
                    <label
                      for="seat"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Number of seats
                    </label>
                    <input
                      type="text"
                      name="seat"
                      id="seat"
                      value={values.seat}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="8"
                      min="0"
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.seat && touched.seat ? (
                      <p className="text-red-700 p-3">{errors.seat}</p>
                    ) : null}
                  </div> */}

                  {/* fuel type */}
                  <div class="mb-5">
                    <label
                      for="guest"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Fuel Type
                    </label>
                    <select
                      name="fuel"
                      id="fuel"
                      value={values.fuel}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="0">Petrol</option>
                      <option value="1">Disel</option>
                      <option value="2">Electric</option>
                      <option value="3">Hybrid</option>
                    </select>{" "}
                    {errors.fuel && touched.fuel ? (
                      <p className="text-red-700 p-3">{errors.fuel}</p>
                    ) : null}
                  </div>

                  {/* vechicle image */}
                  <div className="mb-5">
                    <label
                      htmlFor="vimage"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Vehicle Image{" "}
                      <span className="text-gray-600">(in pdf format)</span>
                    </label>
                    <input
                      type="file"
                      name="vimage"
                      id="vimage"
                      multiple
                      accept="image/*"
                      onChange={(event) => handleFileChange(event, "vimage")}
                      className="w-full appearance-none rounded-md border mb-3 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    {errors.vimage && touched.vimage ? (
                      <p className="text-red-700 p-3">{errors.vimage}</p>
                    ) : null}
                  </div>

                  {/* bluebook img */}
                  <div class="mb-5">
                    <label
                      for="image"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Bluebook Image{" "}
                      <span className="text-gray-600">(in pdf format)</span>
                    </label>
                    <input
                      type="file"
                      name="bimage"
                      id="bimage"
                      accept="image/*"
                      multiple
                      onChange={(event) => handleFileChange(event, "bimage")}
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.bimage && touched.bimage ? (
                      <p className="text-red-700 p-3">{errors.bimage}</p>
                    ) : null}
                    <input
                      type="file"
                      name="bimage"
                      id="bimage"
                      accept="image/*"
                      multiple
                      onChange={(event) => handleFileChange(event, "bimage")}
                      class="w-full mt-2 appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.bimage && touched.bimage ? (
                      <p className="text-red-700 p-3">{errors.bimage}</p>
                    ) : null}
                  </div>

                  {/* insurance image */}
                  <div class="mb-5">
                    <label
                      for="image"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Insurance Image{" "}
                      <span className="text-gray-600">(in pdf format)</span>
                    </label>
                    <input
                      type="file"
                      name="inimage"
                      id="inimage"
                      accept="image/*"
                      multiple
                      onChange={(event) => handleFileChange(event, "inimage")}
                      class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.inimage && touched.inimage ? (
                      <p className="text-red-700 p-3">{errors.inimage}</p>
                    ) : null}
                  </div>

                  {/* insurance valid till*/}
                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label
                          for="date"
                          class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Insurance Valid till
                        </label>
                        <input
                          type="date"
                          name="insurancedate"
                          id="insurancedate"
                          value={values.date}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />{" "}
                        {errors.insurancedate && touched.insurancedate ? (
                          <p className="text-red-700 p-3">
                            {errors.insurancedate}
                          </p>
                        ) : null}
                      </div>
                    </div>
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
                        for="modelNumber"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Model Number
                      </label>
                      <input
                        type="text"
                        name="modelNumber"
                        id="modelNumber"
                        value={values.modelNumber}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter model number of gadget"
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />{" "}
                      {errors.modelNumber && touched.modelNumber ? (
                        <p className="text-red-700 p-3">{errors.modelNumber}</p>
                      ) : null}
                    </div>

                    {/* manufacturer */}
                    <div class="mb-5">
                      <label
                        for="guest"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Manufacturer
                      </label>
                      <select
                        name="emanufacturer"
                        id="emanufacturer"
                        value={values.manufacturer}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      >
                        <option value="0">Apple</option>
                        <option value="1">Xiaomi</option>
                        <option value="2">Samsung</option>
                        <option value="3">One plus</option>
                        <option value="4">Huawei</option>
                        <option value="5">Dell</option>
                        <option value="6">HP</option>
                        <option value="7">Lenovo</option>
                        <option value="8">Asus</option>
                        <option value="9">Canon</option>
                        <option value="10">Nikon</option>
                        <option value="11">Panasonic</option>
                        <option value="12">L.G.</option>
                        <option value="13">Sony</option>
                      </select>{" "}
                      {errors.manufacturer && touched.manufacturer ? (
                        <p className="text-red-700 p-3">
                          {errors.manufacturer}
                        </p>
                      ) : null}
                    </div>

                    {/* Gadget image */}
                    <div class="mb-5">
                      <label
                        for="image"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Gadget Image <span className="text-gray-600"></span>
                      </label>
                      <input
                        type="file"
                        name="image"
                        multiple
                        id="image"
                        accept="image/*"
                        onChange={(event) =>
                          handleFileChange(event, "gadgetimage")
                        }
                        class="w-full appearance-none rounded-md mb-3 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />{" "}
                      {errors.gadgetimage && touched.gadgetimage ? (
                        <p className="text-red-700 p-3">{errors.gadgetimage}</p>
                      ) : null}
                    </div>

                    {/* BIll img */}
                    {/* <div class="mb-5">
                      <label
                        for="image"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Owning Bill Image
                      </label>
                      <input
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        onChange={(event) =>
                          handleFileChange(event, "billimage")
                        }
                        class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />{" "}
                      {errors.billimage && touched.billimage ? (
                        <p className="text-red-700 p-3">{errors.billimage}</p>
                      ) : null}
                    </div> */}
                  </div>
                )}

              {/* available date and time */}
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="date"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Available Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={values.date}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.date && touched.date ? (
                      <p className="text-red-700 p-3">{errors.date}</p>
                    ) : null}
                  </div>
                </div>
                {/* <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="time"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Available Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      value={values.time}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.time && touched.time ? (
                      <p className="text-red-700 p-3">{errors.time}</p>
                    ) : null}
                  </div>
                </div> */}
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
                <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
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


