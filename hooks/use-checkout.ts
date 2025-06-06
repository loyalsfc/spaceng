"use client";

import {useSearchParams} from "next/navigation";
import {useState} from "react";

function useCheckout() {
  const searchParams = useSearchParams();
  const checkin = searchParams.get("checkin");
  const checkout = searchParams.get("checkout");
  const getDate = (dateString: string | null) =>
    dateString ? new Date(parseInt(dateString)) : new Date();
  const guestCount = searchParams.get("guest");

  const [date, setDate] = useState<{checkin: Date | undefined; checkout: Date | undefined}>({
    checkin: getDate(checkin),
    checkout: getDate(checkout),
  });
  const [guestsCount, setGuestsCount] = useState(guestCount ? parseInt(guestCount) : 1);

  function updateDate(newDate: Date | undefined, key: "checkin" | "checkout") {
    if (!newDate) return;

    if (key === "checkin" && date.checkout! < newDate) {
      setDate({checkin: newDate, checkout: newDate});

      return;
    }

    setDate((prevState) => {
      return {...prevState, [key]: newDate};
    });
  }

  return {
    date,
    guestsCount,
    setGuestsCount,
    updateDate,
  };
}

export {useCheckout};
