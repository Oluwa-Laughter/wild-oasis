import { useMutation } from "@tanstack/react-query";
import { signUp as signUpAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    mutationFn: signUpAPI,

    onSuccess: () => {
      toast.success("Account created successfully");
    },
  });

  return { signUp, isSigningUp };
}
