/**
 * Service to interact with the backend Email API.
 */
const API_BASE_URL = "https://ascentiq-global.vercel.app"; // Changed to 3100 to avoid conflicts

/**
 * Sends a Contact Form submission via the backend API.
 * @param {Object} formData - The full form data object.
 * @returns {Promise<Object>} - The JSON response from the server.
 */
export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/send-thankyou`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData["Full Name"],
        email: formData.workEmail,
        phone: formData.phone,
        companyName: formData.companyName,
        companySize: formData.companySize,
        message: formData.helpText,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send email");
    }

    return data;
  } catch (error) {
    console.error("Email Service Error:", error);
    throw error;
  }
};
