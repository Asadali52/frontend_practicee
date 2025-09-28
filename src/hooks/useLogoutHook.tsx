import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useLogoutHook = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.dispatchEvent(new CustomEvent('authStateChanged'));
        router.push('/login');
        toast.success('Logged out successfully');
    };

    return { handleLogout };
}

export default useLogoutHook
