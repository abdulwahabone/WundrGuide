import axios from "axios";
import { useEffect, useState } from "react";

const postGuide = async (guide: any) => {
  try {
    const { data } = await axios.post(`/api/guide`, {
      ...guide,
    });

    return data;
  } catch (err) {
    console.log({ err });
  }
};

export const locationTypes = [
  "Hotel",
  "Bar",
  "Beach",
  "Hill",
  "Bicycle Track",
  "Resturant",
];

export interface Details {
  title: string;
  location: string;
  duration: number; // number of days
  media: Array<any>;
  price: number;
}

export interface GuideLocations {
  title: string;
  description: string;
  link: string;
  type: string;
  media: Array<any>;
}

const emptyLocation = {
  title: "",
  description: "",
  link: "",
  type: locationTypes[0],
  media: [],
};

const isStringEmpty = (str: string) => !str || str === "";

export default function useForm() {
  const [details, setDetails] = useState<Details>({
    title: "",
    location: "",
    duration: 1,
    media: [],
    price: 1,
  });

  const [guideLocations, setGuideLocations] = useState<Array<GuideLocations>>(
    [],
  );

  useEffect(() => {
    console.log({ guideLocations });
  }, [guideLocations]);

  const handleSetGuideLocations = (
    locationIndex: number,
    field: string,
    value: any,
  ) => {
    setGuideLocations((locations) => {
      const locationObject = locations[formStep - 2];
      const updatedLocation = { ...locationObject, [field]: value };

      console.log({ locationObject, updatedLocation, field, value });

      return locations.map((loc, index) => {
        if (index === locationIndex) return updatedLocation;
        return loc;
      });
    });
  };

  const setDetailsFeild = (field: string, value: any) => {
    setDetails((details) => {
      return { ...details, [field]: value };
    });
  };

  const [formStep, setFormStep] = useState(1);
  const isFirstStep = formStep === 1;

  const handleNext = () => {
    if (guideLocations.length < formStep)
      setGuideLocations((loc) => {
        return [...loc, emptyLocation];
      });
    setFormStep((step) => step + 1);
  };

  const handleBack = () => setFormStep((step) => step - 1);

  const handleFinish = async () => {
    const { title, duration, media, price } = details;
    const urls = media.map(({ cdnUrl }: { cdnUrl: string }) => cdnUrl);

    const filterLocations = guideLocations.filter(
      (loc) => !isStringEmpty(loc.title),
    );
    const locations = filterLocations.map((loc) => {
      const { link, description, type } = loc;
      return {
        link,
        title: loc.title,
        description,
        type,
        media: urls,
      };
    });

    const payload = {
      title,
      duration,
      cover: media[0]?.cdnUrl,
      price,
      locations,
    };

    await postGuide(payload);

    // here
  };

  const disableNextButton = () => {
    if (isFirstStep) {
      const { title, media, location } = details;
      return (
        isStringEmpty(title) || media.length === 0 || isStringEmpty(location)
      );
    }

    const currentLocationObjectInView = guideLocations[formStep - 2];
    const { title, description, link, media } = currentLocationObjectInView;

    return (
      isStringEmpty(title) ||
      media.length === 0 ||
      isStringEmpty(description) ||
      isStringEmpty(link)
    );
  };

  const hideFinish = () => {
    const noLocations = guideLocations.length === 0;

    const hasMoreThanOneLocation = guideLocations.length > 1;
    if (hasMoreThanOneLocation || noLocations) return false;

    const { title, description, link, media } = guideLocations[0];
    return (
      isStringEmpty(title) ||
      media.length === 0 ||
      isStringEmpty(description) ||
      isStringEmpty(link)
    );
  };

  const getNextLabel = () => {
    if (guideLocations.length < formStep) return "Add location";
    return "Next";
  };

  return {
    formStep,
    isFirstStep,
    handleNext,
    handleBack,
    handleFinish,
    details,
    setDetailsFeild,
    disableNext: disableNextButton(),
    guideLocations,
    handleSetGuideLocations,
    nextLabel: getNextLabel(),
    hideFinish: hideFinish(),
  };
}
