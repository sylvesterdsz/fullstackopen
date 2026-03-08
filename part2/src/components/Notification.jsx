const Notification = ({ message }) => {
  if (!message) return null;
  const notificationStyle = {
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
  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
