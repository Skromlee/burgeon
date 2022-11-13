const EditDialog = ({
    editingHandler,
    exitHandler,
    submitHandler,
    formDetails,
    onChange,
}) => {
    return (
        <div>
            <div className=" bg-slate-200 rounded-xl h-4/5 lg:h-2/4 w-3/5 absolute top-0 left-0 right-0 bottom-0 m-auto transition">
                <div className=" p-10 flex flex-col space-y-12 transition">
                    <div className=" flex justify-between transition">
                        <div className=" flex items-center space-x-6 align-middle transition">
                            <h1 className=" text-2xl md:text-3xl transition">
                                Update your informations
                            </h1>
                        </div>

                        <div>
                            <button
                                onClick={exitHandler}
                                className=" font-bold text-lg transition"
                            >
                                X
                            </button>
                        </div>
                    </div>

                    <form onSubmit={submitHandler}>
                        <div className=" flex flex-col space-y-4 lg:space-y-0 lg:flex-row">
                            <div className=" space-y-4 lg:w-1/2">
                                {/* Repeated */}

                                {/* Firstname */}
                                <div className="transition space-x-2 flex">
                                    <label
                                        htmlFor="firstname"
                                        className="transition basis-1/4"
                                    >
                                        Firstname
                                    </label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={formDetails.firstname}
                                        className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter employee firstname"
                                        onChange={onChange}
                                    />
                                </div>

                                {/* Lastname */}
                                <div className="transition space-x-2 flex">
                                    <label
                                        htmlFor="lastname"
                                        className="transition basis-1/4"
                                    >
                                        Lastname
                                    </label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={formDetails.lastname}
                                        className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter employee lastname"
                                        onChange={onChange}
                                    />
                                </div>

                                {/* Phone */}
                                <div className="transition space-x-2 flex">
                                    <label
                                        htmlFor="phone"
                                        className="transition basis-1/4"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        value={formDetails.phone}
                                        className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter employee phone"
                                        onChange={onChange}
                                    />
                                </div>

                                {/* Citizen */}
                                <div className="transition space-x-2 flex">
                                    <label
                                        htmlFor="citizen"
                                        className="transition basis-1/4"
                                    >
                                        Citizen
                                    </label>
                                    <input
                                        type="number"
                                        id="citizen"
                                        name="citizen"
                                        value={formDetails.citizen}
                                        className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter employee citizen"
                                        onChange={onChange}
                                    />
                                </div>

                                {/* Address Number */}
                                <div className="transition space-x-2 flex">
                                    <label
                                        htmlFor="addressNo"
                                        className="transition basis-1/4"
                                    >
                                        Add NO.
                                    </label>
                                    <input
                                        type="text"
                                        id="addressNo"
                                        name="addressNo"
                                        value={formDetails.addressNo}
                                        className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter employee address number"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="transition space-y-4 lg:w-1/2">
                                {/* Province */}
                                <div className="transition space-x-2 flex">
                                    <label
                                        htmlFor="province"
                                        className="transition basis-1/4"
                                    >
                                        Province
                                    </label>
                                    <input
                                        type="text"
                                        id="province"
                                        name="province"
                                        value={formDetails.province}
                                        className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter employee province"
                                        onChange={onChange}
                                    />
                                </div>

                                {/* District */}
                                <div className="transition space-x-2 flex">
                                    <label
                                        htmlFor="district"
                                        className="transition basis-1/4"
                                    >
                                        District
                                    </label>
                                    <input
                                        type="text"
                                        id="district"
                                        name="district"
                                        value={formDetails.district}
                                        className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter employee district"
                                        onChange={onChange}
                                    />
                                </div>

                                {/* Sub District */}
                                <div className="transition space-x-2 flex">
                                    <label
                                        htmlFor="subdistrict"
                                        className="transition basis-1/4"
                                    >
                                        SubDistrict
                                    </label>
                                    <input
                                        type="text"
                                        id="subdistrict"
                                        name="subdistrict"
                                        value={formDetails.subdistrict}
                                        className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter employee subdistrict"
                                        onChange={onChange}
                                    />
                                </div>

                                {/* Postcode */}
                                <div className="transition space-x-2 flex">
                                    <label
                                        htmlFor="postcode"
                                        className="transition basis-1/4"
                                    >
                                        Postcode
                                    </label>
                                    <input
                                        type="text"
                                        id="postcode"
                                        name="postcode"
                                        value={formDetails.postcode}
                                        className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        placeholder="Enter employee postcode"
                                        onChange={onChange}
                                    />
                                </div>

                                {/* dob */}
                                <div className="transition space-x-2 flex">
                                    <label
                                        htmlFor="dob"
                                        className="transition basis-1/4"
                                    >
                                        Date of birth
                                    </label>
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        value={formDetails.dob}
                                        className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=" flex space-x-6 mt-10 justify-end p-10 transition">
                            <button
                                type="submit"
                                className=" bg-green-600 p-1 px-4 rounded-full hover:bg-green-500 text-white transition"
                            >
                                Update
                            </button>
                            <button
                                onClick={editingHandler}
                                className=" bg-slate-600 p-1 px-4 rounded-full hover:bg-slate-500 text-white transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default EditDialog;
