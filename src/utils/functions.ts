const isProd = process.env.NODE_ENV === "production";

const baseUrl = isProd ? "/omid_soheilnia_resume/" : "/";

export const handleImagesUrl = (imageSrc: string) => `${baseUrl}${imageSrc}`;
