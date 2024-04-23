type GradDetails = {
  field: string;
  start: [string, string, string];
  end: [string, string, string] | null;
  startSh: [string, string, string];
  endSh: [string, string, string];
};

type EducationInfo = {
  fa: Record<string, GradDetails>;
};

export const educationInfo: EducationInfo = {
  fa: {
    university: {
      field: "مهندسی فناوری اطلاعات",
      start: ["2012", "09", "22"],
      end: ["2016", "06", "21"],
      startSh: ["1391", "07", "01"],
      endSh: ["1395", "04", "01"],
    },
  },
};
