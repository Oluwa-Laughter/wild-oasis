import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBookingAPI(bookingId),

    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      toast.success("Booking deleted");
    },

    onError: (err) => toast.error(err.message),
  });

  return { deleteBooking, isDeleting };
}

export default useDeleteBooking;
