import validator from "validator";

export const isValidName = (name: string): boolean => {
  const resp = validator.isAlpha(name, "es-ES", { ignore: " " });
  return !!resp;
};

export const isName = (name: string): string | undefined => {
  return isValidName(name) ? undefined : "Not a valid name";
};
