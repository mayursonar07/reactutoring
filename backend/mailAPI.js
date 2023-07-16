const handleSubmit = async (event) => {
    event.preventDefault();
    
    const { name, email, message } = formData;
    
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      
      const data = await response.json();
      console.log(data.message);
      // Handle the response from the backend
    } catch (error) {
      console.log(error);
      // Handle the error
    }
  };
  