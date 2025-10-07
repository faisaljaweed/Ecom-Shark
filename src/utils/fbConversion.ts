export const sendFacebookEvent = async (
  eventName: string,
  email: string,
  value?: number
): Promise<void> => {
  try {
    const response = await fetch("http://localhost:5000/fb-conversion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: eventName,
        email: email,
        custom_data: {
          currency: "USD",
          value: value,
        },
      }),
    });

    const data = await response.json();
    console.log("✅ Facebook Conversion Response:", data);
  } catch (error) {
    console.error("❌ Facebook Conversion Error:", error);
  }
};
