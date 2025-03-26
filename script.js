function handleSignup() {
  window.location.href = "./signup.html";
}
function handleLogin() {
  window.location.href = "./index.html";
}

function handleSignUpValidation(event) {
  event.preventDefault();

  const fullname = document.querySelector("#fullname").value;
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/signup/",
        { fullname, username, email, password },
        { withCredentials: true }
      );

      if (!response.status === 200) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.data;

      alert(data.message);

      if (data.message === "✅ Account created successfully") {
        window.location.href = "login.html";
      } else {
        window.location.href = "signup.html";
      }
    } catch (err) {
      console.error("Error", err);
    }
  };
  fetchData();
}
