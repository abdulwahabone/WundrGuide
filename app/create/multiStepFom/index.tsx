"use client";

import Card from "@/components/home/card";
import Button from "@/components/shared/button";
import { useState } from "react";
import AddLocation from "./addLocation";
import BasicDetails from "./basicDetails";

export default function MultiStepFom() {
  const [formStep, setFormStep] = useState(1);

  const isFirstStep = formStep === 1;

  const handleNext = () => setFormStep((step) => step + 1);

  const handleBack = () => setFormStep((step) => step - 1);

  const handleFinish = () => {};

  return (
    <div className="flex flex-col">
      <Card>
        {isFirstStep && <BasicDetails />}
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

        <Button onClick={handleNext} customStyles="col-start-3" label="Next" />
      </div>
    </div>
  );
}
