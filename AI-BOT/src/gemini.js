import { prevUser } from "./context/UserContext";

const Api_Url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`;

export async function generateResponse() {
    const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{
                parts: [
                    { text: prevUser.prompt },
                    ...(prevUser.data ? [{
                        inline_data: {
                            mime_type: prevUser.mime_type,
                            data: prevUser.data
                        }
                    }] : [])
                ]
            }]
        })
    };

    try {
        const response = await fetch(Api_Url, requestOptions);
        const data = await response.json();
        const apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1")?.trim();
        return apiResponse || "No response received.";
    } 
    catch (error) {
        console.error("Error fetching from Gemini API:", error);
        return "Error occurred.";
    }
}
