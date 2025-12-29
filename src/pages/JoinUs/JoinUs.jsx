import { useEffect, useState } from "react";
import {
  Users,
  Award,
  Globe,
  BookOpen,
  Lightbulb,
  HandshakeIcon,
  GraduationCap,
  Target,
  CheckCircle,
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Calendar,
  Upload,
  Image as ImageIcon,
  X
} from "lucide-react";
import { useLocation } from "react-router";
import imageCompression from 'browser-image-compression';

import { Plus, X as XIcon, Trash2 } from "lucide-react";

const ListInput = ({ label, items = [], onAdd, onRemove, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={handleAdd}
          className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white hover:bg-gray-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {items.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg group"
            >
              <span className="text-sm text-gray-300">{item}</span>
              <button
                type="button"
                onClick={() => onRemove(index)}
                className="text-gray-500 hover:text-red-400 transition-colors"
              >
                <XIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    department: "",
    yearOfStudy: "",
    address: "",
    whyJoin: "", // Acts as Bio
    expertise: [],
    achievements: [],
    designation: "Member",
    image: null, // Will store the URL after upload
  });

  /* import imageCompression from 'browser-image-compression'; */ // Note: Imports must be at top, handled by multi_replace or existing.

  // ... inside component ...
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isCompressing, setIsCompressing] = useState(false); // New loading state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleListAdd = (field, item) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], item]
    }));
  };

  const handleListRemove = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Basic validation
    if (!file.type.startsWith('image/')) {
      alert("Please upload an image file");
      return;
    }

    setIsCompressing(true);
    // Show immediate preview of original file while compressing
    const objectUrl = URL.createObjectURL(file);
    setImagePreview(objectUrl);

    try {
      console.log('Original file size:', file.size / 1024 / 1024, 'MB');

      const options = {
        maxSizeMB: 0.5, // 500KB
        maxWidthOrHeight: 1000,
        useWebWorker: true,
        fileType: 'image/webp' // Try to convert to WebP
      };

      let compressedFile = file;
      try {
        compressedFile = await imageCompression(file, options);
        console.log('Compressed file size:', compressedFile.size / 1024 / 1024, 'MB');
      } catch (compressionError) {
        console.warn("Compression failed, using original file:", compressionError);
        // Fallback to original file if compression fails (e.g., browser doesn't support webp encoding)
        compressedFile = file;
      }

      setImageFile(compressedFile);
      // Update preview to compressed blob if successful, else keep original
      if (compressedFile !== file) {
        setImagePreview(URL.createObjectURL(compressedFile));
      }

    } catch (error) {
      console.error("Image processing error:", error);
      alert("Error processing image. Please try another one.");
      setImageFile(null);
      setImagePreview(null);
    } finally {
      setIsCompressing(false);
    }
  };

  // ... rest of the code ...

  // UI Update Section for Image Upload


  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    // Note: Using a public key for demo or env key. 
    // Ideally put this in env variables: VITE_IMGBB_API_KEY
    // For now I'll use a placeholder or ask user to provide one if it fails.
    // I'll try to find one if possible or just log it.
    // Assuming user will add VITE_IMGBB_KEY in .env
    const key = import.meta.env.VITE_IMGBB_KEY; // fallback demo key if works or user needs to replace

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        return data.data.url;
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error("ImgBB Upload Error:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let imageUrl = "";
    if (imageFile) {
      imageUrl = await uploadToImgBB(imageFile);
    }

    const submissionData = {
      ...formData,
      image: imageUrl,
      bio: formData.whyJoin, // Mapping whyJoin to bio as requested
      category: "Member" // Default category
    };

    console.log("Submitting:", submissionData);

    // Submit to Backend API
    try {
      const response = await fetch('https://bisf-server.onrender.com/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Submission failed: " + result.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Users,
      title: "Networking Opportunities",
      description:
        "Connect with intellectual leaders, academics, and professionals across Bangladesh and beyond.",
    },
    {
      icon: Award,
      title: "Leadership Development",
      description:
        "Develop essential leadership skills through workshops, seminars, and hands-on experience.",
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description:
        "Participate in international conferences, exchange programs, and collaborative projects.",
    },
    {
      icon: BookOpen,
      title: "Research Opportunities",
      description:
        "Engage in cutting-edge research initiatives and publish your work with expert guidance.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "Access resources and mentorship to bring your innovative ideas to life.",
    },
    {
      icon: HandshakeIcon,
      title: "Community Impact",
      description:
        "Contribute to meaningful projects that make a real difference in society.",
    },
  ];

  const eligibility = [
    "Currently enrolled in a recognized university or institution",
    "Strong academic record with passion for intellectual growth",
    "Commitment to BILF's values of integrity and excellence",
    "Willingness to actively participate in forum activities",
    "Good communication and teamwork skills",
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Application Submitted!
          </h2>
          <p className="text-gray-400 mb-6">
            Thank you for your interest in joining BILF. We have received your
            application and will review it shortly. You will receive a
            confirmation email within 3-5 business days.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                university: "",
                department: "",
                yearOfStudy: "",
                address: "",
                whyJoin: "",
                expertise: [],
                achievements: [],
                designation: "Member",
                image: null
              });
              setImageFile(null);
              setImagePreview(null);
            }}
            className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section id="benefits" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 sm:py-34 lg:py-34 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-full text-sm font-medium backdrop-blur-sm mb-4">
              <GraduationCap className="w-4 h-4 inline mr-2" />
              Become a Member
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                Intellectual Movement
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8">
              Be part of Bangladesh's premier intellectual community. Together,
              we shape the future through knowledge, leadership, and innovation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#apply"
                className="px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Apply Now
              </a>
              <a
                href="#benefits"
                className="px-8 py-3 bg-gray-800/50 text-white border border-gray-700 rounded-xl font-semibold hover:bg-gray-800 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent"></div>
      </section>

      {/* Why Join BILF Section */}
      <section id="benefits" className="py-16 sm:py-20 lg:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium text-gray-400 mb-4">
              <Target className="w-4 h-4 inline mr-2" />
              Why Join Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Join BILF?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the opportunities and benefits that await you as a member
              of Bangladesh Intellectual Leaders Forum.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors">
                  <benefit.icon className="w-7 h-7 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Eligibility */}
          <div className="mt-16 bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-gray-400" />
              Eligibility Criteria
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {eligibility.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section
        id="apply"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-950 to-gray-900"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm font-medium text-gray-400 mb-4">
              <FileText className="w-4 h-4 inline mr-2" />
              Application Form
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Apply Now
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Fill out the form below to apply for membership. All fields marked
              with * are required.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            {/* Image Upload */}
            <div className="mb-8 p-6 bg-gray-950 border border-dashed border-gray-700 rounded-xl text-center relative overflow-hidden group hover:border-blue-500/50 transition-colors">
              <input
                type="file"
                id="profile-image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                disabled={isCompressing || isSubmitting}
              />

              {isCompressing ? (
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-blue-500/50" />
                    </div>
                  </div>
                  <p className="mt-3 text-blue-400 text-sm font-medium animate-pulse">Encoding & Compressing...</p>
                </div>
              ) : imagePreview ? (
                <div className="relative inline-block group/preview">
                  <div className="relative rounded-full p-1 bg-gradient-to-tr from-blue-500 to-emerald-500">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-32 h-32 rounded-full object-cover border-4 border-gray-900 shadow-2xl"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview(null);
                    }}
                    className="absolute -top-1 -right-1 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all shadow-lg transform scale-0 group-hover/preview:scale-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label htmlFor="profile-image" className="cursor-pointer block py-4">
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h4 className="text-white font-medium mb-1 group-hover:text-blue-400 transition-colors">Upload Profile Photo</h4>
                  <p className="text-gray-500 text-sm">Click to select</p>
                  <p className="text-gray-600 text-xs mt-2">Auto-optimized for web</p>
                </label>
              )}
            </div>

            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-gray-400" />
                Personal Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>
                {/* <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
                    placeholder="Your city/area"
                  />
                </div> */}
              </div>
            </div>

            {/* Academic Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-gray-400" />
                Academic Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    University/Institution *
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
                    placeholder="Your university name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Department/Subject *
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
                    placeholder="Your department"
                  />
                </div>
                {/* <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Year/Semester *
                  </label>
                  <select
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-gray-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select your year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD">PhD</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div> */}
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-gray-400" />
                Additional Information
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Student Leadership Role (Optional)
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
                    placeholder="e.g. General Secretary, Member"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Why do you want to join BILF? (This will be your Bio) *
                  </label>
                  <textarea
                    name="whyJoin"
                    value={formData.whyJoin}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>
                <div>
                  <ListInput
                    label="Skills & Expertise"
                    items={formData.expertise}
                    onAdd={(item) => handleListAdd("expertise", item)}
                    onRemove={(index) => handleListRemove("expertise", index)}
                    placeholder="Add a skill (e.g. Leadership, Public Speaking)"
                  />
                  <p className="text-gray-500 text-xs mt-2">Press Enter to add</p>
                </div>
                <div>
                  <ListInput
                    label="Key Achievements / Experience"
                    items={formData.achievements}
                    onAdd={(item) => handleListAdd("achievements", item)}
                    onRemove={(index) => handleListRemove("achievements", index)}
                    placeholder="Add an achievement (e.g. Best Speaker 2023)"
                  />
                  <p className="text-gray-500 text-xs mt-2">Press Enter to add</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-500">
                By submitting, you agree to our terms and conditions.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Uploading & Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Application
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Have Questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Feel free to reach out to us for any queries about membership or
            BILF activities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@bilf.org"
              className="flex items-center px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              info@bilf.org
            </a>
            <a
              href="tel:+8801XXXXXXXXX"
              className="flex items-center px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              +880 1XXX-XXXXXX
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
