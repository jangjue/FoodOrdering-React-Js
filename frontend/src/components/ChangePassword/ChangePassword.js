import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useAuth } from "../../hooks/useAuth";

export default function ChangePassword() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const { changePassword } = useAuth();

  const onSubmit = async (passwords) => {
    try {
      await changePassword(passwords);
      toast.success("Password changed successfully!");
    } catch (error) {
      toast.error(error.response.data.message || "Wrong Current Password");
    }
  };

  return (
    <div>
      <Title title="Change Password" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="password"
          label="Current Password"
          {...register("currentPassword", {
            required: true,
          })}
          error={errors.currentPassword}
        />

        <Input
          type="password"
          label="New Password"
          {...register("newPassword", {
            required: true,
            minLength: 5,
            validate: (value) =>
              value === getValues("currentPassword")
                ? "Passwords same as the previous"
                : true,
          })}
          error={errors.newPassword}
        />

        <Input
          type="password"
          label="Confirm Password"
          {...register("confirmNewPassword", {
            required: true,
            validate: (value) =>
              value !== getValues("newPassword")
                ? "Passwords Do Not Match"
                : true,
          })}
          error={errors.confirmNewPassword}
        />

        <Button type="submit" text="Change" />
      </form>
    </div>
  );
}
