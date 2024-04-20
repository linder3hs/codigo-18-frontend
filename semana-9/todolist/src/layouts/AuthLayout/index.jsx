import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../services/auth";

export default function AuthLayout() {
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const user = await getCurrentUser();

      if (user) {
        // redirect al home
        navigate("/");
      }
    } catch (error) {
      setShowPage(true);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return <div>{showPage && <Outlet />}</div>;
}
