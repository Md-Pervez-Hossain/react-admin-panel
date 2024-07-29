import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Routes/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <App />
      </AuthProvider>
    </Provider>
  </>
);
