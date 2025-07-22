export async function query(prompt) {
  // Check if the token is available
  const token = import.meta.env.VITE_HUGGINGFACE_TOKEN;
  if (!token) {
    throw new Error("Hugging Face API token is not configured. Please set VITE_HUGGINGFACE_TOKEN in your environment variables.");
  }

  // Validate prompt
  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    throw new Error("Please provide a valid text prompt for image generation.");
  }

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ 
          inputs: prompt.trim(),
          parameters: {
            guidance_scale: 7.5,
            num_inference_steps: 50
          }
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const blob = await response.blob();
    
    // Check if the response is actually an image
    if (!blob.type.startsWith('image/')) {
      throw new Error("The API did not return a valid image. The model might be loading or experiencing issues.");
    }

    return blob;
  } catch (error) {
    // Re-throw with more context
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error("Network error: Unable to connect to Hugging Face API. Please check your internet connection.");
    }
    throw error;
  }
}
