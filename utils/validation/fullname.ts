import validator from "validator";

export const isValidFullname = (name: string): boolean => {
  const resp = validator.isAlpha(name, "es-ES", { ignore: " " });
  return !!resp;
};

export const isFullname = (name: string): string | undefined => {
  return isValidFullname(name) ? undefined : "Not a valid nameo";
};
