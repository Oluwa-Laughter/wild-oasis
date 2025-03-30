import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";

function Statistics({ bookings, confirmedStays }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings;
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
        value={numBookings}
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Check ins"
        value={numBookings}
        color="indigo"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy Rate"
        value={numBookings}
        color="yellow"
      />
    </>
  );
}

export default Statistics;
