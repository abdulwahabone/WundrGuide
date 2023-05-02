"use client";

import Card from "@/components/home/card";
import Button from "@/components/shared/button";
import AddLocation from "./addLocation";
import BasicDetails from "./basicDetails";
import useForm from "./useForm";

export default function MultiStepFom() {
  const {
    formStep,
    isFirstStep,
    handleBack,
    handleFinish,
    handleNext,
    details,
    setDetailsFeild,
    disableNext,
    guideLocations,
    handleSetGuideLocations,
    nextLabel,
    hideFinish,
  } = useForm();

  const locationIndex = formStep - 2;

  return (
    <div className="relative flex flex-col">
      {!isFirstStep && (
        <div className="absolute left-[calc(50%-24px)] top-[14px] z-10 h-12 w-12 rounded-full bg-slate-900 p-3 text-center font-bold text-white shadow-md">
          {locationIndex + 1}
        </div>
      )}

      <Card>
        {isFirstStep && (
          <BasicDetails details={details} onChange={setDetailsFeild} />
        )}
        {!isFirstStep && (
          <AddLocation
            location={guideLocations[locationIndex]}
            formStep={formStep}
            onChange={(field: string, val: any) =>
              handleSetGuideLocations(locationIndex, field, val)
            }
          />
        )}
      </Card>
      <div className="mt-4 grid grid-cols-3 gap-6">
        {!isFirstStep && <Button onClick={handleBack} alt label="Previous" />}

        {!isFirstStep && !hideFinish && (
          <Button
            onClick={handleFinish}
            customStyles="col-start-2"
            success
            label="Complete Guide"
          />
        )}

        <Button
          onClick={handleNext}
          disabled={disableNext}
          customStyles="col-start-3"
          label={nextLabel}
        />
      </div>
    </div>
  );
}
