import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Statistics({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3
  const checkIns = confirmedStays.length;

  // 4
  // Num of checked in night / all available Night (num of days * num of cabins)
  const numCheckInNight = confirmedStays.reduce(
    (acc, cur) => acc + cur.numNights,
    0
  );

  const occupants = numCheckInNight / (numDays * cabinCount);

  const occupantRate = `${Math.round(occupants * 100)}%`;

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        value={numBookings}
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Check ins"
        value={checkIns}
        color="indigo"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy Rate"
        value={occupantRate}
        color="yellow"
      />
    </>
  );
}

export default Statistics;
