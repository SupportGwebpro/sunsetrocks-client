import { useState, useEffect } from "react";
import GuestRegisterInfo from "../components/GuestRegisterInfo";
import ConfirmModal from "../components/modal/confirmModal";

// Type definitions
interface ApiResponse<T = any> {
  meta: {
    status: boolean;
    message: string;
    code: number;
  };
  data: T;
}

interface EventDetails {
  // Add specific event details properties based on your API response
  eventName?: string;
  eventDate?: string;
  // Add other properties as needed
}

interface FormData {
  firstName: string;
  lastName: string;
  emailId: string;
  phoneNo: string;
  companyName: string;
}

export default function GuestRegister() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNo: "",
    companyName: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [eventCode, setEventCode] = useState<string>("");
  const [eventDetails, setEventDetails] = useState<EventDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: "",
    description: "",
    actionLabel: "",
    onConfirm: () => { }
  });

  // Extract event code from URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('eventCode');
    if (code) {
      setEventCode(code);
      fetchEventDetails(code);
    }
  }, []);

  // API call to get event details
  const fetchEventDetails = async (code: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://sunsetrocks-backend-dev.azurewebsites.net/v1/guest/getEventCodeDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventCode: code }),
      });

      const result: ApiResponse<EventDetails> = await response.json();

      if (result.meta.status) {
        setEventDetails(result.data);
      } else {
        showErrorModal("Event Not Found", result.meta.message);
      }
    } catch (error) {
      console.error('Error fetching event details:', error);
      showErrorModal("Error", "Failed to fetch event details. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // API call to register for event
  const registerForEvent = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const requestBody = {
        eventCode: eventCode,
        firstName: data.firstName,
        lastName: data.lastName,
        emailId: data.emailId,
        phoneNo: data.phoneNo,
        // Note: companyName is not included in the API request based on your specification
      };

      const response = await fetch('https://sunset.sourcedeskit.ca/v1/guest/registerEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const result: ApiResponse = await response.json();

      if (result.meta.status) {
        showSuccessModal("Registration Successful", result.meta.message);
        // Reset form after successful registration
        setFormData({
          firstName: "",
          lastName: "",
          emailId: "",
          phoneNo: "",
          companyName: "",
        });
        setIsFormValid(false);
      } else {
        showErrorModal("Registration Failed", result.meta.message);
      }
    } catch (error) {
      console.error('Error registering for event:', error);
      showErrorModal("Error", "Failed to register for event. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper functions for modals
  const showErrorModal = (title: string, description: string) => {
    setModalConfig({
      title,
      description,
      actionLabel: "OK",
      onConfirm: () => setShowModal(false)
    });
    setShowModal(true);
  };

  const showSuccessModal = (title: string, description: string) => {
    setModalConfig({
      title,
      description,
      actionLabel: "OK",
      onConfirm: () => setShowModal(false)
    });
    setShowModal(true);
  };

  // Email validation function
  const validateEmail = (email: string): { isValid: boolean; message?: string } => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      return { isValid: false, message: "Email is required." };
    }

    if (trimmedEmail.includes("..")) {
      return { isValid: false, message: "Email cannot contain consecutive dots." };
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return { isValid: false, message: "Please enter a valid email address." };
    }

    return { isValid: true };
  };

  // Form validation
  const validateForm = (data: FormData): boolean => {
    return !!(
      data.firstName.trim() &&
      data.lastName.trim() &&
      data.emailId.trim() &&
      data.companyName.trim() &&
      validateEmail(data.emailId).isValid
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    const emailValidation = validateEmail(formData.emailId);
    if (!emailValidation.isValid) {
      showErrorModal("Invalid Email", emailValidation.message || "Please enter a valid email.");
      return;
    }

    // Check if all required fields are filled
    if (!validateForm(formData)) {
      showErrorModal("Incomplete Form", "Please fill in all required fields.");
      return;
    }

    // Check if event code exists
    if (!eventCode) {
      showErrorModal("Missing Event Code", "Event code not found. Please check your invitation link.");
      return;
    }

    // Register for event
    await registerForEvent(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    setIsFormValid(validateForm(updatedData));
  };

  // Show loading state while fetching event details
  if (isLoading) {
    return (
      <main>
        <div className="flex items-center justify-center min-h-dvh">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F9298C] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading event details...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="flex min-h-dvh flex-col lg:flex-row">
        <GuestRegisterInfo />
        <div className="w-full lg:w-1/2 py-8 px-4 md:py-20 md:px-36 lg:px-4 xl:px-36">
          <h2 className="text-black text-center text-2xl md:text-3xl font-bold leading-12 mb-8 sm:mb-10 md:mb-14 lg:mb-20">
            Register
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 md:gap-5 lg:gap-7">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black text-[18px] lg:text-[22px] leading-7 font-bold placeholder:text-black  placeholder:text-[16px] md:placeholder:text-[18px] placeholder:lg:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-lg lg:rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black text-[18px] lg:text-[22px] leading-7 font-bold placeholder:text-black  placeholder:text-[16px] md:placeholder:text-[18px] placeholder:lg:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-lg lg:rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
                required
              />
            </div>
            <input
              type="email"
              name="emailId"
              placeholder="Email ID*"
              value={formData.emailId}
              onChange={handleInputChange}
              className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black text-[18px] lg:text-[22px] leading-7 font-bold placeholder:text-black  placeholder:text-[16px] md:placeholder:text-[18px] placeholder:lg:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-lg lg:rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
              required
            />
            <input
              type="tel"
              name="phoneNo"
              placeholder="Phone Number"
              value={formData.phoneNo}
              onChange={handleInputChange}
              className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black text-[18px] lg:text-[22px] leading-7 font-bold placeholder:text-black  placeholder:text-[16px] md:placeholder:text-[18px] placeholder:lg:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-lg lg:rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name*"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full py-2 px-2 lg:py-7 lg:px-5 bg-[#E8E8E8] text-black text-[18px] lg:text-[22px] leading-7 font-bold placeholder:text-black  placeholder:text-[16px] md:placeholder:text-[18px] placeholder:lg:text-[22px] placeholder:leading-7 placeholder:font-bold rounded-lg lg:rounded-3xl mb-5 border-0  focus:outline-1 focus:outline-offset-1 focus:outline-slate-700"
              required
            />
            <button
              type="submit"
              className={`w-full py-2 px-2 lg:py-7 lg:px-5 text-[18px] lg:text-[22px] leading-7 font-bold rounded-lg lg:rounded-3xl border-0 transition-colors ${isFormValid && !isSubmitting
                ? 'bg-[#F9298C] text-white hover:bg-[#e0257e] cursor-pointer'
                : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                }`}
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>
      </section>

      {/* Modal for showing messages */}
      {showModal && (
        <ConfirmModal
          title={modalConfig.title}
          description={modalConfig.description}
          actionLabel={modalConfig.actionLabel}
          triggerLabel="" // Not needed since we're controlling visibility
          onConfirm={modalConfig.onConfirm}
        />
      )}
    </main>
  );
}