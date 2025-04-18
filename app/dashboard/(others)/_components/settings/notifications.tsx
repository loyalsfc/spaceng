"use client";

import React, {useEffect, useState} from "react";
import {toast} from "sonner";

import {useUpdateProfile} from "@/api/profile/update-profile";
import {useUser} from "@/context/user";

function NotificationCheckMark({
  id,
  label,
  value,
  objKey,
}: {
  id: string;
  label: string;
  value: boolean;
  objKey: string;
}) {
  const {mutateAsync: profileUpdate, isPending: isUpdating} = useUpdateProfile();
  const [isChecked, setIsChecked] = useState<boolean>(value);
  const {setUser} = useUser();

  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    profileUpdate({[objKey]: event.target.checked})
      .then(() => {
        toast.success("Notification changed successfully");
        const keys = objKey.split(".");

        setUser((prevState) => {
          if (prevState) {
            return {
              ...prevState,
              [keys[0]]: {
                //@ts-ignore
                ...prevState[keys[0]],
                [keys[1]]: !isChecked,
              },
            };
          } else {
            return null;
          }
        });
        setIsChecked((prevState) => !prevState);
      })
      .catch(() => {
        toast.error("An error occured");
      });
  };

  return (
    <div className="w-full flex mgap-10 justify-between">
      <label htmlFor={id}>{label}</label>
      <input
        checked={isChecked}
        className="hidden peer"
        disabled={isUpdating}
        id={id}
        name={id}
        type="checkbox"
        onChange={handleChange}
      />
      <label
        className="ml-auto cursor-pointer block w-12 h-6 rounded-full bg-grey-200 p-1 peer-checked:[&_span]:translate-x-6 peer-checked:bg-blue"
        htmlFor={id}
      >
        <span className="block h-4 w-4 rounded-full bg-white transition-all" />
      </label>
    </div>
  );
}

export default NotificationCheckMark;
