import { useState, useEffect } from "react";
import GuestRegisterInfo from "../components/GuestRegisterInfo";
import { API } from "../apis/apis";
import Modal from "../components/modal/confirmModal";

interface ApiResponse<T = any> {
  meta: {
    status: boolean;
    message: string;
    code: number;
  };
  data: T;
}

interface EventDetails {
  eventName?: string;
  eventDate?: string;
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
  const [showThankYou, setShowThankYou] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('eventCode');
    if (code) {
      setEventCode(code);
      fetchEventDetails(code);
    }
  }, []);

  const fetchEventDetails = async (code: string) => {
    setIsLoading(true);
    try {
      const response = await API.getEventCodeDetails(code);
      const result: ApiResponse<EventDetails> = response.data;

      if (result.meta.status) {
        const EventData = result.data.eventDetails;
        const EventImage = result.data.eventImages;
        setEventDetails({ ...EventData, eventImages: EventImage });
      } else {
        setShowErrorModal({ title: "Event Not Found", description: result.meta.message });
      }
    } catch (error) {
      console.error('Error fetching event details:', error);
      setShowErrorModal({ title: "Error", description: "Failed to fetch event details. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const registerForEvent = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const requestBody = {
        eventCode: eventCode,
        firstName: data.firstName,
        lastName: data.lastName,
        emailId: data.emailId,
        phoneNo: data.phoneNo,
        companyName: data.companyName,
      };

      const response = await API.registerEvent(requestBody);
      const result = response.data;

      if (result.meta.status) {
        setShowThankYou(true);
        setFormData({
          firstName: "",
          lastName: "",
          emailId: "",
          phoneNo: "",
          companyName: "",
        });
        setIsFormValid(false);
      } else {
        setShowErrorModal({ title: "Registration Failed", description: result.meta.message });
      }
    } catch (error) {
      console.error('Error registering for event:', error);
      setShowErrorModal({ title: "Error", description: "Failed to register for event. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };




  const validateEmail = (email: string): { isValid: boolean; message?: string } => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      return { isValid: false, message: "Email is required." };
    }

    if (trimmedEmail.includes("..")) {
      return { isValid: false, message: "Email cannot contain consecutive dots." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return { isValid: false, message: "Please enter a valid email address." };
    }

    return { isValid: true };
  };

  const validateForm = (data: FormData): boolean => {
    return !!(
      data.firstName.trim() &&
      data.lastName.trim() &&
      data.emailId.trim() &&
      data.companyName.trim() &&
      data.phoneNo.trim()
      // validateEmail(data.emailId).isValid
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailValidation = validateEmail(formData.emailId);
    if (!emailValidation.isValid) {
      setShowErrorModal({ title: "Invalid Email", description: emailValidation.message || "Please enter a valid email." });
      return;
    }

    if (!validateForm(formData)) {
      setShowErrorModal({ title: "Incomplete Form", description: "Please fill in all required fields." });
      return;
    }

    if (!eventCode) {
      setShowErrorModal({ title: "Missing Event Code", description: "Event code not found. Please check your invitation link." });
      return;
    }

    await registerForEvent(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    setIsFormValid(validateForm(updatedData));
  };

  if (isLoading) {
    return (
      <main>
        <div className="flex items-center justify-center h-[100vh]">
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
      <div className="flex  min-h-[100vh] flex-col lg:flex-row">

        <GuestRegisterInfo EventData={eventDetails as {
          eventName: string;
          eventStartDate: string;
          eventTime: string;
          eventLocation: string;
          eventDescription: string;
          eventImages: string[];
        }} />

        <div className="w-full lg:w-1/2 py-8 px-4 md:py-20 md:px-36 lg:px-4 xl:px-36">


          {!showThankYou &&
            <>
              <h2 className="text-black text-center text-2xl md:text-3xl font-bold leading-12 mb-8 sm:mb-10 md:mb-14 lg:mb-20">
                Register
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="flex gap-4 h-full items-center md:gap-5 lg:gap-7">
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
                  type="number"
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
            </>
          }

          {showThankYou && <section className="flex h-full items-center w-full flex-col lg:flex-row">
            <div className="w-full  py-4 px-4  md:px-36 lg:px-4 xl:px-36">
              <div className="flex max-w-[483px]  flex-col items-center mx-auto text-center justify-center">
                <img
                  src="/images/thankyou-checkmark.svg"
                  alt=""
                  className="mb-14"
                />
                <p className="text-[32px] leading-12">
                  Your registration is accepted and will be approved by the event
                  team shortly
                </p>
              </div>
            </div>
          </section>}
        </div>
      </div>
      {showErrorModal && <Modal
        isOpen={showErrorModal?.title ? true : false}
        onClose={() => setShowErrorModal(null)}
        title={showErrorModal.title}
        description={showErrorModal.description}
      />}
    </main>
  );
}