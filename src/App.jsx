import { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import logo from "/logo2.png";
import curve1 from "/bannercurves1.png";
import curve2 from "/bannercurves2.png";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phone: "",
    companyName: "",
    companySize: "",
    helpText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Reusable input field styles - easily adjustable
  const inputFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#ff621a",
      },
      height: "42px", // Reduced height
      display: "flex",
      alignItems: "center", // Center vertically
    },
    "& .MuiOutlinedInput-input": {
      padding: "10px 14px", // Reduced padding
      display: "flex",
      alignItems: "center", // Center placeholder vertically
    },
    "& .MuiInputLabel-root": {
      "&.Mui-focused": {
        color: "#ff621a",
      },
      "&.MuiInputLabel-shrink": {
        transform: "translate(14px, -9px) scale(0.75)",
      },
    },
  };

  // Select component styles
  const selectStyles = {
    "& .MuiOutlinedInput-root": {
      height: "42px", // Reduced height
    },
    "& .MuiSelect-select": {
      padding: "10px 14px", // Reduced padding
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ff621a",
    },
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-[#cc4e15] via-[#ff621a] to-[#cc4e15]">
      {/* Header */}
      <header
        style={{ paddingLeft: "100px", paddingTop: "20px" }}
        className="bg-transparent px-16 py-4 lg:px-12 lg:py-6 sticky top-0 z-20"
      >
        <div className="max-w-7xl mx-auto">
          <img
            src={logo}
            alt="AscentIQ Logo"
            className="h-8 lg:h-10 object-contain"
          />
        </div>
      </header>

      {/* Main Content - Single Gradient Background */}
      <div className="flex flex-col lg:flex-row flex-1 relative">
        {/* Background Curve Images */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: 1 }}
        >
          <img
            src={curve1}
            alt=""
            className="absolute bottom-0 left-0 w-full h-auto object-contain opacity-20"
            style={{ maxHeight: "70%" }}
          />
          <img
            src={curve2}
            alt=""
            className="absolute top-0 right-0 w-full h-auto object-contain opacity-20"
            style={{ maxHeight: "60%" }}
          />
        </div>

        {/* Left Section */}
        <div
          style={{ paddingLeft: "100px" }}
          className="pl-8 pr-8 py-12 lg:pl-20 lg:pr-16 lg:py-20 lg:w-1/2 flex flex-col justify-center relative z-10"
        >
          {/* About Ascent iQ Services */}
          <div className="mb-6">
            <h1 className="text-white text-2xl lg:text-3xl font-bold tracking-tight mb-4">
              About Ascent iQ Services
            </h1>
          </div>

          {/* Body Text */}
          <div className="mb-12">
            <p className="text-white text-base leading-relaxed max-w-2xl mb-4">
              With a legacy spanning over a decade, Ascent iQ Staffing Solutions
              has emerged as a pivotal player in the recruitment landscape,
              showcasing a robust presence nationally and internationally.
            </p>
            <p className="text-white text-base leading-relaxed max-w-2xl mb-4">
              Our enduring commitment revolves around offering comprehensive HR
              solutions, encompassing the entire spectrum from recruitment and
              turnkey staffing to HR services and executive search.
            </p>
            <p className="text-white text-base leading-relaxed max-w-2xl">
              The backbone of our success lies in the collective expertise of
              seasoned professionals who not only facilitate job placements but
              also provide invaluable guidance in establishing effective HR
              units within organizations.
            </p>
          </div>

          {/* Industry Recognition */}
          <div>
            <p
              style={{ paddingBottom: "10px" }}
              className="text-orange-300 text-sm font-semibold tracking-wider uppercase mb-6"
            >
              INDUSTRY RECOGNITION
            </p>
            <div className="flex flex-wrap gap-6">
              {/* Badge 1 */}
              <div className="bg-white rounded-lg p-4 w-48">
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl font-bold text-[#ff621a] mb-2">
                    G
                  </div>
                  <div className="bg-[#ff621a] text-white text-xs font-semibold px-3 py-1 rounded mt-2">
                    Leader WINTER 2022
                  </div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="bg-white rounded-lg p-4 w-48">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-[#ff621a] mb-2">
                    500
                  </div>
                  <div className="text-xs text-gray-700 text-center">
                    Technology Fast 500 2021
                    <br />
                    NORTH AMERICA Deloitte.
                  </div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="bg-white rounded-lg p-4 w-48">
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl text-[#ff621a] mb-2">✓</div>
                  <div className="text-xs text-gray-700 text-center">
                    2020 RealCDP CERTIFIED
                    <br />
                    CUSTOMER DATA PLATFORM
                    <br />
                    INSTITUTE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div
          style={{ paddingLeft: "100px" }}
          className="px-4 py-12 lg:px-8 lg:py-20 lg:w-1/2 flex items-center relative z-10"
        >
          <div className="w-full max-w-lg mx-auto">
            <div
              style={{ padding: "16px", minHeight: "450px" }}
              className="bg-white px-4 py-8 lg:px-12 lg:py-10 shadow-xl"
            >
              <h3
                style={{ marginBottom: "20px" }}
                className="text-[#ff621a] text-xl font-bold"
              >
                SCHEDULE A DEMO
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Row */}
                <div className="grid grid-cols-1 gap-4">
                  <TextField
                    required
                    fullWidth
                    id="Full Name"
                    name="Full Name"
                    label="Full Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    sx={inputFieldStyles}
                  />
                  <TextField
                    required
                    fullWidth
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    label="Work Email"
                    value={formData.workEmail}
                    onChange={handleChange}
                    sx={inputFieldStyles}
                  />
                  <TextField
                    required
                    fullWidth
                    type="tel"
                    id="phone"
                    name="phone"
                    label="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    sx={inputFieldStyles}
                  />
                  <TextField
                    required
                    fullWidth
                    id="companyName"
                    name="companyName"
                    label="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    sx={inputFieldStyles}
                  />
                  <FormControl fullWidth required>
                    <InputLabel
                      id="companySize-label"
                      sx={{
                        "&.Mui-focused": {
                          color: "#ff621a",
                        },
                      }}
                    >
                      Company Size
                    </InputLabel>
                    <Select
                      labelId="companySize-label"
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      label="Company Size"
                      onChange={handleChange}
                      sx={selectStyles}
                    >
                      <MenuItem value="">- Please Select -</MenuItem>
                      <MenuItem value="1-10">1-10</MenuItem>
                      <MenuItem value="11-50">11-50</MenuItem>
                      <MenuItem value="51-200">51-200</MenuItem>
                      <MenuItem value="201-500">201-500</MenuItem>
                      <MenuItem value="501-1000">501-1000</MenuItem>
                      <MenuItem value="1000+">1000+</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    required
                    fullWidth
                    id="helpText"
                    name="helpText"
                    label="How Can We Help You?"
                    multiline
                    rows={3}
                    value={formData.helpText}
                    onChange={handleChange}
                    sx={inputFieldStyles}
                  />
                </div>

                {/* Textarea */}

                {/* Privacy Policy */}
                <p
                  style={{ padding: "10px" }}
                  className="text-sm text-gray-600"
                >
                  By submitting this form you agree to receive email, text and
                  promotional communications from AscentIQ related to products
                  and services in accordance with AscentIQ's{" "}
                  <a
                    href="#"
                    className="text-[#ff621a] hover:text-[#e55517] underline"
                  >
                    privacy policy
                  </a>
                  .
                </p>

                {/* Submit Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff621a",
                    "&:hover": {
                      backgroundColor: "#e55517",
                    },
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
    </div>
  );
}

export default App;
