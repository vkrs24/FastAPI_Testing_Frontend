function Check_access_token() {
  const verification = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        alert("No access token found. Redirecting to login...");
        window.location.href = "/login";
        return;
      }
      const response = await axios.get("http://127.0.0.1:8000/protected/", {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(`Token is Valid:${response.data.message}`);
      return true;
    } catch (err) {
      alert(`Invalid or expired token: ${err.response?.data}`);
      localStorage.removeItem("access_token");
      window.location.href = "./index.html"; // Redirect to login if token is invalid
      return false;
    }
  };
  verification();
}

Check_access_token();
