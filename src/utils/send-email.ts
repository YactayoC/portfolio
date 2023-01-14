import emailjs from '@emailjs/browser';

let serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
let templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!
let publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

export const sendEmail = async (templateParams: any) => {
  await emailjs.send(serviceId, templateId, templateParams, publicKey);
};
