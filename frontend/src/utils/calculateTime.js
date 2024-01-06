const calculateCompletionTime = (paymentTime) => {
    const [hours, minutes] = paymentTime.split(':').map(Number);
  
    // Calculate completion time by adding 20 minutes
    const completionHours = (hours + Math.floor((minutes + 20) / 60)) % 24;
    const completionMinutes = (minutes + 20) % 60;
  
    const formattedCompletionTime = `${completionHours.toString().padStart(2, '0')}:${completionMinutes.toString().padStart(2, '0')}`;
  
    return formattedCompletionTime;
  };
  
  export { calculateCompletionTime };
  