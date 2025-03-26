import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),

    onSuccess: (user) => {
      toast.success(`Welcome back, ${user.user.email}!`);
      navigate("/dashboard");

      queryClient.setQueriesData(["user"], user);
    },

    onError: (error) => {
      toast.error(`Error logging in: ${error.message}`);
    },
  });

  return { login, isLoggingIn };
}
