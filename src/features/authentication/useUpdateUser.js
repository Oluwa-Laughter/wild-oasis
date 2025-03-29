import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUserData } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUserData,

    onSuccess: ({ user }) => {
      toast.success("User account updated successfully");

      queryClient.setQueryData(["user"], user);

      queryClient.invalidateQueries({ queryKey: ["user"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
