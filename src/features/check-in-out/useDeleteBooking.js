import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: mutateDeleteBooking, isLoading: isDeletingBooking } =
    useMutation({
      mutationFn: deleteBooking,

      onSuccess: () => {
        toast.success(`Booking succesfully
      deleted`);
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      },
      onError: () => {
        toast.error("There was an error while deleting");
      },
    });

  return { mutateDeleteBooking, isDeletingBooking };
}
