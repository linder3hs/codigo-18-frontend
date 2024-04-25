import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getCurrentUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export default function MainLayout() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <nav className="bg-white py-2 px-12">
        <div className="flex items-center gap-5 justify-end">
          <div>
            <p className="font-bold">{user?.displayName}</p>
            <p className="text-xs font-light">{user?.email}</p>
          </div>
          <img
            src={user?.photoURL}
            className="rounded-full w-[40px] h-[40px] object-cover"
            alt=""
          />
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
