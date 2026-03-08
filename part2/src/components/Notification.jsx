const Notification = ({ message, messageType }) => {
  if (!message) return null;
  const successNotificationStyle = {
    color: "#2e7d32",
    backgroundColor: "#d7cfcfff",
    border: "3px solid #2e7d32",
    borderRadius: "8px",
    padding: "16px 20px",
    fontSize: "22px",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "10px",
  };

  const errorNotificationStyle = {
    color: "#e62c07ff",
    backgroundColor: "#d7cfcfff",
    border: "3px solid #f34309ff",
    borderRadius: "8px",
    padding: "16px 20px",
    fontSize: "22px",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "10px",
  };

  if (messageType === "error")
    return <div style={errorNotificationStyle}>{message}</div>;
  return <div style={successNotificationStyle}>{message}</div>;
};

export default Notification;
