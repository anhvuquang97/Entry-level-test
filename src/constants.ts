import { ShortTitle, Status } from "./enums";

export const STATUS_OPTIONS = [
  {
    label: "Offboarding",
    value: Status.OFFBOARDING,
  },
  {
    label: "Offering",
    value: Status.OFFERING,
  },
  {
    label: "Running",
    value: Status.RUNNING,
  },
];

export const SHORT_TITLE_OPTIONS = [
  {
    label: "VC",
    value: ShortTitle.VC,
  },
  {
    label: "Product",
    value: ShortTitle.PRODUCT,
  },
  {
    label: "Product2",
    value: ShortTitle.PRODUCT2,
  },
  {
    label: "Data",
    value: ShortTitle.DATA,
  },
  {
    label: "Data2",
    value: ShortTitle.DATA2,
  },
  {
    label: "Data3",
    value: ShortTitle.DATA3,
  },
  {
    label: "Scrum",
    value: ShortTitle.SCRUM,
  },
  {
    label: "Growth",
    value: ShortTitle.GROWTH,
  },
];

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const ENTRY_LEVEL_BASE_URL = process.env.NEXT_PUBLIC_ENTRY_LEVEL_URL;
