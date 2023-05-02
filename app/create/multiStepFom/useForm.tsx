import { useState } from "react";

export interface Details {
  title: string;
  location: string;
  duration: number; // number of days
  media: Array<any>;
  price: number;
}

const isStringEmpty = (str: string) => !str || str === "";

export default function useForm() {
  const [details, setDetails] = useState<Details>({
    title: "",
    location: "",
    duration: 1,
    media: [],
    price: 1,
  });

  const setDetailsFeild = (field: string, value: any) => {
    console.log({ field, value });
    setDetails((details) => {
      return { ...details, [field]: value };
    });
  };

  const [formStep, setFormStep] = useState(1);
  const isFirstStep = formStep === 1;

  const handleNext = () => setFormStep((step) => step + 1);

  const handleBack = () => setFormStep((step) => step - 1);

  const handleFinish = () => {};

  const disableNextButton = () => {
    if (isFirstStep) {
      const { title, media, location } = details;
      return (
        isStringEmpty(title) || media.length === 0 || isStringEmpty(location)
      );
    }
  };

  return {
    formStep,
    isFirstStep,
    handleNext,
    handleBack,
    handleFinish,
    details,
    setDetailsFeild,
    disableNext: disableNextButton()
  };
}
