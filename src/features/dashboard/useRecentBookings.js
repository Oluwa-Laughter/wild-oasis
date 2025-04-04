import { useSearchParams } from "react-router-dom";
import { DEFAULT_NUM_DAYS } from "../../utils/constants";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? DEFAULT_NUM_DAYS
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading: isLoadingBookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),

    queryKey: ["bookings", `last-${numDays}`],
  });

  return { bookings, isLoadingBookings };
}
