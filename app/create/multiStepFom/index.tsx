"use client";

import Card from "@/components/home/card";
import Button from "@/components/shared/button";
import AddLocation from "./addLocation";
import BasicDetails from "./basicDetails";
import useForm from "./useForm";

export default function MultiStepFom() {
  const {
    isFirstStep,
    handleBack,
    handleFinish,
    handleNext,
    details,
    setDetailsFeild,
    disableNext,
  } = useForm();

  return (
    <div className="flex flex-col">
      <Card>
        {isFirstStep && (
          <BasicDetails details={details} onChange={setDetailsFeild} />
        )}
        {!isFirstStep && <AddLocation />}
      </Card>
      <div className="mt-4 grid grid-cols-3 gap-6">
        {!isFirstStep && (
          <>
            <Button onClick={handleBack} alt label="Previous" />
            <Button
              onClick={handleFinish}
              customStyles="col-start-2"
              success
              label="Finish"
            />
          </>
        )}

        <Button
          onClick={handleNext}
          disabled={disableNext}
          customStyles="col-start-3"
          label="Next"
        />
      </div>
    </div>
  );
}
